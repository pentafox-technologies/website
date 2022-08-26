import styled, { css } from "styled-components";
import { sm, md, xs } from "../../helpers/device";

const PageWrapper = styled.div``;

export const TopSectionWrapper = styled.section`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 20px;
  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);
  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */

  min-height: 340px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fdfdfd;
    font-weight: 700;
    font-size: 2.75rem;
  }

  p {
    font-size: 1.2rem;
    color: #fdfdfd;
  }

  ${xs} {
    padding-top: 120px;
    padding-bottom: 60px;
    min-height: 50vh;
    height: 340px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ProductsWrapper = styled.section`
  text-align: left;
  padding-top: 80px;
  padding-bottom: 20px;
  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);
  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */

  min-height: 340px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fdfdfd;
    font-weight: 700;
    font-size: 4rem;
  }

  p {
    font-size: 1.3rem;
    color: #fdfdfd;
    margin-top: 2rem;
  }

  ${xs} {
    padding-top: 120px;
    padding-bottom: 60px;
    min-height: 50vh;
    height: 340px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default PageWrapper;
