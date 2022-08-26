import styled from "styled-components";
import { xs, sm, md, lg } from "../../helpers/device";

export const HeroSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;

  ${sm} {
    height: 100vh;
    min-height: 702px;
    margin-bottom: 56px;
  }

  /* common css starts */
  .left-col,
  .right-col {
    overflow: hidden;

    figure {
      position: relative;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 100%;
      margin-bottom: 0;
      display: flex;
      align-items: flex-end;
      margin: 0px;

      ${md} {
        overflow: hidden;
        transition: all 0.75s ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          // background: inherit;
          transition: inherit;
        }

        &:hover {
          &:before {
            transform: scale(1.2);
          }
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: hard-light;
      }

      figcaption {
        color: #ffffff;
        width: 100%;
        z-index: 1;
        padding: 0 24px 32px;

        ${lg} {
          padding: 0 112px 24px 24px;
        }

        h2 {
          font-size: 18px;
          line-height: 26px;
          font-weight: 700;
          margin: 0;

          ${md} {
            font-size: 24px;
            line-height: 80%;
            margin-bottom: 8px;
          }
        }

        p {
          margin-bottom: 0;

          ${xs} {
            font-size: 13px;
            line-height: 150%;
          }
        }
      }
    }
  }
  /* common css ends */

  /* left col starts */
  .left-col {
    width: 100%;
    ${sm} {
      width: 70%;
    }

    figure {
      ${xs} {
        height: 100vh;
        min-height: 700px;
      }
      &:after {
        background: linear-gradient(180deg, #e64545 0%, #a22121 100%);
      }

      figcaption {
        padding: 0 24px 96px;
        ${lg} {
          padding: 0 272px 56px 124px;
        }

        h2 {
          font-weight: 700;
          font-size: 28px;
          line-height: 32px;
          margin-bottom: 8px;
          ${md} {
            font-size: 28px;
            line-height: 38px;
            margin-bottom: 12px;
          }
        }

        p {
          margin-bottom: 24px;
        }

        span {
          &.know-more {
            display: inline-block;
            padding: 5px 12px;
            border: 1px solid #ffffff;
            cursor: pointer;
            ${md} {
              font-size: 16px;
              line-height: 140%;
              padding: 10px 22px;
              transition: box-shadow 0.4s;

              &:hover {
                box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.5);
              }
            }
          }
        }
      }
    }
  }
  /* left col ends */

  .index-image {
    width: 100%;
    height: 100%;
    top: -20px;
  }

  /* right col starts */
  .right-col {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    ${sm} {
      width: 30%;
    }

    figure {
      height: 33.33vh;
      min-height: 132px;

      ${sm} {
        flex: 1 1;
      }

      &:after {
        background: #f4a261;
        ${sm} {
          background: linear-gradient(180deg, #f4b061 0%, #bf7e31 100%);
        }
      }

      &:first-child {
        ${xs} {
          height: 240px;
        }
        &:after {
          background: linear-gradient(180deg, #a94026 0%, #e76f51 100%);
        }
      }

      &:last-child {
        &:after {
          background: #f4b061;

          ${sm} {
            background: #f4a261;
          }
        }
      }
    }
  }
  /* right col ends */
`;