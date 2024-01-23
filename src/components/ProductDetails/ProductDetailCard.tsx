"use client";
import React, { useMemo } from 'react';
import { ProductCardData } from '../ProductCard/ProductCard';
import { Box, Button, Typography } from '@mui/material';
import GoldStarIcon from '@/public/assets/icons/gold-stsr.svg';
import WhiteStarIcon from '@/public/assets/icons/white-star.svg';
import WishIcon from "@/public/assets/new-icons/heart.svg";
import CartIcon from "@/public/assets/new-icons/cart.svg";
import ViewIcon from "@/public/assets/new-icons/view.svg";
import { AddToCartAction } from '@/redux/actions/CartAction';
import { AddToWishListAction } from '@/redux/actions/WishListActions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
type Props = {
    data: ProductCardData
}

function ProductDetailCard({ data }: Props) {
    const dispatch = useDispatch();
    const router = useRouter();
    function handleAddToCart(data: ProductCardData) {
        return dispatch(AddToCartAction(data));
    };
    const memoizedRatings = useMemo(() => data.rating, [data.rating]);
    function viewItem(productId: number) {
        return router.push(`product/${productId}`);
    };
    function handleAddToWishList(data: ProductCardData) {
        return dispatch(AddToWishListAction(data));;
    };
    return (
        <Box className="item-start flex h-auto w-full flex-grow flex-col justify-start gap-4">
            <Box className="flex w-full flex-row p-1"><Typography className='text-xl font-semibold'>{data.title}</Typography></Box>
            <Box className="flex w-full flex-row gap-3 p-1">
                {data.rating >= 0 && data.rating < 2 && (<Box className="flex flex-row gap-2"><GoldStarIcon /><WhiteStarIcon /><WhiteStarIcon /><WhiteStarIcon /><WhiteStarIcon /></Box>)}
                {data.rating >= 2 && data.rating < 3 && (<Box className="flex flex-row gap-2"><GoldStarIcon /><GoldStarIcon /><WhiteStarIcon /><WhiteStarIcon /><WhiteStarIcon /></Box>)}
                {data.rating >= 3 && data.rating < 4 && (<Box className="flex flex-row gap-2"><GoldStarIcon /><WhiteStarIcon /><GoldStarIcon /><WhiteStarIcon /><WhiteStarIcon /></Box>)}
                {data.rating >= 4 && data.rating < 5 && (<Box className="flex flex-row gap-2"><GoldStarIcon /><GoldStarIcon /><GoldStarIcon /><GoldStarIcon /><WhiteStarIcon /></Box>)}
                {data.rating >= 5 && (<Box className="flex flex-row gap-2"><GoldStarIcon /><GoldStarIcon /><GoldStarIcon /><GoldStarIcon /><GoldStarIcon /></Box>)}
                <Box><Typography className="text-sm">0 reviews</Typography></Box>
            </Box>
            <Box className="flex flex-row p-1"><Typography className='text-xl font-bold'>${data.price}</Typography></Box>
            <Box className="flex flex-row gap-1 p-1"><Typography className="font-medium">Availability  :</Typography><Typography className="font-medium text-[#23A6F0]">{data.stock >= 1 ? "In Stock" : "Not In Stock"}</Typography></Box>
            <Box className="flex w-full flex-row border border-[#BDBDBD] p-1 pt-3">&nbsp;</Box>
            <Box className="flex flex-row p-1"></Box>
            <Box className="flex flex-row items-center justify-start gap-2 p-1">
                <Button type="button" className="flex flex-row gap-3 rounded-md bg-blue px-5 py-2" onClick={() => handleAddToCart(data)}>
                    <CartIcon />
                    <Typography className="text-white hover:text-black">
                        Add To Cart
                    </Typography>
                </Button>
                <Box onClick={() => handleAddToWishList(data)} className='flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-gray-300'>
                    <WishIcon />
                </Box>
                <Box className='flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-gray-300' onClick={() => viewItem(data.id)}>
                    <ViewIcon />
                </Box>
            </Box>
        </Box>
    )
}

export default ProductDetailCard