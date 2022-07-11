import {Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> 
    </main>
  );
}

export default App;
