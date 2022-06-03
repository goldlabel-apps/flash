import { store} from "../../_app/store"
export const onWindowResize = () => {
    try {
        const { started } = store.getState().flash.data
        // console.log ("started", started)
        if (started){
            console.warn("Reset these clips", [
                "timemachine",
                "prev",
                "next",
            ])
        }
        
    } catch (error) {
        console.warn("onWindowResize error", error)
        return false
    }   
}