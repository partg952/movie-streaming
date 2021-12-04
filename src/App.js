import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    setData([]);

    axios(`https://movie-code.herokuapp.com/`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar data={data} setData={setData} />
        <Route exact path="/">
          <Home data={data} setData={setData} />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Router>
    </div>
  );
}

export default App;
