// NOTE: import componentes
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import $ from "jquery";

// NOTE: import recursos
import faceLogo from '../SVG/Facebook-icon.svg';
import instaLogo from '../SVG/Instagram-icon.svg';
import menuMovil from '../SVG/menu.svg';
import menuMovilClose from '../SVG/closeMenu.svg';


function NavBar(){
  const [hideNav, setHideNav] = useState(true);

  const changeStateNav = () =>{
    if (hideNav) {
      setHideNav(false)
      $("nav").css("top", 0)
      $("#menuImageClose").css("opacity", 1)
      $("#menuImage").css("opacity", 0)
    }
    else {
      setHideNav(true)
      $("nav").css("top", "-500px")
      $("#menuImageClose").css("opacity", 0)
      $("#menuImage").css("opacity", 1)
    }
  }

  return(
    <div>
      <div className="movileMenuBtn" onClick={()=> changeStateNav()}>
        <img id="menuImage" src={menuMovil}/>
        <img id="menuImageClose" src={menuMovilClose}/>
      </div>
      <nav>
        <ul>
          <li className="separate">
            <Link className="navLink" to="/" >Inicio</Link>
          </li>
          <li className="separate">
            <Link className="navLink" to="/quienes-somos">Quienes Somos</Link>
          </li>
          <li className="separate">
            <Link className="navLink" to="/que-es-la-desaparicion">Que es La Desaparición</Link>
          </li>
          <li className="separate">
            <Link className="navLink" to="/reparto">Reparto</Link>
          </li>
          <li className="separate">
            <Link className="navLink" to="/agradecimientos">Agradecimientos</Link>
          </li>
          <li className="separate">
            <Link className="navLink" to="/contactenos">Contáctenos</Link>
          </li>
          <li>
            <Link className="navLink" to="/creditos">Creditos</Link>
          </li>
        </ul>

        <div className="socialMedia">
          <a href="http://example.com" target="_blank">
            <img src={faceLogo} />
          </a>
          <a href="http://example.com" target="_blank">
            <img src={instaLogo} />
          </a>
        </div>

      </nav>
    </div>

  );
}




export default NavBar;
