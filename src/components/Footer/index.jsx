import logoFooter from "../../assets/Footer.png";
import '../../styles/Footer.css'

function Footer() {
    return(
        <footer className="footerSection">
            <div className="footerContainer">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;