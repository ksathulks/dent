import React from "react";
import Nav from "../shared/nav/nav";
import { Router, Route, Link } from "react-router-dom";
// import './homepage.css';
// import { WOW } from 'wowjs/dist/wow';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

function HomePage() {
  // new WOW().init();
  return (
    <div>
      <Nav />
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Others/documentation/img%20(136)-mini.jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      {/* <!--Main layout--> */}
      <main>
        <div className="container">
          {/* <!--Section: Main info--> */}
          <section className="mt-5 wow fadeIn">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-6 mb-4">
                <img
                  src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                  className="img-fluid z-depth-1-half"
                  alt=""
                />
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-6 mb-4">
                {/* <!-- Main heading --> */}
                <h3 className="h3 mb-3">Material Design for Bootstrap</h3>
                <p>
                  This template is created with Material Design for Bootstrap (
                  <strong>MDB</strong> ) framework.
                </p>
                <p>Read details below to learn more about MDB.</p>
                {/* <!-- Main heading --> */}

                <hr />

                <p>
                  <strong>400+</strong> material UI elements,
                  <strong>600+</strong> material icons,
                  <strong>74</strong> CSS animations, SASS files, templates,
                  tutorials and many more.
                  <strong>Free for personal and commercial use.</strong>
                </p>

                {/* <!-- CTA --> */}
                <Link to="/dent/clinics/signup" className="btn btn-primary">
                  Clinic Sign-up
                  <i className="fas fa-sign-up ml-1"></i>
                </Link>
                <Link to="/dent/doctors/signup" className="btn btn-primary">
                  Doctor Sign-up
                  <i className="fas fa-sign-up ml-1"></i>
                </Link>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!--Section: Main info--> */}

          <hr className="my-5" />

          {/* <!--Section: Main features & Quick Start--> */}
          <section>
            <h3 className="h3 text-center mb-5">About MDB</h3>

            {/* <!--Grid row--> */}
            <div className="row wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12 px-4">
                {/* <!--First row--> */}
                <div className="row">
                  <div className="col-1 mr-3">
                    <i className="fas fa-code fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="feature-title">Bootstrap 4</h5>
                    <p className="grey-text">
                      Thanks to MDB you can take advantage of all feature of
                      newest Bootstrap 4.
                    </p>
                  </div>
                </div>
                {/* <!--/First row--> */}

                <div style={{ height: "30px" }}></div>

                {/* <!--Second row--> */}
                <div className="row">
                  <div className="col-1 mr-3">
                    <i className="fas fa-book fa-2x blue-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="feature-title">Detailed documentation</h5>
                    <p className="grey-text">
                      We give you detailed user-friendly documentation at your
                      disposal. It will help you to implement your ideas easily.
                    </p>
                  </div>
                </div>
                {/* <!--/Second row--> */}

                <div style={{ height: "30px" }}></div>

                {/* <!--Third row--> */}
                <div className="row">
                  <div className="col-1 mr-3">
                    <i className="fas fa-graduation-cap fa-2x cyan-text"></i>
                  </div>
                  <div className="col-10">
                    <h5 className="feature-title">Lots of tutorials</h5>
                    <p className="grey-text">
                      We care about the development of our users. We have
                      prepared numerous tutorials, which allow you to learn how
                      to use MDB as well as other technologies.
                    </p>
                  </div>
                </div>
                {/* <!--/Third row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12">
                <p className="h5 text-center mb-4">
                  Watch our "5 min Quick Start" tutorial
                </p>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/cXTThxoywNQ"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* <!--/Grid column--> */}
            </div>
            {/* <!--/Grid row--> */}
          </section>
          {/* <!--Section: Main features & Quick Start--> */}

          <hr className="my-5" />

          {/* <!--Section: Not enough--> */}
          <section>
            <h2 className="my-5 h3 text-center">Not enough?</h2>

            {/* <!--First row--> */}
            <div className="row features-small mb-5 mt-3 wow fadeIn">
              {/* <!--First column--> */}
              <div className="col-md-4">
                {/* <!--First row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">
                      Free for personal and commercial use
                    </h6>
                    <p className="grey-text">
                      Our license is user-friendly. Feel free to use MDB for
                      both private as well as commercial projects.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/First row--> */}

                {/* <!--Second row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">400+ UI elements</h6>
                    <p className="grey-text">
                      An impressive collection of flexible components allows you
                      to develop any project.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Second row--> */}

                {/* <!--Third row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">600+ icons</h6>
                    <p className="grey-text">
                      Hundreds of useful, scalable, vector icons at your
                      disposal.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Third row--> */}

                {/* <!--Fourth row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Fully responsive</h6>
                    <p className="grey-text">
                      It doesn't matter whether your project will be displayed
                      on desktop, laptop, tablet or mobile phone. MDB looks
                      great on each screen.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Fourth row--> */}
              </div>
              {/* <!--/First column--> */}

              {/* <!--Second column--> */}
              <div className="col-md-4 flex-center">
                <img
                  src="https://mdbootstrap.com/img/Others/screens.png"
                  alt="MDB Magazine Template displayed on iPhone"
                  className="z-depth-0 img-fluid"
                />
              </div>
              {/* <!--/Second column--> */}

              {/* <!--Third column--> */}
              <div className="col-md-4 mt-2">
                {/* <!--First row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">70+ CSS animations</h6>
                    <p className="grey-text">
                      Neat and easy to use animations, which will increase the
                      interactivity of your project and delight your visitors.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/First row--> */}

                {/* <!--Second row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">
                      Plenty of useful templates
                    </h6>
                    <p className="grey-text">
                      Need inspiration? Use one of our predefined templates for
                      free.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Second row--> */}

                {/* <!--Third row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Easy installation</h6>
                    <p className="grey-text">
                      5 minutes, a few clicks and... done. You will be surprised
                      at how easy it is.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Third row--> */}

                {/* <!--Fourth row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Easy to use and customize</h6>
                    <p className="grey-text">
                      Using MDB is straightforward and pleasant. Components
                      flexibility allows you deep customization. You will easily
                      adjust each component to suit your needs.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Fourth row--> */}
              </div>
              {/* <!--/Third column--> */}
            </div>
            {/* <!--/First row--> */}
          </section>
          {/* <!--Section: Not enough--> */}

          <hr className="mb-5" />

          {/* <!--Section: More--> */}
          <section>
            <h2 className="my-5 h3 text-center">...and even more</h2>

            {/* <!--First row--> */}
            <div className="row features-small mt-5 wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fab fa-firefox fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2 pl-3">
                    <h5 className="feature-title font-bold mb-1">
                      Cross-browser compatibility
                    </h5>
                    <p className="grey-text mt-2">
                      Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB
                      loves all browsers; all browsers love MDB.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fas fa-level-up-alt fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      Frequent updates
                    </h5>
                    <p className="grey-text mt-2">
                      MDB becomes better every month. We love the project and
                      enhance as much as possible.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fas fa-comments fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      Active community
                    </h5>
                    <p className="grey-text mt-2">
                      Our society grows day by day. Visit our forum and check
                      how it is to be a part of our family.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fas fa-code fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">jQuery 3.x</h5>
                    <p className="grey-text mt-2">
                      MDB is integrated with newest jQuery. Therefore you can
                      use all the latest features which come along with it.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}
            </div>
            {/* <!--/First row--> */}

            {/* <!--Second row--> */}
            <div className="row features-small mt-4 wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fas fa-cubes fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">Modularity</h5>
                    <p className="grey-text mt-2">
                      Material Design for Bootstrap comes with both, compiled,
                      ready to use libraries including all features as well as
                      modules for CSS (SASS files) and JS.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fas fa-question fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      Technical support
                    </h5>
                    <p className="grey-text mt-2">
                      We care about reliability. If you have any questions - do
                      not hesitate to contact us.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="fas fa-th fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">Flexbox</h5>
                    <p className="grey-text mt-2">
                      MDB fully supports Flex Box. You can forget about
                      alignment issues.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-xl-3 col-lg-6">
                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-2">
                    <i
                      className="far fa-file-code fa-2x mb-1 indigo-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">SASS files</h5>
                    <p className="grey-text mt-2">
                      Arranged and well documented .scss files can't wait until
                      you compile them.
                    </p>
                  </div>
                </div>
                {/* <!--/Grid row--> */}
              </div>
              {/* <!--/Grid column--> */}
            </div>
            {/* <!--/Second row--> */}
          </section>
          {/* <!--Section: More--> */}
        </div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
}

export default HomePage;
