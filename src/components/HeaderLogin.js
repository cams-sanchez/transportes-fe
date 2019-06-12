import React from 'react';

export default (props) =>{
  let imageLogo = props.state.sitesLogo;
    console.log(imageLogo);
    return (
      <header className="justify-content-center">
        <img src={imageLogo} className="img-fluid logoLogin rounded mx-auto d-block" alt="LOGO TRANSPORTES" />
      </header>
    );
}
