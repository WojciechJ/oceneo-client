import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../css/fontello_icons-embedded.css';

class Header extends Component {
	
	constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
	
	
  render() {
    return (
      <header className="container">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><span className="mainlogo"><h1>Oceneo</h1></span></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/addproduct"><i className="icon-plus" /> Dodaj produkt</NavLink>
              </NavItem>
			  <NavItem>
                <NavLink href="/login"><i className="icon-user" /> Logowanie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register"><i className="icon-user-add" /> Rejestracja</NavLink>
              </NavItem>
			  <NavItem>
                <NavLink href="/account/:user_id"><i className="icon-user" /> Profil</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
		  
		  <form className="searchbar row" role="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Czego szukasz" name="srch-term" id="srch-term" />
              <div className="input-group-btn">
                <button className="btn btn-outline-success form-control-menu" type="submit"><i className="icon-search" /></button>
              </div>
            </div>
          </form>
        </Navbar>
        {/*MENU--//*/}
      </header>

    );
  }
}

export default Header;