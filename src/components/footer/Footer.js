import {
  Anchor,
  Box,
  Button,
  Image,
} from "@mantine/core";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React, { useRef, useState } from "react";
import IsMobile from "../../helpers/IsMobile";
import { FooterWrapper } from "./footer.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { URL } from "../../services/requestUrl";

const Footer = () => {
  const isMobileDevice = IsMobile();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [message, setMessage] = useState();
  const [comms, setComms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [res, setRes] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const captchaRef = useRef();

  const handlePrivacyStatement = (event) => {
    event.preventDefault()
    navigate('/privacy')
  }

  const handleSubmit = () => {
    if (privacy && name && email && mobile) {
      setError()
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key' : process.env.GATSBY_API_KEY,
        },
        body: JSON.stringify({
          name,
          email,
          phone: mobile,
          desc: message,
          is_privacy: privacy,
          is_comms: comms,
          captcha_token: captchaToken
        })
      }
      setLoading(true)
      fetch(`${URL.base}${URL.contact}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data === 'Success') {
            setRes(true)
          }
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(false)
        });
      setTimeout(() => {
        setName('')
        setEmail('')
        setMobile('')
        setMessage('')
        setComms(false)
        setPrivacy(false)
        setRes(false)
        captchaRef.current.resetCaptcha()
        setCaptchaToken()
      }, 6000)
    } else {
      if (!privacy) {
        setError({...error, is_privacy: 'Required'})
      }
      if (!mobile) {
        setError({...error, mobile: 'Required'})
      }
      if (!email) {
        setError({...error, email: 'Required'})
      }
      if (!name) {
        setError({...error, name: 'Required'})
      }
    }
  }

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
    }
  `);

  return (
    <FooterWrapper>
      <div className="container lg-container">
        <div className={`row ${!isMobileDevice ? "vertical-bottom" : ""}`}>
          <div className="col-12 col-sm-6 col-md-6">
            <p className="heading-txt mb-24">
              <span className="bold">Don’t be a stranger</span>
              just say hello
            </p>
            <p className="mb-3">
              Feel free to get in touch with us.
              <br />
              We are always open to discussing new projects, creative
              <br />
              ideas or opportunity to be part of your visions.
            </p>

            <p className="mb-40">
              <span className="section-title">Our Locations</span>
              <div className="location-grid">
                {queryData.allContentfulLocations.nodes.map((item, i) => (
                  <div key={i}>
                    <p className="location-title">{item.name}</p>
                    <p className="location-address">{item.address.split('\\n').map(str => { return <p className='location-address'>{str}</p>})}</p>
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
                    href={`mailto:${queryData.allContentfulContact.nodes[0]?.mobile}`}
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
            <form id="contact-form">
              <div className="form-group">
                <input
                  name=""
                  type="text"
                  className={error?.name && "error-label"}
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name=""
                  type="email"
                  className={error?.email && "error-label"}
                  value={email}
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name=""
                  type="text"
                  className={error?.mobile && "error-label"}
                  value={mobile}
                  placeholder="Mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  type="text"
                  value={message}
                  placeholder="Whats on your mind..."
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Box mt='xs'>
                <div className="form-group-checkbox">
                  <input
                    name=""
                    type="checkbox"
                    checked={privacy}
                    id="is_privacy"
                    onChange={(e) => {
                      setPrivacy(e.target.checked);
                      setError();
                    }}
                  />
                  <label
                    for="is_privacy"
                    className={error?.is_privacy && "error-label"}
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
                    name=""
                    type="checkbox"
                    checked={comms}
                    id="is_comms"
                    onChange={(e) => setComms(e.target.checked)}
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
            </form>
            <Button
              size='lg'
              fullWidth
              color='teal'
              style={{ fontFamily: 'Varela Round'}}
              sx={{'&[data-disabled]': { opacity: 0.5, color: '#BABABA' },}}
              disabled={!captchaToken}
              loading={loading}
              onClick={handleSubmit}
              // loading
            >Send Request</Button>
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
            {"    "}&#124;{"    "}
            <Link
              to="/careers"
              className="pl-3 text-white"
              style={{ textDecoration: "none", marginLeft: 8 }}
            >
              Careers
            </Link>
            {/* <Link to="/products" className="pl-3 text-white">
              Products
            </Link> */}
          </div>
          <div className="right-col">© 2022 Pentafox Technologies. All Rights Reserved.</div>
          {/* <div className="right-col">
            <Center inline>
              <Text>Designed by</Text>
              <Image
                href="https://prodjar.com/"
                component="a"
                target="_blank"
                src="https://i.imgur.com/hTb0x0M.png"
                width={60}
                ml="xs"
                onClick={() => {
                  trackCustomEvent({
                    category: "Projar",
                    action: "Click",
                    label: "Prodjar Credits",
                  });
                }}
              />
            </Center>
          </div> */}
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
