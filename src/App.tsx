import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CardDetail from './pages/CardDetail'
import Login from './componants/login'
import Signup from './componants/signup'
import Pagenotfound from './pages/Pagenotfound'
import Catalog from './pages/Catalog'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/plant/:id' element={<CardDetail/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
<Route path='/Catalog' element={<Catalog/>}/>
      <Route path='*' element={<Pagenotfound />}/>
    </Routes>
    </>
  )
}

export default App