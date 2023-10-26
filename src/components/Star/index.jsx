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
        key={i}
        src={i <= rating ? StarRouge : StarVide}
        alt="#"
      />,
    )
  }

  /** retourne un conteneur qui contient le tableau d'étoiles créés dans la boucle. */
  return (
    <div
      className="etoilesContainer"
      aria-label={`note logement est de ${rating} sur 5`}
    >
      {etoiles}
    </div>
  )
}

export default Stars
