import React from 'react';
import '../../home/homepage.css'


function Nav() {
    return (
        // <!-- Navbar -->
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
            <div className="container">

                {/* <!-- Brand --> */}
                <a className="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
                    <strong>MDB</strong>
                </a>

                {/* <!-- Collapse --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Links --> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* <!-- Left --> */}
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Free
                    download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free tutorials</a>
                        </li>
                    </ul>

                    {/* <!-- Right --> */}
                    <ul className="navbar-nav nav-flex-icons">
                        <li className="nav-item">
                            <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded"
                                target="_blank">
                                <i className="fab fa-github mr-2"></i>MDB GitHub
                  </a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
        // <!-- Navbar -->


    );
}

export default Nav;
