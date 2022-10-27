// NOTE: import componentes
import React from 'react';
import $ from "jquery";
import Footer from "./footer"
import NavBar from './header';

// NOTE: import recursos
import aboutUsTitle from '../SVG/Quienes-Somos.svg';
import characterS from '../images/Santa.png';
import characterM from '../images/Maria.png';
import close from '../SVG/Close.svg';
import faceLogo from '../SVG/Facebook-icon.svg';
import instaLogo from '../SVG/Instagram-icon.svg';
import twitLogo from '../SVG/Twitter-icon.svg';
import swipe from '../sound/Swipe.mp3';



function AboutUs(){
  //Swipe audio
  let audioSwipe = new Audio(swipe);
  audioSwipe.volume = 0.2;
  audioSwipe.play();

    $("nav").css({"position": "relative"});



    const showFullInfo = (character) =>{
      if (character ==1) {
        $("#infoBoxS").css({"left": "50%", "z-index": 1})
        $("#characterS").css({"z-index": 2})
        $("#characterS img").addClass("forceImgClass")
        $("#characterM").css({"z-index": 0})
        setTimeout(function(){
          $("#infoCharacter1").animate({"left":"10%", "opacity":1},400)
        }, 300);
      }
      else if (character ==2) {
        $("#infoBoxM").css({"left": "0%", "z-index": 1})
        $("#characterM img").addClass("forceImgClass")
        $("#characterM").css({"z-index": 2})
        $("#characterS").css({"z-index": 0})
        setTimeout(function(){
          $("#infoCharacter2").animate({"left":"10%", "opacity":1},400)
        }, 300);
      }
      else{
        $("#infoBoxS").css({"left": "0%", "z-index": 0})
        $("#infoBoxM").css({"left": "50%", "z-index": 0})
        $("#characterS img").removeClass("forceImgClass")
        $("#characterM img").removeClass("forceImgClass")
        $("#infoCharacter1").animate({"left":"20%", "opacity":0},300)
        $("#infoCharacter2").animate({"left":"0%", "opacity":0},300)
      }
      console.log(character + " Howdy")
    }


    return(
      <div className="section">
        <NavBar/>
        <div className="content">
          <img className="title" src={aboutUsTitle} />
          <p>Somos dos estudiantes de ingeniería de la Universidad de San Buenaventura, quienes decidimos crear este proyecto para nuestra tesis de grados, combinando los talentos y conocimientos de ambos, logramos formar un gran equipo de trabajo, a continuación un poco de información de ambos para que nos puedan conocer más a fondo.</p>

          <div className="aboutUsModalM">


            <div className="characterAboutUs" id="characterSM">
              <img src={characterS} />
            </div>
            <div className="fullInfoBox" id="infoBoxSM">

              <div className="infoCharacter" id="infoCharacter1M">
                <div className="infoCharacterTitle">
                  Juan Carlos Santa Abreu
                </div>
                <div className="infoCharacterText">
                Estudiante de últimos semestres de ingeniería multimedia, apasionado por todo lo relacionado a esta, le gusta la fotografía, tocar el teclado, y sobre todo los gatos.<br/><br/>
                Para este cortometraje, estuvo encargado de la parte visual de este, entre las funciones que se realizaron están manejo de cámara, iluminación, construcción del guion técnico, montaje y edición, colorización, efectos especiales, fotografía, diseño y desarrollo web<br/><br/>

                </div>
                <div className="socialMediaCharacter">
                  <a href="http://example.com" target="_blank">
                    <img src={faceLogo} />
                  </a>
                  <a href="http://example.com" target="_blank">
                    <img src={instaLogo} />
                  </a>
                </div>

              </div>
            </div>
            <div className="characterAboutUs" id="characterMM">
              <img src={characterM} />
            </div>

            <div className="fullInfoBox" id="infoBoxMM">

              <div className="infoCharacter" id="infoCharacter2M">
                <div className="infoCharacterTitle">
                  Maria Clara Calle Jimenez
                </div>
                <div className="infoCharacterText">
                <br/>
                Estudiante de último semestre de Ingeniería de Sonido y de noveno semestre de ingeniería de Multimedia. Apasionada por todo lo referente a lo audiovisual tanto de video como de sonido. Ha trabajado como editora de sonido de 5 largometrajes en Clap Studios y como diseñadora sonora de diferentes piezas audiovisuales. Además, fue la editora de diálogos y mezcladora del cortometraje navideño "Historias En Navidad".<br/><br/>
                En este cortometraje interactivo "La desaparición" se encargó de conseguir gran parte de los actores y locaciones, además de dirigirlo. También se encargó de toda la post producción de sonido realizando funciones como diseño sonoro, edición de sonido, edición de diálogos, grabación de foley, artista Foley, y mezcladora. También junto con Juan Carlos Santa se encargó de idear la trama de la historia y de escribir el guión literario, además de la producción. También apoyó en una pequeña parte en VFX.
                </div>
                <div className="socialMediaCharacter">
                  <a href="https://twitter.com/claraca11" target="_blank">
                    <img src={twitLogo} />
                  </a>
                  <a href="https://www.instagram.com/claraca11/" target="_blank">
                    <img src={instaLogo} />
                  </a>
                </div>
              </div>
            </div>

          </div>




















          <div className="aboutUsModal">
            <div className="fullInfoBox" id="infoBoxS">

              <div className="infoCharacter" id="infoCharacter1" style={{left: "20%"}}>
                <div className="infoCharacterTitle">
                  Juan Carlos Santa Abreu
                </div>
                <div className="infoCharacterText">
                <br/>
                Estudiante de últimos semestres de ingeniería multimedia, apasionado por todo lo relacionado a esta, le gusta la fotografía, tocar el teclado, y sobre todo los gatos.<br/><br/>
                Para este cortometraje, estuvo encargado de la parte visual de este, entre las funciones que se realizaron están manejo de cámara, iluminación, construcción del guion técnico, montaje y edición, colorización, efectos especiales, fotografía, diseño y desarrollo web.<br/><br/>

                </div>
                <div className="socialMediaCharacter">
                  <a href="https://www.instagram.com/santaabreujuan/" target="_blank">
                    <img src={instaLogo} />
                  </a>
                </div>

              </div>
              <img className="closeFullInfo" src={close} onClick={() => showFullInfo(3)} />
            </div>
            <div className="fullInfoBox" id="infoBoxM" style={{left: "50%"}}>

              <div className="infoCharacter" id="infoCharacter2">
                <div className="infoCharacterTitle">
                  Maria Clara Calle Jimenez
                </div>
                <div className="infoCharacterText">
                <br/>
                  Estudiante de último semestre de Ingeniería de Sonido y de noveno semestre de ingeniería de Multimedia. Apasionada por todo lo referente a lo audiovisual tanto de video como de sonido. Ha trabajado como editora de sonido de 5 largometrajes en Clap Studios y como diseñadora sonora de diferentes piezas audiovisuales. Además, fue la editora de diálogos y mezcladora del cortometraje navideño "Historias En Navidad".<br/><br/>
                  En este cortometraje interactivo "La desaparición" se encargó de conseguir gran parte de los actores y locaciones, además de dirigirlo. También se encargó de toda la post producción de sonido realizando funciones como diseño sonoro, edición de sonido, edición de diálogos, grabación de foley, artista Foley, y mezcladora. También junto con Juan Carlos Santa se encargó de idear la trama de la historia y de escribir el guión literario, además de la producción. También apoyó en una pequeña parte en VFX.
                </div>
                <div className="socialMediaCharacter">
                  <a href="https://twitter.com/claraca11" target="_blank">
                    <img src={twitLogo} />
                  </a>
                  <a href="https://www.instagram.com/claraca11/" target="_blank">
                    <img src={instaLogo} />
                  </a>
                </div>
              </div>
              <img className="closeFullInfo" src={close} onClick={() => showFullInfo(3)} />
            </div>
            <div className="characterAboutUs" id="characterS" onClick={() => showFullInfo(1)}>
              <img src={characterS} />
              <div className="shortInfo">
                <div className="shortName">Juan Carlos Santa Abreu</div>
              </div>
            </div>
            <div className="characterAboutUs" id="characterM" onClick={() => showFullInfo(2)}>
              <img src={characterM} />
              <div className="shortInfo">
                <div className="shortName">Maria Clara Calle Jimenez</div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    )
}

export default AboutUs;
