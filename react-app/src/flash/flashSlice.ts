import pJSON from "../../package.json"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    data: {
        pJSON,
        index: 0,
        text: {
            title: 'Hello',
            subheader: 'World',
        },
        screens:[
            {
                screen1: {
                    type: 'text',
                    title: 'Screen 1',
                    subheader: 'screen1Subheader',
                },
            },
            {
                screen2: {
                    type: 'text',
                    title: 'Screen 2',
                    subheader: 'screen2Subheader',
                },
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
