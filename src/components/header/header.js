import React from 'react';
import IsMobile from '../../helpers/IsMobile';
import { HeaderWrapper } from './header.css';
import LogoSVG from '../../images/logo-pf-white.svg';
import LogoDarkSVG from '../../images/logo-pf-dark.svg';
import { Link } from 'gatsby';

const isMobileDevice = IsMobile();

const Header = ({ showCareers, showDarkLogo=true }) => {
  return (
    <HeaderWrapper>
      <div className="container lg-container xs-full-width">
        <Link to="/">
          {
            showDarkLogo ?
              <LogoDarkSVG height={isMobileDevice ? '30' : '42'} />
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
