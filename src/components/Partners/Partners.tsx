"use client";
import { Box } from '@mui/material'
import Image from 'next/image';
import React from 'react'

function Partners() {
    return (
        <Box className="flex w-full flex-col items-center justify-center py-5">
            <Box className="container flex flex-row flex-nowrap items-center justify-between gap-1">
                <Box className="fle-row flex w-2/6 items-center justify-center">
                    <Image src={"/assets/images/fa-brands-1.png"} alt="brands" height={100} width={100} />
                </Box>
                <Box className="fle-row flex w-2/6 items-center justify-center">
                    <Image src={"/assets/images/fa-brands-2.png"} alt="brands" height={100} width={100} />
                </Box>
                <Box className="fle-row flex w-2/6 items-center justify-center">
                    <Image src={"/assets/images/fa-brands-3.png"} alt="brands" height={100} width={100} />
                </Box>
                <Box className="fle-row flex w-2/6 items-center justify-center">
                    <Image src={"/assets/images/fa-brands-4.png"} alt="brands" height={100} width={100} />
                </Box>
                <Box className="fle-row flex w-2/6 items-center justify-center">
                    <Image src={"/assets/images/fa-brands-5.png"} alt="brands" height={100} width={100} />
                </Box>
                <Box className="fle-row flex w-2/6 items-center justify-center">
                    <Image src={"/assets/images/fa-brands-6.svg"} alt="brands" height={100} width={100} />
                </Box>
            </Box>
        </Box>
    )
}

export default Partners