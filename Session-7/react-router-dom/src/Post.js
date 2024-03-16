import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Routes,Route, useParams } from 'react-router-dom'

function Post() {
  const {userId,postId}= useParams();
  
  return (
    <div>
        <h2>User Id: {userId} Post Id:{postId}</h2>
    </div> 
    
   
  );
}


export default Post;
