import React from "react";
import {IoLogoInstagram} from "react-icons/io5";
import {ImFacebook2 } from "react-icons/im";

const Footer = () => (
  <footer>
    <div className="letra">
     Creado por : Jenny Alejandra Jojoa Botina
    <h3>No te olvides de segirme en mis redes sociales</h3>
    </div>

    <div className="iconos"><a href="https://www.facebook.com/alejitha.jojoa/"> <ImFacebook2 /></a></div>
    <div className="iconos">
      <a href="https://www.instagram.com/jennyjb08/"> <IoLogoInstagram/>  </a>
    </div>

  </footer>
);

export default Footer;
