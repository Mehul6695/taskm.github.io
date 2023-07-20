import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function UpdateApp() {
  const task = useRef("");
  const date = useRef("");
  const { id } = useParams("");

 

  useEffect(() => {
    axios.get(`https://task-4ym2.onrender.com/task/${id}`).then((response) => {
      // axios.get(`http://localhost:4000/task/${id}`).then((response) => {
      task.current.value = response.data.task;
      date.current.value = response.data.date;
    });
  }, []);

  const updatetask = () => {
    var upd = {
      task: task.current.value,
      date: date.current.value,
    };

    axios.put(`https://task-4ym2.onrender.com/task/${id}`, upd).then((response) => {
      // axios.put(`http://localhost:4000/task/${id}`, upd).then((response) => {
      Swal({
        title: "success",
        text: "Task Updated successfully",
        icon: "success",
        confirmButtonText: "Ok",
      })
    
      
     
    });
  };
  return (
    
       <div className='mainpage'>
    <center>
     <div className='container'>
      <h1 className=' rounded-3 p-2 bg-dark text-white'>Edit Task</h1>
      </div>
      </center>

      <center>
        <div className="card text-center mt-5 shadow" style={{ width: "50%" }}>
          <div className="card-header bg-dark text-white">
            <h3>Your Task</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-control">
              Edit Your Task
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a Task"
                  ref={task}
                />
              </div>
              <div className="form-control mt-2">
              Edit Your Tast Day and Date
                <input
                  type="date"
                  className="form-control"
                  placeholder="Add a Task"
                  ref={date}
                />
              </div>
              <div className="modal-footer">
                <Link to="/taskm.github.io">
                  {" "}
                  <button type="button" class="btn btn-secondary mt-2">
                    Close
                  </button>
                </Link>
                <Link to="/taskm.github.io">
                <button
                  type="submit"
                  class="btn btn-primary ms-2 mt-2"
                  onClick={updatetask}
                >
                  Save changes
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
}
