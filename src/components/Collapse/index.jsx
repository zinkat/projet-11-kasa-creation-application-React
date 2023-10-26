import React, { useState } from 'react'
import '../../styles/Collapse.css'
import fleche from '../../assets/arrow_back_ios.svg'

function Collapse({ titre, description }) {
  /* Création Hook d'état : isOpen variable d'état/ setIsOpen fonction pour mettre à jour cet état */
  const [isOpen, setIsOpen] = useState(false)

  /* fonction qui inverse la valeur de isOpen */
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="header-collapse">
        <div className="titre-collapse">{titre}</div>
        <span
          className={`fleche-collapse ${isOpen ? 'open' : ''}`}
          onClick={toggleCollapse}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        /* Si le collapse est à TRUE alors il affichera la description */
        isOpen && <div className="description-collapse">{description}</div>
      }
    </div>
  )
}

export default Collapse
