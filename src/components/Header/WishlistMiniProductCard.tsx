
import { DecrementInWishListAction, DeleteFromWishListAction, IncrementInWishListAction } from '@/redux/actions/WishListActions';
import { WishListProductType } from '@/redux/reducers/WishListReducer';
import { Box } from '@mui/material';
import Image from 'next/image';
import React, { CSSProperties, useCallback } from 'react'
import { useDispatch } from 'react-redux';

type Props = {
    className?: String;
    style?: CSSProperties;
    data: WishListProductType;
}

function WishlistMiniProductCard({ className, style, data }: Props) {
    const dispatch = useDispatch();
    const handleIncrement = useCallback(
        (data: WishListProductType) => {
            dispatch(IncrementInWishListAction(data.id))
        }, [dispatch]);
    const handleDecrement = useCallback(
        (data: WishListProductType) => {
            dispatch(DecrementInWishListAction(data.id))
        }, [dispatch]);
    const handleRemove = useCallback(
        (data: WishListProductType) => {
            dispatch(DeleteFromWishListAction(data.id))
        }, [dispatch]);
    return (
        <Box className={`flex w-full flex-row items-center bg-white text-black rounded-md justify-between ${className}`} style={style}>
            <Box className='flex h-full w-4/12 items-center justify-center rounded-md bg-cover bg-center' style={{ backgroundImage: `url(${data.thumbnail})` }}>&nbsp;</Box>
            <Box className='flex w-7/12 flex-col items-start justify-start gap-3 p-2 max-md:w-6/12'>
                <Box className='flex w-full flex-grow items-center justify-start'><Box className='text-blue-950 truncate text-nowrap text-center text-lg font-semibold'>{data.title}</Box></Box>
                <Box className='flex items-center justify-start text-sm max-md:text-xs'><Box><span className='text-sm uppercase text-red-950'>Price:</span> ${data.price}</Box></Box>
                <Box className='flex items-center justify-start text-sm max-md:text-xs'><Box><span className='text-sm uppercase text-red-950'>Quantity:</span> {data.quantity}</Box></Box>
                <Box className='flex items-center justify-start text-sm max-md:text-xs'><Box><span className='text-sm uppercase text-red-950'>Total:</span> {data.quantity * data.price}</Box></Box>
            </Box>
            <Box className='flex w-1/12 flex-col items-start justify-start gap-1 p-2 max-md:w-2/12'>
                <Box className='flex items-center justify-end gap-1 text-sm hover:cursor-pointer max-md:text-xs' onClick={() => handleIncrement(data)}><Box className='rounded-full bg-gray-100 p-1 hover:cursor-pointer hover:bg-gray-400'><Image src={"/assets/new-icons/plus.svg"} alt='icon' width={28} height={28} /></Box></Box>
                <Box className='flex items-center justify-end gap-1 text-sm hover:cursor-pointer max-md:text-xs' onClick={() => handleDecrement(data)}><Box className='rounded-full bg-gray-100 p-1 hover:cursor-pointer hover:bg-gray-400'><Image src={"/assets/new-icons/minus.svg"} alt='icon' width={28} height={28} /></Box></Box>
                <Box className='flex items-center justify-end gap-1 text-sm hover:cursor-pointer max-md:text-xs' onClick={() => handleRemove(data)}><Box className='rounded-full bg-gray-100 p-1 hover:cursor-pointer hover:bg-gray-400'><Image src={"/assets/new-icons/delete.svg"} alt='icon' width={28} height={28} /></Box></Box>
            </Box>
        </Box>
    )
}

export default WishlistMiniProductCard
