import React from "react";
import { Image } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-container">
        <Image className="mh-70" fluid src={logo} alt="Carpe Logo" />
        <p className="footer-paragraph">
          Carpe - non-profit animal rescue organization, founded by Carmen
          Mandescu, a Romanian rescuer with 12+ years of experience in saving
          animals. Mission is to help animals in need, mass sterilization for
          cats and dogs, educate people about animal protection
        </p>
      </div>
      <div className="footer-second-container">
        <h4 className="footer-h4">Partners</h4>
        <a className="footer-link" href="https://emblarescue.fi/">
          Embla rescue
        </a>
        <a
          className="footer-link"
          href="https://www.facebook.com/donate/292036976473150/368005378691716/"
        >
          Kulkurien 10
        </a>
      </div>

      <div className="social-media-footer">
        <h4 className="footer-h4">Social Media</h4>
        <a href="https://www.facebook.com/carperescueshelter/?locale=ro_RO">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              d="M20 0C8.951 0 0 8.951 0 20s8.951 20 20 20 20-8.951 20-20S31.049 0 20 0zm5.742 12.542s-2.115-.018-2.649-.018c-.8 0-1.333.694-1.333 1.396v2.942h3.982l-.453 4.01h-3.573v10.24H17.67V20.923h-3.413v-4.106h3.466v-3.876c0-2.16 2.4-4.062 4.072-4.062.248 0 3.946.036 3.946.036v3.626z"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/carperescue/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              d="M20 0c11.049 0 20 8.951 20 20s-8.951 20-20 20S0 31.049 0 20 8.951 0 20 0zm4.249 8.898H15.76a6.867 6.867 0 0 0-6.854 6.52l-.008.342v8.489a6.867 6.867 0 0 0 6.52 6.854l.342.008h8.489a6.867 6.867 0 0 0 6.854-6.52l.008-.342V15.76a6.867 6.867 0 0 0-6.52-6.854l-.342-.008zm0 2.47a4.4 4.4 0 0 1 4.381 4.114l.01.278v8.489a4.395 4.395 0 0 1-4.114 4.382l-.277.009H15.76a4.395 4.395 0 0 1-4.382-4.114l-.01-.277V15.76a4.395 4.395 0 0 1 4.115-4.382l.277-.01h8.489zM20 14.32A5.69 5.69 0 0 0 14.32 20 5.69 5.69 0 0 0 20 25.68 5.69 5.69 0 0 0 25.68 20 5.69 5.69 0 0 0 20 14.32zm.045 2.232a3.45 3.45 0 1 1-.082 6.898 3.45 3.45 0 0 1 .082-6.898zm5.92-3.52a.956.956 0 0 0-.96.96c0 .532.426.96.96.96.533 0 .96-.428.96-.96a.956.956 0 0 0-.96-.96z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
