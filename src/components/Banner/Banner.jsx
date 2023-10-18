import '../../styles/Banner.css'

function Banner({ image, texte }) {
  return (
    <section className="bannerContainer">
      <img className="bannerImg" src={image} alt="Bannière" />
      <div className="darkenMode"></div>
      <span className="bannerText">{texte}</span>
    </section>
  )
}

export default Banner
