"use client";
import { Box } from '@mui/material';
import React from 'react';
import ApplicationLogo from '../ApplicationLogo';
import FacebookIcon from "@/public/assets/icons/blue-facebook.svg";
import InstagramIcon from "@/public/assets/icons/blue-instagram.svg";
import TwitterIcon from "@/public/assets/icons/blue-twitter.svg";

type Props = {}

function SubFooter({ }: Props) {
    return (
        <Box className="flex w-full items-center justify-center bg-transparent">
            <Box className="container flex flex-row items-center justify-between gap-4 py-10 font-semibold max-md:p-4">
                <Box className="w-auto">
                    <ApplicationLogo />
                </Box>
                <Box className="flex flex-row gap-5">
                    <FacebookIcon src={""} width={32} height={32} alt="icon" />
                    <InstagramIcon src={""} width={32} height={32} alt="icon" />
                    <TwitterIcon src={""} width={32} height={32} alt="icon" />
                </Box>
            </Box>
        </Box>
    )
}

export default SubFooter