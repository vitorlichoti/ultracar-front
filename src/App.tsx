import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import System from './pages/System'
import Colab from './pages/Colab'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/system' element={ <System /> }/>
      <Route path='/colab' element={ <Colab /> }/>
    </Routes>
  )
}

export default App