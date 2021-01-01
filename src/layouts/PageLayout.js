import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { About } from 'components';
import { Header } from './Header';
import { Footer } from './Footer';

export const PageLayout = ({
  pageClass,
  children,
  pageTitle,
  showModal,
  toggleModal
}) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleThemeSwitch = () => {
    setDarkTheme(prevState => !prevState);
  };

  return (
    <div id="page" className={classnames('page', { page__light: !darkTheme })}>
      <Header
        pageTitle={pageTitle}
        toggleModal={toggleModal}
        toggleThemeSwitch={toggleThemeSwitch}
      />

      <About showModal={showModal} modalFunc={toggleModal} />

      <main className={classnames(pageClass)}>{children}</main>

      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  pageClass: PropTypes.string,
  pageTitle: PropTypes.string,
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func
};
