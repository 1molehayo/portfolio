import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeContext } from 'contexts/ThemeContext';
import { About } from 'components';
import { Header } from './Header';
import { Footer } from './Footer';

export const PageLayout = ({ pageClass, children }) => {
  const { darkMode, showAboutModal, toggleAboutModal } = useContext(
    ThemeContext
  );

  return (
    <div id="page" className={classnames('page', { page__light: !darkMode })}>
      <Header />

      <main className={classnames('page__body', pageClass)}>{children}</main>

      <About showModal={showAboutModal} toggleModal={toggleAboutModal} />

      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  pageClass: PropTypes.string
};
