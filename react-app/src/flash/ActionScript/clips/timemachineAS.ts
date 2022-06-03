import { 
    getElement,
    // setPosition,
    // fadeIn,
} from '../../'

export const timemachineAS = () => {
    try {
        const divId = "pingpongball"
        const el = getElement(divId)
        if (!el) return false
        // setPosition(el.id, "centered", {top:0, left:0} )
        // fade(el.id, {})
        return true
    } catch (error) {
        console.warn("bouncePingpongball error", error)
        return false
    }   
}