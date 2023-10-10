import Banner from '../../components/Banner/Banner'
import BannerAbout from '../../assets/BannerAbout.png'
import '../../styles/About.css'


function About() {
  return (
    <div className='bannerAbout'>
           <Banner image={BannerAbout} />
 
    </div>
  )
}

export default About
