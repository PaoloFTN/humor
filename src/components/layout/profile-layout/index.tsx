import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React from 'react'
import LogoAppBar, { LogoAppBarHeight } from '../../atomic/molecule/logoappbar'

interface ProfileLayoutProps {
    profileResume: JSX.Element
    children: JSX.Element
}

const ProfileLayout = React.memo<ProfileLayoutProps>(({ profileResume, children }) => {
    return (
        <main>
            <LogoAppBar />
            <Container maxWidth={'lg'}>
                <Grid container spacing={2} sx={{ mt: `${LogoAppBarHeight}px` }}>
                    <Grid item xs={0} sm={4}>
                        {profileResume}
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
})

export default ProfileLayout
