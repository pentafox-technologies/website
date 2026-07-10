import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { ClientLogoSection } from "./clients.css";
import OurPartner from "../ourPartnerSection/ourPartner";
import ISO_Certificate from "../../about_assets/ISO.png";
import SOC_Certificate from "../../about_assets/SOC.png";

const Clients = ({
  clientSectionData,
  partnerSectionData,
  clientsAndPartnersData,
}) => {
  const sm = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {/* ===== CLIENTS SECTION ===== */}
      <ClientLogoSection>
        <div className="container">
          <h3 style={{ color: "#CD0E11" }}>
            {clientSectionData.title}
          </h3>
          <p>{clientSectionData.description.description}</p>

          <ul className="m-auto mb-24">
            {clientsAndPartnersData
              .filter((v) => v.parentSection === clientSectionData.title)
              .map((item, i) => (
                <li key={i}>
                  <a>
                    <img
                      title={item.name}
                      alt={item.name}
                      src={item.logoUrl}
                      style={{
                        width: 155,
                        objectFit: "contain",
                        height: 70,
                      }}
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </ClientLogoSection>

      {/* ===== OFFICIAL CHANNEL PARTNER (Tomatovation) ===== */}
      <OurPartner />

      {/* ===== PARTNERS + CERTIFICATES ===== */}
      <ClientLogoSection className="bg-white">
        <div className="container">
          {/* PARTNERS */}
          <h3>{partnerSectionData.title}</h3>
          <p>{partnerSectionData.description.description}</p>

          <ul className="m-auto mb-24">
            {clientsAndPartnersData
              .filter((v) => v.parentSection === partnerSectionData.title)
              .map((item, i) => (
                <li key={i}>
                  <img
                    title={item.name}
                    alt={item.name}
                    src={item.logoUrl}
                    style={{
                      width: 155,
                      objectFit: "contain",
                      height: 70,
                    }}
                  />
                </li>
              ))}
          </ul>

          {/* ===== CERTIFICATES SECTION ===== */}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <h3>Secured. Certified. Trusted.</h3>
            <p>
              Committed to the highest standards of security, quality, and
              compliance.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: sm ? 30 : 15,
                marginTop: 20,
                flexWrap: "wrap",
              }}
            >
              <img
                src={ISO_Certificate}
                alt="ISO Certificate"
                style={{
                  width: sm ? 140 : 120,
                  height: "auto",
                  objectFit: "contain",
                  border: "1px solid #eee",
                  borderRadius: 8,
                  padding: 10,
                  background: "#fff",
                }}
              />

              <img
                src={SOC_Certificate}
                alt="SOC Certificate"
                style={{
                  width: sm ? 140 : 120,
                  height: "auto",
                  objectFit: "contain",
                  border: "1px solid #eee",
                  borderRadius: 8,
                  padding: 10,
                  background: "#292733",
                }}
              />
            </div>
          </div>
        </div>
      </ClientLogoSection>
    </div>
  );
};

export default Clients;