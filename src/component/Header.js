import React from 'react'

export default function Header() {
    return (
        <header class="header sec-header po-background" id="po_header">
            <div class="container">
                <div class="row mx-md-0">
                    <div class="col-6 col-sm-4 page-logo">
                        <div class="logo">
                            <a href="">
                                <img src={require("../img/logo.png")} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div class="col-6 col-sm-8 menu-bar p-0">
                        <nav class="navbar navbar-expand-lg navbar-light nabar-own p-0">
                            {/* <!-- Container wrapper --> */}
                            <div class="container-fluid p-0">
                                <button class="navbar-toggler sec-navbar-toggler collapsed" type="button">
                                    <span class="navbar-toggler-icon">
                                        <span class="menu_line_1"></span>
                                        <span class="menu_line_2"></span>
                                        <span class="menu_line_3"></span>
                                    </span>
                                </button>
                                {/* <!-- Collapsible wrapper --> */}
                                <div class="navbar-collapse po-navbar-collapse " id="navbarSupportedContent">
                                    {/* <!-- Left links --> */}
                                    <ul class="navbar-nav mb-0 justify-content-end" id="main_nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#content">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link scrollto" href="#aboutus">About Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link scrollto" href="#service">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link scrollto" href="#ourproject">Team</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link scrollto" href="#testimonial">Careers</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link scrollto" href="#blogs">Mission</a>
                                        </li>
                                    </ul>
                                    {/* <!-- Left links --> */}
                                </div>
                                {/* <!-- Collapsible wrapper --> */}
                            </div>
                            {/* <!-- Container wrapper --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
