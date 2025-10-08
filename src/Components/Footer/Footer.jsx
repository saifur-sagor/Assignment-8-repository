import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Incidunt esse autem at, laudantium dolores <br /> eaque
            expedita quidem eveniet, mollitia officiis aut <br /> porro harum
            minus distinctio ab ducimus labore <br />
            laborum repellendus!
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="footer-title">
          <h6>Social Icons</h6>
          <div className="flex justify-center items-center gap-3">
            <span>
              <FaFacebook />
            </span>
            <span>
              <IoLogoYoutube />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaSquareInstagram />
            </span>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
