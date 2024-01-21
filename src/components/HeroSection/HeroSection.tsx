import { Box } from '@mui/material'
import React from 'react'

type Props = {}

function HeroSection({ }: Props) {
    return (
        <Box className="flex w-full flex-row items-center justify-center gap-1">
            <Box className="container flex flex-row">
                <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-4.jpg'})` }}
                    className={`w-5/12 bg-cover max-md:w-full`}>
                </Box>
                <Box className="flex w-7/12 flex-col gap-1 max-md:w-full">
                    <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-5.jpg'})` }} className={`flex w-full flex-col`}></Box>
                    <Box className={`flex w-full flex-row gap-1`}>
                        <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-6.jpg'})` }} className={`flex w-1/2 flex-col max-md:w-full`}></Box>
                        <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-7.jpg'})` }} className={`flex w-1/2 flex-col max-md:w-full`}></Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default HeroSection