// NOTE: import componentes
import React, {useEffect, useState} from 'react';
import $ from "jquery";
import Footer from "./footer"
import NavBar from './header';

// NOTE: import recursos
import whatIs from '../SVG/que-es.svg';
import image1 from '../images/image1.JPG';
import image2 from '../images/image2.JPG';
import image3 from '../images/image3.JPG';

import t1_1 from '../images/t1-1.png';
import t1_2 from '../images/t1-2.png';
import t1_3 from '../images/t1-3.png';
import t1_4 from '../images/t1-4.png';
import t1_5 from '../images/t1-5.png';
import t2_1 from '../images/t2-1.png';
import t2_2 from '../images/t2-2.png';
import t2_3 from '../images/t2-3.png';
import t2_4 from '../images/t2-4.png';
import t2_5 from '../images/t2-5.png';

import f1 from '../images/fotograma1.png';
import f2 from '../images/fotograma2.png';
import f3 from '../images/fotograma3.png';
import f4 from '../images/fotograma4.png';


var beforePos = 1;
var flag = false;
var lastScrollTop = 0;


function WhatIsIt(){

  //funcionamiento de las animaciones del modal
  const changeModal = (pos) => {
    //flag para que la animacion no se solape
    if(flag==false){
      flag = true;
      $("#bloopersFrame").attr('src', $("#bloopersFrame").attr('src'));
      //cambia la esfera seleccionada
      $(".dotInside").css("background","none");
      $(".dotBox .dot:nth-child("+ pos +")").children(".dotInside").css("background","#D7D7D9");


      $(".textWI .textBox:nth-child("+ beforePos +")").animate({"bottom":"-40px", "opacity":0},500);

      //animacion img1
      $(".image1Box img:nth-child("+ beforePos +")").css("z-index", 1)
      $(".image1Box img:nth-child("+ pos +")").css("z-index", 2)
      $(".image1Box img:nth-child("+ pos +")").animate({"top":"0%"},500);
      setTimeout(function(){
        $(".image1Box img:nth-child("+ beforePos +")").css("top","-100%");

      },500);

      //animacion img2
      setTimeout(function(){
        $(".image2Box .fotogSlide:nth-child("+ beforePos +")").css("z-index", 1)
        $(".image2Box .fotogSlide:nth-child("+ pos +")").css("z-index", 2)
        $(".image2Box .fotogSlide:nth-child("+ pos +")").animate({"top":"0%"},500);
        setTimeout(function(){
          $(".image2Box .fotogSlide:nth-child("+ beforePos +")").css("top","-100%");

        },500);
      },100)

      //animacion img3
      setTimeout(function(){
        $(".image3Box img:nth-child("+ beforePos +")").css("z-index", 1)
        $(".image3Box img:nth-child("+ pos +")").css("z-index", 2)
        $(".image3Box img:nth-child("+ pos +")").animate({"top":"0%"},500);
        setTimeout(function(){
          $(".image3Box img:nth-child("+ beforePos +")").css("top","-100%");
        },500);
      },200)

      //animacion texto
      setTimeout(function(){
        $(".textWI .textBox:nth-child("+ beforePos +")").css("z-index", 1)
        $(".textWI .textBox:nth-child("+ pos +")").css("z-index", 2)
        $(".textWI .textBox:nth-child("+ pos +")").animate({"bottom":"0px", "opacity":1},500);
        setTimeout(function(){
          beforePos = pos
          flag = false;
        },100)
      },700)
    }
  }

  return(
    <div className="section">
      <NavBar/>
      <div className="content">
        <img className="title" src={whatIs} />
        <div id="whatIsItModalM">
          <img src={f1} />
          <div className="textBox">
            <div className="title">
              Que es la desaparición
            </div>
            <div className="subtitle">
              En resumen…
            </div>
            <div className="text">
            El cortometraje interactivo “La desaparición” es un cortometraje de ficción del genero de suspenso. En este cortometraje, el espectador tiene la oportunidad de elegir las acciones que harán ciertos personajes en momentos específicos de la historia, las cuales llevarán a ramas específicas de la misma, siendo este, un elemento influyente en la trama.
            </div>
          </div>

          <img src={t1_2} />
          <div className="textBox">
            <div className="title">
              Sinopsis
            </div>
            <div className="subtitle">

            </div>
            <div className="text">
              Este universo narrativo se compone
              principalmente de un investigador privado el
              cual tiene un poder particular, la habilidad de
              ver el último suceso de un objeto con
              simplemente tocarlo. La historia comienza
              con un adolescente de 17 años llamado Mateo
              el cual tiene una gran habilidad para la
              informática, Mateo sale una noche de su casa,
              pero no regresa, lo cual ocasiona que su
              madre se preocupe y contrate a un
              investigador privado llamado Sergio para que
              descubra que sucedió con su hijo. Sergio llega
              a casa de Mateo y dependiendo del objeto que
              toque, descubrirá algo importante que lo lleve
              a la siguiente etapa de la investigación.
            </div>
          </div>

          <img src={f2} />
          <div className="textBox">
            <div className="title">
              Interacción
            </div>
            <div className="subtitle">
              Un cortometraje diferente
            </div>
            <div className="text">
              En este cortometraje el usuario tiene la posibilidad de decidir acciones específicas del personaje y encaminar la historia según esas decisiones, para esto, cuenta con una interface de usuario que se muestra en momentos específicos de la historia, en las que el personaje principal debe tomar una decisión, siendo estas presentadas al espectador quien podrá elegir la opción que considere más apropiada para el desarrollo de la historia, también habrá ocasiones en las que el rumbo de la historia dependerá de la habilidad del espectador para resolver un <span style={{"font-style": "italic"}}>quick time event</span> cuyo resultado afectara a la historia.
            </div>
          </div>

          <img src={t2_3} />
          <div className="textBox">
            <div className="title">
              Porque un cortometraje interactivo
            </div>
            <div className="subtitle">
              Justificación
            </div>
            <div className="text">
              Hoy en día las personas están acostumbradas a ver producciones audiovisuales donde la historia
              solo ocurre de una forma y donde su interacción con el cortometraje o película es nula, limitándose
              solamente a observar el único flujo predeterminado desde la concepción de la historia. Es por esto
              que al ver producciones como la película Britanica Bandersnatch(2018) la cual tiene una
              interacción directa con el espectador, se creó el interés de realizar un cortometraje interactivo donde
              el usuario pudiera tomar ciertas desiciones importantes e influyentes para el desarrollo de la
              historia, lo cual permitiría involucrarse mas en la trama. El propósito además de realizar una
              producción audiovisual con interactividad fue el conocer, entender, identificar y mostrar el proceso
              de realización de la misma desde su planificación inicial hasta su finalización.
            </div>
          </div>


          <img src={image2} />
          <div className="textBox">
            <div className="title">
              Bloopers
            </div>
            <div className="subtitle">
            </div>
            <div className="text">
              Para nosotros, la creación desde cero de este cortometraje resulto ser una gran experiencia de aprendizaje y crecimiento profesional, pudimos conocer nuevas personas y lugares diferente, y en términos generales fue un proyecto muy divertido, por esto, queremos compartir con ustedes un corto video con algunos bloopers que ocurrieron durante la grabación.
            </div>
          </div>





        </div>
        <div className="footerOnlyM">
          <Footer />
        </div>


      </div>



      <div id="whatIsItModal">
        <div className="dotBox">
          <div className="dot" onClick={()=>changeModal(1)}><div style={{"background": "#D7D7D9"}} className="dotInside"></div><span>Que es la desaparición</span></div>
          <div className="dot" onClick={()=>changeModal(2)}><div className="dotInside"></div><span>Sinopsis</span></div>
          <div className="dot" onClick={()=>changeModal(3)}><div className="dotInside"></div><span>Interacción </span></div>
          <div className="dot" onClick={()=>changeModal(4)}><div className="dotInside"></div><span>Porque un cortometraje interactivo </span></div>
          <div className="dot" onClick={()=>changeModal(5)}><div className="dotInside"></div><span>Bloopers</span></div>
        </div>

        <div className="infoPanel">
          <div className="image1Box">
            <img style={{"top": "0%"}} src={t1_1} />
            <img src={t1_2} />
            <img src={t1_3} />
            <img src={t1_4} />
            <img src={t1_5} />
          </div>
          <div className="image2Box">
            <img className="fotogSlide" style={{"top": "0%"}} src={f1} />
            <img className="fotogSlide" src={f2} />
            <img className="fotogSlide" src={f3} />
            <img className="fotogSlide" src={f4} />
            <iframe id="bloopersFrame" className="fotogSlide" width="560" height="420" src="https://www.youtube-nocookie.com/embed/zIJAaPZu7z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="image3Box">
            <img style={{"top": "0%"}} src={t2_1} />
            <img src={t2_2} />
            <img src={t2_3} />
            <img src={t2_4} />
            <img src={t2_5} />
          </div>
          <div className="textWI">
            <div className="textBox" style={{"opacity":1, "bottom": 0}}>
              <div className="title">
                Que es la desaparición
              </div>
              <div className="subtitle">
                En resumen…
              </div>
              <div className="text">
              El cortometraje interactivo “La desaparición” es un cortometraje de ficción del genero de suspenso. En este cortometraje, el espectador tiene la oportunidad de elegir las acciones que harán ciertos personajes en momentos específicos de la historia, las cuales llevarán a ramas específicas de la misma, siendo este, un elemento influyente en la trama.
              </div>
            </div>
            <div className="textBox">
              <div className="title">
                Sinopsis
              </div>
              <div className="subtitle">

              </div>
              <div className="text">
                Este universo narrativo se compone
                principalmente de un investigador privado el
                cual tiene un poder particular, la habilidad de
                ver un suceso relevante de un objeto con
                simplemente tocarlo. La historia comienza
                con un adolescente de 17 años llamado Mateo
                el cual tiene una gran habilidad para la
                informática, Mateo sale una noche de su casa,
                pero no regresa, lo cual ocasiona que su
                madre se preocupe y contrate a un
                investigador privado llamado Sergio para que
                descubra que sucedió con su hijo. Sergio llega
                a casa de Mateo y dependiendo del objeto que
                toque, descubrirá algo importante que lo lleve
                a la siguiente etapa de la investigación.
              </div>
            </div>
            <div className="textBox">
              <div className="title">
                Interacción
              </div>
              <div className="subtitle">
                Un cortometraje diferente
              </div>
              <div className="text">
                En este cortometraje el usuario tiene la posibilidad de decidir acciones específicas del personaje y encaminar la historia según esas decisiones, para esto, cuenta con una interface de usuario que se muestra en momentos específicos de la historia, en las que el personaje principal debe tomar una decisión, siendo estas presentadas al espectador quien podrá elegir la opción que considere más apropiada para el desarrollo de la historia, también habrá ocasiones en las que el rumbo de la historia dependerá de la habilidad del espectador para resolver un <span style={{"font-style": "italic"}}>quick time event</span> cuyo resultado afectara a la historia.
              </div>
            </div>
            <div className="textBox">
              <div className="title">
                Porque un cortometraje interactivo
              </div>
              <div className="subtitle">
                Justificación
              </div>
              <div className="text">
                Hoy en día las personas están acostumbradas a ver producciones audiovisuales donde la historia
                solo ocurre de una forma y donde su interacción con el cortometraje o película es nula, limitándose
                solamente a observar el único flujo predeterminado desde la concepción de la historia. Es por esto
                que al ver producciones como la película Britanica Bandersnatch(2018) la cual tiene una
                interacción directa con el espectador, se creó el interés de realizar un cortometraje interactivo donde
                el usuario pudiera tomar ciertas desiciones importantes e influyentes para el desarrollo de la
                historia, lo cual permitiría involucrarse mas en la trama. El propósito además de realizar una
                producción audiovisual con interactividad fue el conocer, entender, identificar y mostrar el proceso
                de realización de la misma desde su planificación inicial hasta su finalización.
              </div>
            </div>
            <div className="textBox">
              <div className="title">
                Bloopers
              </div>
              <div className="subtitle">
              </div>
              <div className="text">
                Para nosotros, la creación desde cero de este cortometraje resultó ser una gran experiencia de aprendizaje y crecimiento profesional, pudimos conocer nuevas personas y lugares diferente, y en términos generales fue un proyecto muy divertido, por esto, queremos compartir con ustedes un corto video con algunos bloopers que ocurrieron durante la grabación.
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );

}

export default WhatIsIt;
