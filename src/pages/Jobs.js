import React from 'react'

export default function Jobs() {
    const CallToActionData = {
        "title": "Web Developer",
        "text": "<b>Businex</b> always try to provide the best Business Solutions for Clients to grow up their Business sharply and smoothly.",
        "btnText": "Contact Us",
        "btnLink": "/contact"
    }
    return (
        <section className="page-section careers-page container" id="careers">
            <div className="justify-content-center">
                <h2 className="mb-0 content_intro hr-line">Careers</h2>
                <h2 className="mb-0 conetent_title text-center">
                    Revolutionizing Healthcare for<br />Women Starts with You.</h2>
            </div>

            <div className="row">
                <div className="col-12 col-md-12 col-lg-4 left-col">
                    <h3 className="content_intro py-0 mb-0"> Open Positions </h3>
                    <div id="accordion">
                        <div className="card mb-3">
                            <h3 className="mb-0 mt-3 values-title"> Take ownership </h3>
                            <p className="mb-0 px-5 description"> You'll be given the autotomy and trust you need. It's okay to fail, learn, and try again - that's how we grow! </p>
                        </div>
                        <div className="card mb-3">
                            <h3 className="mb-0 mt-3 values-title"> Take ownership </h3>
                            <p className="mb-0 px-5 description"> You'll be given the autotomy and trust you need. It's okay to fail, learn, and try again - that's how we grow! </p>
                        </div>
                        <div className="card mb-3">
                            <h3 className="mb-0 mt-3 values-title"> Take ownership </h3>
                            <p className="mb-0 px-5 description"> You'll be given the autotomy and trust you need. It's okay to fail, learn, and try again - that's how we grow! </p>
                        </div>
                        <div className="card mb-3">
                            <h3 className="mb-0 mt-3 values-title"> Take ownership </h3>
                            <p className="mb-0 px-5 description"> You'll be given the autotomy and trust you need. It's okay to fail, learn, and try again - that's how we grow! </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-8 right-col">
                    <h3 className="mb-0 content_intro hr-line" > Position </h3>
                    <div className="form-title">
                        <h2 className="mb-0 work-title"> Subscribe to get information latest news.</h2>
                    </div>

                    <div id="app_body">
                        <div className="logo-container">
                            <div id="logo"><img alt="Queen Logo" src="" /></div>
                        </div>

                        <div id="header">
                            <a href="#app" id="apply_button" className="button">
                                Apply Now
                            </a>

                            <h1 className="app-title">Web Developer</h1>

                            <span className="company-name">
                                at Queen
                            </span>

                            <div className="location">
                                Menlo Park, CA (In Person)
                            </div>
                        </div>
                        <div id="content" className="">
                            <div className="content-intro"><p><span>Queen is becoming a global leader in Women's Health. Our health technology platform helps women manage their health better, through a non-invasive blood collection device named the “Q-Pad”.</span></p>
                            </div>

                            <p><strong>Responsibilities:</strong></p>
                            <ul>
                                <li><span>Design, Build, and Maintain services in React and/or FlutterWeb</span></li>
                                <li><span>Conduct code reviews and collaborate with other engineers</span></li>
                                <li><span>Research new technologies and suggest solutions</span></li>
                            </ul>
                            <p><strong>What We’re Looking For:</strong></p>
                            <ul>
                                <li><span>A collaborative team member</span></li>
                                <li><span>Driven and excited about working in a fast paced startup</span></li>
                                <li><span>Excited to work on a wide variety of problems</span><span><br /></span></li>
                            </ul>
                            <p><strong>Requirements</strong><span>:</span></p>
                            <ul>
                                <li><span>Experience working with Javascript, CSS, React</span></li>
                                <li><span>Experience conducting code reviews</span></li>
                                <li><span>Experience using modern source control</span></li>
                                <li><span>Prior experience as a software engineer working on a team</span></li>
                                <li><span>Familiar with good engineering habits: development techniques, security, tech debt balance, agile processes, etc.</span></li>
                            </ul>
                            <p><strong>Preferred:</strong></p>
                            <ul>
                                <li><span>Experience working with FlutterWeb</span></li>
                                <li><span>Experience working on E-Commerce Applications</span></li>
                                <li><span>Experience working with SEO</span></li>
                            </ul>
                            <p><strong>Working at Queen:</strong></p>
                            <p><span>We’re a mission-driven, hard-working team. We care tremendously about each other and our mission. This means we invest time in spending time with each other outside of office hours and we will answer an email at 1am if need be. We have a relaxed office atmosphere where we promote autonomy. We love creating traditions and celebrating more often than not. We respect boundaries from our team and also prioritize work-life balance. After-all, both our founders come from Denmark.</span><span><br /></span></p>
                            <p><span>Benefits and Perks:</span></p>
                            <ul>
                                <li><span>Great compensation package and equity plan</span></li>
                                <li><span>Medical and Dental included (dependents included up to 80%)</span></li>
                                <li><span>Menlo Park Office with fun working space and good vibes</span></li>
                                <li><span>Generous vacation and parental leave</span></li>
                            </ul>
                            <p><br /><em><span>U.S. Equal Employment Opportunity Clause: </span></em><em><span><br /></span></em><em><span>Qvin values diversity. We believe that our team is strengthened through hiring and retaining employees with diverse backgrounds, skill sets, ideas, and perspectives. We make hiring decisions based upon merit and do not discriminate based on race, religion, national origin, gender identity or expression, sexual orientation, age, or marital, veteran, or disability status.</span></em><span> </span></p>
                            <p><strong>WE ARE NOT INTERESTED IN WORKING WITH AGENCIES, WE ARE LOOKING FOR A DEVELOPER BASED IN OR WILLING TO RELOCATE TO THE BAY AREA</strong></p>


                        </div>

                        <div id="application" className="">
                            <form id="application_form" enctype="multipart/form-data" action="" accept-charset="UTF-8" method="post">
                                <div id="main_fields">
                                    <h2 className="heading">Apply for this Job</h2>

                                    <div className="required-fields">
                                        <span className="asterisk">*</span> Required
                                    </div>

                                    <div className="clear"></div>

                                    <div className="field">
                                        <label for="first_name">First Name <span className="asterisk">*</span></label>
                                        <input type="text" id="first_name" name="job_application[first_name]" aria-required="true" maxlength="255" autocomplete="given-name" />
                                    </div>
                                    <div className="field">
                                        <label for="last_name">Last Name <span className="asterisk">*</span></label>
                                        <input type="text" id="last_name" name="job_application[last_name]" aria-required="true" maxlength="255" autocomplete="family-name" />
                                    </div>
                                    <div className="field">
                                        <label for="email">Email <span className="asterisk">*</span></label>
                                        <input type="text" id="email" name="job_application[email]" aria-required="true" maxlength="255" autocomplete="email" />
                                    </div>
                                    <div className="field">
                                        <label for="phone">Phone</label>
                                        <input type="text" id="phone" name="job_application[phone]" maxlength="255" autocomplete="tel" />
                                    </div>





                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="row">
                        <form>
                            <div className="input-group mb-3">
                                <div className="subscribe-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email address" />
                                    <button type="button" className="subscribe-btn po-btn">subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
