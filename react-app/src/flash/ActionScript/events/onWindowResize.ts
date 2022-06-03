export const onWindowResize = () => {
    try {
        console.warn("onWindowResize")
    } catch (error) {
        console.warn("onWindowResize error", error)
        return false
    }   
}