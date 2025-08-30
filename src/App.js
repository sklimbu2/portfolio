import Nav from './Components/Nav/nav';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/home'
import Skills from './Pages/Skills/skills';
import Contact from './Pages/Contact/contact';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className='Content'>
      <Routes>
        <Route path='/portfolio/' element={<Home />} />
        <Route path='/portfolio/skills' element={<Skills />} />
        <Route path='/portfolio/contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
