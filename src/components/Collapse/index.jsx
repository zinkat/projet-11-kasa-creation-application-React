import React, { useState } from 'react'
import '../../styles/Collapse.css'
import fleche from '../../assets/arrow_back_ios.svg'

function Collapse({ titre, description }) {
  /* Création Hook d'état */
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <div className="header-dropdown">
        <div className="titre-dropdown">{titre}</div>
        <span
          className={`fleche-dropdown ${isOpen ? 'open' : ''}`}
          onClick={toggleCollapse}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        isOpen && <div className="description-dropdown">{description}</div>
      }
    </div>
  )
}

export default Collapse
