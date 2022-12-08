import React from 'react'


const Todo = (props) => {
    
    
  
    return  (<li><button onClick={()=>{props.onSelect(props.id) }}>-</button>{props.text}</li>)
    
  
}

export default Todo