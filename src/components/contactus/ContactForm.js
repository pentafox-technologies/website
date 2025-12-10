// src/components/contact/ContactForm.jsx
import React, { useRef, useState } from "react";
// import { ContactFormWrapper } from "./";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Box, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { navigate } from "gatsby";
import { PopupButton } from "react-calendly";
import { URL } from "../../services/requestUrl";
import { FooterWrapper } from "../footer/footer.css";
import { ContactFormWrapper } from "./contactus.css";
import { IconMail, IconPhone } from "@tabler/icons-react";

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

  /* ------------------ WALANE-style UI ------------------ */
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
    },
    subtitle: {
      textAlign: "center",
      color: "#666",
      marginBottom: "40px",
      fontSize: "16px",
    },
    card: {
      display: "flex",
      background: "#ffffff",
      borderRadius: "22px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
    leftPanel: {
      width: "50%",
      //   background: "#F4ECFF",
      background: "#fff5f5",
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
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>
          We'd love to hear from you! Fill in your details and our team will
          connect with you soon.
        </p>

        {/* CARD */}
        <div style={styles.card}>
          {/* LEFT SIDE */}
          <div style={styles.leftPanel}>
            <h2 style={{ marginBottom: 20 }}>Don’t be a stranger</h2>
            <p style={{ marginBottom: 30 }}>
              We’re always open to new ideas, collaborations and opportunities.
            </p>

            <div style={styles.infoRow}>
              {/* <div style={styles.iconCircle}> */}
              <div style={styles.iconSquare}>
                <IconPhone color="red" stroke={1.5} />
              </div>
              {/* </div> */}
              <div>
                <strong>Feel like talking</strong>
                <p>+91 90037 91579</p>
              </div>
            </div>

            <div style={styles.infoRow}>
              {/* <div style={styles.iconCircle}> */}
              <div style={styles.iconSquare}>
                <IconMail color="red" stroke={1.5} />
              </div>
              {/* </div> */}
              <div>
                <strong>Need help?</strong>
                <p>hello@pentafox.in</p>
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

