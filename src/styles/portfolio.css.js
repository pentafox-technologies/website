import { createStyles } from "@mantine/core";
import styled from "styled-components";

// export const portfolioStyles = createStyles((theme) => ({
//   landing: {
//     display: "flex",
//     height: "94vh",
//     justifyContent: "center",
//     backgroundColor: 'rgb(255, 245, 245)',
//     position: "relative",
//   },
//   landingContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 20,
//     width: 1300,
//     [`@media (max-width: 1400px)`]: {
//       width: 1150,
//       justifyContent: "center",
//     },
//     [`@media (max-width: 1200px)`]: {
//       width: 1000,
//     },
//     [`@media (max-width: 992px)`]: {
//       flexWrap: "wrap-reverse",
//     },
//   },
//   textContainer: {
//     padding: 20,
//     [`@media (max-width: 992px)`]: {
//       width: 700,
//     },
//     [`@media (max-width: 700px)`]: {
//       width: 500,
//     },
//     [`@media (max-width: 550px)`]: {
//       width: 400,
//     },
//     [`@media (max-width: 390px)`]: {
//       width: 280,
//     },
//   },
//   landingImage: {
//     // position: 'relative',
//     // overflowX: 'none',
//     [`@media (max-width: 1200px)`]: {
//       width: 1200,
//       paddingTop: 50,
//     },
//     [`@media (max-width: 992px)`]: {
//       width: 400,
//       marginTop: 40,
//     },
//     [`@media (max-width: 550px)`]: {
//       width: 300,
//     },
//     [`@media (max-width: 390px)`]: {
//       width: 260,
//     },
//   },
//   landingHeroText: {
//     color: "rgba(0,0,0,0.75)",
//     textAlign: "left",
//     fontSize: "3rem",
//     fontWeight: 600,
//     [`@media (max-width: 1200px)`]: {
//       fontSize: "2.2rem",
//     },
//     [`@media (max-width: 776px)`]: {
//       fontSize: "1.8rem",
//     },
//     [`@media (max-width: 390px)`]: {
//       fontSize: "1.4rem",
//     },
//   },
//   landingDescriptionText: {
//     // color: "rgba(0,0,0,0.7)",
//     textAlign: "left",
//     fontSize: "1.2rem",
//     marginTop: 30,
//     [`@media (max-width: 1200px)`]: {
//       fontSize: "1rem",
//     },
//   },
//   appointmentBtn: {
//     // display: "inline-block",
//     // background: "#FFF",
//     background: "rgba(255,245,245)",
//     // background: 'rgb(255, 245, 245)',
//     opacity: 0.8,
//     // color: "rgb(110, 12, 15)",
//     color: '#CD0E11',
//     // padding: "5px 12px",
//     // border: "1px solid rgba(110, 12, 15, 0.1)",
//     // border: "1px solid rgb(110, 12, 15)",
//     border: 'none',
//     cursor: "pointer",
//     // transition: "box-shadow .4s",
//     fontSize: 12,
//     marginTop: 10,
//     padding: 0,
//     fontFamily: 'Varela Round',
//     // padding: '0px',
//     // ":hover": {
//     //   boxShadow: "2px 2px 2px 0 rgba(110, 12, 15, 0.2)",
//     // },
//     ":focus": {
//       outline: "none",
//     },

//     [`@media (min-width: 992px)`]: {
//       fontSize: 16,
//       lineHeight: "140%",
//       // padding: "10px 22px",
//     },
//   },
//   imgBackground: {
//     width: 500,
//     height: 500,
//     position: "absolute",
//     borderRadius: '60% 40% 40% 20% / 70% 50% 30% 25%',
//     right: 0,
//     top: -150,
//     backgroundColor: "rgba(255,245,245)",

//     [`@media (min-width: 700px)`]: {
//       width: 850,
//       height: 850,
//     },
//   },
//   letsTalk: {
//     fontSize: '14rem', fontWeight: 900,
//     // border: '1px solid black',
//     position: 'relative',
//     [`@media (max-width: 1400px)`]: {
//       fontSize: '10rem',
//     },
//     [`@media (max-width: 992px)`]: {
//       fontSize: '8rem',
//     },
//     [`@media (max-width: 767px)`]: {
//       fontSize: '5rem',
//     },
//     [`@media (max-width: 550px)`]: {
//       fontSize: '3.3rem',
//     },
//   },
// }));

