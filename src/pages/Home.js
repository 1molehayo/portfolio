import React, { useContext } from 'react';
import { CustomImage, Project } from 'components';
import { PageLayout } from 'layouts/PageLayout';
import { motion } from 'framer-motion';
import ProjectData from 'utility/Project-data';
import blog from 'assets/img/blog.png';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'contexts/ThemeContext';
import { ANIMATION_DEFAULTS } from 'utility/Settings';

const Home = () => {
  const { toggleAboutModal } = useContext(ThemeContext);
  const projects = ProjectData.slice(0, 3);

  return (
    <PageLayout pageClass="home">
      <motion.div
        exit="out"
        initial="out"
        animate="in"
        variants={ANIMATION_DEFAULTS.pageTransition}
        transition={ANIMATION_DEFAULTS.duration}
      >
        <section className="home">
          <div className="container">
            <div className="section section--lg">
              <div className="row">
                <div className="col-md-12 col-lg-7">
                  <h5 className="home-heading">
                    I’m Olusegun Omilabu, a freelance front-end developer and
                    designer based in Lagos, Nigeria.
                  </h5>
                  <p className="home-desc">
                    I build websites, develop web and mobile applications and I
                    do design.
                  </p>
                  <div className="button-block">
                    <span className="button" onClick={toggleAboutModal}>
                      <span className="button-text">About Me</span>
                      <div className="button-mask" />
                      <span className="button-icon">
                        <i className="fas fa-long-arrow-alt-right" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="row">
                <div className="col">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">latest works</h5>
                  </div>
                </div>
              </div>
            </div>

            {projects.map((project, index) => (
              <Project key={project.id} project={project} index={index} />
            ))}

            <div className="text-center mb-5">
              <div className="button-block">
                <Link to="/works" className="button">
                  <span className="button-text">See more works</span>
                  <div className="button-mask" />
                  <span className="button-icon">
                    <i className="fas fa-long-arrow-alt-right" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="section section--lg whatIDo">
              <div className="row">
                <div className="col-md-12 col-lg-9 col-xl-5 skills-block">
                  <div className="heading">
                    <hr className="heading-line" />
                    <h5 className="heading-text">What i do</h5>
                  </div>
                  <div className="skills">
                    <div className="skill-list">
                      <div>
                        <div className="skill-icon">
                          <i className="fas fa-code" />
                        </div>
                      </div>
                      <div>
                        <div className="skill-textbox">
                          <h5 className="skill-title">Development</h5>
                          <p className="skill-description">
                            Websites, web applications, mobile applications,
                            e-commerce solutions and front-end development.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-list">
                      <div>
                        <div className="skill-icon">
                          <i className="far fa-object-ungroup" />
                        </div>
                      </div>
                      <div>
                        <div className="skill-textbox">
                          <h5 className="skill-title">Design</h5>
                          <p className="skill-description">
                            UI/UX design, wireframes, prototypes, graphics
                            design, branding, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-7 image-block">
                  <div className="image">
                    <CustomImage src={blog} className="img-fluid" alt="blog" />
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="heading">
                <hr className="heading-line" />
                <h5 className="heading-text">{`Let's work`}</h5>
              </div>
            </div>
            <div className="section contact pt-0">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <p className="contact-text">
                    I’m always up for new challenges. Let’s discuss your next
                    project or idea and create something awesome together.
                  </p>
                  <div className="button-block">
                    <a
                      href="mailto:omilabuolusegun@gmail.com"
                      className="button"
                    >
                      <span className="button-text">Say Hello</span>
                      <div className="button-mask" />
                      <span className="button-icon">
                        <i className="fas fa-long-arrow-alt-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </PageLayout>
  );
};

export default Home;
