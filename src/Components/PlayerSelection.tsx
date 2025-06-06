import {Button} from '@mui/material';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
 
 function playerSelection(){
    const [player1,setPlayer1] = useState(false)
    const navigate = useNavigate();
    function choosePokemon(play){
        navigate('/pokemonStore',{ state: { player: play } })
    }
    return(<>
    <div>Player Selection Page</div>
    <table>
     <tr>
        <th><Button onClick={()=>choosePokemon('player1')}>Player 1</Button></th>
        <th><Button  onClick={()=>choosePokemon('player2')}>PLayer 2</Button></th>
     </tr>
    </table>
    
    </>)
 }

 export default playerSelection;