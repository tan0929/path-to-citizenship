import '../Styles/control-panel.scoped.css'

const PanelButton = ({text, callback})=>{
  return(
    <div onClick={callback} className="button">
      {text}
    </div>
  )
}

function Sort(){
  console.log("sorteeeee");
}

function ControlPanel(){
  return (
    <div id="panel">
      <PanelButton text={"All"} callback={Sort}/>
      <PanelButton text={"Random"} callback={Sort}/>
      <PanelButton text={"test2"} callback={Sort}/>
      {/* <PanelButton text={"Text"} callback={Sort}/>
      <PanelButton text={"Audio"} callback={Sort}/> */}
    </div>
  )
}

export default ControlPanel;