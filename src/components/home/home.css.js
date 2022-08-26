import styled from "styled-components";
import { xs, sm, md } from "../../helpers/device";
// import { ContentSectionWrapper } from "../contentSection/contentSection.css";

export const HomeWrapper = styled.div`
  h3 {
    font-size: 20px;
    line-height: 120%;
    color: #292733;
    margin: 0 0 8px;
    font-weight: 500;

    ${sm} {
      font-size: 28px;
    }
  }

  p {
    line-height: 140%;
    margin-bottom: 24px;

    ${xs} {
      font-size: 12px;
    }
  }

  h5 {
    font-size: 14px;
    line-height: 140%;
    font-weight: 700;
    margin-bottom: 12px;
    ${sm} {
      font-size: 16px;
    }
  }
`;

// ${ContentSectionWrapper} {
//     p {
//       ${md}{
//         margin-bottom: 40px;
//       }
//     }
//   }
