import {atom} from 'recoil'
import options from './options'
import {getSortedCards, getRandomCard} from './card-manager'


export const currentOptionsState = atom({
  key: 'currentOptionsState',
  default: options,
})

export const allCardsState = atom({
  key: 'allCardsState',
  default: getSortedCards(),
})

export const randomCardState = atom({
  key: 'randomCardState',
  default: getRandomCard(getSortedCards()),
})

export const flipControlState = atom({
  key: 'flipControlState',
  default: false,
})