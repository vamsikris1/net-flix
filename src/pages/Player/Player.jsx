import React, { useEffect,useState } from 'react'
import "./Player.css"
import back_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}= useParams();
  const navigate = useNavigate();


  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
   })


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjRiNTNmZTkwM2UyMzg3MjlmMTU2MjBmZWNiODk4ZSIsIm5iZiI6MTc2NzE4Mjc4Ny4wMDMsInN1YiI6IjY5NTUxMWMyYmY1MzhiN2Y0ZmQ3YTNjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw7IVnOOCymV-LoA6Y0zYAJKNzChkpumY9xghpslTCE'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className='player'>
      <img src={back_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>
    </div>
  )
}

export default Player
