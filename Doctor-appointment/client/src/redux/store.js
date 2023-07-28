import {configurestore} from ' @reduxjs/toolkit'
import { alertSlice } from './features/alertSlice'

export default configurestore({
    reducer:{
        alert:alertSlice.reducer
    }
})