// @ts-ignore
// import debounce from "debounce"
import { setFlash, getDisplay, textAS } from "../../"
import { store} from "../../_app/store"

export const onWindowResize = () => {
    try {
        const { started } = store.getState().flash.data
        // console.log ("started", started)
        if (started){
            // debounce(() => {
            //     console.log("debounced")
            //     store.dispatch(setFlash({key: "display", value: getDisplay() }))
            //     textAS("reset")
            // }, 1000)
        }
        store.dispatch(setFlash({key: "display", value: getDisplay() }))
        textAS("reset")
    } catch (error) {
        console.warn("onWindowResize error", error)
        return false
    }   
}