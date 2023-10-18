import DataLogements from '../../data/datas/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import '../../styles/FicheLogement.css'
import Tag from '../../components/Tags'
import Star from '../../components/Star'
import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'

function FicheLogement() {
  /* Récupère la bonne fiche id url */
  const id = useParams()
  const ficheLogement = DataLogements.find((logement) => logement.id === id.id)

  /* récup array equipement pour le Collapse*/
  const equipementsLogement = ficheLogement?.equipments.map(
    (equipment, index) => {
      return <span key={index}>{equipment}</span>
    },
  )
  /* récup array Tag */
  const tagsLogement = ficheLogement?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />
  })

  return (
    <>
      {ficheLogement ? (
        <div className="mainFiche">
          <Carrousel pictures={ficheLogement?.pictures} />

          <div className="title">
            <h1> {ficheLogement?.title}</h1>
            <p>{ficheLogement?.location}</p>
          </div>
          <div className="infoPropietaire">
            <span className="nomProprietaire">{ficheLogement?.host.name}</span>
            <img
              className="photoPropietaire"
              src={ficheLogement?.host.picture}
              alt="Propriétaire"
            />
          </div>
          <div className="TagContent">
            <div className="tagsLogement">{tagsLogement}</div>
          </div>
          <div className="starContent">
            <Star note={ficheLogement?.rating} />
          </div>

          <div className="description-equipements">
            <Collapse
              titre="Description"
              description={ficheLogement?.description}
            />
            <Collapse titre="Équipements" description={equipementsLogement} />
          </div>
        </div>
      ) : (
        <Navigate replace to="/Error404" />
      )}
    </>
  )
}

export default FicheLogement
