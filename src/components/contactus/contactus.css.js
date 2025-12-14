import styled from "styled-components";
import { xs, sm } from "helpers/device";
import { theme } from "helpers/theme";

export const ContactFormWrapper = styled.div`
  background: white;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  /* PAGE WRAP (merged from JS styles) */
  .page-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1px 20px 40px;
  }

  /* TITLE (merged) */
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #dc2b2b;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  .subtitle {
    text-align: center;
    color: #757575;
    margin-bottom: 40px;
    font-size: 16px;
  }

  /* ------------------------------ */
  /*          CARD WRAPPER          */
  /* ------------------------------ */
  .card {
    display: flex;
    flex-direction: row;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    width: 100%;
    border: none;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  /* ------------------------------ */
  /*            LEFT PANEL           */
  /* ------------------------------ */
  .left-panel {
    width: 50%;
    background: rgb(255, 245, 245);
    padding: 50px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 24px;
    }
  }

  /* ------------------------------ */
  /*           RIGHT PANEL           */
  /* ------------------------------ */
  .right-panel {
    width: 50%;
    padding: 50px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 24px;
    }
  }

  /* ------------------------------ */
  /*        LOCATION GRID            */
  /* ------------------------------ */
  .location-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-top: 8px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    .location-title {
      margin-bottom: 8px;
      color: #757575;
      font-weight: 600;
    }

    .location-address {
      margin-bottom: 0;
      color: #757575;
      font-size: 13px;
    }
  }

  .important-message-title {
    margin-bottom: 5px;
    color: #dc2b2b;
    font-weight: 600;
    font-size: 15px;
  }

  .gray-title {
    margin-bottom: 8px;
    color: #757575;
    font-weight: 600;
  }

  input::placeholder,
  textarea::placeholder {
    color: #757575d3;
  }

  input:focus,
  textarea:focus {
    border-color: #757575e9 !important;
    outline: none;
  }

  .link {
    text-decoration: under-line;
    cursor: pointer;
    color: #dc2b2b;
  }

  .spacing-between-container {
    margin-bottom: 45px;
  }

  /* ------------------------------ */
  /*          TYPOGRAPHY             */
  /* ------------------------------ */
  p {
    color: #757575;

    &.heading-txt {
      line-height: 120%;
      font-weight: 700;
      font-size: 20px;

      ${sm} {
        font-size: 24px;
      }

      span {
        color: #dc2b2b;
        font-size: 20px;

        ${sm} {
          font-size: 24px;
        }
      }
    }
  }

  /* ------------------------------ */
  /*         FORM GROUPS             */
  /* ------------------------------ */
  .form-group {
    margin-bottom: 14px;

    input {
      width: 100%;
      height: 40px;
      background: ${theme.white};
      border: 1px solid #eceaea;
      border-radius: 2px;
      padding: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #19181d;
      margin-bottom: 10px;

      ${sm} {
        height: 48px;
        font-size: 14px;
      }
    }

    textarea {
      width: 100%;
      background: ${theme.white};
      border: 1px solid #eceaea;
      border-radius: 2px;
      padding: 16px;
      font-size: 12px;
      line-height: 140%;
      font-weight: 600;
      color: #19181d;
      resize: none;

      ${sm} {
        font-size: 14px;
      }
    }

    .error-label {
      background-color: #ffe9e9;
      color: rgb(220, 43, 43);

      &::placeholder {
        color: rgb(220, 43, 43) !important;
      }
    }
  }

  a {
    color: #dc2b2b;
    font-weight: 600;
  }

  /* ------------------------------ */
  /*       CHECKBOX GROUPS           */
  /* ------------------------------ */
  .form-group-checkbox {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;

    input {
      margin-top: 3px;
    }

    label {
      margin-left: 10px;
      color: #757575;
      font-size: 13px;

      ${xs} {
        font-size: 12px;
      }
    }

    .error-label {
      color: rgb(220, 43, 43);
    }
  }

  /* ------------------------------ */
  /*       APPOINTMENT BUTTON        */
  /* ------------------------------ */
  .appointment-btn {
    background: transparent;
    border: 1.5px solid #21c997;
    color: #21c997 !important;
    border-radius: 2px;
    font-size: 16px;
    line-height: 140%;
    width: 100%;
    padding: 8px;
    margin-top: 14px;
    text-align: center;
    fontfamily: Varela Round;

    ${sm} {
      font-size: 16px;
    }
    ${xs} {
      font-size: 14px;
    }
  }

  .submit-btn {
    font-family: Varela Round;
    font-size: 16px;
    ${xs} {
      font-size: 14px;
    }
  }

  // .download-portfolio-desktop {
  //   display: in-line;

  //   @media (max-width: 768px) {
  //     display: none;
  //   }
  // }
  // .download-portfolio-mobile {
  //   display: none;

  //   @media (max-width: 768px) {
  //     display: inline-block;
  //   }
  // }
`;
