

import FlexCenterWrapper from '../Components/flex-center-wrapper';
import Card from '../Components/card'
import {useRecoilValue} from 'recoil'
import {allCardsState, currentOptionsState} from '../Core/atoms'

function Home(){
    const allCards = useRecoilValue(allCardsState);

    const options = useRecoilValue(currentOptionsState)

    return(
        <FlexCenterWrapper>
            {allCards.map((data, index)=>{
                return(
                    <Card data={data} options={options} key={index} />
                )
            })}
        </FlexCenterWrapper>
    )
}

export default Home