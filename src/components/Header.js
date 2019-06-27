import React from 'react';
import logo from '../assets/images/transportesLogo.png';
export default (props) =>{
    return (
      <header className="justify-content-left">
        <img src={logo} className="img-fluid logoGeneric rounded d-block" alt="LOGO TRANSPORTES" />
      </header>
    );
}
