import { 
    setPosition,
    fade,
    // move,
    // getDisplay,
} from '../'
import {store} from "../_app/store"

export const textAS = () => {
    try {
        const { started } = store.getState().flash.data
        if (started) return
        setPosition("text", "centered", { top: 0, left: 0 } )
        fade("text", {
            direction: "in",
            onComplete: () => {
                console.log ("faded in.")
            }
        })


    } catch (error) {
        console.warn("intro error", error)
        return false
    }   
}