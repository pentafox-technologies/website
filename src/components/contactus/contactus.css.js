import styled from "styled-components";
import { sm } from "helpers/device";
import { theme } from "helpers/theme";

export const ContactFormWrapper = styled.div`
  background: #ffffff;
  width: 100%;

  /* ------------------------ FORM GROUP ------------------------ */
  .form-group {
    margin-bottom: 16px;

    input,
    textarea {
      width: 100%;
      background: ${theme.white};
      border: 1px solid #ECEAEA;
      border-radius: 2px;
      padding: 14px 16px;
      font-size: 14px;
      font-weight: 600;
      color: #19181D;
      font-family: "Varela Round";
      resize: none;

      &::placeholder {
        color: rgb(146, 146, 146);
      }
    }

    textarea {
      min-height: 120px;
    }

    /* error highlighting */
    .error-label {
      background-color: #FFE9E9;
      color: rgb(220, 43, 43);
      textDecoration:underline;
       
      &::placeholder {
        color: rgb(220, 43, 43);
      }
    }
  }

  /* ------------------------ CHECKBOX GROUP ------------------------ */
  .form-group-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;

    label {
      color: #000;
      font-size: 12px;
      line-height: 16px;
      user-select: none;
    }

    input {
      margin-top: 3px;
    }
  }

  /* ------------------------ SEND BUTTON ------------------------ */
  .send-btn {
    width: 100%;
    padding: 14px;
    border-radius: 2px;
    background: #21C997;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 20px;

    &:disabled {
      background: rgb(146, 146, 146);
    }
  }

  /* ------------------------ CALENDLY BUTTON ------------------------ */
  .appointment-btn {
    width: 100%;
    padding: 12px;
    border-radius: 2px;
    background: transparent;
    border: 1.5px solid #21C997;
    font-size: 16px;
    color: #21C997;
    font-weight: 600;
    text-align: center;
    margin-top: 16px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      border-color: #ffffff;
      background: #21C997;
    }
  }

  a {
  color: red;
  }
`;
