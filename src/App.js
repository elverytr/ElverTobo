import Bio from './components/Bio'
import Foto from './components/Foto'
import Navbar from './containers/Navbar'
import Bienvenida from './components/Bienvenida'
import Cuerpo from './containers/Cuerpo'
import Main from './containers/Main'
import Contacto from './containers/Contacto'
import SocialMedia from './pages/SocialMedia'
import CopyRigth from './pages/CopyRigth'
import Proyectos from './components/Proyectos'
import Formulario from './proyectos/Formulario'
import Documentacion from './proyectos/Documentacion'
import Robots from './proyectos/Robots'

function App(){
  return (
    <Cuerpo>
      <Navbar/>
      <Main>
        <Bienvenida>
          <Foto/>
          <Bio/>
        </Bienvenida>
        <Proyectos>
          <Formulario/>
          <Documentacion/>
          <Robots/>
        </Proyectos>
      </Main>
      <Contacto>
        <SocialMedia/>
        <CopyRigth/>
      </Contacto>
    </Cuerpo>
  );
}

export default App;