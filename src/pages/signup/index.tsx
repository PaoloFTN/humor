import { Box, Button, Card, Container, InputBase, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import * as HumorSDK from '../../sdk'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginWrap = styled.section`
    flex: 1;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Signup: React.FC = () => {
    const theme = useTheme()
    const navigate = useNavigate()

    React.useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) navigate('/')
    }, [])

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPass, setConfirmPass] = React.useState<string>('')
    const [error, setError] = React.useState<string>()

    const handleSignUp = () => {
        setError('')
        if (password === confirmPass) HumorSDK.signupUser(email, password)
        setError('password non combaciano')
    }
    return (
        <LoginWrap>
            <Container sx={{ width: { xs: 'xs', sm: 'sm' } }}>
                <Card
                    sx={{
                        background: '#ededed',

                        p: 2,
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
                        Registrati e fai sapere ai tuoi amici di che umore sei!
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 } }}>
                        <TextField type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleSignUp}>
                            Registrati!
                        </Button>
                        <Typography> {error}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                            Sei registrato?{' '}
                        </Typography>
                        <Link to="/Login">
                            {' '}
                            <Button>Logga!</Button>{' '}
                        </Link>
                    </Box>
                </Card>
            </Container>
        </LoginWrap>
    )
}
export default Signup
