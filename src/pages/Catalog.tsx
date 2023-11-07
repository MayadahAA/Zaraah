import CataImg from '../assets/catalog.jpeg'
import Footer from '../componants/Footer'
import Navbar from '../componants/Navbar'
function Catalog() {
  return (
    <div>
        <Navbar/>
        <img src={CataImg} alt="" />
        <Footer/>
    </div>
  )
}

export default Catalog