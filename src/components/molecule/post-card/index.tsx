import { Send, CloseOutlined, ThumbUp, Comment } from '@mui/icons-material'
import { Box, Avatar, Typography, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { palette } from '@mui/system'
import * as React from 'react'
import PlainCard from '../../atoms/plain-card'

const PostCard = React.memo(() => {
    const { palette } = useTheme()
    return (
        <PlainCard>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ height: 34, width: 34, background: palette.primary.main }}>
                        <Typography variant="caption">PS</Typography>
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ lineHeight: '1rem' }}>
                            Massimo Penna
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            1g <Send sx={{ fontSize: 12, color: palette.primary.main }} />
                        </Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'start' }}>
                        <CloseOutlined />
                    </Box>
                </Box>
                <Box sx={{ borderBottom: 1, pb: 2, borderColor: 'divider' }}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 2, gap: 2 }}>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'end' }}>
                            <ThumbUp sx={{ mr: 0.5, color: palette.primary.main }} />
                            15 like
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'end' }}>
                            <Comment sx={{ mr: 0.5, color: palette.primary.main }} />3 Commenti
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button sx={{ flex: 0.5 }}>
                        <ThumbUp sx={{ mr: 2 }} /> Mi piace
                    </Button>
                    <Button sx={{ flex: 0.5 }}>
                        <Comment sx={{ mr: 2 }} /> Commenta
                    </Button>
                </Box>
            </Box>
        </PlainCard>
    )
})

export default PostCard
