import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import "./roadmap.css";
const Roadmap = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="landing">
              <h2>Roadmap</h2>
            </div>
            <br />
            <section class="experience pt-100 pb-100" id="experience">
              <div class="container">
                <div class="row">
                  <div class="col-xl-8 mx-auto text-center">
                    <div class="section-title">
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-12">
                    <ul class="timeline-list">
                      <li>
                        <div class="timeline_content">
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
                        <div class="timeline_content">
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
                        <div class="timeline_content">
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
                        <div class="timeline_content">
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
