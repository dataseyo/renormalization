import {Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import About from './pages/about/about';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path='/renormalization' element={<Home/>}/>
        <Route path='/renormalization/about' element={<About/>}/>
      </Routes> 
    </main>
  );
}

export default App;
