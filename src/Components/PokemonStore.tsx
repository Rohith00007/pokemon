import axios from 'axios';
import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import {Button} from '@mui/material';
import ShowPokemonComponent from './ShowPokemonComponent';
import red from '../../node_modules/@mui/material/colors/red';



function PokemonStore(){
    const [data,setData] = useState([]);
    const [showPokemon,setShowPokemon] = useState(false);
    const [sendingIndex,setSendingIndex] = useState(null);
    const location =useLocation();
    const playerNo = location?.state?.player;

    useEffect(()=>{

    fetchPokemonDetails();
    },[])
    
    function handlePokemonSelction(index){
      console.log(data[index]);
      setSendingIndex(data[index].id);
      setShowPokemon(true);
      // return (<>
      // <div>MyPoPup</div>
      // </>)
    }
    function toggleClick(){
      setShowPokemon(prev=>!prev);
    }



    const fetchPokemonDetails = async () => {
        try {
          const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
          const allPokemon = response.data.results;
      
          // console.log("Fetched Pokémon:", allPokemon);
          const pokeRes = allPokemon.map(poke=> axios.get(poke.url));
          // const pokeRes = await axios.get(allPokemon.url);
          const allPokeRes = await Promise.all(pokeRes)

          const detailed = allPokeRes.map(res => res.data)
          setData(detailed)
          console.log(detailed)
      
          // allPokemon.forEach(pokemon => {
          //   fetchPokemonData(pokemon);
          // });
          // const promiseData = allPokemon.map(pokemon=>fetch(pokemon.url).then(res=>res.json()));
          // const deatilData = await Promise.all(promiseData)
          // console.log("deatilData",deatilData)
          // setData(deatilData)
        } catch (e) {
          console.error("error", e);
        }
      };

    return(<>
    <div className="pokemonStore">
    <h1>My PokemonStore for {playerNo}</h1>
    <table className="my-table">
      <tbody>
        <tr>
            <th>Sn No </th>
            <th> Name</th>
           
        </tr>
        {Object.values(data).map((poke, i) => (
      <tr key={i}>
        <td>{poke.id}</td>
        <td ><Button onClick={()=>handlePokemonSelction(i)}>{poke.name}</Button></td>
      </tr>
    ))}
    </tbody>
    </table>
    {showPokemon && 
    <div style={styles.overlay}>
    <div style={styles.popup}>
      <Button  onClick={toggleClick}  style={styles.closeBtn}>X</Button>
    <ShowPokemonComponent index = {sendingIndex} />
    </div>
    </div>
    }
    </div>
    </>
    )
}
const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    minWidth: '300px',
    position: 'relative' as const,
  },
  closeBtn: {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    background: 'red',
  },
};

export default PokemonStore;