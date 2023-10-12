import DataLogements from '../../data/datas/logements.json'
import { useParams } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import '../../styles/FicheLogement.css'

function FicheLogement() {
  /* Récupère la bonne fiche */
  const id = useParams()
  const ficheLogement = DataLogements.find((logement) => logement.id === id.id)

  /* récup array equipement pour le dropdown*/
  const equipementsLogement = ficheLogement?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>
    },
  )

  return (
    <div className="mainFiche">
      <h1> {ficheLogement?.title}</h1>
      <p>{ficheLogement?.location}</p>
      <div className="information-propietaire">
        <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
        <img
          className="photo-propietaire"
          src={ficheLogement?.host.picture}
          alt="Propriétaire"
        />
      </div>

      <div className="description-equipements">
        <Dropdown
          titre="Description"
          description={ficheLogement?.description}
        />
        <Dropdown titre="Équipements" description={equipementsLogement} />
      </div>
    </div>
  )
}

export default FicheLogement
