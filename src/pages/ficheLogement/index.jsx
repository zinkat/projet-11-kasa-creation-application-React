import DataLogements from '../../data/datas/logements.json'
import { useParams, Navigate } from 'react-router-dom'
import '../../styles/FicheLogement.css'
import Tag from '../../components/Tags'
import Star from '../../components/Star'
import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'

function FicheLogement() {
  /** extrait l'ID du logement à partir de l'URL */
  const id = useParams()

  /* recherche l'objet de logement correspondant à cet ID dans les données importées.*/
  const ficheLogement = DataLogements.find((logement) => logement.id === id.id)

  /* récup array Tag */
  const tagsLogement = ficheLogement?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />
  })

  /* récup array equipement// chaque itération de la boucle la fonction retourne un élément de liste (<li>)  */
  const equipementsLogement = ficheLogement?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>
    },
  )

  if (!ficheLogement) {
    return <Navigate replace to="/Error404" />
  }
  return (
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
        <Star rating={ficheLogement?.rating} />
      </div>

      <div className="description-equipements">
        <Collapse
          titre="Description"
          description={ficheLogement?.description}
        />
        <Collapse titre="Équipements" description={equipementsLogement} />
      </div>
    </div>
  )
}

export default FicheLogement
