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
    color: "rgba(0,0,0,0.8)",
    lineHeight: 1.45,
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
  section,
}) => {
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 990px)");

  // Refs for animation
  const animContainer = useRef(null);
  const animListWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate right/center content
    gsap.from(animContainer.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: animContainer.current,
        start: "top 85%",
      },
    });

    // Stagger for list + badges
    const items = animListWrapper.current?.querySelectorAll(".list-item");

    if (items?.length) {
      gsap.from(items, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: animListWrapper.current,
          start: "top 90%",
        },
      });
    }
  }, []);

  return (
    <ContentSectionWrapper
      id={`content-section-${id}-${section}`}
      rightSideStyle={rightSide}
      style={{ overflow: "hidden" }}  
    >
      <div className="container lg-container">
        <div className="middle-content" style={{ gap: 35 }}>
          <div className="left-col" ref={animListWrapper}>
            <h3>{heading}</h3>

            <p className={classes.description}>{description}</p>

            <List
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
                  <IconCheck size={16} color="rgba(220,41,8,1)" />
                </div>
              }
            >
              {list?.map((item, i) => (
                <List.Item
                  key={i}
                  className="list-item"
                  style={{
                    color: "rgba(0,0,0,0.8)",
                    fontFamily: "Varela Round",
                  }}
                >
                  {item}
                </List.Item>
              ))}
            </List>

            <Group mt={20}>
              {skillset?.map((skill, i) => (
                <Badge
                  color="red"
                  key={i}
                  className="list-item"
                  style={{ color: "#CD0E11" }}
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </div>

          {/* Right Column Animation */}
          <div className="right-col" ref={animContainer}>
            {imageComponent}
          </div>
        </div>
      </div>
    </ContentSectionWrapper>
  );
};

export default PortfolioLayout;
