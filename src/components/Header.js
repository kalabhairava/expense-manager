import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
    </header>
  );
}

export default Header;
