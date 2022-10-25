import React from "react";
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="section-1">
          <p>
            <span>
              <IoLocationSharp />
            </span>
            21 Revolution Street, Lagos Nigeria
          </p>
          <p>
            <span>
              <BsTelephoneFill />
            </span>
            +1 555 123456
          </p>
          <p>
            <span>
              <MdEmail />
            </span>
            support@surprisekitchen.com
          </p>
        </div>
        <div className="section-2">
          <h2>About the Company</h2>
          <p>
            Userly is a random user generator website where random users are
            selected and displayed with their details.
          </p>
          <div className="socials">
            <p>
              <ImFacebook2 />
            </p>

            <p>
              <FaTwitterSquare />
            </p>
            <p>
              <BsLinkedin />
            </p>
            <p>
              <FaGithubSquare />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
