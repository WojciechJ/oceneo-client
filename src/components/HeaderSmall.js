import React, { Component } from 'react';

import '../css/fontello_icons-embedded.css';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><span className="mainlogo"><h1>Oceneo</h1></span></a>
        </nav>
      </header>

    );
  }
}

export default Header;