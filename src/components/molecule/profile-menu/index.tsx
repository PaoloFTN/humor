import { Button, Drawer, Typography, useTheme } from '@mui/material'
import { CloseOutlined, Person } from '@mui/icons-material'
import { Box } from '@mui/system'
import * as React from 'react'
import LeftHomeComponent from '../../organism/left-home-component'
import { Auth } from '../../context/auth-context'
import ProfileCardHome from '../profile-card-home'

const ProfileMenu = React.memo(() => {
    const [showMenu, setShowMenu] = React.useState(false)
    const { authData } = Auth()
    const { palette } = useTheme()

    const handleShowMenu = () => {
        setShowMenu((prevState) => !prevState)
    }

    return (
        <>
            <Box>
                <Button onClick={() => handleShowMenu()}>
                    <Person sx={{ color: 'white' }} />
                </Button>
            </Box>
            <Drawer variant="persistent" open={showMenu} anchor="right">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        justifyContent: 'space-evenly',
                        height: '100%',
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <CloseOutlined onClick={() => handleShowMenu()} />
                        <Typography variant="h4" color={palette.primary.main}>
                            Menu
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <ProfileCardHome />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            gap: 2,
                            mt: 2,
                            alignItems: 'center ',
                        }}>
                        <Button> Profilo </Button>
                        <Button> Logout </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
})

export default ProfileMenu
