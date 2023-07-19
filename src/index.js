import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TaskApp from './componet/TaskApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateApp from './componet/UpdateApp';
import DeletApp from './componet/DeletApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TaskApp />} />
      <Route path='UpdateApp/:id' element={<UpdateApp />} />
      <Route path='DeletApp/:id' element={<DeletApp />} />


   

    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
