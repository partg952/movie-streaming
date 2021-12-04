import React from 'react'
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Navbar({data,setData}) {
    const history = useHistory();
    const getData = (search_value) =>{
        setData([]);
        axios(`https://movie-code.herokuapp.com/search?q=`+search_value)
        .then((response)=>{
            setData(response.data)
            
            history.push('/')
        })
    }
    return (
        <nav>
            <p id='title' onClick={()=>{
                setData([]);
        axios(
          `https://movie-code.herokuapp.com/`
          ).then((res) => {
              console.log(res.data);
              setData(res.data);
          });
          
                history.push('/')
            }}>Beamflix</p>   
            <div id="search">
                <input onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                       getData(e.target.value) 
                    }
                }} type="text" />
                <button><SearchIcon/></button>
            </div>
        </nav>
    )
}
