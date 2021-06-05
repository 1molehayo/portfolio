import React from 'react';
import { PageLayout } from 'layouts/PageLayout';
import { motion } from 'framer-motion';
import { ANIMATION_DEFAULTS } from 'utility/Settings';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <PageLayout pageClass="error-page">
      <motion.div
        exit="out"
        initial="out"
        animate="in"
        variants={ANIMATION_DEFAULTS.pageTransition}
        transition={ANIMATION_DEFAULTS.duration}
      >
        <section>
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">Page Not Found</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="section text-center">
              <h1>404</h1>
              <p>The page you are looking for doesn&apos;t exist</p>

              <Link to="/works" className="button mt-4">
                <span className="button-text">Go home</span>
                <div className="button-mask" />
                <span className="button-icon">
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </PageLayout>
  );
};

export default NotFound;
