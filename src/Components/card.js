import '../Styles/card.scoped.css'
import Flip from  'react-card-flip'
import {useState} from 'react'


function Card({data}){
  const [flip, setFlip] = useState(false)
  return(
    <div className="wrapper">
      <div onClick={()=>setFlip(!flip)}>
      
        <Flip isFlipped={flip}>
            <div className='front card'>
              <img src={data.front} alt="card front" />
            </div>
            <div className='back card'>
              <img src={data.back} alt="card back"/>
            </div>
        </Flip>
    
      </div>
      <div className='audio-wrapper'>
        <audio controls src={data.audio}>
      </audio>
      </div>
    </div>
  )
}

export default Card