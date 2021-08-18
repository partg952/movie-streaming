import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home'
import Info from './components/Info';
import Navbar from './components/Navbar';
function App() {
  const [data,setData] = useState([]);
  console.log(data);
  return (
    <div className="App">
      <Router>
        <Navbar data={data} setData={setData} />
      <Route exact path='/'>
          <Home data={data} setData={setData}/>
      </Route>
      <Route path='/info/:id'>
        <Info/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
