// NOTE: Import de videos estereo
import e_c1g1_2_3_4 from '../video/faststart/Estereo/C1G1-2-3-4.mp4';
import e_c2g1_2_3_4 from '../video/faststart/Estereo/C2G1-2-3-4.mp4';
import e_c3g1_2_3_4 from '../video/faststart/Estereo/C3G1-2-3-4.mp4';
import e_c4g1_2 from '../video/faststart/Estereo/C4G1-2.mp4';
import e_c5g1 from '../video/faststart/Estereo/C5G1.mp4';
import e_c5g2 from '../video/faststart/Estereo/C5G2.mp4';
import e_c4g3_4 from '../video/faststart/Estereo/C4G3-4.mp4';
import e_c5g3_4 from '../video/faststart/Estereo/C5G3-4.mp4';
import e_c6g3_4 from '../video/faststart/Estereo/C6G3-4.mp4';
import e_c7g3 from '../video/faststart/Estereo/C7G3.mp4';
import e_c7g4 from '../video/faststart/Estereo/C7G4.mp4';
//import estereoCorte1G1_2_3_4 from '../video/Estereo/Corte1 G1-2-3-4.mp4';
//import estereoCorte2G1_2_3_4 from '../video/Estereo/Corte2 G1-2-3-4.mp4';
//import estereoCorte3G1_2_3_4 from '../video/Estereo/Corte3 G1-2-3-4.mp4';

// NOTE: Import de videos binaural
import b_c1g1_2_3_4 from '../video/faststart/Binaural/C1G1-2-3-4.mp4';
import b_c2g1_2_3_4 from '../video/faststart/Binaural/C2G1-2-3-4.mp4';
import b_c3g1_2_3_4 from '../video/faststart/Binaural/C3G1-2-3-4.mp4';
import b_c4g1_2 from '../video/faststart/Binaural/C4G1-2.mp4';
import b_c5g1 from '../video/faststart/Binaural/C5G1.mp4';
import b_c5g2 from '../video/faststart/Binaural/C5G2.mp4';
import b_c4g3_4 from '../video/faststart/Binaural/C4G3-4.mp4';
import b_c5g3_4 from '../video/faststart/Binaural/C5G3-4.mp4';
import b_c6g3_4 from '../video/faststart/Binaural/C6G3-4.mp4';
import b_c7g3 from '../video/faststart/Binaural/C7G3.mp4';
import b_c7g4 from '../video/faststart/Binaural/C7G4.mp4';
//import binauralCorte1G1_2_3_4 from '../video/Binaural/Corte1 G1-2-3-4.mp4';
//import binauralCorte2G1_2_3_4 from '../video/Binaural/Corte2 G1-2-3-4.mp4';
//import binauralCorte3G1_2_3_4 from '../video/Binaural/Corte3 G1-2-3-4.mp4';

// NOTE: videos de prueba
//import _0 from '../video/Estereo/0.mp4';
//import _1 from '../video/Estereo/1.mp4';
//import _2 from '../video/Estereo/2.mp4';
//import _3 from '../video/Estereo/3.mp4';
//import _4 from '../video/Estereo/4.mp4';
//import _5 from '../video/Estereo/5.mp4';
//import _6 from '../video/Estereo/6.mp4';
//import _7 from '../video/Estereo/7.mp4';
//import _8 from '../video/Estereo/8.mp4';
//import _9 from '../video/Estereo/9.mp4';
//import _10 from '../video/Estereo/10.mp4';

