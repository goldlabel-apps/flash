import { 
    setPosition,
    setFlash,
    fadeIn,
    moveTo,
} from '../../'
import { store } from "../../_app/store"

export const textAS = (action: string) => {
    try {
        const { started } = store.getState().flash.data
        // const { title, subheader } = screens[index]

        switch(action) {
            case "init":
                if (!started){
                    setPosition("text", "centered", { top: -25, left: 0 } )
                    fadeIn("text", {
                        direction: "in",
                        onComplete: () => {
                            store.dispatch(setFlash({ key:"textAS", value: {
                                initted: true,
                            }}))
                        }
                    })
                }
                break;
            case "reset":
                
                moveTo("text", "centered", { top: -25, left: 0 } )
                break;
            default:
          }        
    } catch (error) {
        console.warn("textAS error", error)
        return false
    }   
}