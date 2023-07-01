import { FormControl } from '@mui/base'
import { Box, Button, TextField, Typography } from '@mui/material'
import * as React from 'react'
import PlainCard from '../../atoms/plain-card'

const emojiMock = ['😁', '😍', '😴', '😢', '😭', '😡']

const HumorInputForm = () => {
    return (
        <PlainCard sx={{ gap: 2 }}>
            <FormControl>
                <TextField multiline placeholder="Come stai?" maxRows={6} sx={{ width: '100%' }} />
            </FormControl>
            <Box>
                <Typography>Scegli il tuo umore oggi: </Typography>
                {emojiMock.map((emoji) => {
                    return <Button>{emoji}</Button>
                })}
            </Box>
            <Button variant="contained" sx={{ alignSelf: 'end' }}>
                Posta!
            </Button>
        </PlainCard>
    )
}

export default HumorInputForm
