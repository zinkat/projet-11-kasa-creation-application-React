import StarRouge from '../../assets/Star.png'
import StarVide from '../../assets/StarVide.png'
import '../../styles/Star.css'

const Stars = ({ rating }) => {
  const nombreEtoiles = 5
  const etoiles = []

  for (let i = 1; i <= nombreEtoiles; i++) {
    etoiles.push(
      <img
        className="etoile"
        src={i <= rating ? StarRouge : StarVide}
        alt={i <= rating ? 'étoile rouge' : 'étoile grise'}
      />,
    )
  }
  /** retourne un conteneur qui contient le tableau d'étoiles créés dans la boucle. */
  return <div className="etoilesContainer">{etoiles}</div>
}

export default Stars
