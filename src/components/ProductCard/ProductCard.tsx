"use client";
import { AddToCartAction } from '@/redux/actions/CartAction';
import { AddToWishListAction } from '@/redux/actions/WishListActions';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { CSSProperties, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux';
import WishIcon from "@/public/assets/new-icons/heart.svg";
import CartIcon from "@/public/assets/new-icons/cart.svg";
import ViewIcon from "@/public/assets/new-icons/view.svg";

type Props = {
    className?: String;
    style?: CSSProperties;
    data: ProductCardData;
}

export interface ProductCardData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const ProductCard = ({ className, style, data }: Props) => {
    const [mouseStatus, setMouseStatus] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    function handleAddToCart(data: ProductCardData) {
        return dispatch(AddToCartAction(data));
    };
    const imageUrl = data.thumbnail;

    function viewItem(productId: number) {
        return router.push(`product/${productId}`);
    };

    const handleMediaEvent = (event: any) => {
        // Check the type of event (mouse or touch)
        const isMouseEvent = ['mouseenter', 'mouseleave'].includes(event.type);
        const isTouchEvent = ['touchstart', 'touchend'].includes(event.type);

        // Set mouseStatus based on event type
        if (isMouseEvent) {
            setMouseStatus(event.type === 'mouseenter');
        } else if (isTouchEvent) {
            setMouseStatus(event.type === 'touchstart');
        }
    };

    const memoizedMouseValue = useMemo(() => mouseStatus, [mouseStatus]);

    const memoizedRatings = useMemo(() => data.rating, [data.rating]);

    function handleAddToWishList(data: ProductCardData) {
        return dispatch(AddToWishListAction(data));;
    };
    const selling_price = () => { return (data.price - (data.discountPercentage !== undefined ? ((data.discountPercentage * data.price) / 100) : 0)) }
    return (
        <Box onMouseEnter={handleMediaEvent}
            onMouseLeave={handleMediaEvent}
            onTouchStart={handleMediaEvent}
            onTouchEnd={handleMediaEvent} className={`relative flex-shrink-0 flex w-full z-0 rounded-md flex-col h-[500px] flex-grow justify-between items-center hover:cursor-pointer ${className}`} style={style}>
            <Box className={`flex h-[328px] w-full flex-grow flex-col items-end justify-start gap-1 bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${imageUrl ?? "/assets/new-images/sliderImage.jpeg"})`, backgroundSize: "cover" }}>
                <Box className='mr-0 mt-0 flex h-full w-full flex-col'>
                    {memoizedMouseValue && (<Box className='flex flex-row content-end items-center justify-end p-2'>
                        <Button type="button" className='flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-gray-300' onClick={() => viewItem(data.id)}>
                            <ViewIcon />
                        </Button>
                    </Box>)}
                    <Box className='flex w-full flex-grow flex-col bg-transparent p-1'>&nbsp;</Box>
                    {memoizedMouseValue && (<Box className='flex h-16 w-full flex-row items-center justify-around justify-self-end bg-black text-center align-middle text-white'>
                        <Button type="button" className="flex flex-row gap-1 rounded-sm bg-blue" onClick={() => handleAddToCart(data)}>
                            <CartIcon />
                            <Typography className="text-white">
                                Add To Cart
                            </Typography>
                        </Button>
                        <Box className='flex flex-row content-center items-center justify-between p-2'>
                            <Button type="button" onClick={() => handleAddToWishList(data)} className='flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-gray-300'>
                                <WishIcon /></Button>
                        </Box>
                    </Box>)}
                </Box>
            </Box>
            <Box className={`flex h-[162px] w-full flex-col items-center justify-center gap-1 p-1`}>
                <Box className='font-inter flex w-full flex-row items-center justify-center truncate font-sans text-lg font-bold text-black'><Typography>{data.title}</Typography></Box>
                <Box className="flex flex-row flex-nowrap items-center justify-center">
                    <Typography>{data.category}</Typography>
                </Box>
                <Box className='flex w-full flex-row items-center justify-center gap-6'><Box className='text-red-950'>{"$".concat(selling_price().toFixed(2))}</Box><Box ><Typography className="line-through">{"$".concat(data.price.toFixed(2))}</Typography></Box></Box>

            </Box>
        </Box >
    )
}

export default ProductCard