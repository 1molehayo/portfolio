import React from 'react';

export const Footer = () => {
  const today = () => {
    const date = new Date();

    return date.getFullYear();
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-icons">
          <a
            className="footer-link"
            target="__blank"
            href="https://www.linkedin.com/in/onemole/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="footer-link"
            target="__blank"
            href="https://twitter.com/One_moole"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="footer-link"
            target="__blank"
            href="https://www.instagram.com/one_moole/"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            className="footer-link"
            target="__blank"
            href="https://github.com/1molehayo"
          >
            <i className="fab fa-github" />
          </a>
          <a
            className="footer-link"
            target="__blank"
            href="https://codesandbox.io/u/1molehayo"
          >
            <i className="fab fa-codepen" />
          </a>
        </div>
        <div className="copyright">
          <p className="copyright-text">&copy; {today()} Olusegun omilabu</p>
        </div>
      </div>
    </footer>
  );
};
