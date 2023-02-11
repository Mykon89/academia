import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Link as Href } from 'react-scroll';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

export default class NavbarMenu extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems" id="navbar">
        <div className="navbar-logo">
          <img src="#" alt="Logo Academia" />
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Href
                  className={item.cName}
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p>{item.text}</p>
                </Href>
              </li>
            );
          })}
        </ul>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </nav>
    );
  }
}
