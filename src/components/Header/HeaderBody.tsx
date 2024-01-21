"use client";
import React, { CSSProperties, useState } from 'react'
import ApplicationLogo from '../ApplicationLogo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Cart from './Cart';
import Wishlist from './Wishlist';
import DownCaretIcon from '@/public/assets/icons/black-caret-down.svg';
import UserIcon from "@/public/assets/icons/blue-user.svg";
import CartIcon from "@/public/assets/icons/blue-cart.svg";
import SearchIcon from "@/public/assets/icons/blue-search.svg";
import WishlistIcon from "@/public/assets/icons/blue-wishlist.svg";
import { Box, Button } from '@mui/material';

type Props = {
  className?: String;
  style?: CSSProperties;
}

function HeaderBody({ className, style }: Props) {
  const pathname = usePathname();
  const links = [
    { href: "/", name: "Home" },
    { href: "/shop", name: "Shop", icon: <DownCaretIcon /> },
    { href: "/about", name: "About" },
    { href: "/blog", name: "Blog" },
    { href: "/contact", name: "Contact" },
    { href: "/pages", name: "Pages" },
  ];

  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [userProfileActive, setUserProfileActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  return (
    <>
      <Box className={`w-full bg-white sticky z-50 top-0 mt-0 right-0 flex flex-row flex-shrink-0 justify-center items-baseline ${className}`} style={style}>
        <Box className='flex h-auto w-full flex-row items-center justify-between gap-24 p-2 px-7 max-[1025px]:px-2'>
          <Box className='flex w-fit flex-row justify-center'>
            <ApplicationLogo />
          </Box>
          <Box className='flex w-fit flex-grow flex-row justify-start gap-4 max-[1025px]:hidden'>
            {links.map((items, index) => (
              <Link key={index} href={items.href} className={`flex flex-row items-center justify-center gap-1 text-xl text-black no-underline hover:scale-105`}>
                <Box>{items.name}</Box>
                {items.icon && (<Box>{items.icon}</Box>)}
              </Link>
            ))}
          </Box>
          <Box className='flex w-fit flex-row items-center justify-center gap-4 max-sm:gap-1'>
            <Box className="relative w-[166px]">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <UserIcon onClick={() => { setUserProfileActive(!userProfileActive); setSearchActive(false); setWishlistActive(false); setCartActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                  <Box className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-link text-[length:var(--link-font-size)] font-[number:var(--link-font-weight)] leading-[var(--link-line-height)] tracking-[var(--link-letter-spacing)] text-primary-color [font-style:var(--link-font-style)]">
                    Login / Register
                  </Box>
                </Button>
              </Box>
              <Box onClick={() => setUserProfileActive(false)} className={`absolute right-0 top-[65px] z-40 -mr-44 block h-screen w-screen bg-transparent ${userProfileActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[65px] z-50 -mr-[0px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-2 bg-[rgba(0,0,0,0.5)] ${userProfileActive ? "ease-in" : "hidden"}`}>
                {/* <UserNavigation /> */}
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px]">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <SearchIcon onClick={() => { setSearchActive(!searchActive); setCartActive(false); setWishlistActive(false); setUserProfileActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                </Button>
              </Box>
              <Box onClick={() => setSearchActive(false)} className={`absolute right-0 top-[65px] z-40 -mr-44 block h-screen w-screen bg-transparent ${searchActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[65px] z-50 -mr-[76px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-11 bg-[rgba(0,0,0,0.5)] ${searchActive ? "ease-in" : "hidden"}`}>
                <Box className='flex h-auto w-full flex-grow flex-col items-start justify-start gap-4 bg-white p-2 text-black'>
                  <Box className={`relative z-40 flex w-full flex-row content-center items-center justify-center gap-1 p-2 sm:hidden`}>
                    <Box className={`relative flex h-9 w-full flex-row rounded-md bg-[#F5F5F5] hover:scale-110`}>
                      <input style={{ width: "calc(100% - 32px)" }} className={`h-9 truncate bg-transparent py-1 pl-1 text-left text-black`} type='search' />
                      <Image className={`h-9 w-[32px] py-1 pr-1`} src={'/assets/new-icons/search.svg'} width={32} height={32} alt={'icon'} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px]">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <CartIcon onClick={() => { setCartActive(!cartActive); setSearchActive(false); setWishlistActive(false); setUserProfileActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                  <Box className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-small text-[length:var(--small-font-size)] font-[number:var(--small-font-weight)] leading-[var(--small-line-height)] tracking-[var(--small-letter-spacing)] text-primary-color [font-style:var(--small-font-style)]">
                    1
                  </Box>
                </Button>
              </Box>
              <Box onClick={() => setCartActive(false)} className={`absolute right-0 top-[65px] z-40 -mr-44 block h-screen w-screen bg-transparent ${cartActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[65px] z-50 -mr-[76px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-11 bg-[rgba(0,0,0,0.5)] ${cartActive ? "ease-in" : "hidden"}`}>
                <Cart />
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px]">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <WishlistIcon onClick={() => { setWishlistActive(!wishlistActive); setSearchActive(false); setCartActive(false); setUserProfileActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                  <Box className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-small text-[length:var(--small-font-size)] font-[number:var(--small-font-weight)] leading-[var(--small-line-height)] tracking-[var(--small-letter-spacing)] text-primary-color [font-style:var(--small-font-style)]">
                    1
                  </Box>
                </Button>
              </Box>
              <Box onClick={() => setWishlistActive(false)} className={`absolute right-0 top-[65px] z-40 -mr-44 block h-screen w-screen bg-transparent ${wishlistActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[65px] z-50 -mr-[124px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-20 bg-[rgba(0,0,0,0.5)] ${wishlistActive ? "ease-in" : "hidden"}`}>
                <Wishlist />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HeaderBody;