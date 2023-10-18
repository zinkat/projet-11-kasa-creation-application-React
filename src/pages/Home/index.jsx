import Banner from '../../components/Banner/Banner'
import BannerHome from '../../assets/Bannerhome.png'
import DataLogements from '../../data/datas/logements.json'
import Card from '../../components/Card'
import '../../styles/Home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="mainHome">
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
      <div className="listCard">
        {DataLogements.map((logement) => (
          <NavLink
            key={logement.id}
            to={'/FicheLogement/' + logement.id + '/#'}
          >
            <Card
              key={logement.id}
              id={logement.id}
              image={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Home
