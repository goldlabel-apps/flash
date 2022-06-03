import { 
    getElement,
    setPosition,
    fade,
} from '../../'

export const pingpongballAS = () => {
    try {
        const divId = "pingpongball"
        const el = getElement(divId)
        if (!el) return false
        setPosition(el.id, "centered", {top:0, left:0} )
        fade(el.id, {})
        return true
    } catch (error) {
        console.warn("pingpongballAS error", error)
        return false
    }   
}