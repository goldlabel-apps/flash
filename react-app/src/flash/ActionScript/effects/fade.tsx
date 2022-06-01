// @ts-ignore
import { gsap, Power1 } from 'gsap'
import { getElement } from '../../'

const duration = 2

export const fade = (divId: string, options: any) => {
    try {
        const el = getElement(divId)
        if (!el) {
            console.warn('fade failed for', divId)
            return false
        }
        gsap.to(`#${divId}`, {
            opacity: 1,
            ease: Power1.easeOut,
            duration,
            //@ts-ignore
            onComplete: () => {
                // console.log ("fade complete.")
                return true
            },
        })
    } catch (error) {
        console.warn('fade error', error)
        return false
    }
}
