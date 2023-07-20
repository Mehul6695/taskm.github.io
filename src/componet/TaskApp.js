
import React ,{useState,useEffect,useRef}from 'react';
import axios from 'axios';
import Swal from 'sweetalert';
import '../componet/UpdateApp';

import { useNavigate} from 'react-router-dom';

export default function TaskApp() {

  const [data,setData]=useState([]);
  useEffect(()=>{

      axios.get("https://task-4ym2.onrender.com/task")
      // axios.get("http://localhost:4000/task")
      .then((response)=>{
      
          setData(response.data)

      });
  },[data]);

  const task=useRef("");
  const date=useRef("");
  const Navigate=useNavigate("");

  const addtask=()=>{
    var insert ={
      task:task.current.value,
      date:date.current.value,
    }
    axios.post("https://task-4ym2.onrender.com/task",insert)
    // axios.post("http://localhost:4000/task",insert)
    .then(()=>{
     
           
      
    });
    Swal(
      'Your task is Ready!',
      'Press ok and finish your task!',
      'success');
   
    // alert("Your Task is Added");
  }
  




  return (
    <div>
   <div className='mainpage'>
    <center>
     <div className='container'>
      <h1 className=' rounded-3 p-2 bg-dark text-white'>Task Manegment Application</h1>
      </div>
      <button type='button' className='btn btn-success mt-5 shadow'  data-bs-toggle="modal" data-bs-target="#add">Add a Task</button>
      </center>

      <div className="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title ms-5" id="exampleModalLabel">Add a Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className='form-control'>
          Task
          <input type='text' className='form-control' placeholder='Add a Task' ref={task}  />
          </div>
          <div className='form-control mt-2'>
          Day and Date
          <input type='date' className='form-control' placeholder='Add a Task' ref={date}  />
          </div>
          <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" onClick={addtask}>Save changes</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>






     </div>
     {data && data.map((row)=>{
      return(
        <>
        
        <center>
       <div className="card text-center mt-5 shadow" style={{width:"50%"}}>
  <div className="card-header bg-dark text-white">
    <h3>Your Task</h3>
  </div>
  <div className="card-body">

    <h4 className="card-title">Your Task is : {row.task}</h4>
    <h5 className="card-title">Last date of Submission : {row.date}</h5>
    <button type="button" className='bi bi-trash btn btn-dark text-white mt-2' onClick={()=>Navigate(`/DeletApp/${row.id}`)}   ></button>
    
    <button type="button" className='btn shadow bi bi-pencil btn btn-dark text-white ms-5 mt-2'  onClick={()=>Navigate(`/UpdateApp/${row.id}`)}></button>
   


  

   
  
  </div>
  
 
</div>
</center>
        


        </>
      )
     })}
    </div>
    
  )
}


