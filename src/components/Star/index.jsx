import StarRouge from '../../assets/Star.png'
import StarVide from '../../assets/StarVide.png'
import '../../styles/Star.css'

const Stars = ({ note }) => {
  const nombreEtoiles = 5
  const etoiles = []

  for (let i = 1; i <= nombreEtoiles; i++) {
    etoiles.push(
      <img
        className="etoile"
        key={i}
        src={i <= note ? StarRouge : StarVide}
        alt={i <= note ? 'étoile rouge' : 'étoile grise'}
      />,
    )
  }
  return <div className="etoilesContainer">{etoiles}</div>
}

export default Stars
