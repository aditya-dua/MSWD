import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Routes,Route, useParams } from 'react-router-dom'

function RouterExample2() {
  return (
   <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user/1/post/1">Post # 1</Link></li>
      
    </ul>
    <Routes>
     
      <Route path="/user/:userId/post/:postId" Component={Post}></Route>
      <Route path="/" Component={Home}></Route>
      

    </Routes>
   </Router>
  );
}

function Post(){
  const {userId, postId}= useParams();

  return (<h1>
    User Id: {userId}
    Post Id: {postId}
  </h1>)
}
const Home= ()=><h1>Home Page</h1>

export default RouterExample2;
