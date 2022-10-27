
import characterData from "../data/characters.js";
// NOTE: import componentes
import React, {useEffect, useState} from 'react';
import $ from "jquery";
import Footer from "./footer"
import NavBar from './header';

// NOTE: import recursos
import castTitle from '../SVG/Reparto.svg';
import arrow from '../SVG/Arrow.svg';
import faceLogo from '../SVG/Facebook-icon.svg';
import instaLogo from '../SVG/Instagram-icon.svg';
import twitterLogo from '../SVG/Twitter-icon.svg';
import close from '../SVG/Close.svg';
import swipe from '../sound/Swipe.mp3';
//por alguna razon esta variable debe estar afuera, de lo contrario cuando cierro la ventana grande, se vuelve a leer y a asignar el valor inicial
var posSlide = -1900;
function Cast(){
  //Swipe audio
  let audioSwipe = new Audio(swipe);
  audioSwipe.volume = 0.2;
  audioSwipe.play();
  //const [posSlide, setPosSlide] = useState(null);
  const [name, setName] = useState(null);
  const [info, setInfo] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);


  //var pictures = {0:characterS, 1:characterM, 2:characterO, 3:characterS, 4:characterM, 5:characterO, 6:characterS, 7:characterM}
  var size = Object.keys(characterData).length;
  var initialSize = ((size + 10)*380);
  //console.log(pictures[1])
  //hook de actualizacion y montado del componente
  useEffect(() => {

    //$("nav").css({"position": "relative"});
    $("#carrusel").css("width", initialSize + "px");
  });

    //desplegar la informacion completa del personaje
    const openFullInfo = (characterId) =>{

      if(characterId == "Close"){

        $("#textInfo").animate({"top": "80px", "opacity": 0}, 300);
        setTimeout(function(){
          $("#fullCharacterInfo").animate({"left": "-100%"},300)
        }, 200);
      }
      else{
        //llenamos el state con la info del personaje seleccionado para luego mostarlo en el cuadro de info grande
        setName(characterData[characterId].actor);
        setInfo(characterData[characterId].info);
        setFacebook(characterData[characterId].facebook);
        setInstagram(characterData[characterId].instagram);
        setImageProfile(characterData[characterId].picture);
        $("#fullCharacterInfo").animate({"left": "0px"},300);
        setTimeout(function(){
          $("#textInfo").animate({"top": "0px", "opacity": 1}, 400);
        }, 300);

      }

      console.log(posSlide);
    }

    //arrows del Slide

    const arrowClick = (option) =>{

      //hace que el slide haga loop infinito
      if(posSlide >= -380){
        posSlide= (size+1)*-380
        $("#carrusel").css("left", posSlide +"px")
      }
      else if(posSlide <= (-380*(size+10)) + (380*4) ){
        posSlide= -2280
        $("#carrusel").css("left", posSlide +"px")
      }

      //controla las animaciones del carrusel
      $("#carrusel").stop()
       if(option == 1){
         posSlide += 380;
       }
       else if(option == 2){
         posSlide -= 380;
       }
       console.log(posSlide)
       $("#carrusel").animate({
         left: posSlide +"px"
       },200);
    }

    const checkInsta = (char) => {
      console.log(characterData[char].instagram)
      if(characterData[char].instagram != null){
        return(
          <img src={instaLogo} />
        )
      }
    }

    const checkFace = (char) => {
      console.log(characterData[char].facebook)
      if(characterData[char].facebook != null){
        return(
          <img src={faceLogo} />
        )
      }
    }

    const checkTwit = (char) => {
      console.log(characterData[char].twitter)
      if(characterData[char].twitter != null){
        return(
          <img src={twitterLogo} />
        )
      }
    }


    //map del slide
    const itemsMiddle = characterData.map((character) =>
      <li key={character.id}>
        <div className="mask" onClick={() => openFullInfo(character.id)}>
          <img src={character.picture} />
        </div>
        <div className="tag">
          <div className="text">
            <div className="titleText">{character.actor}</div>
            <div className="infoTex">Interpretando a {character.character}</div>
            <div className="socialMediaCharacter">
              <a href={character.facebook} target="_blank">
                {checkFace(character.id)}
              </a>
              <a href={character.instagram} target="_blank">
                {checkInsta(character.id)}
              </a>
              <a href={character.twitter} target="_blank">
                {checkTwit(character.id)}
              </a>
            </div>
          </div>
        </div>
      </li>
    );

    const itemsStart = characterData.slice(size-5, size).map((character) =>
      <li key={character.id}>
        <div className="mask" onClick={() => openFullInfo(character.id)}>
          <img src={character.picture} />
        </div>
        <div className="tag">
          <div className="text">
            <div className="titleText">{character.actor}</div>
            <div className="infoTex">Interpretando a {character.character}</div>
            <div className="socialMediaCharacter">
              <a href={character.facebook} target="_blank">
                {checkFace(character.id)}
              </a>
              <a href={character.instagram} target="_blank">
                {checkInsta(character.id)}
              </a>
              <a href={character.twitter} target="_blank">
                {checkTwit(character.id)}
              </a>

            </div>
          </div>
        </div>
      </li>
    );
    const itemsEnd = characterData.slice(0, 5).map((character) =>
      <li key={character.id}>
        <div className="mask" onClick={() => openFullInfo(character.id)}>
          <img src={character.picture} />
        </div>
        <div className="tag">
          <div className="text">
            <div className="titleText">{character.actor}</div>
            <div className="infoTex">Interpretando a {character.character}</div>
            <div className="socialMediaCharacter">
              <a href={character.facebook} target="_blank">
                {checkFace(character.id)}
              </a>
              <a href={character.instagram} target="_blank">
                {checkInsta(character.id)}
              </a>
              <a href={character.twitter} target="_blank">
                {checkTwit(character.id)}
              </a>
            </div>
          </div>
        </div>
      </li>
    );




  //redes sociales del modal con toda la info
    const socialFacebook = () => {
      if(facebook != null){return(
        <a href={facebook} target="_blank">
          <img src={faceLogo} />
        </a>)}
      else{
        return(null)
      }
    }
    const socialInstagram = () => {
      if(instagram != null){return(
        <a href={instagram} target="_blank">
          <img src={instaLogo} />
        </a>)}
      else{
        return(null)
      }
    }

    return(
      <div className="section">
        <NavBar/>
        <div className="content">
          <img className="title" src={castTitle} />
          <p>En esta sección, les presentamos al grupo de personas que hizo posible este proyecto, quienes de manera voluntaria y desinteresada nos ofrecieron su ayuda, sin ellos, los personajes que construimos en papel nunca habrían adquirido vida, conoce más de ellos a continuación.</p>
        </div>
        <div className="castSlide">
          <img className="arrow" src={arrow} onClick={ () => arrowClick(1) } style={{left: "5px"}}/>
          <img className="arrow" src={arrow} onClick={ () => arrowClick(2) } style={{transform: "rotate(180deg)", right: "5px"}} />
          <ul id="carrusel">
          {itemsStart}
          {itemsMiddle}
          {itemsEnd}
          </ul>
        </div>
        <div id="fullCharacterInfo">

          <div id="imageBox">
            <img src={imageProfile} />
          </div>
          <div id="textInfo">
            <div id="characterName">{name}</div>
            <div id="characterInfo">{info}</div>
            <div className="socialMediaCharacter">

            {socialFacebook()}
            {socialInstagram()}

            </div>


          </div>
          <img className="closeFullInfo" src={close} onClick={() => openFullInfo("Close")} />
        </div>
        <Footer />
      </div>);

}
export default Cast;
