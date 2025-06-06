import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ToDoList from '../ToDoList'
import Table from '../Components/Table'
import {useSelector , useDispatch} from 'react-redux'
import { setPopUp } from '../Store/CounterSlice';
import PlayerSelection from'./PlayerSelection';
import PokemonStore from './PokemonStore';


function WelcomePage() {
    // const [count, setCount] = useState(0)
    //const [popUp, setPopUp] = useState(false);
    const pop = useSelector((store)=>store.popUp);
    const [visitStore,setVisitStore] = useState(false)
    // const id = useSelector((store)=>store.value);
    const dispatch = useDispatch();
    const storeVlaues = useSelector((store)=>store.name);
    const storeAllValues = useSelector((store)=>store.allValues)
    const navigate = useNavigate();
    const handleDeleteClick = () => {
     // setPop(false);
    };
  
    const handleAddClick = () =>{
      // setPop(true);
      dispatch(setPopUp({popUp:true}))
    }
    const handlePokemonStore = () =>{
      navigate('/playerSelection')
      // navigate('/pokemonStore');
    }
  
  
    
  
  
    return (
      <>
        <div>
        {!pop &&<div> <button style={{background:'green'}} onClick={()=>handleAddClick()}>ADD</button>
        </div>}
        {!pop && <Table name={storeAllValues}/>}
        </div>
        <div>
        {pop && <ToDoList />}
        </div>
        <div>
          <button style={{background:'Red'}}  onClick={handlePokemonStore}> Visit Pokemon Store</button>
          </div>
      </>
    )
  }

  export default WelcomePage;
  