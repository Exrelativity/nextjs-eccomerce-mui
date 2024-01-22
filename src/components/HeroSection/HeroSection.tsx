import { Box } from '@mui/material'
import React from 'react'

type Props = {}

function HeroSection({ }: Props) {
    return (
        <Box className="flex h-full w-full flex-row items-center justify-center gap-1 py-24 font-semibold max-md:flex-col max-md:p-2">
            <Box className="container flex flex-row gap-1 max-md:flex-col max-md:p-4">
                <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-4.jpg'})` }}
                    className={`h-[605px] w-5/12 bg-cover max-md:h-[300px] max-md:w-full`}>
                    <Box className="flex flex-col gap-2 p-10">
                        <Box className="text-xs text-[#2DC071]">
                            5 Items
                        </Box>
                        <Box className="text-lg">
                            FURNITURE
                        </Box>
                        <Box className="text-xs">
                            Read More
                        </Box>
                    </Box>
                </Box>
                <Box className="flex w-7/12 flex-col gap-1 max-md:w-full">
                    <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-5.jpg'})` }} className={`flex h-[300px] w-full`}>
                        <Box className="flex flex-col gap-2 p-10">
                            <Box className="text-xs text-[#2DC071]">
                                5 Items
                            </Box>
                            <Box className="text-lg">
                                FURNITURE
                            </Box>
                            <Box className="text-xs">
                                Read More
                            </Box>
                        </Box>
                    </Box>
                    <Box className={`flex w-full flex-row gap-1 max-md:flex-col`}>
                        <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-6.jpg'})` }} className={`flex h-[300px] w-1/2 flex-col max-md:w-full`}>
                            <Box className="flex flex-col gap-2 p-10">
                                <Box className="text-xs text-[#2DC071]">
                                    5 Items
                                </Box>
                                <Box className="text-lg">
                                    FURNITURE
                                </Box>
                                <Box className="text-xs">
                                    Read More
                                </Box>
                            </Box>
                        </Box>
                        <Box style={{ backgroundImage: `url(${'/assets/images/card-cover-7.jpg'})` }} className={`flex h-[300px] w-1/2 flex-col max-md:w-full`}>
                            <Box className="flex flex-col gap-2 p-10">
                                <Box className="text-xs text-[#2DC071]">
                                    5 Items
                                </Box>
                                <Box className="text-lg">
                                    FURNITURE
                                </Box>
                                <Box className="text-xs">
                                    Read More
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default HeroSection