import React from "react";
import Footer from "../../components/footer/Footer";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="landing">
              <h2>About</h2>
            </div>
            <br />
            <br />
            <br />
            <section className="section">
              <div className="w-50 mx-auto">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title mb-0">
                      <h2 className="text-center">Why we created <a href="/" style={{color: "#eb1484"}}>CryptoKet</a></h2>
                      <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Proin eget tortor risus. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
