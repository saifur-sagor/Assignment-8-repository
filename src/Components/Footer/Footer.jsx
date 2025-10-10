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
            At We Build Productive Apps, our mission is to design and develop
            powerful
            <br /> user-friendly, and innovative applications that help people
            work smarter
            <br /> not harder. We believe technology should make life easier —
            increasing
            <br /> productivity saving time, and bringing creativity to every
            task.Our team <br />
            of passionate developers, designers, and thinkers work together to{" "}
            <br />
            create apps that are not only efficient but also enjoyable to From
            <br /> productivity tools to business management solutions, we focus
            <br />
            on performance, simplicity, and real-world impact.
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
