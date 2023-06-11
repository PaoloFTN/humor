import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import PlainCard from '../../atoms/plain-card'

const MockData = [
    { usersName: 'Massi Milardi', humor: '😁' },
    { usersName: 'Paolo Penna', humor: '😁' },
    { usersName: 'Giancardo Torollo', humor: '😁' },
]

const LatestUsersHome = React.memo(() => {
    const mockDate = new Date()
    return (
        <PlainCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {MockData.map((user) => {
                    return (
                        <PlainCard>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                <Typography>{user.usersName}</Typography>
                                <Typography>{user.humor}</Typography>
                            </Box>
                            <Typography variant="caption">
                                {' '}
                                Si è iscritto il {mockDate.getDate()}/{mockDate.getMonth()}/{mockDate.getFullYear()}
                            </Typography>
                        </PlainCard>
                    )
                })}
            </Box>
        </PlainCard>
    )
})

export default LatestUsersHome
