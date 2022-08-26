import styled, { css } from 'styled-components';
import { sm, md } from '../../helpers/device';

export const ContentSectionWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  ${sm}{
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .middle-content {
    display: flex;
    flex-wrap: wrap;

    ${sm}{
      flex-wrap: nowrap;
    }

    .left-col, .right-col {
      width: 100%;
      ${sm}{
        width: 50%;
      }
    }

    .left-col {
      ul {
        margin-bottom: 40px;
        ${sm} {
          margin-bottom: 0;
        }

        &.list-icon {
          display: flex;

          li {
            display: flex;
            min-height: 56px;
            margin-right: 4px;
            ${sm} {
              margin-right: 8px;
              min-height: 80px;
            }

            &:last-child {
              margin-right: 0;
            }

            &:nth-of-type(odd) {
              align-items: flex-end;
            }
            
            &:nth-of-type(even) {
              align-items: flex-start;
            }

            img {
              width: 24px;
              height: 24px;
              ${sm}{
                width: 32px;
                height: 32px;
              }
            }
          }
        }

        &.list-card {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          
          li {
            position: relative;
            width: 100%;
            float: left;
            padding: 0 16px 0 64px;
            min-height: 46px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 24px;
            ${md}{
              width: 50%;
            }
  
            span {
              width: 100%;
              display: block;
              font-weight: 700;
              margin-bottom: 6px;
            }
  
            figure {
              background-color: #fcfcfc;
              width: 46px;
              height: 46px;
              border-radius: 100%;
              position: absolute;
              top: 0;
              left: 0;

              &:before {
                opacity: 0.75;
              }
            }
          }
        }

      }
    }

    .right-col {
      .image-card {
        position: relative;
        min-height: 164px;
        width: 300px;
        margin: 0 auto;

        ${sm}{
          margin: 0 0 0 auto;
        }
        ${md}{
          width: 412px;
          min-height: 350px;
        }

        &:before, &:after {
          content: '';
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 3px;
          z-index: 1;
          ${md} {
            width: 150px;
            height: 150px;
          }
        }
        &:before {
          top: 16px;
          left: 0;
          background: linear-gradient(0deg, #FFEDAE, #FFEDAE);
          ${md}{
            top: 105px;
          }
        }
        &:after {
          right: 0;
          bottom: 24px;
          background: linear-gradient(0deg, rgba(231, 111, 81, 0.3), rgba(231, 111, 81, 0.3));
          ${sm}{
            bottom: 10px;
          }
        }


        figure {
          margin: 0;

          &.left-img, &.right-img {
            position: absolute;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-color: #E5E5E5;
            border-radius: 4px;
            z-index: 2;

            &:before {
              border-radius: 4px;
            }
          }

          &.left-img {
            width: 103px;
            height: 128px;
            left: 16px;
            bottom: 0;
            z-index: 3;
            ${md}{
              width: 194px;
              height: 220px;
              left: 24px;
            }
          }

          &.right-img {
            width: 186px;
            height: 122px;
            right: 16px;
            top: 0;

            ${md}{
              width: 230px;
              height: 325px;
            }
          }
        }
      }
    }
  }

  ${props =>
    props.rightSideStyle &&
  css`
    ${sm}{
      .middle-content {
        .left-col {
          order: 2;
        }
        .right-col {
          .image-card {
            margin: 0 auto 0 0;
          }
        }
      }
    }
  `};
`;