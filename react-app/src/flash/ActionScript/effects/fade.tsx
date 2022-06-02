// @ts-ignore
import { gsap, Power1 } from 'gsap'
import { getElement } from '../../'

const duration = 4

export const fade = (divId: string, options: any) => {
    try {
        const el = getElement(divId)

        

        if (!el) {
            console.warn('fade failed for', divId)
            return false
        }

        let onComplete = () => console.log("No onComplete action set :(")
        if (options.onComplete){
            onComplete = options.onComplete
        }

        gsap.to(`#${divId}`, {
            opacity: 1,
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
