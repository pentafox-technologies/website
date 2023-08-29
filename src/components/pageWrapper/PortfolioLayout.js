import React, { useEffect, useRef } from "react";
import { Badge, createStyles, Group, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ContentSectionWrapper } from "../contentSection/contentSection.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IconCheck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  leftImg: {
    width: 210,
    position: "absolute",
    zIndex: 999,
    top: 130,
    left: 20,
    [theme.fn.smallerThan("md")]: {
      top: 30,
      width: 90,
    },
  },
  rightImg: {
    width: 220,
    position: "absolute",
    right: 20,
    bottom: 30,
    zIndex: 99,
    [theme.fn.smallerThan("md")]: {
      bottom: 35,
      width: 200,
    },
  },
  description: {
    fontSize: "1.2rem",
    color: "rgba(0,0,0,0.6)",
    marginTop: 5,
    [theme.fn.smallerThan("md")]: {
      fontSize: "1rem",
    },
  },
}));

const PortfolioLayout = ({
  id,
  heading,
  description,
  rightSide,
  list,
  imageComponent,
  skillset,
  section
}) => {
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 990px)");
  const animContainer = useRef(null);
  const animListItem = useRef(null);

  useEffect(() => {
    const listItems = animListItem?.current?.querySelectorAll(".list-item");
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(animContainer.current, {
      opacity: 0.1,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: animContainer.current,
        start: "top 90%",
        end: "+=100",
        scrub: false,
      },
    });

    gsap.from(listItems, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: animListItem?.current?.children,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <ContentSectionWrapper
      id={`content-section-${id}-${section}`}
      rightSideStyle={rightSide}
    >
      <div className="container lg-container">
        <div className="middle-content" style={{ gap: 35 }}>
          <div className="left-col">
            <h3>{heading}</h3>
            <p className={classes.description}>{description}</p>
            <List
              ref={animListItem}
              mt={20}
              spacing="md"
              icon={
                <div
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 15,
                    backgroundColor: "rgba(255,245,245)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconCheck size={16} color="rgba(220, 41, 8, 1)" />
                </div>
              }
            >
              {list?.map((listItem, key) => (
                <List.Item
                  className="list-item"
                  key={key}
                  style={{
                    color: "rgba(0,0,0,0.6)",
                    fontFamily: "Varela Round",
                  }}
                >
                  {listItem}
                </List.Item>
              ))}
            </List>
            <Group mt={20} ref={animListItem}>
              {skillset?.map((skill, key) => (
                <Badge color="red" key={key} className="list-item">
                  {skill}
                </Badge>
              ))}
            </Group>
          </div>

          {/* Image Comp */}
          <div className="right-col" ref={animContainer}>
            {imageComponent}
          </div>
        </div>
      </div>
    </ContentSectionWrapper>
  );
};

export default PortfolioLayout;
