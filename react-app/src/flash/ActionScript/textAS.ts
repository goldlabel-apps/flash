import { 
    setPosition,
    fade,
    // move,
    // getDisplay,
} from '../'
import { store} from "../_app/store"


export const textAS = (action: string) => {

    try {
        const { text } = store.getState().flash.data
        const { title, subheader } = text

        switch(action) {
            case "init":
                console.log("textAS init", title, subheader)
                break;
            case "reset":
                console.log("textAS reset", title, subheader)
                break;
            default:
          }

        // setPosition("text", "centered", { top: 0, left: 0 } )

        // fade("text", {
        //     direction: "in",
        //     onComplete: () => {
        //         // console.log ("faded in.")
        //     }
        // })
    } catch (error) {
        console.warn("intro error", error)
        return false
    }   
}