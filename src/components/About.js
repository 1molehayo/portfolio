import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Modal, ModalBody } from 'react-bootstrap';
import olusegun from '../assets/img/olusegun.jpg';
import { CustomImage } from './CustomImage';

export const About = ({ showModal, toggleModal, className }) => {
  return (
    <Modal
      centered
      show={showModal}
      onHide={toggleModal}
      className={classnames(className)}
    >
      <ModalBody className="about">
        <button className="close" onClick={toggleModal}>
          <i className="fas fa-times" />
        </button>

        <div className="about-half about-left">
          <div className="heading about-heading">
            <hr className="heading-line" />
            <h5 className="heading-text">About Me</h5>
          </div>
          <p className="paragraph">
            {`I'm Olusegun Omilabu, a freelance front-end developer and designer
            based in Lagos, Nigeria.`}
          </p>

          <p className="paragraph">
            I build websites, develop web and mobile applications and I do
            design, for over 6 years.
          </p>

          <p className="paragraph">
            I started out working as a creative developer in Touchcore Ltd,
            doing designs. My passion for semantics, analytical correlation and
            psychologial user patterns built the foundation of my strongly UX
            centered approach in design and development
          </p>

          <p className="paragraph">
            I enjoy a good cup of coffee, watching good movies and tv shows,
            playing video-games and listening to music.
          </p>

          <p className="paragraph">Actually for hire.</p>

          <a
            target="_blank"
            rel="noreferrer"
            href="/files/olusegun-omilabu-resume.pdf"
            className="button mt-4"
            download
          >
            <span className="button-text">Download Resume</span>
            <div className="button-mask" />
            <span className="button-icon">
              <i className="fas fa-long-arrow-alt-right" />
            </span>
          </a>
        </div>

        <div className="about-half about-right">
          <CustomImage src={olusegun} className="img-fluid" alt="olusegun" />
        </div>
      </ModalBody>
    </Modal>
  );
};

About.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  className: PropTypes.string
};
