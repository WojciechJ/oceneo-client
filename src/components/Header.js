import React, { Component } from 'react';

import '../css/fontello_icons-embedded.css';

class Header extends Component {
  render() {
    return (
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home"><span className="mainlogo"><h1>Oceneo</h1></span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <form className="searchbar" role="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Czego szukasz" name="srch-term" id="srch-term" />
              <div className="input-group-btn">
                <button className="btn btn-outline-success form-control-menu" type="submit"><i className="icon-search" /></button>
              </div>
            </div>
          </form>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav ml-auto"> 
              <li className="nav-item ">
                <a className="nav-link menu-item" href="utility/addproduct.html"><i className="icon-plus" /><span className="largenav">Dodaj produkt</span></a>
              </li>
              {/* <li class="nav-item dropdown"> */}
              {/* <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  Dropdown  </a> */}
              {/* <ul class="dropdown-menu"> */}
              {/* <li><a class="dropdown-item" href="#"> Menu item 1</a></li> */}
              {/* <li><a class="dropdown-item" href="#"> Menu item 2 </a></li> */}
              {/* </ul> */}
              {/* </li> */}
              <li className="nav-item">
                <a className="nav-link menu-item" href="utility/login.html"><i className="icon-user" /><span className="largenav">Logowanie</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-item" href="utility/adduser.html"><i className="icon-user-add" /><span className="largenav">Rejestracja</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-item" href="utility/profile.html"><i className="icon-user" /><span className="largenav">Konto</span></a>
              </li>
            </ul>
          </div>
        </nav>
        {/*MENU--//*/}
      </header>

    );
  }
}

export default Header;