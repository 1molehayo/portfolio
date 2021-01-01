import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Modal, ModalBody } from 'react-bootstrap';
import olusegun from '../assets/img/olusegun.jpg';

export const About = ({ showModal, modalFunc, className }) => {
  return (
    <Modal
      centered
      show={showModal}
      onHide={modalFunc}
      className={classnames(className)}
    >
      <ModalBody className="about">
        <div className="close" onClick={modalFunc}>
          <i className="fas fa-times" />
        </div>
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
            design, for over 3 years.
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
        </div>

        <div className="about-half about-right">
          <img src={olusegun} className="img-fluid" alt="olusegun" />
        </div>
      </ModalBody>
    </Modal>
  );
};

About.propTypes = {
  showModal: PropTypes.bool,
  modalFunc: PropTypes.func,
  className: PropTypes.string
};
