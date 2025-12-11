import React, { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Anchor, Box, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { PopupButton } from "react-calendly";
import { URL } from "../../services/requestUrl";
import { ContactFormWrapper } from "./contactus.css";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const captchaRef = useRef();

  /* ------------------ FORM LOGIC ------------------ */
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
      is_comms: false,
      is_privacy: false,
    },
    validate: {
      name: (value) => (value.length < 2 ? "Enter a Valid Name" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: (value) =>
        /^[7-9][0-9]{9}$/.test(value) ? null : "Invalid Mobile",
      is_privacy: (value) => (value ? null : "Required"),
      message: (value) => (value ? null : "Required"),
    },
  });

  const handleSubmit = (data) => {
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
        desc: data.message,
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
      })
      .finally(() => setLoading(false));
  };

  const handlePrivacyStatement = (event) => {
    event.preventDefault();
    navigate("/privacy");
  };

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

  const styles = {
    pageWrap: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
    },
    title: {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#dc2b2b",
    },
    subtitle: {
      textAlign: "center",
      color: "#757575",
      marginBottom: "40px",
      fontSize: "16px",
    },
    card: {
      display: "flex",
      background: "#ffffff",
      borderRadius: "22px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      marginTop: "20px",
    },
    leftPanel: {
      width: "50%",
      background: "rgb(255, 245, 245)",
      padding: "50px",
    },
    rightPanel: {
      width: "50%",
      padding: "50px",
    },
    infoRow: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      marginBottom: "25px",
    },
    iconCircle: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "#E7D8FF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iconSquare: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      background: "#fff5f5",
      background: "white",
      borderRadius: "10px",
    },
  };

  return (
    <ContactFormWrapper>
      <div style={styles.pageWrap}>
        <p className="heading-txt mb-24" style={{ textAlign: "center" }}>
          <span className="bold">Get in Touch</span>
        </p>
        <p className="mb-3" style={{ color: "#757575", textAlign: "center" }}>
          We'd love to hear from you! Fill in your details and our team will
          connect with you soon.
        </p>
        {/* <p
          className="heading-txt mb-34"
          style={{ textAlign: "center", fontSize: "10px", color: "#757575 " }}
        >
          <span
            style={{ color: "#757575", fontSize: "15px", marginTop: "0px" }}
          >
            We'd love to hear from you! Fill in your details and our team will
            connect with you soon.
          </span>
        </p> */}

        {/* CARD */}
        <div style={styles.card}>
          {/* LEFT SIDE */}
          <div style={styles.leftPanel}>
            <div style={{ marginBottom: "50px" }}>
              <p className="heading-txt mb-24" style={{ color: "#757575" }}>
                <span className="bold" style={{ display: "block" }}>
                  Don’t be a stranger
                </span>
                just say hello!
              </p>
              <p className="mb-3" style={{ color: "#757575" }}>
                Feel free to get in touch with us.
                <br />
                We are always open to discussing new projects, creative
                <br />
                ideas or opportunity to be part of your visions.
              </p>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <p className="mb-40">
                <p className="heading-txt mb-24" style={{ color: "#757575", fontSize: "15px" }}>
                  Our Locations
                </p>
                {/* <span style={{ color: "#757575" }}>Our Locations</span> */}
                <div className="location-grid">
                  {queryData.allContentfulLocations.nodes.map((item, i) => (
                    <div key={i}>
                      <p className="location-title">{item.name}</p>
                      <p className="location-address">
                        {item.address.split("\\n").map((str) => {
                          return <p className="location-address">{str}</p>;
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "red" }}>Feel like talking</span>
                  <Anchor
                    href={`tel:${queryData.allContentfulContact.nodes[0]?.mobile}`}
                    style={{ fontFamily: "Varela Round" }}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mobile}
                  </Anchor>
                </p>
              </div>
              <div className="col-6">
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "red" }}>Need help?</span>
                  <Anchor
                    href={`mailto:${queryData.allContentfulContact.nodes[0]?.mail}`}
                    style={{ fontFamily: "Varela Round" }}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mail}
                  </Anchor>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div style={styles.rightPanel}>
            <form id="contact-form" onSubmit={form.onSubmit(handleSubmit)}>
              <div className="form-group">
                <input
                  label="Name"
                  placeholder="Name"
                  className={form?.errors?.name && "error-label"}
                  style={{ fontFamily: "Varela Round" }}
                  {...form.getInputProps("name")}
                />
              </div>
              <div className="form-group">
                <input
                  label="Email"
                  placeholder="Email"
                  className={form?.errors?.email && "error-label"}
                  style={{ fontFamily: "Varela Round" }}
                  {...form.getInputProps("email")}
                />
              </div>
              <div className="form-group">
                <input
                  label="Mobile"
                  placeholder="Mobile"
                  className={form?.errors?.mobile && "error-label"}
                  style={{ fontFamily: "Varela Round" }}
                  {...form.getInputProps("mobile")}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Whats on your mind..."
                  className={form?.errors?.message && "error-label"}
                  style={{ fontFamily: "Varela Round" }}
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
                    for="is_privacy"
                    className={form?.errors?.is_privacy && "error-label"}
                  >
                    I confirm, I have read and agree to{" "}
                    <span onClick={handlePrivacyStatement}>
                      <a style={{ textDecoration: "underline" }}>
                        Pentafox's Privacy Policy
                      </a>
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
                  <label for="is_comms">
                    I would like to receive alerts and updates from Pentafox
                  </label>
                </div>
              </Box>
              <div className="form-group">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={process.env.GATSBY_CAPTCHA_TOKEN}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken()}
                />
              </div>
              <Box mt="md" mb="xl">
                <Button
                  size="lg"
                  fullWidth
                  color="teal"
                  style={{ fontFamily: "Varela Round" }}
                  sx={{
                    "&[data-disabled]": { opacity: 0.5, color: "#BABABA" },
                  }}
                  // disabled={!captchaToken}
                  loading={loading}
                  type="submit"
                >
                  Send Request
                </Button>
              </Box>
              <PopupButton
                url="https://calendly.com/vignesh-sankaran"
                className="btn appointment-btn"
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
