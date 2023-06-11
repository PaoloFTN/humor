import { Box, Button, Card, Container, InputBase, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link, Navigate, Router, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Auth } from '../../components/context/auth-context'
import * as HumorSdk from '../../sdk'

const LoginWrap = styled.section`
    flex: 1;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Login: React.FC = () => {
    const theme = useTheme()
    const [email, setEmail] = React.useState<string>()
    const [password, setPassword] = React.useState<string>()
    const navigate = useNavigate()

    const { setUser, authData } = Auth()

    const handleLogin = async () => {
        try {
            if (email && password) {
                const fbUser = await HumorSdk.loginUser(email, password)
                if (fbUser) setUser(fbUser)
                navigate('/')
            }
        } catch (e) {
            throw e
        }
    }

    React.useEffect(() => {
        if (authData?.userUid) navigate('/')
    }, [])

    return (
        <LoginWrap>
            <Container sx={{ width: { xs: 'xs', sm: 'sm' } }}>
                <Card
                    sx={{
                        background: '#ededed',
                        p: 2,
                        m: 2,
                        boxShadow: '1px 8px 12px rgba(0,0,0,0.3)',
                    }}>
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 24, sm: 32 }, textAlign: { xs: 'center', sm: 'start' } }}
                        fontFamily={'poppins'}>
                        Benvenuto{' '}
                        <Typography
                            variant="h2"
                            sx={{ fontSize: { xs: 32, sm: 48 }, color: theme.palette.primary.main }}>
                            in Humor! 🥳
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1" sx={{ my: 1 }}>
                        Logga e fai sapere ai tuoi amici di che umore sei!
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
                        <TextField placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
                        <TextField
                            placeholder="Password"
                            type="password"
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <Button variant="contained" onClick={() => handleLogin()}>
                            Logga!
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                            Non sei registrato?{' '}
                        </Typography>
                        <Link to="/Signup">
                            <Button>Registrati</Button>
                        </Link>
                    </Box>
                </Card>
            </Container>
        </LoginWrap>
    )
}
export default Login