export const PortfolioWrapper = styled.div`
  .landing {
    display: flex;
    height: 94vh;
    justify-content: center;
    background-color: rgb(255, 245, 245);
    position: relative;
  }

  .landingContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 1300px;

    @media (max-width: 1400px) {
      width: 1150;
      justify-content: center;
    }

    @media (max-width: 1200px) {
      width: 1000;
    }

    @media (max-width: 992px) {
      flex-wrap: wrap-reverse;
    }
  }

  .textContainer {
    padding: 20px;

    @media (max-width: 992px) {
      width: 700;
    }

    @media (max-width: 700px) {
      width: 500;
    }

    @media (max-width: 550px) {
      width: 400;
    }

    @media (max-width: 390px) {
      width: 280;
    }
  }

  .landingImage {
    @media (max-width: 1200px) {
      width: 1200;
      padding-top: 50;
    }

    @media (max-width: 992px) {
      width: 400;
      margin-top: 40;
    }

    @media (max-width: 550px) {
      width: 300;
    }

    @media (max-width: 390px) {
      width: 260;
    }
  }

  .landingHeroText {
    color: rgba(0, 0, 0, 0.75);
    text-align: left;
    font-size: 3rem;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 2.2rem;
    }

    @media (max-width: 776px) {
      font-size: 1.8rem;
    }

    @media (max-width: 390px) {
      font-size: 1.4rem;
    }
  }

  .landingDescriptionText {
    text-align: left;
    font-size: 1.2rem;
    margin-top: 30;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  .appointmentBtn {
    background: rgba(255, 245, 245);
    opacity: 0.8;
    color: #cd0e11;
    border: none;
    cursor: pointer;
    font-size: 12;
    margin-top: 10;
    padding: 0;
    font-family: 'Varela Round';

    &:focus {
      outline: none;
    }

    @media (min-width: 992px) {
      font-size: 16;
      line-height: 140%;
    }
  }

  .imgBackground {
    width: 500;
    height: 500;
    position: absolute;
    border-radius: 60% 40% 40% 20% / 70% 50% 30% 25%;
    right: 0;
    top: -150;
    background-color: rgba(255, 245, 245);

    @media (min-width: 700px) {
      width: 850;
      height: 850;
    }
  }

  .letsTalk {
    font-size: 14rem;
    font-weight: 900;
    position: relative;

    @media (max-width: 1400px) {
      font-size: 10rem;
    }

    @media (max-width: 992px) {
      font-size: 8rem;
    }

    @media (max-width: 767px) {
      font-size: 5rem;
    }

    @media (max-width: 550px) {
      font-size: 3.3rem;
    }
  }

  // .banner {
  //   border: 1px solid red;
  //   min-width: 900px;
  //   margin: auto; /* This centers the container horizontally */
  //   border-radius: 6px;
  //   padding: 10px;
  //   background-color: rgba(220, 41, 8, 0.8);
  //   position: absolute;
  //   top: 0;
  //   left: 50%; /* Position the left edge at the horizontal center */
  //   transform: translateX(-50%); /* Move back by half of its own width */
  //   z-index: 999;
  //   color: white;
  //   font-size: 16px;
  //   // padding-left: 20px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }

  .banner {
    border: 1px solid red;
    min-width: 320px; /* Set a minimum width for smaller screens */
    max-width: 900px; /* Set a maximum width for larger screens */
    width: 80%; /* Set a default width */
    margin: auto; /* This centers the container horizontally */
    border-radius: 6px;
    padding: 10px;
    background-color: rgba(220, 41, 8, 0.8);
    position: absolute;
    top: 0;
    left: 50%; /* Position the left edge at the horizontal center */
    transform: translateX(-50%); /* Move back by half of its own width */
    z-index: 999;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    @media (max-width: 600px) {
      font-size: 14px; /* Adjust font size for smaller screens */
      padding: 8px; /* Adjust padding for smaller screens */
    }
  }

  .bannerText {
    display: flex;
    aligntems: center;
  }

  .bannerBtn {
    background-color: rgba(255, 255, 255, 0.9);
    color: #cd0e11;
    border: none;
    cursor: pointer;
    font-size: 12;
    margin-top: 10;
    padding: 0;
    font-family: 'Varela Round';
    border-radius: 3px;
    padding: 0px 5px;
  }
`;

export const FundedWrapper = styled.div`
  .letsTalk {
    font-size: 14rem;
    font-weight: 900;
    position: relative;

    @media (max-width: 1400px) {
      font-size: 10rem;
    }

    @media (max-width: 992px) {
      font-size: 8rem;
    }

    @media (max-width: 767px) {
      font-size: 5rem;
    }

    @media (max-width: 550px) {
      font-size: 3.3rem;
    }
  }
`;
