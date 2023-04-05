import React, { useEffect, useRef } from "react";
import { Box, Center, createStyles, Image, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ContentSectionWrapper } from "../contentSection/contentSection.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    lineHeight: 2,
    fontSize: "1.2rem",
    color: "rgba(0,0,0,0.6)",
    marginTop: 18,
    [theme.fn.smallerThan("md")]: {
      fontSize: '1rem'
    }
  }
}));

const AlternateLayout = ({
  id,
  heading,
  description,
  rightSide,
  list,
  imageComponent,
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
        trigger: animListItem.current.children,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <Center mb={50}>
      <ContentSectionWrapper
        id={`content-section-${id}`}
        rightSideStyle={rightSide}
      >
        <div className="container lg-container">
          <div className="middle-content" style={{ gap: 35 }}>
            <div className="left-col">
              {!id && (
                <Box>
                  <h1 style={{ fontSize: "1.5rem", color: "#c23232" }}>
                    Our Products
                  </h1>
                </Box>
              )}
              <h1>{heading}</h1>
              <p className={classes.description} style={{lineHeight: 2}}>
                {description}
              </p>
              <Box
                sx={{
                  display: "flex",
                  gap: 20,
                  justifyContent: "space-evenly",
                  textAlign: "center",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
                ref={animListItem}
              >
                {list?.map((item, index) => (
                  <Box className="list-item" key={index}>
                    <h3 style={{ color: "#c23232" }}>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.subText }} />
                  </Box>
                ))}
              </Box>
            </div>
            <div className="right-col" ref={animContainer}>
              {imageComponent}
            </div>
          </div>
        </div>
      </ContentSectionWrapper>
    </Center>
  );
};

export default AlternateLayout;
