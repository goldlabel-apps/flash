// @ts-nocheck
// topleft, topmiddle, topright, centered,
// bottomleft, bottommiddle, bottomright
import { gsap, Power1 } from 'gsap'
import { getElement, getSizes } from '../../'
const duration = 1

export const moveTo = (divId, position, offset) => {
    try {
        const el = getElement(divId)
        if (!el) return false
        const sizes = getSizes(divId)
        const { stageW, stageH, elW, elH } = sizes
        let pos
        if (position === `topleft`)
            pos = {
                x: 0,
                y: 0,
            }
        if (position === `topmiddle`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: 0,
            }
        if (position === `topright`)
            pos = {
                x: stageW - elW,
                y: 0,
            }
        if (position === `centered`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH / 2 - elH / 2,
            }
        if (position === `bottomleft`)
            pos = {
                x: 0,
                y: stageH - elH,
            }
        if (position === `bottommiddle`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH - elH,
            }
        if (position === `bottomright`)
            pos = {
                x: stageW - elW,
                y: stageH - elH,
            }
        if (position === `middleleft`)
            pos = {
                x: 0,
                y: stageH / 2 - elH / 2,
            }

        const { x, y } = pos
        
        gsap.to(`#${divId}`, {
            duration,
            ease: Power1.easeOut,
            x: x + offset.left,
            y: y + offset.top,
            onComplete: () => {
                // console.log ("moveTo done")
            },
        })
    } catch (error) {
        console.log ("moveTo error", error)
        return false
    }
}
