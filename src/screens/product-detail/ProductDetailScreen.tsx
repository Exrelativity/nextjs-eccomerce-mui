"use client";
import BestSellerProduct from '@/components/BestSellerProduct/BestSellerProduct'
import Partners from '@/components/Partners/Partners'
import { useGetSingleProductQuery } from '@/services/Api';
import { Box, Typography } from '@mui/material'
import GuestLayout from "@/layout/GuestLayout";
import React from 'react';
import LoadingComponent from '@/components/LoadingComponent';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import SubFooter from '@/components/Footer/SubFooter';

function ProductDetailScreen({ productId }: { productId: Number }) {
    const { error, isLoading, isSuccess, isError, data } = useGetSingleProductQuery(productId);
    return (
        <GuestLayout>
            <Box className="relative flex h-auto w-full flex-col items-center justify-center gap-[150px] bg-[#FAFAFA]">
                <Box className="flex h-auto w-full items-center justify-center">
                    {isLoading && <LoadingComponent />}
                    {isSuccess && <ProductDetails data={data} />}
                    {isError &&
                        (<Box className="flex w-full flex-col items-center justify-center gap-2 p-96 text-center">
                            <Typography className="text-center text-xs font-semibold capitalize text-[#902d2d]">server error occurred while loading product</Typography>
                        </Box>)}
                </Box>
                <Box className="flex h-auto w-full items-center justify-center">
                    <BestSellerProduct />
                </Box>
                <Partners />
            </Box>
            <Box className="relative flex h-auto w-full flex-col items-center justify-center gap-[150px] bg-white">
                <SubFooter />
            </Box>
        </GuestLayout>
    )
}

export default ProductDetailScreen;