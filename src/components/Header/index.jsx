import LogoKasa from '../../assets/logoKasa.svg'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'



function Header() {
  return (
    < header className='headerSection'>
      <img src={LogoKasa} alt="logo" />
      <nav className='navigationBar'>
        <NavLink  to="/" className='navLink '  >
          Accueil
        </NavLink>
        <NavLink  to="/About" className='navLink ' >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
