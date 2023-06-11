import LeftHomeComponent from './../components/organism/left-home-component'
import { Box, Card, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import styled from 'styled-components'
import LogoAppBar, { LogoAppBarHeight } from '../components/molecule/logoappbar'
import HumorInputForm from '../components/molecule/humor-input-form'
import ShowFeedHome from '../components/molecule/show-feed-home'
import WeeklyHumor from '../components/organism/weekly-humor'
import TrendingNeeds from '../components/organism/trending-needs'
import { Visibility } from '@mui/icons-material'

const HomeWrap = styled.section`
    height: 100vh;
    width: 100vw;
    position: fixed;
    align-items: center;
    justify-content: center;
`

const Home: React.FC = () => {
    return (
        <HomeWrap>
            <LogoAppBar />
            <Container>
                <Grid container columnSpacing={2}>
                    <Grid
                        sx={{ mt: `${LogoAppBarHeight + 16}px`, display: { xs: 'none', sm: 'block' } }}
                        item
                        xs={0}
                        sm={3}>
                        <LeftHomeComponent />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ height: '90vh', overflow: 'auto', mt: `${LogoAppBarHeight}px` }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 2, pt: 2 }}>
                            <HumorInputForm />
                            <ShowFeedHome />
                        </Box>
                    </Grid>
                    <Grid sx={{ mt: `${LogoAppBarHeight + 16}px` }} item xs={0} sm={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <WeeklyHumor />
                            <TrendingNeeds />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </HomeWrap>
    )
}
export default Home
