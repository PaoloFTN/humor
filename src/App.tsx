/* eslint-disable no-use-before-define */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors'
import Home from './pages/home'

import GlobalStyle from './style/globalStyle'
import Login from './pages/login'
import Signup from './pages/signup.tsx'
import { Auth, AuthProvider, UserAuth } from './components/context/auth-context'

interface Theme {
    palette: {
        primary: {
            main: any
        }
        secondary: {
            main: any
        }
    }
}
const theme: Theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
})

interface ProtectedRouteProps {
    user?: string | null
    children: JSX.Element
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}

const user = () => localStorage.getItem('userId')

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute user={user()}>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Signup" element={<Signup />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
