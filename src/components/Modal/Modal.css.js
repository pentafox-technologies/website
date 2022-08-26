import styled from "styled-components";
import { xs, sm, md, lg } from "../../helpers/device";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 0;

  ${md} {
    overflow: auto;
    padding: 0 10%;
    padding-top: min(8vh, 100px);
    padding-bottom: 0;
    overflow: inherit;
  }
`;

export const ModalContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  /* height: 100%; */
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 0;

  ${md} {
    top: 10vh;
    width: 80%;
    padding: 30px;
    padding-top: 24px;
    /* height: auto; */
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;

  h1 {
    font-size: 26px;
    margin-bottom: 26px;
  }

  span {
    display: inline-block;
    height: 32px;
    width: 24px;
    position: relative;
    cursor: pointer;
    align-self: flex-end;

    &:after {
      content: "\\00d7";
      font-size: 36px;
      color: #aaa;
      position: absolute;
      top: -16px;
      transition: all 0.35s ease-in-out;
    }

    &:hover {
      &:after {
        color: #888;
        transform: rotate(90deg) scale(1.025);
      }
    }
  }

  ${md} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    padding-top: 10px;

    h1 {
      margin-bottom: 14px;
    }

    span {
      align-self: flex-start;
    }
  }
`;

export const ModalBody = styled.div`
  overflow: auto;
  padding-bottom: 20px;

  .meta-section {
    margin-bottom: 16px;
    .meta-grid {
      display: grid;
      grid-template-columns: 100px 1fr;
      margin-top: 16px;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #444;
    letter-spacing: 0.5px;

    & + p {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }

  ul {
    padding-left: 20px;
    li {
      font-size: 14px;
      line-height: 1.45em;
    }
  }

  ${md} {
    padding: 10px;

    h3 {
      font-size: 16px;
      font-weight: 600;

      & + p {
        margin-bottom: 4px;
      }
    }

    ul {
      padding-left: 28px;
      li {
        font-size: 14px;
      }
    }
  }
`;
