import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Anchor, Box, Button, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { PopupButton } from "react-calendly";
import { URL } from "../../services/requestUrl";
import { ContactFormWrapper } from "./contactus.css";
import { graphql, useStaticQuery } from "gatsby";
import portfolio from "../../images/pentafox-portfolio.pdf";
import { document } from "browser-monads";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);    
  const captchaRef = useRef();

  /* ------------------ FORM LOGIC ------------------ */
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
      project_sevices: null,
      is_comms: false,
      is_privacy: false,
    },
    validate: {
      name: (value) => (value.length < 2 ? "Enter a Valid Name" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: (value) =>
        /^[6-9]{1}[0-9]{9}$/.test(value) ? null : "Invalid Mobile",
      is_privacy: (value) => (value ? null : "Required"),
      message: (value) => (value ? null : "Required"),
      project_sevices: (value) => (value ? false : true),
    },
  });

  const handleSubmit = (data) => {
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    if (!captchaError && captchaToken) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.GATSBY_API_KEY,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.mobile,
          desc: `${data.project_sevices}:${data.message}`,
          is_privacy: data.is_privacy,
          is_comms: data.is_comms,
          captcha_token: captchaToken,
        }),
      };

      setLoading(true);

      fetch(`${URL.base}${URL.contact}`, requestOptions)
        .then((res) => res.json())
        .then(() => {
          form.reset();
          captchaRef.current.resetCaptcha();
          setCaptchaToken(null);
          setCaptchaError(false);
        })
        .finally(() => setLoading(false));
    }
  };

  /* ------------------ PRIVACY NAVIGATION ------------------ */
  const handlePrivacyStatement = (event) => {
    event.preventDefault();
    window.open("https://pentafox.in/privacy");
    // navigate("/privacy");
  };

  /* ------------------ CONTENTFUL DATA ------------------ */
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulContact {
        nodes {
          mobile
          mail
        }
      }
      allContentfulLocations(sort: { fields: contentful_id }) {
        nodes {
          name
          address
        }
      }
      allContentfulSocialLink(sort: { fields: createdAt }) {
        nodes {
          socialLink
          socialIcon
          title
        }
      }
      allContentfulStaticPage(sort: { fields: createdAt }) {
        nodes {
          title
          slug
          shortDescription {
            shortDescription
          }
        }
      }
    }
  `);

  return (
    <ContactFormWrapper>
      <div className="page-wrap">
        {/* TITLE */}
        {/* <p className="heading-txt mb-24" style={{ textAlign: "center" }}>
          <span className="bold">Get in Touch</span>
        </p>

        <p className="subtitle" style={{ textAlign: "center" }}>
          We'd love to hear from you! Fill in your details and our team will
          connect with you soon.
        </p> */}

        {/* CARD WRAPPER */}
        <div className="card">
          {/* LEFT PANEL */}
          <div className="left-panel">
            <div className="spacing-between-container">
              <p className="heading-txt mb-24">
                <span className="bold" style={{ display: "block" }}>
                  Don’t be a stranger
                </span>
                just say hello!
              </p>

              <p>
                We are always open to discussing new projects, creative ideas,
                <br />
                or opportunities to be part of your visions.
              </p>
            </div>

            <div className="spacing-between-container">
              <p className="heading-txt">
                <span style={{ fontSize: "15px", color: "#666" }}>
                  Do you want to know more about us?{" "}
                </span>
                {/* visible desktop mode */}
                <a
                  href={portfolio}
                  style={{ fontSize: "15px" }}
                  download={"Pentafox Portfolio.pdf"}
                  className="download-portfolio-desktop"
                >
                  Download Portfolio
                </a>
                {/* visible mobile mode */}
                {/* <a
                  href={portfolio}
                  style={{ fontSize: "15px", textDecoration: "none" }}
                  download={"pentafox_portfolio.pdf"}
                  className="download-portfolio-mobile"
                >
                  <IconDownload stroke={1.5} size={20} />{" "}
                  <span style={{ fontSize: "16px", textDecoration: "none" }}>
                    Portfolio
                  </span>
                </a> */}
              </p>
            </div>

            <div className="spacing-between-container">
              <p className="heading-txt mb-24">
                <span style={{ fontSize: "15px" }}>Our Locations</span>
              </p>

              <div className="location-grid">
                {queryData.allContentfulLocations.nodes.map((item, i) => (
                  <div key={i}>
                    <p className="location-title">{item.name}</p>
                    {item.address.split("\\n").map((str, idx) => (
                      <p key={idx} className="location-address">
                        {str}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="row">
              <div className="col-6">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <p className="important-message-title">Feel like talking</p>
                  <Anchor
                    className="gray-title"
                    href={`tel:${queryData.allContentfulContact.nodes[0]?.mobile}`}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mobile}
                  </Anchor>
                </p>
              </div>

              <div className="col-6">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <p className="important-message-title">Need help?</p>
                  <Anchor
                    className="gray-title"
                    href={`mailto:${queryData.allContentfulContact.nodes[0]?.mail}`}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mail}
                  </Anchor>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL FORM */}
          <div className="right-panel">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <div className="form-group">
                <input
                  placeholder="Name"
                  className={form?.errors?.name && "error-label"}
                  {...form.getInputProps("name")}
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="Email"
                  className={form?.errors?.email && "error-label"}
                  {...form.getInputProps("email")}
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Mobile"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.values.mobile}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                    form.setFieldValue("mobile", onlyNumbers);
                  }}
                  className={form?.errors?.mobile && "error-label"}
                  style={{ fontFamily: "Varela Round" }}
                />
              </div>

              <div className="form-group">
                <Select
                  placeholder="Select Products / Services"
                  classNames={{
                    input: form.errors.project_sevices
                      ? "form-input-error error-label"
                      : "",
                  }}
                  {...form.getInputProps("project_sevices")}
                  data={[
                    {
                      value: "Whatsapp business automation - walane.ai",
                      label: "Whatsapp business automation - walane.ai",
                      group: "Products",
                    },
                    {
                      value: "KYC / ID verification APIs - FastKYC.com",
                      label: "KYC / ID verification APIs - FastKYC.com",
                      group: "Products",
                    },
                    {
                      value: "Cloud / Infra services",
                      label: "Cloud / Infra services",
                      group: "Services",
                    },
                    {
                      value: "Gen AI Solutions",
                      label: "Gen AI Solutions",
                      group: "Services",
                    },
                    {
                      value: "UI / UX, Digital Video Production",
                      label: "UI / UX, Digital Video Production",
                      group: "Services",
                    },
                    { value: "Others", label: "Others" },
                  ]}
                  style={{ marginBottom: "20px" }}
                  styles={{
                    item: {
                      "&[data-selected]": {
                        backgroundColor: "#d85b5bff",
                        fontFamily: "Varela Round",
                      },
                      "&[data-selected]:hover": {
                        backgroundColor: "#d85b5bff",
                        fontFamily: "Varela Round",
                      },
                    },
                  }}
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="What's on your mind..."
                  className={form?.errors?.message && "error-label"}
                  {...form.getInputProps("message")}
                />
              </div>

              <Box mt="xs">
                <div className="form-group-checkbox">
                  <input
                    type="checkbox"
                    id="is_privacy"
                    {...form.getInputProps("is_privacy", { type: "checkbox" })}
                  />
                  <label
                    htmlFor="is_privacy"
                    className={form?.errors?.is_privacy && "error-label"}
                  >
                    I confirm, I have read and agree to{" "}
                    <span onClick={handlePrivacyStatement}>
                      <a className="link">Pentafox's Privacy Policy</a>
                    </span>{" "}
                    and consent to share my information
                  </label>
                </div>

                <div className="form-group-checkbox">
                  <input
                    type="checkbox"
                    id="is_comms"
                    {...form.getInputProps("is_comms", { type: "checkbox" })}
                  />
                  <label htmlFor="is_comms">
                    I would like to receive alerts and updates from Pentafox
                  </label>
                </div>
              </Box>

              <div className="form-group mt-4">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={process.env.GATSBY_CAPTCHA_TOKEN}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setCaptchaError(false);
                  }}
                  onExpire={() => {
                    setCaptchaToken(null);
                  }}
                  onError={() => {
                    setCaptchaError(true);
                  }}
                />
                {captchaError && (
                  <p
                    style={{
                      color: "rgb(220, 43, 43)",
                      fontSize: 13,
                      marginTop: 8,
                    }}
                  >
                    Please verify that you are human
                  </p>
                )}
              </div>

              <Box mt="md">
                <Button
                  type="submit"
                  onClick={() => (!captchaToken ? setCaptchaError(true) : null)}
                  size="md"
                  fullWidth
                  color="teal"
                  className="submit-btn"
                  sx={{
                    "&[data-disabled]": { opacity: 0.5, color: "#BABABA" },
                  }}
                  // disabled={!captchaToken}
                  loading={loading}
                >
                  Send Request
                </Button>
              </Box>

              <PopupButton
                url="https://calendly.com/vignesh-sankaran"
                className="appointment-btn"
                rootElement={document.getElementById("___gatsby")}
                text="Talk to our Experts"
              />
            </form>
          </div>
        </div>
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;
