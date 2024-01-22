"use client";
import { CartProductType } from '@/redux/reducers/CartReducer';
import { RootState } from '@/redux/store';
import { calculateCartTotals } from '@/services/Utility';
import { memoize } from 'proxy-memoize';
import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import CartMiniProductCard from './CartMiniProductCard';
import { Box, Button, Typography } from '@mui/material';

type Props = {
    className?: String;
    style?: CSSProperties;
}

function Cart({ className, style }: Props) {
    const [carts, setCarts] = useState<CartProductType[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalItems, setTotalItems] = useState<number>(0);
    const cartMemozied: CartProductType[] = useSelector<RootState, CartProductType[]>(memoize((state) => state.cart.carts))
    useEffect(() => {
        setCarts((carts) => cartMemozied);
    }, [cartMemozied]);

    const cartList = useMemo(() => {
        return carts.map((item, index) => (<CartMiniProductCard key={index} data={item} />))
    }, [carts]);

    useEffect(() => {
        const { totalAmount, totalQuantity, totalItems } = calculateCartTotals(carts)
        setTotalAmount(totalAmount);
        setTotalQuantity(totalQuantity);
        setTotalItems(totalItems)
    }, [cartMemozied, carts]);

    return (
        <Box className='max-h-[calc(100vh - 300px)] flex h-full w-full flex-grow flex-col items-start justify-start gap-4 bg-white p-2 text-black'>
            <Box className='flex w-full items-center justify-center p-2 text-2xl'><Box className='font-inter text-xl font-semibold'>Cart</Box></Box>
            <Box className='flex w-full flex-row flex-wrap content-start items-center justify-between gap-2 text-2xl'>
                <Box className='flex items-center text-center text-lg max-md:text-lg'><Typography className="text-sm uppercase text-red-950">Items:</Typography>&nbsp;<Typography className="text-xl">{totalItems}</Typography></Box>
                <Box className='flex items-center text-center text-lg max-md:text-lg'><Typography className="text-sm uppercase text-red-950">Quantity:</Typography>&nbsp;<Typography className="text-xl">{totalQuantity}</Typography></Box>
                <Box className='flex items-center text-wrap text-center text-lg max-md:text-lg'><Typography className="text-sm uppercase text-red-950">Total:</Typography> &nbsp;<Typography className="text-xl">${totalAmount}</Typography></Box>
            </Box>
            <Box className='flex h-[calc(65%)] w-full flex-col justify-start gap-4 overflow-auto max-md:h-[calc(60%)]'>
                {cartList}
            </Box>
            <Box className='flex h-fit w-full items-center justify-center'>
                <Button type="button"
                    className="flex h-12 w-full flex-grow flex-row items-center justify-center rounded-[5px] bg-red-950 px-10 py-3 text-xs text-white">
                    <Box>checkout</Box>
                </Button>
            </Box>
        </Box>
    )
}

export default Cart