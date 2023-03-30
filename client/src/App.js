import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Form from './components/Form';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/pokemon/:pokeName' element={<Pokemon />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
