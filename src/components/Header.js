import React from 'react';

import facebookLogo from '../img/facebook.png';
import userIcon from '../img/user.png';

function Header() {
  return(
    <div className="header">
      <img id="facebook" src={facebookLogo} alt="Facebook"/>
      <div className="profile">
        <a href="">
          <strong>Meu perfil</strong>
          <img id="user" src={userIcon} alt="User"/>
        </a>
      </div>
    </div>
  );
}

export default Header;

