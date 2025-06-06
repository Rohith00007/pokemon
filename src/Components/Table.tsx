import {useState} from 'react'

function Table( {name} ){
  const [upName,setUpName] = useState(name);
  function handleOnDeleteClick(item){
    alert("hello"+upName[0].id);
  }
    return (<>
        <table className="my-table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
         <tbody>
        {name.map((item)=>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td><button style={{color:'red'}} onClick={()=>handleOnDeleteClick(item)}>Delete</button></td>
            <td><button style={{color:'blue'}}>Update</button></td>
          </tr>
        ))}
          </tbody>
        </table>
    </>)
}

export default Table;