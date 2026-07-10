import React from "react";
import { Link } from "gatsby";
import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { OurPartnerSection } from "./ourPartner.css";
import TomatovationLogo from "../../about_assets/tomatovation-logo.png";

const OurPartner = () => {
  return (
    <OurPartnerSection>
      <div className="container">
        <h3 style={{ color: "#CD0E11" }} className="partner-title">
          Official Implementation Partner
        </h3>
        <div className="partner-inner">
          <div className="partner-copy">
            <h3>Tomatovation</h3>
            <p>
              Tomatovation, an AI-first IT consulting firm, is our official implementation partner. Together, we help enterprises implement bespoke software, AI-driven solutions, and user-centric platforms, delivering scalable and intelligent systems
              that address complex operational challenges.
            </p>
            <Link className="partner-cta" to="/partner/jatas_ai">
              <h6>Learn more about JATAS AI</h6>
              <IconCircleArrowRightFilled size={22} />
            </Link>
          </div>

          <div className="partner-visual">
            <img src={TomatovationLogo} alt="Tomatovation — Official Implementation Partner" />
          </div>
        </div>
      </div>
    </OurPartnerSection>
  );
};

export default OurPartner;
