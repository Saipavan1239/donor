import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#030303", color: "white" }}>
      {/* Add button links on your own */}
      <footer className="text-center">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
            >
              <FaFacebookF />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
            >
              <FaTwitter />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
            >
              <FaGoogle />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
            >
              <FaInstagram />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
            >
              <FaLinkedin />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
            >
              <FaGithub />
            </a>
          </section>
        </div>
        {/* <div className="text-center p-3" style={{ color: "white" }}>
          Made by{" "}
          <a
            className="text-white"
            href="localhost:3000"
            style={{ color: "white" }}
          >
            Sai Pavan
          </a>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
