import LogoKasa from '../../assets/logoKasa.svg'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
  return (
    <header className="headerSection">
      <img className="logo" src={LogoKasa} alt="logo" />
      <nav className="navigationBar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'navLink')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? 'active' : 'navLink')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
