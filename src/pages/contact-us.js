import React from "react";
import LayoutCommon from "../components/layout/layoutCommon";
import ContactForm from "../components/contactus/ContactForm";

const ContactUs = () => {
  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      headProps={{ pageTitle: "Contact Us" }}
      isFooter={false}
    >
      {/* <div className="contact-container"> */}
        {/* <div className="contact-right"> */}
            <ContactForm />
        {/* </div> */}
      {/* </div> */}
    </LayoutCommon>
  );
};

export default ContactUs;
