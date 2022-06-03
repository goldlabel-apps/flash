// import { 
//     setPosition,
//     fadeIn,
// } from '../../'
import {store} from "../../_app/store"

export const mummaAS = () => {
    try {
        const { started } = store.getState().flash.data
        if (started) return
        
    } catch (error) {
        console.warn("intro error", error)
        return false
    }   
}