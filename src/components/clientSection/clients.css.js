import styled from 'styled-components';
import { sm } from '../../helpers/device';

export const ClientLogoSection = styled.div`
  background: #F4F4F4;
  padding: 32px 0;
  text-align: center;
  // margin-bottom: 64px;
  ${sm} {
    padding: 50px 0;
    // margin-bottom: 120px;
    p {
      width: 70%;
      margin: 0 auto;
      margin-top: 15px;
      margin-bottom: 40px;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;

    ${sm}{
      width: 70%;
    }

    li {
      display: inline-block;
      margin: 0 20px;
      margin-bottom: 30px;
      transition: all .35s ease-in-out;

      img {
        filter: grayscale(90%);
        height: 38px;
        ${sm} {
          height: 45px;
        }
      }

      &:hover img {
        filter: none;
      }
    }
  }
`;
