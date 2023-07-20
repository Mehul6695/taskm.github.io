import { useEffect} from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from "sweetalert";
// CRUD store=>Post , show=>get, edit =>get, update=>put, delete=>delete
export default function DeleteApp() 
{
// get id here
const{id}=useParams();

useEffect(()=>{
// call delete api on category
axios.delete(`https://task-4ym2.onrender.com/task/${id}`,id).then(()=>{
  // axios.delete(`http://localhost:4000/task/${id}`,id).then(()=>{
Swal({
    title: 'success',
    text: 'Category deleted successfully',
    icon: 'success',
    confirmButtonText: 'Ok'
  });
  //Navigate('/admin-login/manage-category');
  //setData(response.data);
  window.location='/taskm.github.io';
});
},[]);
 
  return (
    <div>    
   
    </div>
  )
}
