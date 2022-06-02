import { RootState } from './_app/store'
import Flash from './Flash'
import Stage from './Stage'
import FlashMenu from './_app/FlashMenu'
import {setListeners} from './_app/setListeners'
import Icon from './_app/theme/Icon'
import {setFlash} from './_app/flashSlice'
import PinpongballClip from './MovieClips/PinpongballClip'
import Mumma from './MovieClips/Mumma'

import Timemachine from './MovieClips/Timemachine'

import TextClip from './MovieClips/TextClip'
import { intro } from './ActionScript/intro'
import { getDisplay } from './ActionScript/methods/getDisplay'
import { getElement } from './ActionScript/methods/getElement'
import { getSizes } from './ActionScript/methods/getSizes'
import { setPosition } from './ActionScript/methods/setPosition'
import { fade } from './ActionScript/effects/fade'
import { move } from './ActionScript/effects/move'

export {
    Flash,
    FlashMenu,
    Stage,
    PinpongballClip,
    Mumma,
    TextClip,
    Icon,
    setFlash,
    intro,
    getDisplay,
    getElement,
    setPosition,
    getSizes,
    fade,
    move,
    setListeners,
    Timemachine,
}
export const selectFlash = (state: RootState) => state.flash