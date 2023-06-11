import { Box, Typography } from '@mui/material'
import * as React from 'react'
import PlainCard from '../../atoms/plain-card'

const fakeData = Array.from({ length: 7 })

const WeeklyHumor = React.memo(() => {
    const mockDate = new Date()
    return (
        <PlainCard sx={{ gap: 1 }}>
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: 'center' }}>
                    Il tuo umore negli ultimi
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>7 giorni</Typography>
            </Box>
            {fakeData.map((_, idx) => {
                return (
                    <PlainCard sx={{ p: 1, flexDirection: 'row', gap: 0.5, justifyContent: 'space-between' }}>
                        <Typography variant="body1">
                            {mockDate.getDate()}/{mockDate.getMonth()}/{mockDate.getFullYear()}
                        </Typography>
                        <Typography variant="body1"> 😍</Typography>
                    </PlainCard>
                )
            })}
        </PlainCard>
    )
})
export default WeeklyHumor
