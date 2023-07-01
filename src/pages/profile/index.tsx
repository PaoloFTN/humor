import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import PlainCard from '../../components/atomic/atoms/plain-card'
import ProfileCardHome from '../../components/atomic/molecule/profile-card-home'
import ShowFeedHome from '../../components/atomic/molecule/show-feed-home'
import ProfileLayout from '../../components/layout/profile-layout'

const ProfilePage = () => {
    return (
        <ProfileLayout profileResume={<ProfileCardHome />}>
            <ShowFeedHome />
        </ProfileLayout>
    )
}

export default ProfilePage
