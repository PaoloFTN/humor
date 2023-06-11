import ProfileCardHome from './../../molecule/profile-card-home'
import { Avatar, Card, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import LatestUsersHome from '../../molecule/latest-users-home'

const LeftHomeComponent = React.memo(() => {
    const { palette } = useTheme()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
            <ProfileCardHome />
            <LatestUsersHome />
        </Box>
    )
})

export default LeftHomeComponent
