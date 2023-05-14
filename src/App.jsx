import React,{useState} from 'react';
import './App.css';


function App() {

  const [newItem ,setNewItem] = useState("");
  const [items,setItems] = useState([]);

  function addItem(){

    if(!newItem){
      alert("enter an item");
      return;
    }
    const item = {
      id:Math.floor(Math.random() *1000),
      value: newItem
    }
    setItems(oldItems =>[...oldItems,item])
    setNewItem("");
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  /*
  function handleInput(event){
    setNewItem(event.target.value)
  }
 */
  return(
    <div className='App'>
      <h1> Hi! Todo List By Sevda</h1>
  <div className="todo">
     <input
     type="text"
     placeholder="add an item.."
     value={newItem}
     onChange={event =>setNewItem(event.target.value)}
     //onChange={handleInput}
     
     />

     <button className='add' onClick={()=> addItem()}>Add</button>

  </div>
    
     <ul>
      {items.map(item =>{
        return(
          <li key={item.id}> {item.value} <button className='delete' onClick={() =>deleteItem(item.id)}>Delete</button></li>
        )
      })}

     </ul>
    </div>
  );
  
}

export default App;
