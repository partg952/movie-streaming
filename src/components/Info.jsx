import React from 'react'
import './Info.css';
import { useParams } from 'react-router';
import axios from 'axios';
export default function Info() {
    let url;
    const {id} = useParams();
    const [info,setInfo] = React.useState([]);
    React.useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=e1fa13c7e6a35b25826f92b2aea94264`)
        .then((response)=>{
            console.log(response.data);
            setInfo(response.data)
        })
    },[id])
    return (
        <div>
                <iframe src={`https://movieapi.to/embed/${info.imdb_id}`} frameborder="0"></iframe>
                <div id="info">
                    <img src={"https://image.tmdb.org/t/p/w500"+info.poster_path} alt="" />
                    <h1>{info.title}</h1>
                    <h3>{info.overview}</h3>
                    <div id="genres">
                    {
                        info.genres!=null && 
                        info.genres.map(genre=>{
                            return(
                                <p>{genre.name}</p>
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    )
}
