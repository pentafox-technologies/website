import { Image } from "@mantine/core";
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
                    <Image title={item.name} alt={item.name} src={item.logoUrl} height={!sm ? item.size/1.6 : item.size} />
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
                    <Image title={item.name} alt={item.name} src={item.logoUrl} height={!sm ? item.size/1.6 : item.size} />
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
