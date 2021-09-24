import '../Styles/card.scoped.css'
import Flip from  'react-card-flip'
import {useState} from 'react'
import LazyLoad from 'react-lazy-load'

function Card({data}){
  const [flip, setFlip] = useState(false)
  return(
    <div className="wrapper">
      <div onClick={()=>setFlip(!flip)}>
        <LazyLoad>
        <Flip isFlipped={flip}>
            <div className='front card'>
              <img src={data.front} alt="card front" />
            </div>
            <div className='back card'>
              <img src={data.back} alt="card back"/>
            </div>
        </Flip>
        </LazyLoad>
      </div>
      <div className='audio-wrapper'>
        <audio controls src={data.audio}>
      </audio>
      </div>
    </div>
  )
}

export default Card