import Card, { CardProps } from '@mui/material/Card'
import * as React from 'react'

interface PlainCardProps extends CardProps {}

const PlainCard = React.memo((props: PlainCardProps) => {
    return (
        <Card
            sx={{
                p: 2,
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                ...props.sx,
            }}>
            {props.children}
        </Card>
    )
})
export default PlainCard
