import { User } from 'firebase/auth'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import * as HumorSDK from '../../sdk'

interface AuthContextProviderProps {
    children: JSX.Element | JSX.Element[]
}

export type UserAuth = {
    userUid: string | null
    userName: string | null
    token: string | null
    logged: boolean
    email: string | null
}
interface AuthContext {
    authData: UserAuth | undefined
    setUser: (val: User) => void
    removeUser: () => void
}

export const AuthContext = React.createContext<AuthContext>({
    authData: { userUid: null, userName: null, token: null, email: null, logged: false },
    setUser: (val) => console.log(val),
    removeUser: () => console.log('removed'),
})

export const AuthProvider = ({ children }: AuthContextProviderProps): JSX.Element => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [authData, setAuthData] = React.useState<UserAuth>()

    // save user function
    const setUserInStorage = async (val: User) => {
        localStorage.setItem('userId', val.uid)
        localStorage.setItem('token', await val.getIdToken())
        localStorage.setItem('userEmail', val.email || '')
        localStorage.setItem('userName', val.displayName || '')
    }

    const removeUser = () => {
        localStorage.clear()
    }

    const getAuthData = React.useCallback(() => {
        const userUid = localStorage.getItem('userId')
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('userEmail')
        const username = localStorage.getItem('userName')

        return {
            userUid: userUid,
            token: token,
            email: email,
            userName: username,
            logged: !!userUid && !!token,
        }
    }, [])

    React.useEffect(() => {
        const token = HumorSDK.getUserTokenFirebase()
        console.log(authData)
        if (token && token !== authData?.token) localStorage.setItem('token', token)

        setLoading(false)
    }, [getAuthData])

    React.useEffect(() => {
        setAuthData(getAuthData())
    }, [getAuthData])

    return (
        <AuthContext.Provider value={{ authData, setUser: setUserInStorage, removeUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const Auth = () => React.useContext(AuthContext)
