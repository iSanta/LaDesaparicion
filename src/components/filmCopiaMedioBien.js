import videoData from "../data/videoSequence.js";
// NOTE: import componentes
import React, { useEffect, useState, useRef } from 'react';
import { Player } from 'video-react';
import $ from "jquery";

// NOTE: import recursos
import cerraduraImg from '../SVG/caja Cerradura.svg';
import pernoImg from '../SVG/perno.svg';
import ganzuaImg from '../SVG/ganzua.svg';

function Film(props){
  // NOTE: declaracion de state
  const [dispPlayer1, setDispPlayer1] = useState(true);
  const [dispPlayer2, setDispPlayer2] = useState(null);
  const [actualVideo, setActualVideo] = useState(videoData[6]);
  const [currentVideoFilm1, setCurrentVideoFilm1] = useState(null);
  const [currentVideoFilm2, setCurrentVideoFilm2] = useState(null);
  const [audioMode, setAudioMode] = useState(props.soundMode);
  const [decision, setDecision] = useState(false);
  const [changeVideo, setChangeVideo] = useState(false);
  const [dispDecisionFlag, setDispDecisionFlag] = useState(false);
  const [animButtomSeleccted, setAnimButtomSeleccted] = useState(null);
  const [valorTimer, setValorTimer] = useState(0);
  const [nextVideo, setNextVideo] = useState(null);
  const [visiblePlayer, setVisiblePlayer] = useState(1);
  const [renderFlag, setRenderFlag] = useState(false);
  const [animCenterElection, setAnimCenterElection] = useState(false);
  const [changePlayer, setChangePlayer] = useState(false);
  const [playNewVideo, setPlayNewVideo] = useState(false);
  const [ganzua, setGanzua] = useState(false);
  const [animSlideQT, setAnimSlideQT] = useState(false);
  const [ganzuaResult, setGanzuaResult] = useState(false);
  const [perno1, setPerno1] = useState(false);
  const [perno2, setPerno2] = useState(false);
  const [perno3, setPerno3] = useState(false);
  // NOTE: sintaxis para uso de referencias con hooks
  const videoPlayer1 = useRef(null);
  const videoPlayer2 = useRef(null);
  var intervalSlideQT;

  useEffect(() => {
    // NOTE: se asigna el valor del primer video dependiendo del modo de auido que el usuario eligio
    if(audioMode=="Estereo"){
      setCurrentVideoFilm1(actualVideo.srcEstereo);
    }
    else if(audioMode=="Binaural"){
      setCurrentVideoFilm1(actualVideo.srcBinaural);
    }
    videoPlayer1.current.actions.play();
    setInterval(() => tick(), 150);

  }, []);


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //-----------------------------------Inicio mecanismo ganzuaBox -----------------------------------------------
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // NOTE: cuando el state decision cambie
    useEffect(()=>{
      if (ganzua == true && actualVideo.decision == "QuickTime") {
        if (visiblePlayer == 1) {
          videoPlayer1.current.actions.pause()
        }
        if (visiblePlayer == 2) {
          videoPlayer2.current.actions.pause()
        }
        $("#ganzuaBox").css("opacity",1)
        setAnimSlideQT(true)
      }else {
        setGanzua(false)
      }


    }, [ganzua])



    // NOTE: animacion del slide automatico
    useEffect(()=>{
      if(animSlideQT == true){
        var showN = 2
        intervalSlideQT = setInterval(() => {
          if(showN >3){showN = 1}
          $(".slideElementQT").addClass("slideElementQTHidde")
          $(".slideQuickTimeBox .slideElementQT:nth-child("+ showN +")").removeClass("slideElementQTHidde")
          $(".dotQT").removeClass("dotQTFill")
          $(".slideQTDots .dotQT:nth-child("+ showN +")").addClass("dotQTFill")
          showN += 1
        }, 5000);
      }

    }, [animSlideQT])

    // NOTE: una vez se acaba el tiempo de ganzuas
    useEffect(()=>{
      if(ganzuaResult){
        $("#ganzuaBox").css("opacity",0)
        // NOTE: para graduar el tiempo de cambio de video
        setTimeout(function() {
          if(perno1 == true && perno2 == true && perno3 == true){
            setNextVideo(actualVideo.idEleccion2);
          }
          else{
            setNextVideo(actualVideo.idEleccion1);
          }
          setChangeVideo(true)
        },1000)
        setTimeout(function(){
          $(".QTInstructions").css("opacity", 1)
          $(".QTgame").css({"display": "none", "opacity": 0})
        },500)
      }
    }, [ganzuaResult])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------Inicio mecanismo decisionBox -----------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// NOTE: cuando el state decision cambie
  useEffect(()=>{
    if(decision == true){
      if(actualVideo.decision == "final" || actualVideo.decision == "QuickTime"){
        setDecision(false)
      }
      else if (actualVideo.decision == "si") {
        // NOTE: esto hace visible el cuadro de decision
        $("#decisionBox").addClass( "visible" );

        setTimeout(function(){
            setChangeVideo(true)
        },7000)
      }
      else if(actualVideo.decision == "no"){
        //setDecision(false)
        $("#decisionBox").css("display", "none")
        setNextVideo(actualVideo.fuga)
        setTimeout(function(){
            setChangeVideo(true)
            $("#decisionBox").css("display", "block")
        },7000)
      }
    }

  }, [decision])

// NOTE: cuando el state changeVideo cambie
  useEffect(()=>{
    if(changeVideo == true){

      if (nextVideo == null) {
        setAnimButtomSeleccted("OP1")
        setNextVideo(actualVideo.idEleccion1)
      }
        setAnimCenterElection(true);
        setChangePlayer(true);
    }
  }, [changeVideo])


// NOTE: cuando el state changePlayer cambie
  useEffect(()=>{
    // NOTE: asigna el video al otro player
    if(nextVideo != null && visiblePlayer == 1 && changePlayer == true){
      $("#player1").css("z-index", 5)
      $("#player2").css("z-index", 4)
      var tempVideo = nextVideo;
      if(audioMode=="Estereo"){
        setCurrentVideoFilm2(videoData[tempVideo].srcEstereo);
      }
      else if(audioMode=="Binaural"){
        setCurrentVideoFilm2(videoData[tempVideo].srcBinaural);
      }
      setDispPlayer2(true)
      setPlayNewVideo(true)
    }

    if(nextVideo != null && visiblePlayer == 2 && changePlayer == true){
      $("#player1").css("z-index", 4)
      $("#player2").css("z-index", 5)
      var tempVideo = nextVideo;
      if(audioMode=="Estereo"){
        setCurrentVideoFilm1(videoData[tempVideo].srcEstereo);
      }
      else if(audioMode=="Binaural"){
        setCurrentVideoFilm1(videoData[tempVideo].srcBinaural);
      }
      setDispPlayer1(true)
      setPlayNewVideo(true)
    }
  }, [changePlayer])


// NOTE: cuando el state playNewVideo cambie
  useEffect(()=>{
    if (visiblePlayer == 1 && dispPlayer2 == true && playNewVideo == true) {
      var tempVideo = nextVideo;
      videoPlayer2.current.actions.play();
      // NOTE: este setTimeout es para graduar el tiempo en que quiero que desaparesca el video anterior
      setTimeout(function(){
        $("#player1").css("opacity", 0)
        $("#player2").css("opacity", 1)

        // NOTE: reseteo de todas los states
        setDecision(false);
        setVisiblePlayer(2);
        setChangeVideo(false);
        setChangePlayer(false)
        setNextVideo(null)
        setDispPlayer1(false)
        setAnimCenterElection(false)
        setActualVideo(videoData[tempVideo])
        setPlayNewVideo(false)
        setAnimButtomSeleccted(null)
        setGanzua(false);
      },1000)
    }

    if (visiblePlayer == 2 && dispPlayer1 == true && playNewVideo == true) {
      var tempVideo = nextVideo;
      videoPlayer1.current.actions.play();
      // NOTE: este setTimeout es para graduar el tiempo en que quiero que desaparesca el video anterior
      setTimeout(function(){
        $("#player2").css("opacity", 0)
        $("#player1").css("opacity", 1)

        // NOTE: reseteo de todas los states
        setDecision(false);
        setVisiblePlayer(1);
        setChangeVideo(false);
        setChangePlayer(false)
        setNextVideo(null)
        setDispPlayer2(false)
        setAnimCenterElection(false)
        setActualVideo(videoData[tempVideo])
        setPlayNewVideo(false)
        setAnimButtomSeleccted(null)
        setGanzua(false);
      },1000)
    }
  }, [playNewVideo])

// NOTE: cuando el state animCenterElection cambie
  useEffect(()=>{
    if(animCenterElection == true){
      // NOTE: animacion de la eleccion
      if(animButtomSeleccted == "OP1"){
        $("#option2").css("opacity", 0);
        $(".timerContainer").css("opacity", 0);
        $("#option1").css("left", "50%");
      }
      if(animButtomSeleccted == "OP2"){
        $("#option1").css("opacity", 0);
        $(".timerContainer").css("opacity", 0);
        $("#option2").css("left", "-50%");
      }

      setTimeout(function(){
        if(animButtomSeleccted == "OP1"){
          $("#option1").css({"top": "-50px", "opacity": 0});
        }
        if(animButtomSeleccted == "OP2"){
          $("#option2").css({"top": "-50px", "opacity": 0});
        }
        setTimeout(function(){  $( "#decisionBox" ).removeClass( "visible" ); },200)
      },400)
    }
  }, [animCenterElection])


// NOTE: cuando el state animButtomSeleccted cambie
  useEffect(()=>{
    // NOTE: animacion que sostiene la opcion elegida mientras se termina el tiempo
    if(animButtomSeleccted == "OP1"){
      $("#option2 p").css("color", "#74818c");
      $("#option1 p").css("color", "#D7D7D0");
      $("#option1 .sensualBar").css({"background": "#D7D7D0", "width": "120px"});
      $("#option2 .sensualBar").css({"background": "#74818c", "width": "0px"});
    }
    if(animButtomSeleccted == "OP2"){
      $("#option1 p").css("color", "#74818c");
      $("#option2 p").css("color", "#D7D7D0");
      $("#option2 .sensualBar").css({"background": "#D7D7D0", "width": "120px"});
      $("#option1 .sensualBar").css({"background": "#74818c", "width": "0px"});
    }
  }, [animButtomSeleccted])

  // NOTE: tick que revisa el momento en que se debe mostrar el cuadro de decision
  var tick = ()=>{
    // NOTE: despliegue del cuadro de decisiones y cambio de video para el reproductor de video 1
    if(videoPlayer1.current!=null){
      // NOTE: toca usar ruta larga, imagino por que el componente de video-react no fue hecho para hooks
      // NOTE: cambia el estado para desplegar el cuadro de decision
      if(videoPlayer1.current.video.video.currentTime > videoPlayer1.current.video.video.duration - 8.5){
        setDecision(true);
        setValorTimer(((videoPlayer1.current.video.video.currentTime - (videoPlayer1.current.video.video.duration-8.5))*100)/7 + "%" )

      }
      // NOTE: cambia el estado para desplegar las ganzuas
      if(videoPlayer1.current.video.video.currentTime > videoPlayer1.current.video.video.duration - 16){
        setGanzua(true);

      }
    }
    // NOTE: despliegue del cuadro de decisiones y cambio de video para el reproductor de video 2
    if(videoPlayer2.current !=null){
      // NOTE: cambia el estado para desplegar el cuadro de decision
      if(videoPlayer2.current.video.video.currentTime > videoPlayer2.current.video.video.duration- 8.5){
        setDecision(true);
        setValorTimer(((videoPlayer2.current.video.video.currentTime - (videoPlayer2.current.video.video.duration-8.5))*100)/7 + "%" )
      }
      // NOTE: cambia el estado para desplegar las ganzuas
      if(videoPlayer2.current.video.video.currentTime > videoPlayer2.current.video.video.duration- 16){
        setGanzua(true);

      }
    }
  }


  const displayGanzuaBox = () =>{
    var powerLevelValue = 0;
    var safeZoneValue;
    var powerLevelTick;
    var selectedPerno;
    var p1 = false;
    var p2 = false;
    var p3 = false;
    var prevPern = 99;
    const changeSlide = (n) => {
      clearInterval(intervalSlideQT)
      $(".slideElementQT").addClass("slideElementQTHidde")
      $(".dotQT").removeClass("dotQTFill")
      $(".slideQuickTimeBox .slideElementQT:nth-child("+ n +")").removeClass("slideElementQTHidde")
      $(".slideQTDots .dotQT:nth-child("+ n +")").addClass("dotQTFill")
    }
    const hideSlide = () => {
      $(".QTInstructions").css("opacity", 0)
      $(".QTgame").css({"display": "block", "opacity": 1})
      setTimeout(function(){
        $(".QTInstructions").css("display", "none")

        if (dispPlayer2 == true){
          videoPlayer2.current.actions.play();
        }
        else if (dispPlayer1 == true){
          videoPlayer1.current.actions.play();
        }
        var timerValue = 0;
        //var timerBarInter = setInterval(function(){
        //  timerValue += 3.448
        //  $("#timerQT").css("width", timerValue + "%")
        //},500)

        setTimeout(function(){
          //clearInterval(timerBarInter)
          //setGanzuaResult(true)
        },14500)
      },400)
    }
    const selectPerno = (p) =>{
      clearInterval(powerLevelTick);
      if(selectedPerno != p){
        powerLevelValue = 0
        selectedPerno = p;
        clearInterval(powerLevelTick);
        if(p == 1 && p1 == false){
          clearInterval(powerLevelTick);
          safeZoneValue = Math.floor(Math.random() * 60) + 20;
          $(".QTganzua").css("left", "17%")
          powerLevelTick = setInterval(function() {
            if(powerLevelValue>0){
              powerLevelValue-=1
            }
            if(powerLevelValue>100){
              powerLevelValue =100
            }
            $(".QTpowerLevel").css("height", powerLevelValue + "%")
          }, 100)

          $(".QTsafeZone").css("bottom", safeZoneValue +"%")
          $(".QTperno").removeClass("QTselectedP")
          $(".QTcerraduraBox .QTperno:nth-child("+ p +")").addClass("QTselectedP")
        }
        if(p == 2 && p2 == false){
          clearInterval(powerLevelTick);
          safeZoneValue = Math.floor(Math.random() * 60) + 20;
          $(".QTganzua").css("left", "47%")
          powerLevelTick = setInterval(function() {
            if(powerLevelValue>0){
              powerLevelValue-=1
            }
            if(powerLevelValue>100){
              powerLevelValue =100
            }
            $(".QTpowerLevel").css("height", powerLevelValue + "%")
          }, 100)

          $(".QTsafeZone").css("bottom", safeZoneValue +"%")
          $(".QTperno").removeClass("QTselectedP")
          $(".QTcerraduraBox .QTperno:nth-child("+ p +")").addClass("QTselectedP")
        }
        if(p == 3 && p3 == false){
          clearInterval(powerLevelTick);
          safeZoneValue = Math.floor(Math.random() * 60) + 20;
          $(".QTganzua").css("left", "77%")
          powerLevelTick = setInterval(function() {
            if(powerLevelValue>0){
              powerLevelValue-=1
            }
            if(powerLevelValue>100){
              powerLevelValue =100
            }
            $(".QTpowerLevel").css("height", powerLevelValue + "%")
          }, 100)

          $(".QTsafeZone").css("bottom", safeZoneValue +"%")
          $(".QTperno").removeClass("QTselectedP")
          $(".QTcerraduraBox .QTperno:nth-child("+ p +")").addClass("QTselectedP")
        }

      }




    }
    const confirm = ()=>{
      if(powerLevelValue>safeZoneValue && powerLevelValue < safeZoneValue+10)
      {
        $(".QTcerraduraBox .QTperno:nth-child("+ selectedPerno +")").css("background", "rgba(0,200,0,0.4)")
        if(selectedPerno == 1){
          p1 = true;
          setPerno1(true);
        }
        else if(selectedPerno == 2){
          p2 = true;
          setPerno2(true);
        }
        else if(selectedPerno == 3){
          p3 = true;
          setPerno3(true);
        }
      }

    }


    if (ganzua == true && actualVideo.decision == "QuickTime") {
      return(
        <div id="ganzuaBox">
          <div className="QTInstructions">
            <div className="quickTimeTitle">Instrucciones</div>
            <div className="slideQuickTimeBox">
              <div className="slideElementQT">hola1</div>
              <div className="slideElementQT slideElementQTHidde">hola2</div>
              <div className="slideElementQT slideElementQTHidde">hola3</div>
            </div>
            <div className="slideQTDots">
              <div className="dotQT dotQTFill" onClick={() => changeSlide(1)}></div>
              <div className="dotQT" onClick={() => changeSlide(2)}></div>
              <div className="dotQT" onClick={() => changeSlide(3)}></div>
            </div>
            <div className="btnCerrarSlide" onClick={()=> hideSlide()}>Lo entiendo</div>
          </div>
          <div className="QTgame">
            <div className="QTcerraduraBox">
              <img style={{"left": "5%"}} className="QTperno" src={pernoImg} onClick={()=>selectPerno(1)}/>
              <img style={{"left": "35%"}} className="QTperno" src={pernoImg} onClick={()=>selectPerno(2)}/>
              <img style={{"left": "65%"}} className="QTperno" src={pernoImg} onClick={()=>selectPerno(3)}/>
              <img className="QTcerradura" src={cerraduraImg} />
              <img className="QTganzua" src={ganzuaImg} />
            </div>
            <div className="QTinteractionsBox">
              <div className="QTpowerBar">
                <div className="QTsafeZone"/>
                <div className="QTpowerLevel"/>
              </div>
              <div className="QTbuttonsBox">
                <div className="QTButton" onClick={()=>{powerLevelValue+=15 }}>Empujar</div>
                <div className="QTButton" onClick={()=>confirm() }>Asegurar</div>
              </div>
              <div className='timerContainer'>
                <div className='timer' id="timerQT" style={{width: 0}}></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const displayDecisionBox = () => {
    // WARNING: ojo, esto se renderiza con tick solo hasta que termina el video, se colocan algunas banderas para evitar bucles del render
    if(decision == true){
        return(
          <div id='decisionBox'>
            <div className='timerContainer'>
              <div className='timer' style={{width: valorTimer}}></div>
            </div>

            <div className='optionBox'>
              <div className='optionValue' onClick={()=>{setAnimButtomSeleccted("OP1"); setNextVideo(actualVideo.idEleccion1)}}>
                <div id="option1">
                  <p>{actualVideo.opcion1}</p>
                  <div className="sensualBar"></div>
                </div>
              </div>
              <div className='optionValue' onClick={()=>{setAnimButtomSeleccted("OP2"); setNextVideo(actualVideo.idEleccion2)}}>
                <div id="option2">
                  <p>{actualVideo.opcion2}</p>
                  <div className="sensualBar"></div>
                </div>
              </div>
            </div>
          </div>
        )
    }
    else {
      return(<div></div>)
    }
  }

// NOTE: manejo del segun reproductor de video
  const displayPlayer1 = () =>{
    if(dispPlayer1){
      return(
        <div className='videoPlayerBox' id='player1'>
          <Player
          ref={videoPlayer1}
          playsInline
          poster="/assets/poster.png"
          >
            <source src={currentVideoFilm1} />
          </Player>
        </div>
      )
    }
  }


// NOTE: manejo del segun reproductor de video
  const displayPlayer2 = () =>{
    if(dispPlayer2){
      return(
        <div className='videoPlayerBox' id='player2'>
          <Player
          ref={videoPlayer2}
          playsInline
          poster="/assets/poster.png"
          >
            <source src={currentVideoFilm2} />
          </Player>
        </div>
      )
    }
  }






  return(
    <div className='film'>
      {displayPlayer1()}
      {displayPlayer2()}
      {displayDecisionBox()}
      {displayGanzuaBox()}
    </div>
  )
}


export default Film;
