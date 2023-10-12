import '../../styles/Card.css'
function Card({ id, image, titre }) {
  
  return (
    <div className='containerCard' id={id}>
      <img className='cardImg' src={image} alt= {titre} />
      <span className='cardTitre'>{titre}</span>
    </div>
  )
}

export default Card
