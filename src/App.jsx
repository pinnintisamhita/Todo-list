import React from "react";
import { useState } from "react";
import Todo from '../src/components/Todo';
import './Todo.css'
import logo from './todo-list.png'
const App =() =>{
    const[inputList,setInputList]=useState("")
    const[Items,setItems]=useState([]);
    

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }
    const listOfItems=()=>{
          setItems((oldItems) =>{
            return [...oldItems,inputList]
          })
          setInputList('')
    }
    const deleteItems =(id) =>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index!==id

        })
      })
    }

    return<>
     <div className="main-div">
        <div className="center-div">
         <br/>
         <img src={logo} className='logo' />
         <h1>Todo List</h1>
         <br/>
         <div className="inside-div">
         <input type='text' placeholder="Add a item" value={inputList} onChange={itemEvent} />
         <button onClick={listOfItems} >  +  </button>
         <ol>
         { Items.map((itemval,index) => {
            return < Todo key={index} id={index} text={itemval} onSelect={deleteItems}/>
           })
           }
   
         </ol>


         </div>
        </div>
       </div>
    </>
}
export default App