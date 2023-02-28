import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { ClientLogoSection } from "./clients.css";

const Clients = ({
  clientSectionData,
  partnerSectionData,
  clientsAndPartnersData,
}) => {
  const sm = useMediaQuery('(min-width: 768px)')
  return (
    <div>
      <ClientLogoSection>
        <div className="container">
          <h3>{clientSectionData.title}</h3>
          <p>{clientSectionData.description.description}</p>

          <ul className={`m-auto mb-24`}>
            {clientsAndPartnersData
              .filter((v) => {
                return v.parentSection == clientSectionData.title;
              })
              .map((item, i) => {
                return (
                  <li key={i}>
                    <a>
                      <img title={item.name} alt={item.name} src={item.logoUrl} style={{width: 155, objectFit: 'contain', height: 70}} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </ClientLogoSection>
      <ClientLogoSection className="bg-white">
        <div className="container">
          <h3>{partnerSectionData.title}</h3>
          <p>{partnerSectionData.description.description}</p>

          <ul className={`m-auto mb-24`}>
            {clientsAndPartnersData
              .filter((v) => {
                return v.parentSection == partnerSectionData.title;
              })
              .map((item, i) => {
                return (
                  <li key={i}>
                    <img title={item.name} alt={item.name} src={item.logoUrl} style={{width: 155, objectFit: 'contain', height: 70}} />
                  </li>
                );
              })}
          </ul>
        </div>
      </ClientLogoSection>
    </div>
  );
};

export default Clients;
