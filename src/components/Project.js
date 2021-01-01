import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isIOS, isMobile } from 'react-device-detect';
import { isEmpty } from '../utility';
import project1 from '../assets/img/project1.png';

export const Project = ({ project, index }) => {
  return (
    <div className="section">
      <div
        className={classnames('project', {
          project__right: (index + 1) % 2 === 0
        })}
      >
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="text-block">
              <h5 className="project-title">{project.name}</h5>
              <div className="d-flex align-items-center">
                {project.category.map((item, i) => (
                  <span className="project-category mr-2" key={i}>
                    {item}
                  </span>
                ))}
              </div>

              <div
                className="d-flex align-items-center mb-4"
                style={{ flexWrap: 'wrap' }}
              >
                {project.stack.map((item, i) => (
                  <span
                    className="badge badge--pill badge-red mr-2 mb-2"
                    key={i}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="project-description">{project.description}</p>

              {isMobile ? (
                <a
                  href={
                    isIOS
                      ? !isEmpty(project.altUrl)
                        ? project.altUrl
                        : project.url
                      : project.url
                  }
                  className="button button__secondary"
                  title={`${project.name} link`}
                >
                  <span className="button-text">view project</span>
                  <div className="button-mask" />
                  <span className="button-icon">
                    <i className="fas fa-long-arrow-alt-right" />
                  </span>
                </a>
              ) : !isEmpty(project.url) && !isEmpty(project.altUrl) ? (
                <div className="mobile-app">
                  <a
                    href={project.url}
                    className="button button__secondary mobile-app-button"
                    title={`${project.name} link`}
                  >
                    Play store
                    <i className="fab fa-google-play" />
                  </a>
                  <a
                    href={project.altUrl}
                    className="button button__secondary mobile-app-button"
                    title={`${project.name} link`}
                  >
                    Apple store
                    <i className="fab fa-app-store-ios" />
                  </a>
                </div>
              ) : (
                <a
                  href={project.url}
                  className="button button__secondary"
                  title={`${project.name} link`}
                >
                  <span className="button-text">view project</span>
                  <div className="button-mask" />
                  <span className="button-icon">
                    <i className="fas fa-long-arrow-alt-right" />
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="image">
              <img
                src={project.image || project1}
                className="img-fluid"
                alt={project.imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  index: PropTypes.number,
  project: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.array,
    description: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    url: PropTypes.string,
    altUrl: PropTypes.string,
    stack: PropTypes.array
  })
};
