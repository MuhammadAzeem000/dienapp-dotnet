import React from 'react'
import './TopProvider.css'

import team01 from '../../images/team-image1.png'
import team02 from '../../images/team-image2.png'
import team03 from '../../images/team-image3.png'
import team04 from '../../images/team-image4.png'

// icons
import { FaStar } from 'react-icons/fa'

export default function TopProvider() {
  return (
    <section className="w-100 team-con position-relative">
      <div className="container">
        <div className="team-title text-center">
          <h2>Monthly Top-Rated
            <span className="color-01d0cc d-block">Service Providers</span>
          </h2>
        </div>
        <div className="team-box">

          <div className="team-box-item text-center position-relative">
            <figure>
              <img src={team01} alt="team-img" />
            </figure>
            <div className="team-social-icon d-flex flex-column align-items-end">
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>Steve Smith</h3>
            <span className="d-block">Landscaping Expert</span>
          </div>

          <div
            className="team-box-item text-center position-relative"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <figure>
              <img src={team02} alt="team-img" />
            </figure>
            <div className="team-social-icon d-flex flex-column align-items-end">
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>Abelina Smith</h3>
            <span className="d-block">Gutter Cleaner Expert</span>
          </div>

          <div
            className="team-box-item text-center position-relative"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <figure>
              <img src={team03} alt="team-img" />
            </figure>
            <div className="team-social-icon d-flex flex-column align-items-end">
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>Olivia Dee</h3>
            <span className="d-block">Pest Control Expert</span>
          </div>

          <div
            className="team-box-item text-center position-relative"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <figure>
              <img src={team04} alt="team-img" />
            </figure>
            <div className="team-social-icon d-flex flex-column align-items-end">
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-center" >
                    <i style={{ color: "#FFC107", fontSize: "1rem" }}>
                      <FaStar />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>Adam Smith</h3>
            <span className="d-block">Air Duct Cleaner Expert</span>
          </div>

        </div>
      </div>
    </section>
  )
}
