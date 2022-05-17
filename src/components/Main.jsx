import "./main.css";
import { useEffect, useState } from "react";
import List from "./List"
import { ListAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";

 
function Main() {
    const[todo, setTodo] = useState([])
    const[input, setInput] = useState('')
    const[refresh, setRefresh] = useState()

    const submitHandler = ()=>{ 
       if(input.trim()==='')
       {
         alert('cannot insert empty string')
         return ''
       }
        setTodo([...todo,input])
        setInput('')
    }
    useEffect(()=>{ 

    })
    console.log(todo); 
  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <input className="input" value={input} onChange={ e => setInput(e.target.value)} type="text" />
          <button onClick={submitHandler} className="submitButton">Submit</button>
        </div>

        <div className="textDiv">
          <h1 className="headingText">Todo List</h1>
        </div>
        <section className="section1">
          {todo.length>0?todo.map((data,index)=>{
              return(
                <List index={index} data={data} setTodo={setTodo} todo={todo} setRefresh={setRefresh} refresh={refresh}/>
              )
          }):
          <div >
            <div style={{textAlign:'center',marginTop:'10px'}}>
            <ListAlt style={{fontSize:'44px',color:'grey'}}/>
            </div>
            <Typography variant="h5" style={{color:'grey'}}>Add your first Todo</Typography>
          </div>
          }
        </section>
      </div>
    </div>
  );
}

export default Main;
