// NOTE: import componentes
import React, {useEffect, useState} from 'react';
import $ from "jquery";
import Footer from "./footer"
import NavBar from './header';
import { useLocation } from 'react-router-dom';
import phpFile from '../php/mail.php';

// NOTE: import recursos
import contact from '../SVG/contactenos.svg'

function Contact(){
  const location2 = useLocation();
  const sendMail = (e) =>{
    e.preventDefault();

    var nombre = $("#nombreForm").val();
    var mail = $("#mailForm").val();
    var tel = $("#telForm").val();
    var ciudad = $("#ciudadForm").val();
    var mensaje = $("#mensajeForm").val();

    const location = window.location.origin;

    //console.log("nombre: " + nombre + " mail: " + mail + " tel: " + tel + " ciudad: " + ciudad + " mensaje: " + mensaje + " ruta: " +location);
    $.post("http://www.ladesaparicion.com/mail.php", { name: nombre, mail: mail, tel: tel, city: ciudad, message: mensaje}, function(result){

      $("#nombreForm").val('');
      $("#mailForm").val('');
      $("#telForm").val('');
      $("#ciudadForm").val('');
      $("#mensajeForm").val('');
      $("#formInfo").html(result)
    } );
    //let data = JSON.stringify({name: nombre, mail: mail, tel: tel, city: ciudad, message: mensaje})
    //$.ajax({
    //  url: "http://www.ladesaparicion.com/mail.php",
    //  type: 'POST',
  //    data: data,
    //  contentType: 'application/json',
    //  success: function(result){
    //    console.log(result)
    //  }
    //})


  }

  return(
    <div className="section">
      <NavBar/>
      <div className="content">
        <img className="title" src={contact} />
        <div className="contactBox">
          <div className="contactText">
            <div className="contactTitle">Lorem Ipsum</div>
            <div className="contactInfo">
              Este cortometraje es el proyecto de grados de dos estudiantes de ingeniería de la Universidad de San Buenaventura, puede obtener más información sobre nosotros en la sección de “Quienes Somos”, si desea contactar con nosotros, a continuación, encontrara correos electrónicos personales de cada uno, o si lo desea, puede utilizar el siguiente formulario<br/><br/>
              - María Clara Calle Jiménez<br/>
              <a href="mailto:mariaclara182@hotmail.com">mariaclara182@hotmail.com</a><br/><br/>
              - Juan Carlos Santa Abreu<br/>
              <a href="mailto:jcarlossa120@hotmail.com">jcarlossa120@hotmail.com</a><br/><br/>

            </div>
          </div>
          <div className="contactForm">
            <form>
              <span id="formInfo"></span>
              <input id="nombreForm" className="inputText" type="text" placeholder="Nombre completo"/>
              <input id="mailForm" className="inputText" type="text" placeholder="E-mail"/>
              <input id="telForm" className="inputText" type="text" placeholder="Teléfono"/>
              <input id="ciudadForm" className="inputText" type="text" placeholder="Ciudad"/>
              <textarea id="mensajeForm" placeholder="Mensaje" />
              <input className="inputSubmit" type="submit" value="Enviar" onClick={(event)=> sendMail(event)}/>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
