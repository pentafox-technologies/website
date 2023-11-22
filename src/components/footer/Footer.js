import { Anchor, Box, Button, Image } from "@mantine/core";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React, { useRef, useState } from "react";
import IsMobile from "../../helpers/IsMobile";
import { FooterWrapper } from "./footer.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { URL } from "../../services/requestUrl";
import { useForm } from "@mantine/form";
import PentafoxLogo from "../../images/logo-pf-white.svg"
import { PopupButton } from "react-calendly";
import { document } from 'browser-monads';

const Footer = () => {
  const isMobileDevice = IsMobile();
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const captchaRef = useRef();

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
      message: (value) => (value? null : "Required"),
    },
  });

  const handlePrivacyStatement = (event) => {
    event.preventDefault();
    navigate("/privacy");
  };

  const handleSubmit = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.GATSBY_API_KEY,
      },
      body: JSON.stringify({
        name: data?.name,
        email: data?.email,
        phone: data?.mobile,
        desc: data?.message,
        is_privacy: data?.is_privacy,
        is_comms: data?.is_comms,
        captcha_token: captchaToken,
      }),
    };
    setLoading(true);
    fetch(`${URL.base}${URL.contact}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data === "Success") {
          setRes(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setTimeout(() => {
      form.reset();
      captchaRef.current.resetCaptcha();
      setCaptchaToken();
    }, 6000);
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
      allContentfulStaticPage(sort: {fields: createdAt}) {
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
    <FooterWrapper>
      <div style={{ width: '100%', height: 200, top: 0, zIndex: 99}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,48C384,64,480,96,576,101.3C672,107,768,85,864,64C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      <div className="container lg-container">
        <div className={`row ${!isMobileDevice ? "vertical-bottom" : ""}`}>
          <div className="col-12 col-sm-6 col-md-6">
            <Box mb='xl'>
              <PentafoxLogo height="60" width="200" />
            </Box>
            <p className="mb-40">
              <span className="section-title">Our Locations</span>
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
            {isMobileDevice ? (
              <ul className="list-unstyled social-icons mb-40">
                {queryData.allContentfulSocialLink?.nodes?.map((link, item) => (
                  <li key={item}>
                    <a href={link.socialLink} target="_blank">
                      <Image src={link.socialIcon} width={17} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="row mt-5">
              <div className="col-6">
                <p className="mb-2">
                  <span>Feel like talking</span>
                  <Anchor
                    href={`tel:${queryData.allContentfulContact.nodes[0]?.mobile}`}
                    style={{ fontFamily: "Varela Round" }}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mobile}
                  </Anchor>
                </p>
              </div>
              <div className="col-6">
                <p className="mb-2">
                  <span>Need help?</span>
                  <Anchor
                    href={`mailto:${queryData.allContentfulContact.nodes[0]?.mail}`}
                    style={{ fontFamily: "Varela Round" }}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mail}
                  </Anchor>
                </p>
              </div>
            </div>
            {isMobileDevice ? null : (
              <Box pt="sm">
                <ul className="list-unstyled social-icons mb-40">
                  {queryData.allContentfulSocialLink?.nodes?.map(
                    (link, item) => (
                      <li key={item}>
                        <a href={link.socialLink} target="_blank">
                          <Image src={link.socialIcon} width={17} />
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </Box>
            )}
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <p className="heading-txt mb-24">
              <span className="bold">Don’t be a stranger</span>
              just say hello!
            </p>
            <p className="mb-3">
              Feel free to get in touch with us.
              <br />
              We are always open to discussing new projects, creative
              <br />
              ideas or opportunity to be part of your visions.
            </p>
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
                      <a>Pentafox's Privacy Policy</a>
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
              <Box mt="md" mb='xl'>
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

        <div className="btm-link">
          <div className="left-col">
            <Link
              to="/"
              className="pr-3 text-white"
              style={{ textDecoration: "none", marginRight: 8 }}
            >
              Home
            </Link>
            {/* {"    "}&#124;{"    "}
            <Link
              to="/careers"
              className="pl-3 text-white"
              style={{ textDecoration: "none", marginLeft: 8, marginRight: 8 }}
            >
              Careers
            </Link> */}
            {/* {"    "}&#124;{"    "} */}
            {/* <Link
              to="/privacy"
              className="pl-3 text-white"
              style={{ textDecoration: "none", marginLeft: 8, marginRight: 8 }}
            >
              Privacy
            </Link> */}
            {/* {"    "}&#124;{"    "}
            <Link
              to="/internship"
              className="pl-3 text-white"
              style={{ textDecoration: "none", marginLeft: 8, marginRight: 8 }}
            >
              Internship
            </Link> */}
            {/* {"    "}&#124;{"    "} */}
            {
              queryData?.allContentfulStaticPage?.nodes?.map((item, i) => {
                return (
                  <>
                    {"    "}&#124;{"    "}
                    <Link
                      to={`/${item?.slug}`}
                      className="pl-3 text-white"
                      style={{ textDecoration: "none", marginLeft: 8, marginRight: 8 }}
                    >
                      {item?.title}
                    </Link>
                  </>
                )
              })
            }
            {/* <Link
              to="/terms"
              className="pl-3 text-white"
              style={{ textDecoration: "none", marginLeft: 8, marginRight: 8 }}
            >
              Terms & Conditions
            </Link> */}
            {/* <Link to="/products" className="pl-3 text-white">
              Products
            </Link> */}
          </div>
          <Box className="right-col" sx={{textAlign: 'right', color: 'rgba(255, 255, 255, 0.5)'}}>
          © 2023 Pentafox Technologies Private Limited. All rights reserved.<br/>
          The content available on the website is protected by copyright laws.
          </Box>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
