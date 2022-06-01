import { RootState } from './app/store'
import Flash from './Flash'
import Stage from './components/Stage'
import PinpongballClip from './MovieClips/PinpongballClip'
import { bouncePingpongball } from './ActionScript/bouncePingpongball'

import {setFlash} from './app/flashSlice'

import { getDisplay } from './ActionScript/methods/getDisplay'
import { getElement } from './ActionScript/methods/getElement'
import { getSizes } from './ActionScript/methods/getSizes'
import { setPosition } from './ActionScript/methods/setPosition'

import { fade } from './ActionScript/effects/fade'

export const selectFlash = (state: RootState) => state.flash
export {
    Flash,
    Stage,
    PinpongballClip,
    setFlash,
    bouncePingpongball,
    getDisplay,
    getElement,
    setPosition,
    getSizes,
    fade,
}
