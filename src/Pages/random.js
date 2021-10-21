import {getRandomCard} from '../Core/card-manager'
import {currentOptionsState, randomCardState, allCardsState, flipControlState} from '../Core/atoms'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import FlexCenterWrapper from '../Components/flex-center-wrapper';
import Card from '../Components/card'
import '../Styles/random-page.scoped.css'
import {FaDice} from 'react-icons/fa'

function Random(){
    const allCards = useRecoilValue(allCardsState)
    const [randomCard, setRandomCard] = useRecoilState(randomCardState)
    const setFlip = useSetRecoilState(flipControlState)
    const options = useRecoilValue(currentOptionsState)

    function handleOnButtonClick(e){
        setFlip(false)
        setRandomCard(getRandomCard(allCards))
    }

    return(<FlexCenterWrapper>
        <div className="space"></div>
        <Card data={randomCard} options={options} flipControl />
        <button id="refresh" onClick={handleOnButtonClick}><FaDice /></button>
    </FlexCenterWrapper>)
}

export default Random;