import "./main.css";
import {
  CheckBox,
  Close,
  DeleteOutline,
  EditOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Button, Dialog, DialogTitle, Tooltip, Typography } from "@mui/material";
function List({data,index,setTodo,todo,setRefresh,refresh}){
    const[done, setDone] = useState(false)
    const[open, setOpen] = useState(false)
    const[editVal,setEditVal] = useState(data)
    const[confirm, setConfirm] = useState(false)
    const deleteHandler = ()=>{ 
            todo.splice(index,1) 
            setTodo(todo) 
            setRefresh(!refresh)
            setConfirm(false)
    }
    const editHandler = ()=>{
      todo[index] = editVal
      setTodo(todo)
      setRefresh(!refresh)
      setOpen(false)
    }
    return(
        <>
        {/* each todo list */}
            <div className="todoList">
                <div className="paraDiv">
                  <p className="paraText">{data}</p>
                </div>
                <div className="buttons">
                  <Tooltip title='done'>
                  <button onClick={()=>setDone(!done)} className="successButton button">
                
                <CheckBox style={done?{ color: "green" }:{color:'grey'}} />
              </button>
                  </Tooltip>
                  <Tooltip title="edit">
                      <button onClick={()=>setOpen(true)} className="editButton button">
                    <EditOutlined />
                  </button>
                  </Tooltip>
                  <Tooltip title="delete">
                      <button onClick={()=>setConfirm(true)} className="removeButton button">
    
                    <DeleteOutline />
                  </button>
                  </Tooltip>
                  
                </div>
              </div>
              {/* edit dialog */}
              <Dialog fullWidth open={open} onClose={()=>setOpen(false)}>
                <div style={{textAlign:'end'}}>
                  <Close onClick={()=>setOpen(false)} className="closeIcon"/>
                </div>
                <DialogTitle style={{textAlign:'center'}}>
                  <Typography variant="h5">Edit</Typography>
                </DialogTitle>
                <div className="editDiv">
                  <input className="editInput" type='text' value={editVal} onChange={(e)=>setEditVal(e.target.value)}/>
                  <Button variant="contained" className='editButton' onClick={editHandler}>Submit</Button>
                </div>
              </Dialog>

              {/* delete confirmation */}
              <Dialog open={confirm} onClose={()=>setConfirm(false)}>
                <div style={{textAlign:'end'}}>
                  <Close onClick={()=>setConfirm(false)} className="closeIcon"/>
                </div>
                <DialogTitle style={{textAlign:'center'}}>
                  <Typography variant="h5">Delete</Typography>
                </DialogTitle>
                <div className="deleteDiv">
                  <Typography sx={{mb:2}}>Are you sure you want to delete?</Typography>
                  <div>
                  <Button variant="contained" className='deleteButton' onClick={()=>setConfirm(false)}>Cancel</Button>
                  <Button variant="contained" className='deleteButton' onClick={deleteHandler}>Confirm</Button>
                  </div>
                </div>
              </Dialog>

        </>
    )
}

export default List