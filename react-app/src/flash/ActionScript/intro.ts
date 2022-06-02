import { 
    setPosition,
    fade,
} from '../'
import {store} from "../_app/store"

export const intro = () => {
    try {
        const { started } = store.getState().flash.data
        if (started) return
        setPosition("flashMenu", "topright", { top: 8, left: -8 } )
        fade("flashMenu", {direction: "in"}) 
        setPosition("textClip", "centered", { top: -4, left: 0 } )
        fade("textClip", {
            direction: "in",
            onComplete: () => {
                // fade("textClip", {
                //     direction: "out",
                //     onComplete: () => {
                //         return true
                //     }
                // })
                return true
            }
        })
               
    } catch (error) {
        console.warn("intro error", error)
        return false
    }   
}