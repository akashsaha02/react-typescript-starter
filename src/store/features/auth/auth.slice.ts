
import { TUser } from '@/types/user'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

type Tstate = {
    user: TUser | null
    token: string | null
}

const initialState: Tstate = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload || {}

            if (!user || !token) {
                console.error('Invalid payload received:', action.payload)
                return
            }

            state.token = token
            state.user = user
        },
        logout: state => {
            state.user = null
            state.token = null
        }
    }
})

export const { setUser, logout } = authSlice.actions

export const selectUser = (state: RootState) => state.auth?.user
export const selectToken = (state: RootState) => state.auth?.token

const authReducer = authSlice.reducer
export default authReducer