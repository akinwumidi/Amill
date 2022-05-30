import React from 'react'
import './footer.css'
import { RiArrowRightLine } from 'react-icons/ri'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { IconContext } from 'react-icons'
import { Feature } from '../../components'

const footer = () => {
  return (
    <div className="footer__section gradient__bg">
      <div className="footer-container">
        <div className="footer__IntoSection">
          <h1 className="gradient__text">
            Want to start exploring & find friends with similar intrests?
          </h1>
          <button className="footer-btn">
            Get connected
            <IconContext.Provider
              value={{ className: 'icon-dev', color: '#fff' }}
            >
              <RiArrowRightLine />
            </IconContext.Provider>
          </button>
          <div className="footer__IntoSection-extras">
            <div className="quicklinks">
              <Feature title="Quick Links" flexdirection={'column'} />
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#whatamill">What is Amill</a>
              </p>
              <p>
                <a href="#feautures">Case Studies</a>
              </p>
              <p>
                <a href="#possibility">Experience Nature</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="company">
              <Feature title="Company" flexdirection={'column'} />
              <p>
                <a href="#blog">Library</a>
              </p>
              <p>
                <a href="#feautures">Disclaimer</a>
              </p>
              <p>
                <a href="#home">Privacy Policies</a>
              </p>
              <p>
                <a href="#whatamill">Terms and Conditions</a>
              </p>
            </div>
            <div className="contactus">
              <Feature title="Contat Us" flexdirection={'column'} />
              <p>
                1 some adress, adress, <br />
                City, State, Country zip XXXXX
              </p>
              <p>(XXX) XXX-XXXX</p>
              <p>Something@something.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-signature">
        <div className="footerbox">
          <div className="footerbox__signature-disclaimer">
            <p>
              &copy; Copyright Amill 2022 by
              <span>
                <a href="http://www.linkedin.com/in/akinwumidi" target="_blank">
                  Israel Akinwumi
                </a>
              </span>
              . Feel free to use this project for your own purposes. This does
              NOT apply if you plan to produce your own course or tutorials
              based on this project.A credit to the original author,
              <span>
                <a href="http://www.linkedin.com/in/akinwumidi" target="_blank">
                  Israel Akinwumi
                </a>
              </span>
              , is of course highly appreciated!.
            </p>
          </div>
          <IconContext.Provider value={{ className: 'footer__iconBox-icon' }}>
            <div className="footer__iconBox">
              <span className="footer-icon_holder">
                <a href="mailto:israelakin14@gmail.com" target="_blank">
                  <SiGmail />
                </a>
              </span>
              <span className="footer-icon_holder">
                <a href="https://twitter.com/akinwumidi" target="_blank">
                  <BsTwitter />
                </a>
              </span>
              <span className="footer-icon_holder">
                <a href="http://www.linkedin.com/in/akinwumidi" target="_blank">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </IconContext.Provider>
          <div className="footerbox__signature-contact">
            <a
              href="http://www.linkedin.com/in/akinwumidi"
              target="_blank"
              className="footer-btn-a"
            >
              <button className="footer-btn">
                Contact Developer
                <IconContext.Provider value={{ className: 'icon-dev' }}>
                  <RiArrowRightLine />
                </IconContext.Provider>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
