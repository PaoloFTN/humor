import { useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import PlainCard from '../../atoms/plain-card'
import { Auth } from '../../../context/auth-context'

const ProfileCardHome = React.memo(() => {
    const { palette } = useTheme()
    const { authData } = Auth()
    return (
        <PlainCard
            sx={{
                gap: 2,
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}>
                <Avatar
                    sx={{
                        height: 32,
                        width: 32,
                        background: palette.primary.main,
                    }}>
                    <Typography variant="caption">PS</Typography>
                </Avatar>
                <Typography variant="h5" sx={{ textTransform: authData?.userName ? 'capitalize' : 'none' }}>
                    {authData?.userName || authData?.email}
                </Typography>
            </Box>

            <Typography variant="subtitle1">Il tuo umore : 😁 </Typography>
            <Box>
                <Typography>Di cosa hai bisogno: </Typography>
                <Typography variant="caption">Droghe pesanti</Typography>
            </Box>
        </PlainCard>
    )
})

export default ProfileCardHome
