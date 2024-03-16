import logo from './logo.svg';
import './App.css';
import Post from './Post';
import {BrowserRouter as Router,Link, Routes,Route,useMatch, useParams } from 'react-router-dom'

function User() {
  const userId= useParams();
  const {url} = useMatch();
  return (
    <div>
        <h2>User Id: {userId}</h2>  
    <ul>
      <li><Link to={`${url}/post/1`}>Post 1</Link></li>
      <li><Link to={`${url}/post/2`}>Post 2</Link></li>
      
    </ul>
   
  
    </div>
   
  );
}


export default User;
