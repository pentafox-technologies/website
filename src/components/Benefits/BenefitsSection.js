import { Group, Image, Text } from "@mantine/core";
import React from "react";
import { BenefitsContent } from "../pageWrapper/careers.css";

const BenefitsSection = ({ title, description, data }) => {
  return (
    <BenefitsContent>
      <div className="container lg-container">
        <div className="benefits-section">
          <h2 className="heading">{title}</h2>
          {description && <p>{description}</p>}
          <div className="benefits">
            {data.map((item, i) => {
              return (
                <Group sx={{display: 'flex', alignItems: 'center'}}>
                  <Image src={item?.imageUrl} width={37} />
                  <Text>{item.title}</Text>
                </Group>
              );
            })}
          </div>
        </div>
      </div>
    </BenefitsContent>
  );
};

export default BenefitsSection;
