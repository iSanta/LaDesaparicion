// NOTE: import componentes
import React, {useEffect, useState} from 'react';
import $ from "jquery";
import Footer from "./footer";
import NavBar from './header';

// NOTE: import recursos
import logo from '../SVG/Logo.svg';
import clap from '../images/ClapLogo.png';
import arbro from '../images/ArbroLogo.png';

function Credits(){
  useEffect(() => {
    setTimeout(function(){
      creditCicle()
    }, 50)

  }, []);


  const creditCicle = () =>{

    $(".textBoxCredits").animate({top: "-1700px"},30000, "linear", function(){
      $(".textBoxCredits").css("top", "100%")
      creditCicle()
    })
  }

  return(
      <div className="section">
        <NavBar/>
        <div className="creditsBox">
          <div className="shadowCreditsTop"></div>
          <div className="shadowCreditsBottom"></div>
          <div className="textBoxCredits">
            <img className="logoFilm" src={logo} />
            <div className="titleLine">
                Producción
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Dirección </div>
              <div className="rightC halfLine"> María Clara Calle Jiménez</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Diseño sonoro </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Edición de diálogos </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Edición de sonido </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Grabación y edición de Foley </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Mezcla estéreo y binaural </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"> </div>
              <div className="rightC halfLine"></div>
            </div>

            <div className="textLine">
              <div className="leftC halfLine">Guiones técnicos </div>
              <div className="rightC halfLine"> Juan Carlos Santa Abreu</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Cámara </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Iluminación </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Colorización </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Desarrollo web </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Diseño grafico </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Montaje y edición </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Efectos especiales </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Historia original </div>
              <div className="rightC halfLine"> Juan Carlos Santa Abreu & María Clara Calle Jiménez</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Guiones literarios </div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Sonido Directo </div>
              <div className="rightC halfLine"> Lauren Daniel Gómez Bedoya</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Grabación detrás de cámara </div>
              <div className="rightC halfLine"> Manuela Gómez Restrepo</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Claqueta </div>
              <div className="rightC halfLine">  </div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="titleLine">
                Reparto
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Sergio Martínez </div>
              <div className="rightC halfLine"> Ricardo</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Mateo Aristizabal </div>
              <div className="rightC halfLine"> Nicolás Valderrama Gallego</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Nancy Rincón </div>
              <div className="rightC halfLine"> Mónica Gallego Duque</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Felipe Montoya </div>
              <div className="rightC halfLine"> Diego Ruiz</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Sebastián Londoño </div>
              <div className="rightC halfLine"> Samuel Montoya López </div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Guardia 1 (Jhon Fredy)</div>
              <div className="rightC halfLine"> Luis Alberto Borja</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Guardia 2 (Byron)</div>
              <div className="rightC halfLine"> Alejandro Soto</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Guardia 3 </div>
              <div className="rightC halfLine"> ese otro men</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Cientifico </div>
              <div className="rightC halfLine"> Carlos Esteban Giraldo Cuartas</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Paciente </div>
              <div className="rightC halfLine"> Sebastián Orozco Marin</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Sujeto misterioso 1 </div>
              <div className="rightC halfLine"> Lauren Daniel Gómez Bedoya</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Sujeto misterioso 2 </div>
              <div className="rightC halfLine"> Jose Daniel Toro Herrera</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine">Presentadora </div>
              <div className="rightC halfLine"> Natalia Jaimes Novoa</div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="textLine">
              <div className="leftC halfLine"></div>
              <div className="rightC halfLine"></div>
            </div>
            <div className="titleLine">
                Patrocinadores
            </div>
            <div className="textLine">
              <div className="leftC halfLine"><img src={clap} /></div>
              <div className="rightC halfLine"><img src={arbro} /></div>
            </div>


          </div>
        </div>
      </div>
    )
}


export default Credits;
