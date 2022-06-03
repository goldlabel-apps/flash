import pJSON from "../../package.json"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { getDisplay } from "./"
console.warn(`${pJSON.name} ${pJSON.version}`)

const initialState: any = {
    data: {
        index: 1,
        showPrevNext: false,
        showFlashMenu: false,
        screens:[
            {
                type: 'text',
                title: 'hello',
                subheader: 'world',
            },
            {
                type: 'text',
                title: 'screen 2',
                subheader: 'this is flash',
            },
        ],
    },
}

export const flashSlice = createSlice({
    name: 'flash',
    initialState,
    reducers: {
        setFlash: (state, action: PayloadAction<any>) => {
            const { key, value } = action.payload
            state.data = { ...state.data, [key]: value }
        },
    },
})

export const { setFlash } = flashSlice.actions
export default flashSlice.reducer
