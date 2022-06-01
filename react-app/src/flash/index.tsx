import { RootState } from './app/store'
import Flash from './Flash'
import SkeletonVariants from './components/SkeletonVariants'
import Stage from './components/Stage'

export const selectFlash = (state: RootState) => state.flash

export {
    Flash,
    Stage,
    SkeletonVariants,
}
