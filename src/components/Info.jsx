import React from 'react'
import './Info.css';
import { useParams } from 'react-router';
import axios from 'axios';
export default function Info() {
    const [info,setInfo] = React.useState([]);
    const [url,setUrl] = React.useState('');
    const [id,setId] = React.useState();
    console.log(id);
    React.useEffect(()=>{
        axios.post(`https://movie-code.herokuapp.com/info`,{
            "url":"https://moviestars.to"+localStorage.getItem("url")
        })
        .then((response)=>{
            console.log(response.data);
            setInfo(response.data)
            setId(response.data[0].id)
            
        })
        
    },[])
    if(id!=undefined){
        axios("https://movie-code.herokuapp.com/watch?id="+id+"&server=4").then(res=>{
            setUrl(res.data)
        })
    }
    return (
        <>
        {
            info.length!=0 ? 
            <div>
            <iframe src={url} frameborder="0" style={{
                overflow: 'auto',
            }} allowFullScreen  height="500px" width="100%"></iframe>
                <div id="info">
                <img src={info[0].poster} alt="" />
                    <h1>{info[0].title}</h1>
                    <h3>{info[0].summary}</h3>
                    <div>
                    {
                        info[0].desc!=null && 
                        info[0].desc.map(item=>{
                            return(
                                <p>{item}</p>
                                )
                            })
                        }
                        </div>
                        </div>
                        </div>

            :
            <h1>Loading...</h1>                        
                    }
            </>
        )
}
