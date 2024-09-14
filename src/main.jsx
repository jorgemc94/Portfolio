import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { NavbarComponent } from './Components/Navbar/NavbarComponent';
import { SobreMiComponent } from './Components/SobreMi/SobreMiComponent';
import { SkillsComponent } from './Components/Skills/SkillsComponent';
import { EstudiosComponent } from './Components/Estudios/EstudiosComponent';
import { ExperienciaComponent } from './Components/Experiencia/ExperienciaComponent';
import { ProyectosComponent } from './Components/Proyectos/ProyectosComponent';
import { HeaderComponent } from './Components/Header/HeaderComponent';
import { ContactoComponent } from './Components/Contacto/ContactoComponent';
import { FooterComponent } from './Components/Footer/FooterComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponent />
    <HeaderComponent />
    <div id="sobremi">
      <SobreMiComponent />
    </div>
    <div id="skills">
      <SkillsComponent />
    </div>
    <div id="estudios">
      <EstudiosComponent />
    </div>
    <div id="experiencia">
      <ExperienciaComponent />
    </div>
    <div id="proyectos">
      <ProyectosComponent />
    </div>
    <div id="contacto">
      <ContactoComponent />
    </div>
    <FooterComponent />
  </StrictMode>
);
