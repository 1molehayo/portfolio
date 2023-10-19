import React, { useEffect, useState } from 'react';
import { Project } from 'components';
import { PageLayout } from 'layouts/PageLayout';
import { motion } from 'framer-motion';
import ProjectData from 'utility/Project-data';
import { MetaDecorator } from 'components/MetaDecorator';
import { ANIMATION_DEFAULTS } from 'utility/Settings';

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (ProjectData) {
      setProjects([...ProjectData].reverse());
    }
  }, []);

  return (
    <PageLayout pageClass="works">
      <motion.div
        exit="out"
        initial="out"
        animate="in"
        variants={ANIMATION_DEFAULTS.pageTransition}
        transition={ANIMATION_DEFAULTS.duration}
      >
        <MetaDecorator title="Olusegun's Recent Works" />

        <section className="home">
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">My works</h5>
                  </div>
                </div>
              </div>
            </div>

            {projects.map((project, index) => (
              <Project key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </motion.div>
    </PageLayout>
  );
};

export default Works;
