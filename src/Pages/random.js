import {getRandomCard} from '../Core/card-manager'
import {currentOptionsState, randomCardState, allCardsState} from '../Core/atoms'
import { useRecoilState, useRecoilValue } from 'recoil';
import FlexCenterWrapper from '../Components/flex-center-wrapper';
import Card from '../Components/card'
import '../Styles/random-page.scoped.css'

function Random(){
    const allCards = useRecoilValue(allCardsState)
    const [randomCard, setRandomCard] = useRecoilState(randomCardState)
    const options = useRecoilValue(currentOptionsState)

    function handleOnButtonClick(e){
        setRandomCard(getRandomCard(allCards))
    }

    return(<FlexCenterWrapper>
        <div className="space"></div>
        <Card data={randomCard} options={options} />
        <button id="refresh" onClick={handleOnButtonClick}>Refresh</button>
    </FlexCenterWrapper>)
}

export default Random;