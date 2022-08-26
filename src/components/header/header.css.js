import styled, { keyframes } from 'styled-components';
import { xs } from '../../helpers/device';

const pulse = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-1px);
  }
  75% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  background: transparent;
  position: absolute;
  top: 12px;
  left: 0;
  padding: 12px 0;
  z-index: 10;
  box-shadow: none;
  display: flex;
  align-items: center;
  min-height: 56px;

  @media(max-width: 991px) {
    top: 16px;
    min-height: 72px;
  }

  a {
    display: inline-block;
  }

  .hiring-link {
    align-self: flex-end;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 2px 10px;
    padding-top: 3px;
    border-radius: 3px;
    border: 1px solid #fff;
    transition: all .35s ease-in-out;
    margin-left: 35px;
    background: transparent;
    animation: ${pulse} 2s linear infinite;
    position: relative;
    text-decoration: none;

    &:hover {
      color: #222;
      background: rgba(256, 256, 256, .9);
    }

    &::after {
      content:'';
      display:block;
      width:0;
      height:0;
      position:absolute;

      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-right: 11px solid rgba(256, 256, 256, .9);
      left: -12px;

      top: 0px;
    }

    ${xs} {
      margin-left: 20px;
    }
  }
`;
