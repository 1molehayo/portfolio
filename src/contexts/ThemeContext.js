import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: true,
      showAboutModal: false
    };
  }

  toggleThemeSwitch() {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  }

  toggleAboutModal() {
    this.setState(prevState => ({ showAboutModal: !prevState.showAboutModal }));
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleThemeSwitch: this.toggleThemeSwitch.bind(this),
          toggleAboutModal: this.toggleAboutModal.bind(this)
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
};

export default ThemeContextProvider;
