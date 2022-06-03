import { RootState } from './_app/store'
import Flash from './Flash'
import Stage from './Stage'
import MovieClip from './MovieClip'
import FlashMenu from './_app/FlashMenu'
import { setListeners } from './ActionScript/events/setListeners'
import { onWindowResize } from './ActionScript/events/onWindowResize'
import Icon from './_app/theme/Icon'
import {setFlash} from './flashSlice'
import Mumma from './MovieClips/Mumma'
import Pinpongball from './MovieClips/Pinpongball'
import Timemachine from './MovieClips/Timemachine'
import Text from './MovieClips/Text'

import { getDisplay } from './ActionScript/methods/getDisplay'
import { getElement } from './ActionScript/methods/getElement'
import { getSizes } from './ActionScript/methods/getSizes'
import { setPosition } from './ActionScript/methods/setPosition'
import { 
    fadeIn,
} from './ActionScript/effects/fade'
import { move } from './ActionScript/effects/move'

import { textAS } from './ActionScript/clips/textAS'

export {
    Flash,
    setFlash,
    onWindowResize,
    Stage,
    MovieClip,
    Timemachine,
    Pinpongball,
    Mumma,
    Text,
    textAS,
    FlashMenu,
    getDisplay,
    getElement,
    setPosition,
    getSizes,
    fadeIn,
    move,
    setListeners,
    Icon,
}
export const selectFlash = (state: RootState) => state.flash
