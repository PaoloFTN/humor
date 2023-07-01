import { Person } from '@mui/icons-material'
import { Box, Tooltip, Avatar, Typography, Button, useTheme } from '@mui/material'
import { palette } from '@mui/system'
import React from 'react'
import { UserAuth } from '../../../context/auth-context'

interface ProfileProps {
    authData?: UserAuth
}

const ProfileTooltip = React.memo(({ authData }: ProfileProps) => {
    const { palette } = useTheme()
    return (
        <Box>
            <Tooltip
                componentsProps={{
                    tooltip: {
                        sx: {
                            display: { xs: 'none', sm: 'block' },
                            borderRadius: 2,
                            bgcolor: palette.background.default,
                            color: palette.primary.main,
                            boxShadow: '1px 1px 4px rgba(0,0,0,0.2)',
                        },
                    },
                }}
                title={
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            p: 2,
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}>
                            <Avatar
                                sx={{
                                    backgroundColor: palette.primary.main,
                                }}>
                                PS
                            </Avatar>{' '}
                            <Typography>Area Personale</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                alignItems: 'center ',
                            }}>
                            <Typography>{authData?.userName !== '' ? authData?.userName : authData?.email}</Typography>
                            <Button> Profilo </Button>
                            <Button> Logout </Button>
                        </Box>
                    </Box>
                }>
                <Person
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        color: palette.background.paper,
                        fontSize: 32,
                    }}
                />
            </Tooltip>
        </Box>
    )
})

export default ProfileTooltip
