import logo from './logo.svg';
//import './App.css';
import './css/style.min.css';
import './css/responsive.min.css';

// NOTE: componentes
import React from "react";
import ReactDOM from "react-dom";
import {Switch,  Route, useParams, useLocation} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// NOTE: componentes secciones
import Home from './components/home';
import AboutUs from './components/quienes-somos';
import Cast from './components/reparto';
import WhatIsIt from './components/que-es';
import Contact from './components/contacto';
import Gratitude from './components/agradecimientos';
import Credits from './components/creditos';

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames='blockTransition'
        key={location.key}
      >
        <Switch location={location}>
          
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quienes-somos" exact>
            <AboutUs/>
          </Route>
          <Route path="/reparto" exact>
            <Cast/>
          </Route>
          <Route path="/que-es-la-desaparicion" exact>
            <WhatIsIt/>
          </Route>
          <Route path="/contactenos" exact>
            <Contact/>
          </Route>
          <Route path="/agradecimientos" exact>
            <Gratitude/>
          </Route>
          <Route path="/creditos" exact>
            <Credits/>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>

  );
}

export default App;
