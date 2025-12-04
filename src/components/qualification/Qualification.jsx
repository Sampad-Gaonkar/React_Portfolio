import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science and Engineering</h3>
                            <span className="qualification__subtitle">Srinivas Institute of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Science</h3>
                            <span className="qualification__subtitle">Y.T.S.S, Yellapur</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2019 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"></h3>
                            <span className="qualification__subtitle">Mother Teresa English Medium School, Yellapur</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2018 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
