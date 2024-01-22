"use client";
import React, { CSSProperties } from 'react';
import PhoneIcon from '@/public/assets/icons/white-phone.svg';
import EnvelopeIcon from '@/public/assets/icons/white-envelope.svg';
import InstagramIcon from '@/public/assets/icons/white-instagram.svg';
import FacebookIcon from '@/public/assets/icons/white-facebook.svg';
import TwitterIcon from '@/public/assets/icons/white-twitter.svg';
import YoutubeIcon from '@/public/assets/icons/white-youtube.svg';
import { Box } from '@mui/material';

type Props = {
    className?: String,
    style?: CSSProperties;
}

function HeaderTop({ className, style }: Props) {
    return (
        <Box id="header-top" className={`w-full flex flex-row justify-center text-xs pt-2 pb-1 items-center h-14 text-[#ffffff] p-0 bg-green ${className}`} style={style}>
            <Box className={`flex h-full w-full flex-row items-center justify-between px-7 max-[1025px]:justify-between max-[1025px]:gap-5 max-[1025px]:px-2 max-md:gap-2`}>
                <Box className='flex flex-row justify-center gap-4 max-md:w-full max-md:justify-between max-md:p-2'>
                    <Box className="flex flex-row items-center justify-start gap-1 truncate">
                        <PhoneIcon height={16} width={16} />
                        <Box>(225) 555-0118</Box>
                    </Box>
                    <Box className="flex flex-row items-center justify-start gap-1 truncate">
                        <EnvelopeIcon height={16} width={16} />
                        <Box>michelle.rivera@example.com</Box>
                    </Box>
                </Box>
                <Box className='flex flex-row truncate max-md:hidden'>
                    Follow Us  and get a chance to win 80% off
                </Box>
                <Box className='flex flex-row gap-2 max-md:hidden'>
                    <Box className="flex flex-row items-center justify-start">Follow Us :</Box>
                    <Box className="flex flex-row items-center justify-start">
                        <InstagramIcon height={16} width={16} />
                    </Box>
                    <Box className="flex flex-row items-center justify-start">
                        <YoutubeIcon height={16} width={16} />
                    </Box>
                    <Box className="flex flex-row items-center justify-start">
                        <FacebookIcon height={16} width={16} />
                    </Box>
                    <Box className="flex flex-row items-center justify-start">
                        <TwitterIcon height={16} width={16} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderTop