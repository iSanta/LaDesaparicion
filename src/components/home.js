// NOTE: import componentes
import React, { useState } from 'react';
import $ from "jquery";
import {Link, useLocation} from 'react-router-dom';
import NavBar from './header';
import Film from './film';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
// NOTE: import recursos
import background from '../images/back-min.jpg';
import logo from '../SVG/Logo.svg';
import audioTitle from '../SVG/Tipo-de-audio.svg';
import swipe from '../sound/Swipe.mp3';
import logo51 from '../SVG/51.svg';
import logoBinaural from '../SVG/Binaural.svg';
import logoEstereo from '../SVG/Estereo.svg';




function Home(){
  //Swipe audio
  let audioSwipe = new Audio(swipe);
  audioSwipe.volume = 0.2;
  audioSwipe.play();

  // NOTE: declaracion de state
  const [soundModeMenu, setSoundModeMenu] = useState(false);
  const [soundModeTitle, setSoundModeTitle] = useState(false);
  const [smOption1, setSmOption1] = useState(false);
  const [smOption2, setSmOption2] = useState(false);
  const [smOption3, setSmOption3] = useState(false);
  const [selectedSoundOption, setSelectedSoundOption] = useState(null);
  const [showFilm, setShowFilm] = useState(false);

    $("nav").css({"position": "fixed", "background": "none"})

    const showSoundModes = () => {
      $(".logo").animate({ "opacity":0},300);
      $(".startButton").animate({"opacity":0},300, function(){ $(".logo").css("display","none"); $(".startButton").css("display","none");});
      $(".opaque").css("background", "rgba(6,11,13,1)")
      setSoundModeMenu(true);

      setTimeout(function(){
        setSoundModeTitle(true);
        setTimeout(function(){
          setSmOption1(true);
          setTimeout(function(){
            setSmOption2(true);
            setTimeout(function(){
              setSmOption3(true)
            },300)
          },300)
        },300)
      },500)
    }

    const selectSoundMode = (e) => {
      if(e == "5.1"){
        setSoundModeTitle(false);
        setSelectedSoundOption(e)

        $("#optionSound2").css({
          "opacity": "0"
        })
        $("#optionSound3").css({
          "opacity": "0"
        })
        $("nav").css({
          "opacity": "0"
        })

        setTimeout(function(){

          $("#optionSound1").css({
            "left": "100%",
            "border-right": "none"
          })



          setTimeout(function(){
            $("#optionSound1").css({
              "top": "-100px",
              "opacity": "0"
            })
            setSmOption2(false);
            setSmOption3(false);
            setTimeout(function(){
              setShowFilm(true)
              $(".opaque").css("background", "rgba(0,0,0,1)")
            },400)
          },400)
        },200)
      }

      if(e == "Binaural"){
        setSoundModeTitle(false);
        setSelectedSoundOption(e)

        $("#optionSound1").css({
          "opacity": "0"
        })
        $("#optionSound3").css({
          "opacity": "0"
        })
        $("nav").css({
          "opacity": "0"
        })

      setTimeout(function(){

        $("#optionSound2").css({
          "border-right": "none"
        })

        setTimeout(function(){
          $("#optionSound2").css({
            "left": "50%"
          })

          setTimeout(function(){
          $("#optionSound2").css({
            "top": "-100px",
            "opacity": "0"
          })
          setSmOption1(false);
          setSmOption3(false);
          setTimeout(function(){
            setShowFilm(true)
            $(".opaque").css("background", "rgba(0,0,0,1)")
          },400)
          },400)
        },400)
      },200)
    }


      if(e == "Estereo"){
        setSoundModeTitle(false);

        setSelectedSoundOption(e)

        $("#optionSound1").css({
          "opacity": "0"
        })
        $("#optionSound2").css({
          "opacity": "0"
        })
        $("nav").css({
          "opacity": "0"
        })

        setTimeout(function(){

          $("#optionSound3").css({
            "left": "-50%",
            "border-right": "none"
          })



          setTimeout(function(){
            $("#optionSound3").css({
              "top": "-100px",
              "opacity": "0"
            })
            setSmOption1(false);
            setSmOption2(false);
            setTimeout(function(){
              setShowFilm(true)
              $(".opaque").css("background", "rgba(0,0,0,1)")
            },400)
          },400)
        },200)
      }



    }


    const soundModes = () => {
      if(soundModeMenu == true){
        return(
          <div className="soundMenuBox">
            <CSSTransition
            in={soundModeTitle}
            timeout={{appear: 1000, enter: 1000, exit: 400}}
            classNames="staticOpacity"
            unmountOnExit
            appear
            >
              <img className="soundTitle" src={audioTitle} />
            </CSSTransition>

            <div className="optionsSound">
              <div className="itemSoundModeBox">
                <CSSTransition
                  in={smOption2}
                  timeout={{appear: 1000, enter: 1000, exit: 400}}
                  classNames="bigItems"
                  unmountOnExit
                  appear
                >
                  <div id="optionSound2" className="itemSoundMode" style={{borderRight: "3px solid #455059"}} onClick={() => selectSoundMode("Binaural")}>
                    <img src={logoBinaural} alt="logo Audio Binaural"/>
                    <p>Lo que vaya sucediendo y no dudar sin dudar, no me interpreten mal, solo estoy sobreviviendo</p>
                  </div>
                </CSSTransition>
              </div>
              <div className="itemSoundModeBox">
                <CSSTransition
                  in={smOption3}
                  timeout={{appear: 1000, enter: 1000, exit: 400}}
                  classNames="bigItems"
                  unmountOnExit
                  appear
                >
                  <div id="optionSound3" className="itemSoundMode" onClick={() => selectSoundMode("Estereo")} >
                    <img src={logoEstereo} alt="logo Audio Estereo"/>
                    <p>Lo que vaya sucediendo y no dudar sin dudar, no me interpreten mal, solo estoy sobreviviendo</p>
                  </div>
                </CSSTransition>

              </div>
            </div>



          </div>
        )
      }

    }
    const showHomeComponent = () => {
      if(showFilm == false){
        return(
          <div className="homeContent">
            <NavBar/>
            <img className="backgroundImage" src={background} />
            <div className="opaque">
              <img className="logo" src={logo} />
              <button className="startButton" onClick={() => showSoundModes()}>Comenzar</button>
              {soundModes()}
            </div>
          </div>
        )
      }
      else{
        return(
          <Film soundMode={selectedSoundOption} />
        )

      }
    }
    return(
      <div id="home">
        {showHomeComponent()}
      </div>
    )
}


export default Home;
