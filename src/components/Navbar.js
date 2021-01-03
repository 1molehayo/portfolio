import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/img/myAvatar.png';

export const Navigation = ({ activeLink, toggleModal, toggleThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="navigation">
      <Navbar expand="md" variant="light" onToggle={toggleNav}>
        <NavLink to="/" className="navbar-brand">
          <span className="avatar">
            <img className="img-fluid" src={avatar} alt="avatar" />
          </span>
        </NavLink>

        <div className="mobile-icons">
          <div className="mobile-theme-switch" onClick={toggleThemeSwitch}>
            <i className="fas fa-adjust" />
          </div>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className={classnames('hamburger', { active: isOpen })}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <span className="nav-link" onClick={toggleModal}>
                About
              </span>
            </NavItem>

            <NavItem className={classnames({ active: activeLink === 'works' })}>
              <NavLink to="/works" className="nav-link">
                Works
              </NavLink>
            </NavItem>

            <NavItem>
              <a className="nav-link" href="mailto:omilabuolusegun@gmail.com">
                Say Hello
              </a>
            </NavItem>

            <NavItem>
              <span className="nav-link" onClick={toggleThemeSwitch}>
                <div className="theme-switch">
                  <i className="fas fa-adjust" />
                </div>
              </span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navigation.propTypes = {
  activeLink: PropTypes.string,
  toggleModal: PropTypes.func,
  toggleThemeSwitch: PropTypes.func
};
