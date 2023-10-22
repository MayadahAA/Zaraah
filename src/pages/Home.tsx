import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import Cards from '../componants/Cards'
import coverlg from '../assets/coverlg.svg'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='h-96 bg-slate-50 max-sm:w-full bg-no-repeat bg-contain bg-center max-sm:bottom-1 z-10 ' style={{backgroundImage: `url(${coverlg})`}} >
        </div>
        <Cards  />
        <Footer/>
    </div>
  )
}

export default Home