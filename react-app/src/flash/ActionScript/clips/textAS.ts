import { 
    setPosition,
    fade,
} from '../../'
import { store } from "../../_app/store"

export const textAS = (action: string) => {
    try {
        const { text, started } = store.getState().flash.data
        const { title, subheader } = text
        switch(action) {
            case "init":
                if (!started){
                    setPosition("text", "centered", { top: 0, left: 0 } )
                    fade("text", {
                        direction: "in",
                        onComplete: () => {
                            console.log ("textAS init complete")
                        }
                    })
                }
                break;
            case "reset":
                console.log("textAS reset", title, subheader)
                break;
            default:
          }        
    } catch (error) {
        console.warn("textAS error", error)
        return false
    }   
}