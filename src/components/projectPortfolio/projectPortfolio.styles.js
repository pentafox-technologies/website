import styled, { css } from "styled-components";
import { sm, md } from "../../helpers/device";

export const ProjectPortfolioWrapper = styled.section`
  background: #ffffff;
  padding: 60px 0 0;
  position: relative;
  z-index: 2;

  .filter-tabs {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: #ffe9e9;
  color: #dc2b2b;
  transition: all 0.25s ease;
}

.filter-tab:hover {
  background: #dc2b2baf;
  color: white;
}

.filter-tab.active {
  background: #dc2b2b;
  color: white;
}

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Meta rows */
  .meta {
    margin-top: 16px;
  }

  .meta-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  svg {
    color: #16a34a;
    flex-shrink: 0;
  }

  .label {
  margin-right: 9px;
    font-weight: 600;
  }

  .portfolio-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // align-items: center;
    margin-bottom: 80px;
  }

  .left-col,
  .right-col {
    width: 100%;
  }

  ${sm} {
    .portfolio-row {
      flex-wrap: nowrap;
    }

    .left-col,
    .right-col {
      width: 50%;
    }
  }

  /* IMAGE */
  .image-wrapper img {
    width: 100%;
    height: clamp(220px, 40vw, 320px);
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  /* TEXT */
  .category {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #dc2b2b;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .overview {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.7);
  }

  .link{
  text-decoration: none;}

   .contactUs {
   display: inline;
  background: #cd0e11;
  color: white;
  padding: 8px 20px;
  text-decoration: none;
                    margin-top: 20px;
                    border-radius: 13px;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all 0.2s ease-in;
                    &:hover {
                      background: #b60d0f;
                    },
  }

  /* DESKTOP REVERSE */
  ${(props) =>
    props.reverse &&
    css`
      ${sm} {
        .left-col {
          order: 2;
        }
        .right-col {
          order: 1;
        }
      }
    `}
`;