export default[
  {
    "id": 0,
    "identificador": "Corte1 G1-2-3-4",
    "decision": "si",
    "fuga": null,
    "opcion1": "Llamar a la Policía",
    "opcion2": "Llamar al número de teléfono",
    "idEleccion1": 1,
    "idEleccion2": 2,
    "srcEstereo": e_c1g1_2_3_4,
    "srcBinaural": b_c1g1_2_3_4,
    "tiempoDecision": 9.5,
    "descripcion": "Inicio"
  },
  {
    "id": 1,
    "identificador": "Corte2 G1-2-3-4",
    "decision": "no",
    "fuga": 2,
    "opcion1": null,
    "opcion2": null,
    "idEleccion1": null,
    "idEleccion2": null,
    "srcEstereo": e_c2g1_2_3_4,
    "srcBinaural": b_c2g1_2_3_4,
    "tiempoDecision": null,
    "descripcion": "Nancy llama a la policía"
  },
  {
    "id": 2,
    "identificador": "Corte3 G1-2-3-4",
    "decision": "si",
    "fuga": null,
    "opcion1": "Tocar la mochila",
    "opcion2": "Tocar la computadora",
    "idEleccion1": 3,
    "idEleccion2": 6,
    "srcEstereo": e_c3g1_2_3_4,
    "srcBinaural": b_c3g1_2_3_4,
    "tiempoDecision": 9.5,
    "descripcion": "Nancy llama al detective"
  },
  {
    "id": 3,
    "identificador": "Corte4 G1-2",
    "decision": "si",
    "fuga": null,
    "opcion1": "Ayudar a Felipe",
    "opcion2": "Quedarse oculto ",
    "idEleccion1": 4,
    "idEleccion2": 5,
    "srcEstereo": e_c4g1_2,
    "srcBinaural": b_c4g1_2,
    "tiempoDecision": 9.5,
    "descripcion": "Sergio sigue las pistas de la mochila"
  },
  {
    "id": 4,
    "identificador": "Corte5 G1",
    "decision": "final",
    "fuga": null,
    "opcion1": null,
    "opcion2": null,
    "idEleccion1": null,
    "idEleccion2": null,
    "srcEstereo": e_c5g1,
    "srcBinaural": b_c5g1,
    "tiempoDecision": 9.5,
    "descripcion": "Final"
  },
  {
    "id": 5,
    "identificador": "Corte5 G2",
    "decision": "final",
    "fuga": null,
    "opcion1": null,
    "opcion2": null,
    "idEleccion1": null,
    "idEleccion2": null,
    "srcEstereo": e_c5g2,
    "srcBinaural": b_c5g2,
    "tiempoDecision": 9.5,
    "descripcion": "Final"
  },
  {
    "id": 6,
    "identificador": "Corte4 G3-4",
    "decision": "QuickTime",
    "fuga": null,
    "opcion1": "hide: falla",
    "opcion2": "hide: acierta",
    "idEleccion1": 7,
    "idEleccion2": 8,
    "srcEstereo": e_c4g3_4,
    "srcBinaural": b_c4g3_4,
    "tiempoDecision": 9.5,
    "descripcion": "Sergio sigue las pistas del computador"
  },
  {
    "id": 7,
    "identificador": "Corte5 G3-4",
    "decision": "QuickTime",
    "fuga": null,
    "opcion1": "hide: falla",
    "opcion2": "hide: acierta",
    "idEleccion1": 7,
    "idEleccion2": 8,
    "srcEstereo": e_c5g3_4,
    "srcBinaural": b_c5g3_4,
    "tiempoDecision": 9.5,
    "descripcion": "Sergio intenta abrir la puerta principal"
  },
  {
    "id": 8,
    "identificador": "Corte6 G3-4",
    "decision": "QuickTime",
    "fuga": null,
    "opcion1": "hide: falla",
    "opcion2": "hide: acierta",
    "idEleccion1": 10,
    "idEleccion2": 9,
    "srcEstereo": e_c6g3_4,
    "srcBinaural": b_c6g3_4,
    "tiempoDecision": 9.5,
    "descripcion": "Sergio entra a la bodega"
  },
  {
    "id": 9,
    "identificador": "Corte7 G3",
    "decision": "final",
    "fuga": null,
    "opcion1": null,
    "opcion2": null,
    "idEleccion1": null,
    "idEleccion2": null,
    "srcEstereo": e_c7g3,
    "srcBinaural": b_c7g3,
    "tiempoDecision": 9.5,
    "descripcion": "Final"
  },
  {
    "id": 10,
    "identificador": "Corte7 G4",
    "decision": "final",
    "fuga": null,
    "opcion1": null,
    "opcion2": null,
    "idEleccion1": null,
    "idEleccion2": null,
    "srcEstereo": e_c7g4,
    "srcBinaural": b_c7g4,
    "tiempoDecision": 9.5,
    "descripcion": "Final"
  },



]
