import { gsap, Power1 } from 'gsap'
import { getElement } from '../../'
const duration = 5

export interface OptionsShape {
    x: number
    y: number
    onComplete: any
}

export const move = (divId: string, options: OptionsShape) => {
    try {
        const el = getElement(divId)
        if (!el) console.warn(divId, 'not found')
        if (!el) return
        let newX = 0
        const { x } = options
        if (x) newX = x
        let onComplete = () => {}
        if (options.onComplete) onComplete = options.onComplete
        
        gsap.to(`#${divId}`, {
            x: newX,
            ease: Power1.easeOut,
            duration,
            onComplete,
        })
    } catch (error) {
        console.warn('move error', error)
        return false
    }
}
