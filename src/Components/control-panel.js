import '../Styles/control-panel.scoped.css'
import { Link } from "react-router-dom";
import FlexCenter from '../Components/flex-center-wrapper'
import { useRecoilState } from 'recoil';
import { currentOptionsState } from '../Core/atoms'
import { useState } from 'react';


function Toggle({text, target}){

  const [options, setOptions] = useRecoilState(currentOptionsState)
  const [chk, setchk] = useState(true)

  function onToggleChange(e){
    const checked = e.target.checked;
    if(!checked 
      && options.filter(o=>o.active===true).length===1 
      && options.find(o=>o.active===true).name===target){
      return
    }

    let modified = options.map(o=> o.name===target? ({name:target, active:checked}) : o);
    setchk(!chk);
    setOptions([...modified]);
  }

  return(
    <div className="toggle">
      <FlexCenter>
        <div>{text}</div>
        <label className="switch">
          <input type="checkbox" checked={chk} onChange={onToggleChange}/>
          <span className="slider"></span>
    </label>
      </FlexCenter>
    </div>
  )
}

function ControlPanel(){
  return (
    <div id="panel">
      <Link to="/" className="link">Full List</Link>
      <Link to="/random" className="link">Random</Link>
      <Toggle text="Text" target='text'/>
      <Toggle text="Audio" target='audio'/>
    </div>
  )
}

export default ControlPanel;