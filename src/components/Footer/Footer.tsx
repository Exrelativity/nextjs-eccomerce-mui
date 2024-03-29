import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Props = {}

function Footer({ }: Props) {
    return (
        <>
            <Box className="flex w-full items-center justify-center">
                <Box className="container flex flex-row items-center justify-between gap-4 font-semibold max-md:p-4">
                    <Divider className="flex w-full flex-row" />
                </Box>
            </Box>
            <Box className="-mb-4 flex min-h-80 w-full flex-col items-center justify-center gap-4 bg-white py-10 font-semibold text-black">
                <Box className="container flex flex-grow flex-row flex-wrap items-start justify-between gap-4 py-10 max-md:flex-col max-md:content-start max-md:justify-start max-md:gap-4 max-md:p-4 max-md:py-5">
                    <Box className='flex flex-col items-start justify-start gap-4 py-5 text-xl max-md:w-1/3'>
                        <header className="footer-title">Services</header>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Branding</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Design</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Marketing</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Advertisement</Link>
                    </Box>
                    <Box className='flex flex-col items-start justify-start gap-4 py-5 text-xl max-md:w-1/3'>
                        <header className="footer-title">Account</header>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">My Account</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Login / Register</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Cart</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Wishlist</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Shop</Link>
                    </Box>
                    <Box className='flex flex-col items-start justify-start gap-4 py-5 text-xl max-md:w-1/3'>
                        <header className="footer-title">Company</header>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">About us</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Contact</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Jobs</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Press kit</Link>
                    </Box>
                    <Box className='flex flex-col items-start justify-start gap-4 py-5 text-xl max-md:w-1/3'>
                        <header className="footer-title">Quick Link</header>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Terms of use</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Privacy policy</Link>
                        <Link href={"/"} className="link-hover link text-nowrap text-[#737373] no-underline">Cookie policy</Link>
                    </Box>
                    <Box className='flex flex-col items-center justify-center py-5 max-md:w-full'>
                        <form>
                            <header className="footer-title">Newsletter</header>
                            <Box className="form-control w-80 max-md:w-full">
                                <label className="label">
                                    <Typography className="label-text">Enter your email address</Typography>
                                </label>
                                <Box className="flex w-auto flex-row flex-nowrap">
                                    <TextField type="text" placeholder="username@site.com" className="bg-gray rounded-e-none border-white hover:border-white" sx={{
                                        borderTopRightRadius: "0px",
                                        borderBottomRightRadius: "0px"
                                    }} />
                                    <Button type="button" className="rounded-s-none bg-[#23A6F0] text-white hover:border-white hover:bg-green">Subscribe</Button>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Box>
                <Box className="flex w-full items-center justify-center bg-[#FAFAFA] py-5">
                    <Box className="container flex flex-row items-center justify-start gap-4 font-semibold max-md:p-4">
                        <Typography className="font-semibold text-[#737373]">Made With Love By Finland All Right Reserved </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer