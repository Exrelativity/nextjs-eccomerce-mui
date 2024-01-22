import BestSellerProduct from '@/components/BestSellerProduct/BestSellerProduct'
import Partners from '@/components/Partners/Partners'
import { useGetSingleProductQuery } from '@/services/Api';
import { Box } from '@mui/material'
import React from 'react';


async function ProductDetailScreen({ productId }: { productId: Number }) {
    const { error, isLoading, isSuccess, isError, data } = useGetSingleProductQuery(productId);
    return (
        <Box className="bg-[background: #FAFAFA;] relative flex h-full w-full flex-col items-center justify-start overflow-auto py-10 text-black">


            <Box className="flex h-auto w-full items-center justify-center">
                <BestSellerProduct />
            </Box>
            <Partners />
        </Box>
    )
}

export default ProductDetailScreen;