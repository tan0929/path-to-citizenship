import '../Styles/card.scoped.css'
import Flip from  'react-card-flip'
import {useState} from 'react'
import { getOptionValue } from '../Core/options'
import { useRecoilState } from 'recoil'
import {flipControlState} from '../Core/atoms'



function Card({data, options, flipControl}){
  const [forceFlip, setForceFlip] = useRecoilState(flipControlState);
  const [clickFlip, setClickFlip] = useState(false)
  const flip = flipControl? forceFlip: clickFlip;
  const setFlip = flipControl? setForceFlip : setClickFlip;
  const text = getOptionValue(options, 'text');
  const audio = getOptionValue(options, 'audio');
  return(
    <div className="wrapper">
    {text ?
      <div onClick={()=>setFlip(!flip)}>
        <Flip isFlipped={flip}>
          <div className='front text clickable'>
            <img src={data.front} alt="text front" />
            {!audio && <div className="empty-bottom"></div>}
          </div>
          <div className='back text clickable'>
            <img src={data.back} alt="text back"/>
            {!audio && <div className="empty-bottom"></div>}
          </div>
        </Flip>
      </div>
      :
      <div className="text quest-id">{data.id}</div>
    }
    {audio &&
      <div className='audio-wrapper'>
        <audio crossOrigin="anonymous" controls src={data.audio}>
      </audio>
      </div>
    }
    </div>
  )
}

export default Card