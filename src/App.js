import React from 'react'
import './Styles/app.css'
import ControlPanel from './Components/control-panel'
import FlexCenterWrapper from './Components/flex-center-wrapper';
import Card from './Components/card'
import {getCard, getSortedCards} from './Core/card-manager'
import {RecoilRoot} from 'recoil'

function App() {

  let sorted = getSortedCards()
  let shuffled = [];

  return (
    <RecoilRoot>
      <ControlPanel></ControlPanel>
      <FlexCenterWrapper>
        {sorted.map((data, index)=>{
          return(
            <Card data={data} key={index} />
          )
        })}
      </FlexCenterWrapper>
    </RecoilRoot>
  );
}

export default App;
