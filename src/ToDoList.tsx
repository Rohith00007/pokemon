import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { setPopUp, setStoreName ,setallValues} from "./Store/CounterSlice";

function toDoList(){
    const storeName = useSelector((state)=>{ console.log('Redux state:', state.popUp);
    state.name
    }) ;
    let [name,setName] = useState(storeName);
    let [description,setDescription] = useState('');
    const dispatch = useDispatch();
    function SubmitClick(){
    // alert("changedName"+name + "Store" +storeName.name)
   //dispatch(setStoreName({ name: name, description: "Updated by user" }));
   dispatch(setallValues({name:name,description:description}));
   dispatch(setPopUp({popUp:false}))
    }

    function updateDescription(changed){
        setDescription(changed);
    }
    function updateName(changed){
        // alert(changed)
        setName(changed);
    }

return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name: <input type='text' placeholder="Enter The Name" onChange={(e)=>updateName(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>Description: <input type='text' placeholder="Enter The Des" onChange={(e)=>updateDescription(e.target.value)}></input></td>
            </tr>
            <tr>
                <td><button type="submit" onClick={SubmitClick}>Update</button></td>
            </tr>
        </tbody>
    </table>
    </>
)
}

export default toDoList;