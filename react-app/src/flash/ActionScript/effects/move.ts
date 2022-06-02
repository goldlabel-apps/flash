// @ts-ignore
import { gsap, Power1 } from 'gsap'
import { getElement } from '../../'
const duration = 5

export const move = (divId: string, options: any) => {
    try {
        
        const el = getElement(divId)
        if (!el) {
            console.warn(divId, 'not found')
            return false
        }
        let newX = 0
        // let newY = 0
        const { x, y } = options
        if (x) newX = x
        // if (y) newY = y
        let onComplete = () => {}
        if (options.onComplete) onComplete = options.onComplete
        
        gsap.to(`#${divId}`, {
            x: newX,
            // y: newY,
            ease: Power1.easeOut,
            duration,
            //@ts-ignore
            onComplete,
        })
    } catch (error) {
        console.warn('move error', error)
        return false
    }
}
