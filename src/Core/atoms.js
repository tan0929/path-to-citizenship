import {atom} from 'recoil'

const currentModeState = atom({
  key: 'currentModeState',
  default: "random",
})