import { Group, Image, Text } from "@mantine/core";
import React from "react";
import { InternshipContentBlock  } from "../pageWrapper/internship.css";

const DEFAULT_IMAGE = "https://i.imgur.com/pw4YU9Y.png";

export const INTERNSHIP_SECTION_VARIANT = {
  white: "#fff",
  gray: "#f5f5f5",
}

const InternshipSection = ({ title, description, data, variant=INTERNSHIP_SECTION_VARIANT.gray, children }) => {
  return (
    <InternshipContentBlock variant={variant}>
      <div className="container lg-container">
        <div className="internship-section">
          <h2 className="heading">{title}</h2>
          {description && <p>{description}</p>}
          <div className="internship">
            {data.map((item, i) => {
              return (
                <Group sx={{display: 'flex', alignItems: item.description ? 'flex-start' : 'center'}} noWrap>
                  <Image src={item?.imageUrl || DEFAULT_IMAGE} width={37} />
                  <Text>
                    <Text align="left" weight={item.description ? 600 : 400}>
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text align="left">
                        {item.description}
                      </Text>
                    )}
                  </Text>
                </Group>
              );
            })}
          </div>
          {children}
        </div>
      </div>
    </InternshipContentBlock>
  );
};

export default InternshipSection;
