import React, { useState } from 'react';
import { Project } from 'components';
import { PageLayout } from 'layouts/PageLayout';
import Projects from 'utility/Project-data';

const Works = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <PageLayout showModal={showModal} toggleModal={toggleModal}>
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

          {Projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Works;
