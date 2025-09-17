import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RocketParticles from "./RocketParticles";

function App() {
  return (
    <div className="App">
      <RocketParticles />
      <div className="content">
        <h3>👋 Hola yo soy</h3>
        <h1 className="gradient-text">Gabriela Limachi</h1>
        <h3>Fullstack developer, passionate about Frontend development.</h3>
        <button className="btn-lila me-3">Download CV</button>
        <button className="btn-lila">Contact me</button>
        

        <div class="espacio"></div>
        
        <div class="row">
          <div class="col-sm-4 .caja">col-sm-4</div>
          <div class="col-sm-8">
            sobre mi<br/>
            quien soy<br/>
            <div>
              me encanta crear sitios web que brindan una experiencia de usuario unica yo
              satisfactoria. Puedes ver algunos de mis proyectos en la seleccion de 
              proyectos.
              Soy una persona autodicta, responsable y comprometida con mi trabajo.
              Constantemente estoy aprnediendo tecnologia y herramientas para mejorar habilidades. 
              de bajo puedes ver mis habillidades y tecnologias que uso.

              no dudes en contactarme conmigo si tienes alguna pregunta.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
