import { createStyles } from "@mantine/core";

export const portfolioStyles = createStyles((theme) => ({
  landing: {
    display: "flex",
    height: "94vh",
    justifyContent: "center",
    backgroundColor: 'rgb(255, 245, 245)',
    position: "relative",
  },
  landingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: 1300,
    [`@media (max-width: 1400px)`]: {
      width: 1150,
      justifyContent: "center",
    },
    [`@media (max-width: 1200px)`]: {
      width: 1000,
    },
    [`@media (max-width: 992px)`]: {
      flexWrap: "wrap-reverse",
    },
  },
  textContainer: {
    padding: 20,
    [`@media (max-width: 992px)`]: {
      width: 700,
    },
    [`@media (max-width: 700px)`]: {
      width: 500,
    },
    [`@media (max-width: 550px)`]: {
      width: 400,
    },
    [`@media (max-width: 390px)`]: {
      width: 280,
    },
  },
  landingImage: {
    // position: 'relative',
    // overflowX: 'none',
    [`@media (max-width: 1200px)`]: {
      width: 1200,
      paddingTop: 50,
    },
    [`@media (max-width: 992px)`]: {
      width: 400,
      marginTop: 40,
    },
    [`@media (max-width: 550px)`]: {
      width: 300,
    },
    [`@media (max-width: 390px)`]: {
      width: 260,
    },
  },
  landingHeroText: {
    color: "rgba(0,0,0,0.75)",
    textAlign: "left",
    fontSize: "3rem",
    fontWeight: 600,
    [`@media (max-width: 1200px)`]: {
      fontSize: "2.2rem",
    },
    [`@media (max-width: 776px)`]: {
      fontSize: "1.8rem",
    },
    [`@media (max-width: 390px)`]: {
      fontSize: "1.4rem",
    },
  },
  landingDescriptionText: {
    color: "rgba(0,0,0,0.7)",
    textAlign: "left",
    fontSize: "1.2rem",
    marginTop: 30,
    [`@media (max-width: 1200px)`]: {
      fontSize: "1rem",
    },
  },
  appointmentBtn: {
    display: "inline-block",
    background: "#FFF",
    // background: "rgba(255,245,245)",
    opacity: 0.8,
    color: "rgb(110, 12, 15)",
    padding: "5px 12px",
    // border: "1px solid rgba(110, 12, 15, 0.1)",
    border: "1px solid rgb(110, 12, 15)",
    cursor: "pointer",
    transition: "box-shadow .4s",
    fontSize: 12,
    marginTop: 10,
    ":hover": {
      boxShadow: "2px 2px 2px 0 rgba(110, 12, 15, 0.2)",
    },
    ":focus": {
      outline: "none",
    },

    [`@media (min-width: 992px)`]: {
      fontSize: 16,
      lineHeight: "140%",
      padding: "10px 22px",
    },
  },
  imgBackground: {
    width: 500,
    height: 500,
    position: "absolute",
    borderRadius: '60% 40% 40% 20% / 70% 50% 30% 25%',
    right: 0,
    top: -150,
    backgroundColor: "rgba(255,245,245)",

    [`@media (min-width: 700px)`]: {
      width: 850,
      height: 850,
    },
  },
  letsTalk: {
    fontSize: '14rem', fontWeight: 900,
    // border: '1px solid black',
    position: 'relative',
    [`@media (max-width: 1400px)`]: {
      fontSize: '10rem',
    },
    [`@media (max-width: 992px)`]: {
      fontSize: '8rem',
    },
    [`@media (max-width: 767px)`]: {
      fontSize: '5rem',
    },
    [`@media (max-width: 550px)`]: {
      fontSize: '3.3rem',
    },
  },
}));
