"use client";
import { RootState } from '@/redux/store';
import { calculateCartTotals } from '@/services/Utility';
import { memoize } from 'proxy-memoize';
import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { WishListProductType } from '@/redux/reducers/WishListReducer';
import { useRouter } from 'next/navigation';
import { Box, Button } from '@mui/material';
import WishlistMiniProductCard from './WishlistMiniProductCard';

type Props = {
    className?: String;
    style?: CSSProperties;
}


function WishList({ className, style }: Props) {
    const [wishlists, setWishLists] = useState<WishListProductType[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalItems, setTotalItems] = useState<number>(0);
    const wishlist_memozied: WishListProductType[] = useSelector<RootState, WishListProductType[]>(memoize((state) => state.wishlist.wishlists))
    useEffect(() => {
        setWishLists(() => wishlist_memozied);
    }, [wishlist_memozied]);

    const wishList = useMemo(() => {
        return wishlists.map((item, index) => (<WishlistMiniProductCard key={index} data={item} />))
    }, [wishlists]);

    useEffect(() => {
        const { totalAmount, totalQuantity, totalItems } = calculateCartTotals(wishlists)
        setTotalAmount(totalAmount);
        setTotalQuantity(totalQuantity);
        setTotalItems(totalItems)
    }, [wishlist_memozied, wishlists]);
    const router = useRouter();
    return (
        <Box className='max-h-[calc(100vh - 300px)] flex h-full w-full flex-grow flex-col items-start justify-start gap-4 bg-white p-2 text-black'>
            <Box className='flex w-full items-center justify-center p-2 text-2xl'><Box className='font-inter text-xl font-semibold'>WishList</Box></Box>
            <Box className='flex w-full flex-row flex-wrap content-start items-center justify-between gap-2 text-2xl'>
                <Box className='flex items-center text-center text-lg max-md:text-lg'><span className="text-sm uppercase text-red-950">Items:</span>&nbsp;<span className="text-xl">{totalItems}</span></Box>
                <Box className='flex items-center text-center text-lg max-md:text-lg'><span className="text-sm uppercase text-red-950">Quantity:</span>&nbsp;<span className="text-xl">{totalQuantity}</span></Box>
                <Box className='flex items-center text-wrap text-center text-lg max-md:text-lg'><span className="text-sm uppercase text-red-950">Total:</span>&nbsp;<span className="text-xl">${totalAmount}</span></Box>
            </Box>
            <Box className='flex h-[calc(65%)] w-full flex-col justify-start gap-4 overflow-auto max-md:h-[calc(60%)]'>
                {wishList}
            </Box>
            <Box className='flex h-fit w-full items-center justify-center'>
                <Button type="button"
                    className="flex h-12 w-full flex-grow flex-row items-center justify-center rounded-[5px] bg-red-950 px-10 py-3 text-xs text-white"
                    onClick={() => router.push("#")}>
                    <Box>View More</Box>
                </Button>
            </Box>
        </Box>
    )
}

export default WishList