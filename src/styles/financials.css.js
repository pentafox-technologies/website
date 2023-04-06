import { createStyles } from "@mantine/core";

export const financialStyles = createStyles((theme) => ({
  landing: {
    display: "flex",
    height: "90vh",
    justifyContent: "center",
  },
  landingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: '70%',
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
    width: 600,
    [`@media (max-width: 1200px)`]: {
      width: 400,
      paddingTop: 50,
    },
    [`@media (max-width: 992px)`]: {
      width: 300,
      marginTop: 40,
    },
    [`@media (max-width: 550px)`]: {
      width: 200,
    },
    [`@media (max-width: 390px)`]: {
      width: 200,
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
    color: "rgba(0,0,0,0.6)",
    textAlign: "left",
    fontSize: "1.2rem",
    marginTop: 30,
    [`@media (max-width: 1200px)`]: {
      fontSize: "1rem",
    },
  },
  appointmentBtn: {
    display: "inline-block",
    background: "rgba(255,245,245)",
    opacity: 0.8,
    color: "rgb(110, 12, 15)",
    padding: "5px 12px",
    border: "1px solid rgba(110, 12, 15, 0.1)",
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
    borderRadius: "60% 40% 40% 20% / 70% 50% 30% 25%",
    right: 0,
    top: -150,
    backgroundColor: "rgba(255,245,245)",

    [`@media (min-width: 700px)`]: {
      width: 850,
      height: 850,
    },
  },
  background: {
    width: '90%',
    height: '250px',
    transform: 'skewY(-20deg)',
    borderRadius: '30px',
    position: 'absolute',
    top: '0px',
    left: '50px',
    background: 'linear-gradient(180deg, rgba(230,69,69,0.4) 0%, rgba(194,50,50,0.4) 39.46%, rgba(162,33,33,0.4) 100%)'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    borderRadius: '50%',
    color: '#fff',
    margin: 10,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  iconCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  circlegraph: {
    position: 'relative',
    width: '70%',
    height: '200px',
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50px',
    height: '50px',
    [`@media (max-width: 830px)`]: {
      width: '30px',
      height: '30px',
    },
    [`@media (max-width: 540px)`]: {
      width: '20px',
      height: '20px',
    }
  },
  contactUsContainer: {
    background: "linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    padding: '50px 60px 50px 60px',
    margin: '170px 0 90px 0',
    [`@media (max-width: 830px)`]: {
      flexDirection: "column",
      textAlign: "center",
      margin: '90px 0 90px 0',
    },
    [`@media (max-width: 540px)`]: {
      padding: '30px',
    }
  },
  contactUsIllustration: {
    position: "absolute", bottom: 0, right: -100,
    [`@media (max-width: 992px)`]: {
      display: 'none'
    }
  },
  contactUsHeroText: { 
    fontSize: "3.3rem", color: "#FFF",
    [`@media (max-width: 830px)`]: {
      fontSize: '2.5rem'
    },
    [`@media (max-width: 540px)`]: {
      fontSize: '2rem'
    }
  },
  contactUsSubtext: {
    fontSize: "1.8rem",
    color: "#FFF",
    lineHeight: 0,
    marginTop: 2,
    [`@media (max-width: 830px)`]: {
      fontSize: '1.5rem !important'
    },
    [`@media (max-width: 540px)`]: {
      fontSize: '1.1rem !important'
    }
  },
  scrollDown: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer'
  }
})); 