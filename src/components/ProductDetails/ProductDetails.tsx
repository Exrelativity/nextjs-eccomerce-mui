"use client";
import React from 'react'
import { ProductCardData } from '../ProductCard/ProductCard'
import { Box, Typography } from '@mui/material'
import GrIcon from '@/public/assets/icons/greater-than-gray.svg';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ProductDetailCard from './ProductDetailCard';
import Image from 'next/image';
type Props = {
    data: ProductCardData
}

function ProductDetails({ data }: Props) {

    const images = data.images.map((item) => {
        return { original: item, thumbnail: item }
    })

    return (
        <Box className="flex w-full flex-col items-center justify-center gap-5 bg-transparent">
            <Box className="flex w-full flex-col items-center justify-center py-5">
                <Box className="container flex flex-col items-start justify-start">
                    <Box className="flex w-full flex-row items-center justify-start gap-3">
                        <Typography className="p-1 font-semibold">Home</Typography>
                        <GrIcon />
                        <Typography className="p-1 font-semibold"> Shop</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="flex w-full flex-col items-center justify-center pb-5">
                <Box className="container flex flex-col items-center justify-center">
                    <Box className="flex w-full flex-row items-center justify-center gap-1 max-md:flex-col">
                        <Box className="flex w-1/2 flex-col items-center justify-center max-md:w-full">
                            <ImageGallery items={images} />
                        </Box>
                        <Box className="flex h-auto w-1/2 flex-grow flex-col items-start justify-start max-md:w-full">
                            <ProductDetailCard data={data} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="flex w-full flex-col items-center justify-center bg-white py-5">
                <Box className="container flex flex-col items-center justify-center">
                    <Box className="flex w-full flex-row items-center justify-center gap-4 border-b p-10 max-md:flex-col max-md:gap-1">
                        <Box className="flex items-center justify-center px-3 py-2 max-md:w-full"><Typography className="text-nowrap text-xl font-bold text-[#737373]">Description</Typography></Box>
                        <Box className="flex items-center justify-center px-3 py-2 max-md:w-full"><Typography className="text-nowrap text-xl font-bold text-[#737373]">Additional Information</Typography></Box>
                        <Box className="flex items-center justify-center px-3 py-2 max-md:w-full"><Typography className="text-nowrap text-xl font-bold text-[#737373]">Reviews (0)</Typography></Box>
                    </Box>
                    <Box className="flex w-full flex-row items-start justify-start gap-1">
                        <Box className="flex w-7/12 flex-col items-start justify-start max-md:w-full">
                            <Typography className="text-normal text-start">{data.description}</Typography>
                        </Box>
                        <Box className="flex w-5/12 flex-col items-center justify-center max-md:hidden">
                            <Image src={data.thumbnail} alt="product image" className="h-full w-full rounded-md" height={100} width={100} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductDetails