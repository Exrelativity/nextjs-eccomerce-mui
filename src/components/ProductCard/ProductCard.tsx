import { AddToCartAction } from '@/redux/actions/CartAction';
import { AddToWishListAction } from '@/redux/actions/WishListActions';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { CSSProperties, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux';

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
    function viewItem(id: number) {
        return router.push(`/view-product/${id}`);
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
            onTouchEnd={handleMediaEvent} className={`relative flex-shrink-0 flex w-full z-0 rounded-md flex-col h-full flex-grow justify-between items-center hover:cursor-pointer ${className}`} style={style}>
            <Box className={`flex w-full flex-grow flex-col items-end justify-start gap-1 bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${imageUrl ?? "/assets/new-images/sliderImage.jpeg"})`, backgroundSize: "cover", height: "cacl(100% - 90px)" }}>
                <Box className='mr-0 mt-0 flex h-full w-full flex-col'>
                    <Box className='flex flex-row content-center items-center justify-between p-2'>
                        <Box className='flex h-fit w-fit justify-center rounded-[5px] bg-red-950 p-2 text-white'>{"-".concat(String(data.discountPercentage)).concat("%")}</Box>
                        <Box onClick={() => handleAddToWishList(data)} className='flex h-11 w-11 justify-center rounded-full bg-white hover:bg-gray-300'><Image src="/assets/new-icons/heart.svg" alt={"icon"} width={32} height={32} /></Box>
                    </Box>
                    <Box className='flex flex-row content-end items-center justify-end p-2'>
                        <Box className='flex h-11 w-11 justify-center rounded-full bg-white hover:bg-gray-300' onClick={() => viewItem(data.id)}>
                            <Image className='' src="/assets/new-icons/view.svg" alt={"icon"} width={28} height={28} />
                        </Box>
                    </Box>
                    <Box className='flex w-full flex-grow flex-col bg-transparent p-1'>&nbsp;</Box>
                    {memoizedMouseValue && <Box className='flex h-12 w-full flex-row items-center justify-center justify-self-end bg-black text-center align-middle text-white' onClick={() => handleAddToCart(data)}> <Box>Add To Cart</Box> </Box>}
                </Box>
            </Box>
            <Box className={`flex h-[90px] w-full flex-col items-start justify-end gap-1 p-1`}>
                <Box className='font-inter flex w-full flex-row truncate font-sans text-lg font-bold text-black'>{data.title}</Box>
                <Box className='flex w-full flex-row items-center justify-start gap-6'><Box className='text-red-950'>{"$".concat(selling_price().toFixed(2))}</Box><Box ><span className="line-through">{"$".concat(data.price.toFixed(2))}</span></Box></Box>

                <Box className="flex flex-row flex-nowrap items-center justify-start">
                    <Box className="rating gap-1">
                        {memoizedRatings !== undefined && memoizedRatings >= 1 ? <input type="radio" name="rating-1" readOnly className="mask mask-star-2 rating-sm bg-orange-400" checked /> : <input type="radio" name="rating-1" readOnly className="mask mask-star-2 rating-sm" />}
                        {memoizedRatings !== undefined && memoizedRatings >= 2 ? <input type="radio" name="rating-2" readOnly className="mask mask-star-2 rating-sm bg-orange-400" checked /> : <input type="radio" name="rating-2" readOnly className="mask mask-star-2 rating-sm" />}
                        {memoizedRatings !== undefined && memoizedRatings >= 3 ? <input type="radio" name="rating-3" readOnly className="mask mask-star-2 rating-sm bg-orange-400" checked /> : <input type="radio" name="rating-3" readOnly className="mask mask-star-2 rating-sm" />}
                        {memoizedRatings !== undefined && memoizedRatings >= 4 ? <input type="radio" name="rating-4" readOnly className="mask mask-star-2 rating-sm bg-orange-400" checked /> : <input type="radio" name="rating-4" readOnly className="mask mask-star-2 rating-sm" />}
                        {memoizedRatings !== undefined && memoizedRatings >= 5 ? <input type="radio" name="rating-5" readOnly className="mask mask-star-2 rating-sm bg-orange-400" checked /> : <input type="radio" name="rating-5" readOnly className="mask mask-star-2 rating-sm" />}
                    </Box>
                    <Box className='text-[21px]'>{data.rating ? "(".concat(String(data.rating)).concat(")") : "(1)"}</Box>
                </Box>
            </Box>
        </Box >
    )
}

export default ProductCard