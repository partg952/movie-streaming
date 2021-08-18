import React from 'react'
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Navbar({data,setData}) {
    const history = useHistory();
    const getData = (search_value) =>{
        setData([]);
        axios(`https://api.themoviedb.org/3/search/movie/?api_key=e1fa13c7e6a35b25826f92b2aea94264&query=${search_value}`)
        .then((response)=>{
            setData(response.data.results)
            history.push('/')
        })
    }
    return (
        <nav>
            <p id='title' onClick={()=>{
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
