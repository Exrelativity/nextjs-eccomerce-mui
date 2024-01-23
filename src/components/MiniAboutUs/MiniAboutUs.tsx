"use client"
import { Box, CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import GoldStarIcon from '@/public/assets/icons/gold-stsr.svg';
import WhiteStarIcon from '@/public/assets/icons/white-star.svg';

type Props = {}

function MiniAboutUs({ }: Props) {
    const itemData = [
        "/assets/images/unsplash_t_1.png",
        "/assets/images/unsplash_t_2.png",
        "/assets/images/unsplash_t_3.png",
        "/assets/images/unsplash_t_4.png",
        "/assets/images/unsplash_t_5.png",
        "/assets/images/unsplash_t_6.png",
        "/assets/images/unsplash_t_7.png",
        "/assets/images/unsplash_t_10.png",
        "/assets/images/unsplash_t.png",
    ];
    return (
        <Box className="flex w-full flex-col items-center justify-center py-5">
            <Box className="container flex flex-row flex-nowrap items-center justify-center gap-1 max-md:flex-col max-md:gap-10">
                <Box className="flex w-auto max-w-[250px] flex-col items-center justify-between gap-3 max-md:container">
                    <Box className="flex flex-row items-center justify-center">
                        <Typography className="text-center font-semibold text-[#252B42]">What they say about us</Typography>
                    </Box>
                    <Box className="flex flex-col items-center justify-center">
                        <Box className="flex flex-row items-center justify-center">
                            <Image
                                src={"/assets/images/user-1.jpg"}
                                loading="lazy"
                                height={100}
                                width={110}
                                alt="images"
                            />
                        </Box>
                        <Box className="flex flex-row items-center justify-center">
                            <Box className="flex flex-row gap-2">
                                <GoldStarIcon /><GoldStarIcon /><GoldStarIcon /><GoldStarIcon /><WhiteStarIcon />
                            </Box>
                        </Box>
                        <Box className="flex flex-row items-center justify-center">
                            <Typography className="text-center text-xs font-semibold text-[#737373]">
                                Slate helps you see how many more days you need to work to
                                reach your financial goal.
                            </Typography>

                        </Box>
                        <Box className="flex flex-row items-center justify-center">
                            <Box className="flex flex-row items-center justify-center"><Typography className="text-center text-xs font-semibold text-[#23A6F0]">Regina Miles</Typography></Box>
                            <Box className="flex flex-row items-center justify-center"><Typography className="text-center text-xs font-semibold text-[#252B42]">Designer</Typography></Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="flex w-1/2 flex-row items-center justify-center max-md:container">
                    <Box className="w-[calc(142px * 3)] grid grid-cols-3 gap-1">
                        {itemData.map((item, index) => (
                            <Box className='flex h-[same-as-width] w-auto flex-shrink' key={index}>
                                <Image
                                    src={item}
                                    loading="lazy"
                                    height={100}
                                    width={110}
                                    alt="images"
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MiniAboutUs