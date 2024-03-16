import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Routes,Route } from 'react-router-dom'

function App() {
  return (
   <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/test">Broken</Link></li>
    </ul>
    <Routes>
     
      <Route path="/contact" Component={Contact}></Route>
      <Route path="/" Component={Home}></Route>
      <Route Component={NotFound}></Route>

    </Routes>
   </Router>
  );
}
const Home= ()=><h1>Home Page</h1>
const About= ()=><h1>About Page</h1>
const Contact= ()=><h1>Contact Page</h1>
const NotFound = ()=><h1>Page Not Found</h1>
export default App;
