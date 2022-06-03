import { onWindowResize } from "../../"

export const setListeners = () => {
    window.addEventListener( 'resize', onWindowResize )
    return true;
}