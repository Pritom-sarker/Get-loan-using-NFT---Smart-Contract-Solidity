import React from "react";
import Footer from "../../components/footer/Footer";
import "./roadmap.css";
const Roadmap = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="landing">
              <h2>Roadmap</h2>
            </div>
            <br />
            <section className="experience pt-100 pb-100" id="experience">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 mx-auto text-center">
                    <div className="section-title">
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <ul className="timeline-list">
                      <li>
                        <div className="timeline_content">
                          <span>2008</span>
                          <h4>Lorem, ipsum dolor.</h4>
                          <p>
                            We gather your business and products information. We
                            then determine the direction of the project and
                            understand your goals and we combine your ideas with
                            ours for an amazing website.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline_content">
                          <span>2007-2012</span>
                          <h4>Lorem, ipsum.</h4>
                          <p>
                            We gather your business and products information. We
                            then determine the direction of the project and
                            understand your goals and we combine your ideas with
                            ours for an amazing website.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline_content">
                          <span>2012-2015</span>
                          <h4>Lorem, ipsum.</h4>
                          <p>
                            We gather your business and products information. We
                            then determine the direction of the project and
                            understand your goals and we combine your ideas with
                            ours for an amazing website.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline_content">
                          <span>2015-2018</span>
                          <h4>Lorem, ipsum dolor.</h4>
                          <p>
                            We gather your business and products information. We
                            then determine the direction of the project and
                            understand your goals and we combine your ideas with
                            ours for an amazing website.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*  */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
