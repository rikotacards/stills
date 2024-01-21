import { Skeleton } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';

import { useGetBreakpoints } from '../../utils/useGetBreakpoint';
const count = [1,1,1,1,1,1,1,1,1]
export const ProfilePageLoadingState: React.FC = () => {
    const isLessThanMd = useGetBreakpoints('md')
    const d = isLessThanMd ? '200px': '500px'
    const items = count.map((_,i) => <Grid item key={i} xs={4} md={4}><Skeleton height={d} key={i} variant='rectangular'/></Grid>)
    return (
        <Grid container spacing={0.5}>
        {items}
        </Grid>
    )
}