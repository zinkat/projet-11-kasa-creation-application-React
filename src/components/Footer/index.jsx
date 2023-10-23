import logoFooter from '../../assets/Footer.png'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <img src={logoFooter} alt="Logo" />
        <p>&copy; 2020 Kasa. Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer
