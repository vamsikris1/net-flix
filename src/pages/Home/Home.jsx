import React,{useState} from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner1.jpg'
import hero_title from '../../assets/hero_title.png'
import Play_btn from '../../assets/play_icon.png'
import info_btn from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const [showTrailer, setShowTrailer]= useState(false);
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption_icon'/>
          <p><span className='highlight'>They Call Him OG</span>: After vanishing from Mumbai's underworld for a decade, mob boss Ojas Gambheera resurfaces seeking vengeance against rival crime lords.</p>
          <div className="hero_btns">
            <button className='btn' onClick={()=>setShowTrailer(true)}><img src={Play_btn} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_btn} alt="" />More Info</button>
          </div>
          {showTrailer && (
  <div className="trailer-overlay" onClick={()=> setShowTrailer(false)}>
      <button
        className="close-btn"
        onClick={(e) =>
          {e.stopPropagation(); setShowTrailer(false)}}
      >
        ✕
      </button>
    <div className="trailer-box" onClick={(e)=>e.stopPropagation()}>

      <iframe
        src="https://www.youtube.com/embed/29C2crcXn-E"
        title="They Call Him OG Trailer"
         allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  </div>
)}

          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
          <TitleCards title={"New Releases on Netlfix"} category={"popular"}/>
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"} />
          <TitleCards title={"Top Picks for You"} category={"now_playing"} />
          

      </div>
      <Footer />
    </div>
  )
}

export default Home
