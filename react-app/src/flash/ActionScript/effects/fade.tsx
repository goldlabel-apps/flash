import { gsap, Power1 } from 'gsap'
import { getElement } from '../../'
const duration = 1

export const fadeIn = (divId: string, options: any) => {
    try {
        const el = getElement(divId)
        if (!el) {
            console.warn('fadeIn failed for', divId)
            return false
        }
        let onComplete = () => {}
        if (options.onComplete) onComplete = options.onComplete
        gsap.to(`#${divId}`, {
            opacity: 1,
            ease: Power1.easeOut,
            duration,
            //@ts-ignore
            onComplete,
        })
    } catch (error) {
        console.warn('fadeIn error', error)
        return false
    }
}
