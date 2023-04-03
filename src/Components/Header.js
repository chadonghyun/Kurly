import React from 'react';

function Header(props) {
  return (
    <>
      <header>
        <h1>
          <a href="./App.js" title='바로가기'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
          </a>
        </h1>
      </header>
    </>
  );
}

export default Header;