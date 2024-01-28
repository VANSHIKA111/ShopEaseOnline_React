import React from 'react'
import { Avatar,Box,Grid, Rating } from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>

        <Grid item xs={1}>
            <Box>
            <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
            </Box>
        </Grid>
       <Grid item xs={9}>
<div className='space-y-2'>
    <div>
        <p>Ram</p>
        <p className='font-semibold text-lg'>April3,2020</p>
    </div>
</div>
<Rating value={4.5} name='half-rating' readonly precision={0.5}/>
 <p>nice product </p>

       </Grid>

      </Grid>
    </div>
  )
}

export default ProductReviewCard
