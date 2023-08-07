import styled, { css } from "styled-components";
import { sm, md, xs } from "../../helpers/device";

export const InternshipContentBlock = styled.section`
  padding: 40px 0;
  background-color: ${props => props.variant};
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .heading {
    font-weight: 600;
    color: #3e3e3e;
    margin-bottom: 10px;
  }

  p {
    width: 65vw;
    margin: 0 auto;
    margin-bottom: 40px;
    color: #3e3e3e;
    text-align: center;
  }

  .internship {
    display: grid;
    margin: 40px auto;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
    max-width: 95%;

    .internship-card {
      text-align: left;
      padding-left: 55px;
      position: relative;
      display: flex;
      align-items: center;
      height: 40px;

      figure {
        width: 40px;
        height: 37px;
        padding: 10px;
        left: 0;
        margin: 0;

        &::before,
        &::after {
          background-size: contain;
        }
      }
      span {
        color: #444;
        font-size: 16px;
        text-align: left;
      }
    }
  }

  .internship-section {
    padding: 30px 0;
  }

  ${sm} {
    p {
      width: 80vw;
    }

    .internship {
      max-width: 76%;
    }
  }

  ${md} {
    p {
      width: 70%;
      margin-bottom: 50px;
    }

    .internship {
      max-width: 50%;
    }
  }

  ${xs} {
    min-height: 40vh;
    // text-align: left;

    .internship-section {
      .heading {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }
    }

    p {
      width: 95%;
      text-align: left;
    }

    .internship {
      text-align: left;
      display: flex;
      flex-direction: column;
      // align-items: center;

      .internship-card {
        padding-left: 0;
        text-align: left;
        padding-top: 50px;
        height: auto;

        figure {
          left: 0;
          top: 0;
          width: 100%;

          &::before,
          &::after {
            background-position: center;
          }
        }
      }
    }
  }
`;
