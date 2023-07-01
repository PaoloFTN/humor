import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import * as React from 'react'
import PlainCard from '../../atoms/plain-card'

const fakeData = Array.from({ length: 3 })

const TrendingNeeds = React.memo(() => {
    return (
        <PlainCard>
            <Typography sx={{ textAlign: 'center' }}>Bisogni in Trend</Typography>
            {fakeData.map((item, index) => {
                return (
                    <Typography sx={{ textAlign: 'center' }} variant="caption">
                        {index + 1}: "Bonifici!"
                    </Typography>
                )
            })}
        </PlainCard>
    )
})

export default TrendingNeeds
