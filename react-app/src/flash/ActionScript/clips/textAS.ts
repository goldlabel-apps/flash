import { 
    setPosition,
    setFlash,
    fadeIn,
} from '../../'
import { store } from "../../_app/store"

export const textAS = (action: string) => {
    try {
        const { screens, started, index } = store.getState().flash.data
        const { title, subheader } = screens[index]

        switch(action) {
            case "init":
                if (!started){
                    setPosition("text", "centered", { top: -25, left: 0 } )
                    fadeIn("text", {
                        direction: "in",
                        onComplete: () => {
                            store.dispatch(setFlash({ key:"textAS", value: {
                                initted: true,
                                status: "visible",
                            } }))
                            // console.log ("textAS init complete")
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