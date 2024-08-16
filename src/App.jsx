import './App.css'
import Layout from './Layout';
import Playarea from './Playarea';
import Hero from './Hero';
import About from './About';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path='quiz' element={<Playarea />} />
      <Route path='about' element={<About />} />
    </Route>
  </Routes>
  )
}

export default App