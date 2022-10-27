import videoData from "../data/videoSequence.js";
// NOTE: import componentes
import React, { useEffect, useState, useRef } from 'react';
import { Player } from 'video-react';
import $ from "jquery";
import {Link, useLocation} from 'react-router-dom';
import { Redirect } from 'react-router'

// NOTE: import recursos
import cerraduraImg from '../SVG/caja Cerradura.svg';
import pernoImg from '../SVG/perno.svg';
import ganzuaImg from '../SVG/ganzua.svg';
import playBtn from '../SVG/play.svg';
import stopBtn from '../SVG/stop.svg';
import pausaTitle from '../SVG/pausa.svg';
import imgInstrucciones1 from '../images/Instrucciones1.PNG';
import imgInstrucciones2 from '../images/Instrucciones2.PNG';
import imgInstrucciones3 from '../images/Instrucciones3.PNG';

function Film(props){
  // NOTE: declaracion de state
  const [dispPlayer1, setDispPlayer1] = useState(true);
  const [dispPlayer2, setDispPlayer2] = useState(null);
  const [actualVideo, setActualVideo] = useState(videoData[0]);
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
  const [pernosCompleted, setPernosCompleted] = useState(false);
  const [dispGanzuas, setDispGanzuas] = useState(false);
  const [endFilm, setEndFilm] = useState(false);

  const [chapter0, setChapter0] = useState(null);
  const [chapter1, setChapter1] = useState(null);
  const [chapter2, setChapter2] = useState(null);
  const [chapter3, setChapter3] = useState(null);
  const [chapter4, setChapter4] = useState(null);
  const [chapter5, setChapter5] = useState(null);
  const [chapter6, setChapter6] = useState(null);
  const [chapter7, setChapter7] = useState(null);

  const [chapterDescription0, setChapterDescription0] = useState(null);
  const [chapterDescription1, setChapterDescription1] = useState(null);
  const [chapterDescription2, setChapterDescription2] = useState(null);
  const [chapterDescription3, setChapterDescription3] = useState(null);
  const [chapterDescription4, setChapterDescription4] = useState(null);
  const [chapterDescription5, setChapterDescription5] = useState(null);
  const [chapterDescription6, setChapterDescription6] = useState(null);
  const [chapterDescription7, setChapterDescription7] = useState(null);

  const [posChapter, setPosChapter] = useState(0);
  const [chapterFlag, setChapterFlag] = useState(false);
  // NOTE: sintaxis para uso de referencias con hooks
  const videoPlayer1 = useRef(null);
  const videoPlayer2 = useRef(null);
  var actualVidTipe = null;
  var intervalSlideQT;
  var generalInterval;
  var videoControls;
  var powerLevelTick;
  var powerLevelValue = 0;


  useEffect(() => {
    // NOTE: se asigna el valor del primer video dependiendo del modo de auido que el usuario eligio
    if(audioMode=="Estereo"){
      setCurrentVideoFilm1(actualVideo.srcEstereo);
    }
    else if(audioMode=="Binaural"){
      setCurrentVideoFilm1(actualVideo.srcBinaural);
    }
    actualVidTipe = actualVideo.decision;
    setChapter0(actualVideo.id)
    videoPlayer1.current.actions.play();
    generalInterval = setInterval(() => tick(), 150);

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
          if(pernosCompleted == true){
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
      if(actualVideo.decision == "final"){
        setDecision(false)
        setTimeout(function(){
          console.log("se acabo :c")
          setEndFilm(true)
        },8000)
      }
      else if (actualVideo.decision == "si") {
        // NOTE: esto hace visible el cuadro de decision
        $("#decisionBox").addClass( "visible" );
        var timerValue = 0;
        var timerBarInter = setInterval(function(){
          timerValue += 7.142
          $("#timerDecision").css("width", timerValue + "%")
          if(timerValue > 100){
            clearInterval(timerBarInter)
          }
        },500)

        setTimeout(function(){
            setChangeVideo(true)
            clearInterval(generalInterval)
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
      if(nextVideo != 7){setChapterFlag(false)}
    }
  }, [changePlayer])


// NOTE: cuando el state playNewVideo cambie
  useEffect(()=>{
    if(playNewVideo == true){


      if(chapter0 == null && chapterFlag == false){setChapter0(nextVideo); setChapterDescription0(videoData[nextVideo].descripcion);}
      else if(chapter1 == null && chapterFlag == false){setChapter1(nextVideo); setChapterDescription1(videoData[nextVideo].descripcion);}
      else if(chapter2 == null && chapterFlag == false){setChapter2(nextVideo); setChapterDescription2(videoData[nextVideo].descripcion);}
      else if(chapter3 == null && chapterFlag == false){setChapter3(nextVideo); setChapterDescription3(videoData[nextVideo].descripcion);}
      else if(chapter4 == null && chapterFlag == false){setChapter4(nextVideo); setChapterDescription4(videoData[nextVideo].descripcion);}
      else if(chapter5 == null && chapterFlag == false){setChapter5(nextVideo); setChapterDescription5(videoData[nextVideo].descripcion);}
      else if(chapter6 == null && chapterFlag == false){setChapter6(nextVideo); setChapterDescription6(videoData[nextVideo].descripcion);}
      else if(chapter7 == null && chapterFlag == false){setChapter7(nextVideo); setChapterDescription7(videoData[nextVideo].descripcion);}

      if(nextVideo == 7){setChapterFlag(true)}

    }

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
        setPernosCompleted(false)
        setGanzuaResult(false)
        setPosChapter(posChapter+1)
        actualVidTipe = videoData[tempVideo].decision;
        clearInterval(generalInterval)
        generalInterval = setInterval(() => tick(), 150);
      },2000)
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
        setPernosCompleted(false)
        setGanzuaResult(false)
        setPosChapter(posChapter+1)
        actualVidTipe = videoData[tempVideo].decision;
        clearInterval(generalInterval)
        generalInterval = setInterval(() => tick(), 150);
      },2000)
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

      if(videoPlayer1.current.video.video.currentTime > videoPlayer1.current.video.video.duration - 10 && actualVidTipe != "QuickTime"){
        setDecision(true);
        clearInterval(generalInterval)
        //setValorTimer(((videoPlayer1.current.video.video.currentTime - (videoPlayer1.current.video.video.duration-8.5))*100)/7 + "%" )

      }
      // NOTE: cambia el estado para desplegar las ganzuas
      if(videoPlayer1.current.video.video.currentTime > videoPlayer1.current.video.video.duration - 16 && actualVidTipe == "QuickTime"){
        setGanzua(true);
        clearInterval(generalInterval)
      }
    }
    // NOTE: despliegue del cuadro de decisiones y cambio de video para el reproductor de video 2
    if(videoPlayer2.current !=null){
      // NOTE: cambia el estado para desplegar el cuadro de decision
      if(videoPlayer2.current.video.video.currentTime > videoPlayer2.current.video.video.duration- 10 && actualVidTipe != "QuickTime"){
        setDecision(true);
        clearInterval(generalInterval)
        //setValorTimer(((videoPlayer2.current.video.video.currentTime - (videoPlayer2.current.video.video.duration-8.5))*100)/7 + "%" )
      }
      // NOTE: cambia el estado para desplegar las ganzuas
      if(videoPlayer2.current.video.video.currentTime > videoPlayer2.current.video.video.duration- 16 && actualVidTipe == "QuickTime"){
        setGanzua(true);
        clearInterval(generalInterval)

      }
    }
  }


  const displayGanzuaBox = () =>{
    powerLevelValue = 0;
    var safeZoneValue;
    clearInterval(powerLevelTick)
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
      clearInterval(powerLevelTick)
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
      },400)

      setTimeout(function(){
        //clearInterval(timerBarInter)
        setGanzuaResult(true)
      },14500)

      var timerValue = 0;
      var timerBarInter = setInterval(function(){
        timerValue += 3.448
        $("#timerQT").css("width", timerValue + "%")
        if(timerValue > 100){
          clearInterval(timerBarInter)
          clearInterval(powerLevelTick)
          powerLevelValue = 0;
        }
      },500)
    }
    const selectPerno = (p) =>{
      clearInterval(powerLevelTick)
      powerLevelValue = 0
      selectedPerno = p;
      safeZoneValue = Math.floor(Math.random() * 60) + 20;
      if(p == 1){$(".QTganzua").css("left", "17%")}
      if(p == 2){$(".QTganzua").css("left", "47%")}
      if(p == 3){$(".QTganzua").css("left", "77%")}

      powerLevelTick = setInterval(function() {
        if(powerLevelValue>0){
          powerLevelValue-=1
        }
        if(powerLevelValue>100){
          powerLevelValue =100
        }
        $(".QTpowerLevel").css("height", powerLevelValue + "%")
        if((p1==true && p == 1) ||  (p2==true && p == 2) || (p3==true && p == 3)){
          clearInterval(powerLevelTick)
          powerLevelValue =0
        }
        console.log(powerLevelValue)
      }, 100)

      $(".QTsafeZone").css("bottom", safeZoneValue +"%")
      $(".QTperno").removeClass("QTselectedP")
      $(".QTcerraduraBox .QTperno:nth-child("+ p +")").addClass("QTselectedP")

    }
    const confirm = ()=>{
      if(powerLevelValue>safeZoneValue && powerLevelValue < safeZoneValue+10)
      {
        $(".QTcerraduraBox .QTperno:nth-child("+ selectedPerno +")").css("background", "rgba(0,200,0,0.4)")
        if(selectedPerno == 1){p1 = true;}
        else if(selectedPerno == 2){p2 = true;}
        else if(selectedPerno == 3){p3 = true;}

        if(p1==true && p2 == true && p3 == true){
          clearInterval(powerLevelTick);
          setPernosCompleted(true)
        }
      }
    }


    if (ganzua == true && actualVideo.decision == "QuickTime") {
      return(
        <div id="ganzuaBox">
          <div className="QTInstructions">
            <div className="quickTimeTitle">Instrucciones</div>
            <div className="slideQuickTimeBox">
              <div className="slideElementQT">
                <div className="slideText">Paso 1: seleccione cada uno de los pernos que se encuentran en la cerradura.</div>
                <img src={imgInstrucciones1} />
              </div>
              <div className="slideElementQT slideElementQTHidde">
                <div className="slideText">Paso 2: con el perno seleccionado presiones el botón de empujar, esto hará que la barra de progreso se vaya llenando.</div>
                <img src={imgInstrucciones2} />
              </div>
              <div className="slideElementQT slideElementQTHidde">
                <div className="slideText">Paso 3: una vez que el progreso de la barra este en la zona segura, presione el botón de asegurar, para completar el perno, continúe con todos los pernos hasta terminarlos o hasta que el tiempo se agote. </div>
                <img src={imgInstrucciones3} />
              </div>
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

  const endFilmRedirect = () =>{
    if (endFilm) {
        return(
          <Redirect to="/creditos"/>
        )
    }

  }
  const displayDecisionBox = () => {
    // WARNING: ojo, esto se renderiza con tick solo hasta que termina el video, se colocan algunas banderas para evitar bucles del render
    if(decision == true){
        return(
          <div id='decisionBox'>
            <div className='timerContainer'>
              <div className='timer' id="timerDecision" style={{width: 0}}></div>
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

  const controls = () =>{
    var playStopState = "stop";


    videoControls = (op) =>{
      if(op == "playStop" && playStopState == "stop"){
        playStopState = "play";
        $("#stopBtn").css("opacity", 0);
        $("#playBtn").css("opacity", 1);
        $(".pausaMenu").css({"display":"block", "opacity":1})
        if (visiblePlayer == 1){videoPlayer1.current.actions.pause();}
        else if (visiblePlayer == 2){videoPlayer2.current.actions.pause();}
        if(chapter0 != null){$(".completedLine1").css("width","0%")}
        if(chapter1 != null){$("#dotChapter1").css("display", "block"); $(".completedLine1").css("width","14%")} else{$("#dotChapter1").css("display", "none")}
        if(chapter2 != null){$("#dotChapter2").css("display", "block"); $(".completedLine1").css("width","28%")} else{$("#dotChapter2").css("display", "none")}
        if(chapter3 != null){$("#dotChapter3").css("display", "block"); $(".completedLine1").css("width","42%")} else{$("#dotChapter3").css("display", "none")}
        if(chapter4 != null){$("#dotChapter4").css("display", "block"); $(".completedLine1").css("width","56%")} else{$("#dotChapter4").css("display", "none")}
        if(chapter5 != null){$("#dotChapter5").css("display", "block"); $(".completedLine1").css("width","70%")} else{$("#dotChapter5").css("display", "none")}
        if(chapter6 != null){$("#dotChapter6").css("display", "block"); $(".completedLine1").css("width","84%")} else{$("#dotChapter6").css("display", "none")}
        if(chapter7 != null){$("#dotChapter7").css("display", "block"); $(".completedLine1").css("width","100%")} else{$("#dotChapter7").css("display", "none")}
      }
      else if(op == "playStop" && playStopState == "play"){
        playStopState = "stop";
        $("#playBtn").css("opacity", 0);
        $("#stopBtn").css("opacity", 1);
        $(".pausaMenu").css({"opacity":1})
        setTimeout(function(){
          $(".pausaMenu").css({"display":"none"})
          if (visiblePlayer == 1){videoPlayer1.current.actions.play();}
          else if (visiblePlayer == 2){videoPlayer2.current.actions.play();}
        },300)
      }
    }
    return(
      <div id="controlsBox">
        <div className="controlBtn" onClick={() => videoControls("playStop")}>
          <img id="playBtn" style={{opacity: 0}} src={playBtn} />
          <img id="stopBtn" src={stopBtn} />
        </div>


      </div>
    )
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

  const changeChapter = (c) =>{
    if(c == 0 && chapter0 != null){setNextVideo(chapter0); setChapter0(null); setChapterDescription0(null); setChapter1(null); setChapterDescription1(null); setChapter2(null); setChapterDescription2(null); setChapter3(null); setChapterDescription3(null); setChapter4(null); setChapterDescription4(null); setChapter5(null); setChapterDescription5(null); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 1 && chapter1 != null){setNextVideo(chapter1); setChapter1(null); setChapterDescription1(null); setChapter2(null); setChapterDescription2(null); setChapter3(null); setChapterDescription3(null); setChapter4(null); setChapterDescription4(null); setChapter5(null); setChapterDescription5(null); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 2 && chapter2 != null){setNextVideo(chapter2); setChapter2(null); setChapterDescription2(null); setChapter3(null); setChapterDescription3(null); setChapter4(null); setChapterDescription4(null); setChapter5(null); setChapterDescription5(null); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 3 && chapter3 != null){setNextVideo(chapter3); setChapter3(null); setChapterDescription3(null); setChapter4(null); setChapterDescription4(null); setChapter5(null); setChapterDescription5(null); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 4 && chapter4 != null){setNextVideo(chapter4); setChapter4(null); setChapterDescription4(null); setChapter5(null); setChapterDescription5(null); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 5 && chapter5 != null){setNextVideo(chapter5); setChapter5(null); setChapterDescription5(null); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 6 && chapter6 != null){setNextVideo(chapter6); setChapter6(null); setChapterDescription6(null); setChapter7(null); setChapterDescription7(null);}
    if(c == 7 && chapter7 != null){setNextVideo(chapter7); setChapter7(null); setChapterDescription7(null);}
    setChangeVideo(true)
    videoControls("playStop")
  }


  return(
    <div className='film'>
      {displayPlayer1()}
      {displayPlayer2()}
      {displayDecisionBox()}
      {displayGanzuaBox()}
      {controls()}
      {endFilmRedirect()}
      <div className="pausaMenu">
        <div className="pausaTitleBox">
          <img src={pausaTitle}/>
          <div className="pausaText">
          Puedes regresar a las diferentes decisiones que has pasado, solo debes hacer click en el momento de la línea de tiempo.
          </div>
          <div id="timeLine">
            <div className="dashLine"></div>
            <div className="completedLine1"></div>
            <div className="posDot startDot" onClick={() => changeChapter(0)}/>
            <div className="posDot" id="dotChapter1" style={{left: "14%", display: "none"}} onClick={() => changeChapter(1)}><div className="dotDescripcion">{chapterDescription1}.</div></div>
            <div className="posDot" id="dotChapter2" style={{left: "28%", display: "none"}} onClick={() => changeChapter(2)}><div className="dotDescripcion">{chapterDescription2}.</div></div>
            <div className="posDot" id="dotChapter3" style={{left: "42%", display: "none"}} onClick={() => changeChapter(3)}><div className="dotDescripcion">{chapterDescription3}.</div></div>
            <div className="posDot" id="dotChapter4" style={{left: "56%", display: "none"}} onClick={() => changeChapter(4)}><div className="dotDescripcion">{chapterDescription4}.</div></div>
            <div className="posDot" id="dotChapter5" style={{left: "70%", display: "none"}} onClick={() => changeChapter(5)}><div className="dotDescripcion">{chapterDescription5}.</div></div>
            <div className="posDot" id="dotChapter6" style={{left: "84%", display: "none"}} onClick={() => changeChapter(6)}><div className="dotDescripcion">{chapterDescription6}.</div></div>
            <div className="posDot" id="dotChapter7" style={{left: "100%", display: "none"}} onClick={() => changeChapter(7)}><div className="dotDescripcion">{chapterDescription7}.</div></div>
          </div>
          <div className="btnMenuBox">
            <Link to="/" className="btnMenu">Salir</Link>
            <div className="btnMenu"  onClick={() => videoControls("playStop")}>Continuar </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Film;
