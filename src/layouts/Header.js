import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'components';

export const Header = ({ pageTitle, toggleModal, toggleThemeSwitch }) => (
  <header className="header">
    <div className="container">
      <Navigation
        activeLink={pageTitle}
        toggleModal={toggleModal}
        toggleThemeSwitch={toggleThemeSwitch}
      />
    </div>
  </header>
);

Header.propTypes = {
  pageTitle: PropTypes.string,
  toggleModal: PropTypes.func,
  toggleThemeSwitch: PropTypes.func
};
