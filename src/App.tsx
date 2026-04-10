import { BrowserRouter as Router, Route, Routes, Link} from 'react-router';
import './App.css'
import Equipo from './Equipo'
import Favoritos from './Favoritos'
import Home from './Home'
import Informativa from './Informativa'
import Original from './Original'
import Usuario from './Usuario'


function App() {
  

  return (
    <>
    <Router>
      <nav className='c-menu'>
      <Link to="Home">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/original">Original</Link>
      <Link to="/informativa">Informativa</Link>
      <Link to="/usuario">Usuarios</Link>
      </nav>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/home" element={<Home /> } />
            <Route path="/original" element={<Original /> } />
            <Route path="/favoritos" element={<Favoritos /> } />
            <Route path="/informativa" element={<Informativa /> } />
            <Route path="/usuario" element={<Usuario /> } />
            <Route path="/equipo/:equipo" element={<Equipo /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
