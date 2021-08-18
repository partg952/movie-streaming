import React from "react";
import "./Home.css";
import axios from "axios";
import {useHistory} from 'react-router-dom';
export default function Home({ data, setData }) {
    const history = useHistory();
    const checkName = (string,n) =>{
        if(string.length > n){
            var re = string.substr(n,string.length)
            return string.replace(re,'...')

        }
        else{
            return string;
        }
    }   
  React.useEffect(() => {
      setData([]);
    for(let i=1;i<=5;i++){
        axios(
            `https://api.themoviedb.org/3/discover/movie/?api_key=e1fa13c7e6a35b25826f92b2aea94264&page=${i}`
            ).then((res) => {
                console.log(res.data);
                res.data.results.forEach((i)=>{
                    setData(prev=>[...prev,i])
                })
            });
        }
  }, []);
  return (
    <div>
      <main>
        {
            data.length!=0?
            data.map((items)=>(
                <div id='movies' onClick={()=>{
                    history.push('/info/'+items.id)
                }}>
                <img src={`https://image.tmdb.org/t/p/w500${items.poster_path}`} alt="" />
                    <span>
                        <h4>{checkName(items.title,15)}</h4>
                        <p>{checkName(items.overview,250)}</p>
                    </span>
                </div>
            ))
            :
            <h1>Loading...</h1>
        }
      </main>
    </div>
  );
}
