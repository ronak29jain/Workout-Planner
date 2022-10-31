import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';

//components
import Navbar from './container/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;