import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import avatar from 'assets/img/myAvatar.png';
import useEventListener from 'services/useEventListener';
import { ThemeContext } from 'contexts/ThemeContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { toggleThemeSwitch, toggleAboutModal } = useContext(ThemeContext);

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth <= 990);
  };

  useEventListener('resize', updateWindowDimensions);

  useEffect(() => {
    updateWindowDimensions();
  }, []);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Navbar
        className="navigation"
        expand="lg"
        variant="light"
        onToggle={toggleNav}
      >
        <div className="container">
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
              {isMobile && (
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </NavItem>
              )}

              <NavItem>
                <span className="nav-link" onClick={toggleAboutModal}>
                  About
                </span>
              </NavItem>

              <NavItem>
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
        </div>
      </Navbar>
    </>
  );
};

Navigation.propTypes = {
  activeLink: PropTypes.string,
  toggleModal: PropTypes.func,
  toggleThemeSwitch: PropTypes.func
};
