import { 
    getElement,
    setPosition,
} from '../../'

export const pingpongballAS = () => {
    try {
        const divId = "pingpongball"
        const el = getElement(divId)
        if (!el) return false
        return true
        // setPosition(el.id, "centered", {top:0, left:0} )
    } catch (error) {
        console.warn("pingpongballAS error", error)
        return false
    }   
}