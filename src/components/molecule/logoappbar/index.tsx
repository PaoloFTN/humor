import ProfileTooltip from './../profile-tooltip'
import {
    AppBar,
    Avatar,
    Button,
    Container,
    List,
    ListItemButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import { Person } from '@mui/icons-material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from './pages-menu/pages'
import { Auth } from '../../context/auth-context'
import ProfileMenu from '../profile-menu'

export const LogoAppBarHeight = 80

const LogoAppBar = () => {
    const navigate = useNavigate()

    const { authData } = Auth()

    const { palette } = useTheme()
    const handleNav = (link: string) => {
        navigate(link)
    }
    return (
        <AppBar sx={{ height: LogoAppBarHeight }} elevation={1}>
            <Container sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Typography
                    variant="h3"
                    fontFamily={'montserrat'}
                    sx={{ fontSize: { xs: 24, sm: 'inherit' }, flex: { xs: 1, sm: 0.4 } }}>
                    😁 HUMOR
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <Box
                        id="menu-appbar"
                        sx={{
                            display: 'block',
                        }}>
                        {pages.map((page, index) => {
                            return (
                                <Button key={page.name + page.link} onClick={() => handleNav(page.link)}>
                                    <Typography color={palette.background.paper} textAlign="center">
                                        {page.name}
                                    </Typography>
                                </Button>
                            )
                        })}
                    </Box>
                </Box>
                <ProfileTooltip authData={authData} />
                <ProfileMenu />
            </Container>
        </AppBar>
    )
}

export default LogoAppBar
