import { NavLink } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
  return (
    <div className="mainPage">
      <h1 className="titrePage">404</h1>
      <span className="descriptionError">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <NavLink className="lienHome" to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error
