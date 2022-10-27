// NOTE: import componentes
import React, {useEffect, useState} from 'react';
import $ from "jquery";
import Footer from "./footer"
import NavBar from './header';
// NOTE: import recursos
import gratitudeTitle from '../SVG/Agradecimientos.svg';
import faceLogo from '../SVG/Facebook-icon.svg';
import instaLogo from '../SVG/Instagram-icon.svg';
import characterM from '../images/CharacterM.png';
import characterS from '../images/CharacterS.png';
import characterManuela from '../images/Manuela.png';
import clapLogo from '../images/ClapLogo.png';
import arbroLogo from '../images/ArbroLogo.png';
import characterLauren from '../images/Lauren.png';
import characterLinealPhase from '../images/linealphase.png';




function Gratitude(){

  return(
    <div className="section">
      <NavBar/>
      <div className="content">
        <img className="title" src={gratitudeTitle} />
        <p>Este cortometraje no habría sido posible sin la ayuda desinteresada de grandes amigos, quienes, en nuestra necesidad, encontraron la forma de brindarnos su apoyo, a ellos nuestro más profundo agradecimiento, muchas gracias por confiar en nosotros, por ayudarnos a crecer profesionalmente y por darnos la mano en momentos de necesidad.</p>

        <div className="subtitulosAgradecimientos">Empresas Colaboradoras</div>
        <div className="agradecimientosBlock">

          <div className="itemAgradecimientos itemAgradecimientosVacio"></div>
          <div className="itemAgradecimientos itemAgradecimientosSmallScreen">
            <div className="itemImageAgradecumientosBox">
              <img className="itemImageAgradecumientos" src={clapLogo} />
            </div>
            <div className="text">
              <div className="titleText">Clap Studios</div>
              <div className="infoTex">Clap Studios es una empresa de post producción de sonido para cine con la única sala de mezcla 5.1 y 7.1  certificada por Dolby en Antioquia, ha trabajado en más de 90 títulos nacionales e internacionales a lo largo de sus 9 años de existenci.</div>
              <div className="socialMediaCharacter">
                <a href="https://www.facebook.com/ClapStudios" target="_blank">
                  <img src={faceLogo} />
                </a>
                <a href="https://www.instagram.com/clapstudios/" target="_blank">
                  <img src={instaLogo} />
                </a>
              </div>
            </div>
          </div>

          <div className="itemAgradecimientos itemAgradecimientosSmallScreen">
            <div className="itemImageAgradecumientosBox">
              <img className="itemImageAgradecumientos" src={arbroLogo} />
            </div>

            <div className="text">
              <div className="titleText">Arbro Films</div>
              <div className="infoTex">Dos Hermanos trabajando juntos en una misma pasión, fotografía y video, tenemos más de 10 años de experiencia en el campo, desarrollando diferentes proyectos audiovisuales desde lo publicó y privado.</div>
              <div className="socialMediaCharacter">
                
              </div>
            </div>
          </div>

          <div className="itemAgradecimientos itemAgradecimientosVacio"></div>
        </div>


        <div className="subtitulosAgradecimientos">Sonidista</div>
        <div className="agradecimientosBlock">

          <div className="itemAgradecimientos itemSolitario itemAgradecimientosSmallScreen">
            <div className="itemImageAgradecumientosBox">
              <img className="itemImageAgradecumientos" src={characterLauren} />
            </div>
            <div className="text">
              <div className="titleText">Lauren Daniel Gomez Bedoya</div>
              <div className="infoTex">Estudiante de Ingeniería de Sonido, cantante en El grilo Ensamble Vocal. Curioso por la grabación de audio y la musica latinoamericana.</div>
              <div className="socialMediaCharacter">
                <a href="https://www.instagram.com/laurengomez_22/" target="_blank">
                  <img src={instaLogo} />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="subtitulosAgradecimientos">Detrás de cámaras</div>
        <div className="agradecimientosBlock">

          <div className="itemAgradecimientos itemSolitario itemAgradecimientosSmallScreen">
            <div className="itemImageAgradecumientosBox">
              <img className="itemImageAgradecumientos" src={characterManuela} />
            </div>
            <div className="text">
              <div className="titleText">Manuela Gomez Restrepo</div>
              <div className="infoTex">Estudiante de Comunicación Audiovisual, le interesa la edición de vídeo pero sabe que aún tiene mucho campo por explorar. Ha participado en dos cortometrajes y espera poder participar en muchos más.</div>
              <div className="socialMediaCharacter">
                <a href="https://www.instagram.com/manu_gomez2/" target="_blank">
                  <img src={instaLogo} />
                </a>
              </div>
            </div>
          </div>
        </div>





        <div className="subtitulosAgradecimientos">Composición musical </div>
        <div className="agradecimientosBlock">

          <div className="itemAgradecimientos itemSolitario itemAgradecimientosSmallScreen">
            <div className="itemImageAgradecumientosBox">
              <img className="itemImageAgradecumientos" src={characterLinealPhase} />
            </div>
            <div className="text">
              <div className="titleText">Lineal Phase</div>
              <div className="infoTex">Estudiante de 9no semestre de ingeniería de sonido, compositor y productor musical</div>
              <div className="socialMediaCharacter">
                <a href="https://www.instagram.com/linealphase.productions/" target="_blank">
                  <img src={instaLogo} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
    );


}
export default Gratitude;
