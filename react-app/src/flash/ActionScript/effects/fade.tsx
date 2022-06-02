// @ts-ignore
import { gsap, Power1 } from 'gsap'
import { getElement } from '../../'
const duration = 2

export const fade = (divId: string, options: any) => {
    try {
        let dir = "in"
        const { direction } = options
        if (direction) dir = direction
        const el = getElement(divId)

        if (!el) {
            console.warn('fade failed for', divId)
            return false
        }
        let onComplete = () => {}
        if (options.onComplete){
            onComplete = options.onComplete
        }
        let targetOpacity = 1
        if (dir === "out") targetOpacity = 0
        gsap.to(`#${divId}`, {
            opacity: targetOpacity,
            ease: Power1.easeOut,
            duration,
            //@ts-ignore
            onComplete,
        })
    } catch (error) {
        console.warn('fade error', error)
        return false
    }
}
