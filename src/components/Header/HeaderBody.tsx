"use client";
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
import MenuIcon from "@/public/assets/icons/black-menu.svg";
import { CartProductType } from '@/redux/reducers/CartReducer';
import { RootState, useAppSelector } from '@/redux/store';
import { calculateCartTotals } from '@/services/Utility';
import { memoize } from 'proxy-memoize';
import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import CartMiniProductCard from './CartMiniProductCard';
import { Box, Button } from '@mui/material';
import { WishListProductType } from '@/redux/reducers/WishListReducer';
import WishlistMiniProductCard from './WishlistMiniProductCard';
import { useSelector } from 'react-redux';

type Props = {
  className?: String;
  style?: CSSProperties;
}

function HeaderBody({ className, style }: Props) {
  const [carts, setCarts] = useState<CartProductType[]>([]);
  const [totalCartAmount, setTotalCartAmount] = useState<number>(0);
  const [totalCartQuantity, setTotalCartQuantity] = useState<number>(0);
  const [totalCartItems, setTotalCartItems] = useState<number>(0);
  const cartMemozied: CartProductType[] = useSelector<RootState, CartProductType[]>(memoize((state) => state.cart.carts))
  useEffect(() => {
    setCarts((carts) => cartMemozied);
  }, [cartMemozied]);

  const cartList = useMemo(() => {
    return carts.map((item, index) => (<CartMiniProductCard key={index} data={item} />))
  }, [carts]);

  useEffect(() => {
    const { totalAmount, totalQuantity, totalItems } = calculateCartTotals(carts)
    setTotalCartAmount(totalAmount);
    setTotalCartQuantity(totalQuantity);
    setTotalCartItems(totalItems)
  }, [cartMemozied, carts]);
  const pathname = usePathname();
  const links = [
    { href: "/", name: "Home" },
    { href: "/shop", name: "Shop", icon: <DownCaretIcon /> },
    { href: "/about", name: "About" },
    { href: "/blog", name: "Blog" },
    { href: "/contact", name: "Contact" },
    { href: "/pages", name: "Pages" },
  ];

  const [wishlists, setWishLists] = useState<WishListProductType[]>([]);
  const [totalWishAmount, setTotalWishAmount] = useState<number>(0);
  const [totalWishQuantity, setTotalWishQuantity] = useState<number>(0);
  const [totalWishItems, setTotalWishItems] = useState<number>(0);
  const wishlist_memozied: WishListProductType[] = useSelector<RootState, WishListProductType[]>(memoize((state) => state.wishlist.wishlists))
  useEffect(() => {
    setWishLists(() => wishlist_memozied);
  }, [wishlist_memozied]);

  const wishList = useMemo(() => {
    return wishlists.map((item, index) => (<WishlistMiniProductCard key={index} data={item} />))
  }, [wishlists]);

  useEffect(() => {
    const { totalAmount, totalQuantity, totalItems } = calculateCartTotals(wishlists)
    setTotalWishAmount(totalAmount);
    setTotalWishQuantity(totalQuantity);
    setTotalWishItems(totalItems)
  }, [wishlist_memozied, wishlists]);

  const [wishlistActive, setWishlistActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [userProfileActive, setUserProfileActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Box className={`w-full bg-white sticky z-50 top-0 mt-0 right-0 flex flex-row flex-shrink-0 justify-center items-baseline ${className}`} style={style}>
        <Box className='flex h-auto w-full flex-row items-center justify-between gap-24 p-2 px-7 max-[1025px]:px-2 max-md:gap-4'>
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
          <Box className='flex w-fit flex-row items-center justify-center gap-4 max-md:gap-1'>
            <Box className="relative w-fit max-md:hidden">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <UserIcon onClick={() => { setUserProfileActive(!userProfileActive); setSearchActive(false); setWishlistActive(false); setMenuActive(false); setCartActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                  <Box className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-link text-[length:var(--link-font-size)] font-[number:var(--link-font-weight)] leading-[var(--link-line-height)] tracking-[var(--link-letter-spacing)] text-primary-color [font-style:var(--link-font-style)]">
                    Login / Register
                  </Box>
                </Button>
              </Box>
              <Box onClick={() => setUserProfileActive(false)} className={`absolute right-0 top-[57px] z-40 -mr-44 block h-screen w-screen bg-transparent ${userProfileActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[57px] z-50 -mr-[0px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-2 bg-[rgba(0,0,0,0.5)] ${userProfileActive ? "ease-in" : "hidden"}`}>
                {/* <UserNavigation /> */}
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px]">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <SearchIcon onClick={() => { setSearchActive(!searchActive); setCartActive(false); setWishlistActive(false); setMenuActive(false); setUserProfileActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                </Button>
              </Box>
              <Box onClick={() => setSearchActive(false)} className={`absolute right-0 top-[57px] z-40 -mr-44 block h-screen w-screen bg-transparent ${searchActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[57px] z-50 -mr-[76px] block h-auto w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-[125px] bg-[rgba(0,0,0,0.5)] ${searchActive ? "ease-in" : "hidden"}`}>
                <Box className='flex h-auto w-full flex-grow flex-col items-start justify-start gap-4 bg-white p-2 text-black'>
                  <Box className={`relative z-40 flex w-full flex-row content-center items-center justify-center gap-1 p-2`}>
                    <Box className={`relative flex h-9 w-full flex-row items-center rounded-md bg-[#F5F5F5] hover:scale-110`}>
                      <input style={{ width: "calc(100%)" }} className={`h-12 truncate border-none bg-transparent py-1 pl-1 text-left text-black`} type='search' />
                      <Box className="flex items-center justify-center p-2">
                        <SearchIcon className={`font-bold hover:scale-110 hover:cursor-pointer`} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px]">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <CartIcon onClick={() => { setCartActive(!cartActive); setSearchActive(false); setWishlistActive(false); setUserProfileActive(false); setMenuActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                  <Box className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-small text-[length:var(--small-font-size)] font-[number:var(--small-font-weight)] leading-[var(--small-line-height)] tracking-[var(--small-letter-spacing)] text-primary-color [font-style:var(--small-font-style)]">
                    {totalCartItems}
                  </Box>
                </Button>
              </Box>
              <Box onClick={() => setCartActive(false)} className={`absolute right-0 top-[57px] z-40 -mr-44 block h-screen w-screen bg-transparent ${cartActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[57px] z-50 -mr-[55px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-[70px] bg-[rgba(0,0,0,0.5)] ${cartActive ? "ease-in" : "hidden"}`}>
                <Cart />
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px] max-md:hidden">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <WishlistIcon onClick={() => { setWishlistActive(!wishlistActive); setSearchActive(false); setCartActive(false); setUserProfileActive(false); setMenuActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                  <Box className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-small text-[length:var(--small-font-size)] font-[number:var(--small-font-weight)] leading-[var(--small-line-height)] tracking-[var(--small-letter-spacing)] text-primary-color [font-style:var(--small-font-style)]">
                    {totalWishItems}
                  </Box>
                </Button>
              </Box>
              <Box onClick={() => setWishlistActive(false)} className={`absolute right-0 top-[57px] z-40 -mr-44 block h-screen w-screen bg-transparent ${wishlistActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[57px] z-50 mr-[15px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:-mr-2 bg-[rgba(0,0,0,0.5)] ${wishlistActive ? "ease-in" : "hidden"}`}>
                <Wishlist />
              </Box>
            </Box>
            <Box className="relative h-auto w-[56px] md:hidden">
              <Box>
                <Button type="button" className="relative box-border flex flex-row items-center gap-[5px] overflow-hidden rounded-[37px] p-[15px]">
                  <MenuIcon onClick={() => { setMenuActive(!menuActive); setWishlistActive(false); setSearchActive(false); setCartActive(false); setUserProfileActive(false); }} className='font-bold hover:scale-110 hover:cursor-pointer' />
                </Button>
              </Box>
              <Box onClick={() => setMenuActive(false)} className={`absolute right-0 top-[57px] z-40 -mr-44 block h-screen w-screen bg-transparent ${menuActive ? "ease-in" : "hidden"}`}>
                &nbsp;
              </Box>
              <Box className={`absolute animate-fade-left right-0 top-[57px] z-50 -mr-[134px] block h-screen w-[480px] max-[480px]:w-[100vw] max-[480px]:mr-[-7px] bg-white ${menuActive ? "ease-in" : "hidden"}`}>
                <Box className="flex flex-col justify-start gap-10">
                  {links.map((items, index) => (
                    <Link key={index} href={items.href} className={`flex flex-row items-center justify-center gap-1 text-xl text-black no-underline hover:scale-105`}>
                      <Box>{items.name}</Box>
                      {items.icon && (<Box>{items.icon}</Box>)}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HeaderBody;