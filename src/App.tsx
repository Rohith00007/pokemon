import './App.css'
import WelcomePage from './Components/WelcomePage';
import PokemonStore from './Components/PokemonStore'
import PlayerSelection from'./Components/PlayerSelection';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


// import { value } from './Store/CounterSlice'


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/pokemonStore" element={<PokemonStore />} />
        <Route path="/playerSelection" element={<PlayerSelection/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
