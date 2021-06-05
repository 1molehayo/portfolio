import React from 'react';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-block">
        <div className="bg">
          <div className="left-bg" />
          <div className="right-bg" />
        </div>
        <div className="fg">
          <div className="top-left-rect">
            <div />
          </div>
          <div className="bottom-right-rect">
            <div />
          </div>
          <div className="top-right-rect">
            <div />
          </div>
          <div className="bottom-left-rect">
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  show: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string
};
