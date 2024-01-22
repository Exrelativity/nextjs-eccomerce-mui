"use client";
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BookReaderIcon from '@/public/assets/icons/book-reader.svg';
import CarbonBookIcon from '@/public/assets/icons/carbon-book.svg';
import ArrowGrowthIcon from '@/public/assets/icons/arrow-growth.svg';

type Props = {}

function BestServices({ }: Props) {
    return (
        <Box className="w-full flex justify-center items-center flex-row">
            <Box className="container max-md:p-4 flex flex-col items-center justify-center gap-4">
                <Box className="flex w-full flex-col items-center justify-center gap-2">
                    <Box className="flex text-sm font-semibold"><Typography className="text-sm font-semibold text-[#737373]">Featured Products</Typography></Box>
                    <Box className="flex text-lg font-semibold"><Typography className="text-lg font-semibold text-black">THE BEST SERVICES</Typography></Box>
                    <Box className="flex text-xs font-semibold"><Typography className="text-center text-xs font-semibold text-[#737373]">Problems trying to resolve the conflict between </Typography></Box>
                </Box>
                <Box className="flex flex-row flex-wrap content-start items-center justify-center gap-10 max-md:flex-col max-md:gap-10">
                    <Box className="flex max-w-[250px] flex-col items-center justify-center gap-4">
                        <Box className="flex w-full flex-row items-center justify-center"><BookReaderIcon /></Box>
                        <Box className="flex w-full flex-row items-center justify-center"><Typography className="text-center text-xl font-semibold">Easy Wins</Typography></Box>
                        <Box className="flex w-full flex-row items-center justify-center"><Typography className="text-center text-sm">Get your best looking smile now!</Typography></Box>
                    </Box>
                    <Box className="flex max-w-[250px] flex-col items-center justify-center gap-4">
                        <Box className="flex w-full flex-row items-center justify-center"><CarbonBookIcon /></Box>
                        <Box className="flex w-full flex-row items-center justify-center"><Typography className="text-center text-xl font-semibold">Concrete</Typography></Box>
                        <Box className="flex w-full flex-row items-center justify-center"><Typography className="text-center text-sm">Defalcate is most focused in helping you discover your most beautiful smile</Typography></Box>
                    </Box>
                    <Box className="flex max-w-[250px] flex-col items-center justify-center gap-4">
                        <Box className="flex w-full flex-row items-center justify-center"><ArrowGrowthIcon /></Box>
                        <Box className="flex w-full flex-row items-center justify-center"><Typography className="text-center text-xl font-semibold">Hack Growth</Typography></Box>
                        <Box className="flex w-full flex-row items-center justify-center"><Typography className="text-center text-sm">Overcame any hurdle or any other problem.</Typography></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BestServices