import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import FeaturedPostCard from './FeaturedPostCard'

type Props = {}

function FeaturedPost({ }: Props) {
    return (
        <Box className="w-full">
            <Container className="flex flex-col items-center justify-center gap-4">
                <Box className="flex w-full flex-col items-center justify-center gap-2">
                    <Box className="flex text-sm font-semibold"><Typography className="text-sm font-semibold text-[#23A6F0]">Practice Advice</Typography></Box>
                    <Box className="flex text-lg font-semibold"><Typography className="text-lg font-semibold text-black">Featured Posts</Typography></Box>
                </Box>
                <Box className="flex w-full flex-row flex-wrap content-center items-center justify-center gap-10 max-md:flex-col max-md:gap-10">
                    <FeaturedPostCard image={"/assets/images/unsplash_1.png"} />
                    <FeaturedPostCard image={"/assets/images/unsplash_2.png"} />
                    <FeaturedPostCard image={"/assets/images/unsplash_3.png"} />
                </Box>
            </Container>
        </Box>
    )
}

export default FeaturedPost