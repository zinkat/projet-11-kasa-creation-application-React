import LogoKasa from '../../assets/logoKasa.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import '../../styles/Header.css'



function Header() {
  const [activeLink, setActiveLink] = useState('Accueil');

  const handleNavLinkClick = (link) => {
    setActiveLink(link); // Mettre à jour l'état lorsque le lien est cliqué
  };
  return (
    < header className='headerSection'>
      <img className='logo' src={LogoKasa} alt="logo" />
      <nav className='navigationBar'>
        <NavLink  to="/" className= {activeLink === 'navLink' ? 'active' : 'navLink'} onClick={() => handleNavLinkClick('Accueil')} >
          Accueil
        </NavLink>
        <NavLink  to="/About" className= {activeLink === 'navLink ' ? 'active' : 'navLink'} onClick={() => handleNavLinkClick('A Propos')} >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
