import logo from './logo.svg';
import './App.css';
import User from './User';
import {BrowserRouter as Router,Link, Routes,Route } from 'react-router-dom'

function UsersApp() {
  return (
   <Router>
    <ul>
      <li><Link to="/user/1">Aditya</Link></li>
      <li><Link to="/user/2">John</Link></li>
      
    </ul>
    <Routes>
     
      <Route path="/user/:userId" Component={User}></Route>
      
      

    </Routes>
   </Router>
  );
}


export default UsersApp;
