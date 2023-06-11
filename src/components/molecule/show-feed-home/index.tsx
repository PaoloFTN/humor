import { CloseOutlined, Comment, Send, ThumbUp } from '@mui/icons-material'
import { Avatar, Button, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import PlainCard from '../../atoms/plain-card'
import PostCard from '../post-card'

const fakeArr = Array.from({ length: 20 })

const ShowFeedHome = React.memo(() => {
    const { palette } = useTheme()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {fakeArr.map((_) => {
                return <PostCard />
            })}
            <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
                <Typography textAlign="center">Sembra tu abbia finito i post!</Typography>
                <Typography textAlign="center" variant="caption" color={palette.primary.main}>
                    Vuoi aggiungere altri amici?
                </Typography>
            </Box>
        </Box>
    )
})

export default ShowFeedHome
