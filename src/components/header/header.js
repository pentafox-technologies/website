import React from 'react';
import IsMobile from '../../helpers/IsMobile';
import { HeaderWrapper } from './header.css';
import LogoSVG from '../../images/logo-pf-white.svg';
import LogoRedSVG from '../../images/logo-pf-red.svg';
import { Link } from 'gatsby';

const isMobileDevice = IsMobile();

const Header = ({ showCareers, showDarkLogo=true }) => {
  return (
    <HeaderWrapper>
      <div className="container lg-container xs-full-width">
        <Link to="/">
          {
            showDarkLogo ?
              <LogoRedSVG height={isMobileDevice ? '30' : '60'} width="200" />
              : <LogoSVG height={isMobileDevice ? '30' : '60'} width="200" />
          }
        </Link>
        {
          showCareers &&
            <Link to='/careers' className='hiring-link'><span>We are hiring!</span></Link>
        }
      </div>
    </HeaderWrapper>
  );
};

export default Header;
