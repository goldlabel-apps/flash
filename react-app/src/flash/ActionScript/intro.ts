import { 
    setPosition,
    fade,
    move,
    getDisplay,
} from '../'
import {store} from "../_app/store"

export const intro = () => {
    try {
        const { started } = store.getState().flash.data
        if (started) return
        setPosition("timemachine", "middleleft", { top: -25, left: -100 } )
        fade("timemachine", {direction: "in"})
        setPosition("flashMenu", "topright", { top: 8, left: -8 } )
        fade("flashMenu", {direction: "in"}) 
        setPosition("textClip", "centered", { top: -4, left: 0 } )
        fade("textClip", {
            direction: "in",
            onComplete: () => {}
        })

        // let newX = 0
        // // let newY = 0
        // const display = getDisplay()
        // if (display){
        //     newX = display.displayW /2
        // }
        // move('timemachine', {
        //     x: newX,
        //     // y: 0,
        // })


    } catch (error) {
        console.warn("intro error", error)
        return false
    }   
}