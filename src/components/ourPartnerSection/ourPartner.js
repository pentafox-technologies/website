import React from "react";
import { Link } from "gatsby";
import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { OurPartnerSection } from "./ourPartner.css";
import TomatovationLogo from "../../about_assets/tomatovation-logo.png";

const OurPartner = () => {
  return (
    <OurPartnerSection>
      <div className="container">
        <h3 className="partner-title">Official Channel Partner</h3>
        <div className="partner-inner">
          <div className="partner-copy">
            <h3>Tomatovation</h3>
            <p>
              Tomatovation, an AI-first IT consulting firm, is our official
              channel partner. Together we deliver bespoke software, AI-driven
              solutions, and user-centric design — scalable, smart systems that
              solve complex operational challenges for enterprises.
            </p>
            <Link className="partner-cta" to="/partner/jatas_ai">
              <h6>Learn more about JATAS AI</h6>
              <IconCircleArrowRightFilled size={22} />
            </Link>
          </div>

          <div className="partner-visual">
            <img
              src={TomatovationLogo}
              alt="Tomatovation — Official Channel Partner"
            />
          </div>
        </div>
      </div>
    </OurPartnerSection>
  );
};

export default OurPartner;
