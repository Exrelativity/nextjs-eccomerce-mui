import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import GreaterThanIcon from '@/public/assets/icons/greater-than.svg';
import ClockIcon from '@/public/assets/icons/clock.svg';
import CountIcon from '@/public/assets/icons/count.svg';

type Props = {
    image?: string;
}

function FeaturedPostCard({ image }: Props) {
    return (
        <Card className={`relative z-0 flex h-[605px] w-full max-w-[348px] flex-shrink-0 flex-grow flex-col items-center justify-between gap-2 rounded-md hover:cursor-pointer max-md:max-w-full`}>
            <Box className={`flex h-[300px] w-full flex-grow flex-col items-start justify-start gap-1 bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${image ?? "/assets/new-images/sliderImage.jpeg"})`, backgroundSize: "cover" }}>
                <Button type="button" className="m-4 bg-[#E74040] text-xs text-white"> New</Button>
            </Box>
            <Box className={`flex h-[300px] w-full flex-grow flex-col items-start justify-start gap-5 bg-cover bg-no-repeat`}>
                <Box className="flex flex-row items-center justify-start gap-2 py-1">
                    <Button type="button" className="text-xs text-[#8EC2F2]"> Google</Button>
                    <Button type="button" className="text-xs text-[#737373]"> Trending</Button>
                    <Button type="button" className="text-xs text-[#737373]"> New</Button>
                </Box>
                <Box className="flex flex-row items-center justify-start gap-2 px-2">
                    <Typography className="">
                        Loudest à la Madison #1
                        (L&apos;integral)
                    </Typography>
                </Box>
                <Box className="flex flex-row items-center justify-start gap-2 px-2">
                    <Typography className="text-[#737373]">
                        We focus on ergonomics and meeting
                        you where you work. It&apos;s only a
                        keystroke away.
                    </Typography>
                </Box>
                <Box className="flex w-full flex-row items-center justify-between gap-2 px-2">
                    <Box className="flex w-1/2 flex-row items-center justify-start gap-1">
                        <ClockIcon />
                        <Typography className="text-xs text-[#737373]">
                            22 April 2021
                        </Typography>
                    </Box>
                    <Box className="flex w-1/2 flex-row items-center justify-end gap-1">
                        <CountIcon />
                        <Typography className="text-xs text-[#737373]">
                            10 comments
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex flex-row items-center justify-start gap-1 px-2">
                    <Typography className="text-sm font-semibold text-[#737373]">
                        Learn More
                    </Typography>
                    <Button type="button"> <GreaterThanIcon /></Button>
                </Box>
            </Box>
        </Card>
    )
}

export default FeaturedPostCard