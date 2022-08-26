import styled, { css } from "styled-components";
import { sm, md, xs } from "../../helpers/device";

export const BenefitsContent = styled.section`
  padding: 40px 0;
  background-color: #f5f5f5;
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

  .benefits {
    display: grid;
    margin: 40px auto;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
    max-width: 95%;

    .benefit-card {
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

  .benefits-section {
    padding: 30px 0;
  }

  ${sm} {
    p {
      width: 80vw;
    }

    .benefits {
      max-width: 76%;
    }
  }

  ${md} {
    p {
      width: 70%;
      margin-bottom: 50px;
    }

    .benefits {
      max-width: 50%;
    }
  }

  ${xs} {
    min-height: 40vh;

    .benefits-section {
      .heading {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }
    }

    p {
      width: 95%;
    }

    .benefits {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .benefit-card {
        padding-left: 0;
        text-align: center;
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

export const CareersContent = styled.div`
  padding-top: 40px;

  .heading {
    font-size: 1.8rem;
    color: #3e3e3e;
    font-weight: 600;
    /* font-size: 1.4rem; */
    margin-bottom: 20px;
    position: relative;
    /* text-align: center; */

    & + p {
      color: #3e3e3e;
      margin-bottom: 40px;
    }

    &::after {
      /* content: ''; */
      position: absolute;
      left: 40%;
      left: 0;
      bottom: -10px;
      border-bottom: 2px solid #ddd;
      width: 20%;
      margin: 0 auto;
    }
  }

  .job-listing {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    .job-card {
      cursor: pointer;
      padding: 16px;
      border: 1px solid rgba(50, 50, 50, 0.1);
      border-radius: 3px;
      background-color: #fff;
      transition: all 0.35s ease-in-out;

      &:hover {
        box-shadow: 0 8px 20px -10px #ccc;
      }

      .job-title {
        font-size: 1.35rem;
        color: #444;
        letter-spacing: 0.5px;
      }

      .job-desc-short {
        color: #888;
        margin: 0;
        margin-top: 12px;
      }

      .job-tags {
        margin-top: 12px;

        .job-tag-item {
          display: inline-block;
          padding: 2px 8px;
          margin-right: 8px;
          margin-bottom: 4px;
          border-radius: 2px;
          color: #fff;
          font-size: 0.8rem;
          line-height: 1rem;
          background-color: rgba(41, 31, 51, 0.7);
        }
      }
    }
  }

  .job-email {
    padding-top: 40px;
    /* text-align: center; */

    color: #bbb;
    p {
      font-size: 14px;
      color: #888;
    }
    a {
      color: #444;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #333;
      }
    }
  }

  ${sm} {
    padding-top: 60px;

    .heading {
      color: #3e3e3e;
      font-size: 2rem;
      margin-bottom: 10px;
      position: relative;
      text-align: center;

      &::after {
        /* content: ''; */
        position: absolute;
        left: 45%;
        left: 0%;
        bottom: -16px;
        border-bottom: 2px solid #ddd;
        width: 10%;
        margin: 0 auto;
      }
    }

    .job-listing {
      max-width: 75%;
      margin: 0 auto;
      grid-gap: 20px;
      grid-template-columns: 1fr;
    }

    .job-email {
      font-size: 16px;
    }
  }
`;
