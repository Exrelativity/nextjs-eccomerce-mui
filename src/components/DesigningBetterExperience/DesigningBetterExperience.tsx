"use client";
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

type Props = {}

function DesigningBetterExperience({ }: Props) {
    return (
        <Box className="flex w-full flex-col flex-wrap content-center items-center justify-center gap-10 bg-cover py-40" style={{ backgroundImage: "url('/assets/images/brown_bg.png')" }}>
            <Box className="flex max-w-xl flex-row items-center justify-center"><Typography className="text-center text-sm font-bold text-[#23A6F0]">Designing Better Experience</Typography></Box>
            <Box className="flex max-w-xl flex-row items-center justify-center"><Typography className="text-center text-2xl font-bold text-[#252B42]">Problems trying to resolve
                the conflict between </Typography></Box>
            <Box className="flex max-w-xl flex-row items-center justify-center"><Typography className="text-center text-sm font-bold text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: </Typography></Box>
            <Box className="flex max-w-xl flex-row items-center justify-center"><Typography className="text-center font-bold text-[#23856D]">$16.48</Typography></Box>
            <Box className="flex max-w-xl flex-row items-center justify-center"><Button className="rounded-md bg-primary-color px-5 py-2 text-sm font-bold text-white">ADD YOUR CALL TO ACTION</Button></Box>
        </Box>
    )
}

export default DesigningBetterExperience