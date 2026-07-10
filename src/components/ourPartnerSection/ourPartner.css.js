import styled from "styled-components";
import { sm } from "../../helpers/device";

export const OurPartnerSection = styled.section`
  background: #ffffff;
  border-bottom: 1px solid #ededed;
  padding: 40px 0;
  text-align: center;

  ${sm} {
    padding: 70px 0;
  }

  .partner-title {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #1a1a1a;
    text-align: center;
    margin: 0 0 40px;

    ${sm} {
      font-size: 30px;
    }
  }

  .partner-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    text-align: center;

    ${sm} {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: 960px;
      margin: 0 auto;
      gap: 48px;
      text-align: left;
    }
  }

  .partner-copy {
    flex: 1 1 auto;
    max-width: 520px;

    h3 {
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      margin: 0 0 14px;
      font-size: 24px;
      color: #1a1a1a;

      ${sm} {
        font-size: 30px;
      }
    }

    p {
      font-family: 'Varela Round', sans-serif;
      margin: 0;
      width: 100%;
      color: #4a4a4a;
      line-height: 1.7;
      font-size: 15px;
    }

    .partner-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-top: 24px;
      color: #cd0e11;
      text-decoration: none;
      font-weight: 600;
      transition: gap 0.25s ease-in-out;

      h6 {
        font-family: 'Outfit', sans-serif;
        font-weight: 600;
        margin: 0;
        font-size: 15px;
      }

      &:hover {
        gap: 16px;
      }
    }
  }

  .partner-visual {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 340px;
    padding: 36px 28px;
    border-radius: 16px;


    ${sm} {
      width: 340px;
    }

    img {
      width: 100%;
      max-width: 220px;
      height: auto;
      object-fit: contain;
    }
  }
`;
