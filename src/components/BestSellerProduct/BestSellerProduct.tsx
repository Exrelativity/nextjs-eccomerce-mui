"use client";
import { useFetchProductsQuery, useGetAllProductsQuery } from '@/services/Api';
import { Box, Button, Card, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import ProductCard, { ProductCardData } from '../ProductCard/ProductCard';
import LoadingComponent from '../LoadingComponent';

type Props = {
    loadMore?: boolean;
}

function BestSellerProduct({ loadMore }: Props) {
    const [products, setProducts] = useState<ProductCardData[]>();
    const { error, isLoading, isSuccess, isError, data } = useFetchProductsQuery();

    useEffect(() => {
        if (isSuccess) {
            setProducts(() => data.products.slice(0, 10));
        }
    }, [isError, isSuccess, data, error]);


    return (
        <Box className="flex w-full flex-row items-center justify-center">
            <Box className="container flex flex-grow flex-col items-center justify-center gap-4 max-md:p-4">
                <Box className="flex w-full flex-col items-center justify-center gap-2">
                    <Box className="flex text-sm font-semibold"><Typography className="text-sm font-semibold text-[#737373]">Featured Products</Typography></Box>
                    <Box className="flex text-lg font-semibold"><Typography className="text-lg font-semibold text-black">BESTSELLER PRODUCTS</Typography></Box>
                    <Box className="flex text-center text-xs font-semibold"><Typography className="text-center text-xs font-semibold text-[#737373]">Problems trying to resolve the conflict between </Typography></Box>
                </Box>
                <Box className="flex w-full flex-grow flex-row flex-wrap content-start items-center justify-center gap-1 max-md:flex-col max-md:gap-4">
                    {products && products.map((item: ProductCardData, index) => {
                        return (<Card key={index} className="flex flex-grow flex-row max-md:w-[100%] md:w-[19%]">
                            <ProductCard data={item} />
                        </Card>)
                    })}
                    {
                        isLoading && <LoadingComponent />
                    }
                    {isError && <Box className="flex w-full flex-col items-center justify-center gap-2 p-96 text-center">
                        <Typography className="text-center text-xs font-semibold capitalize text-[#902d2d]">server error occurred while loading product</Typography>
                    </Box>
                    }
                </Box>
                {loadMore && <Box className="flex flex-col border border-[#23A6F0] text-[#23A6F0]"><Button className="rounded-md border border-[#23A6F0] text-[#23A6F0]" type="button" onClick={() => setProducts(() => data?.products ? data.products : [])}>LOAD MORE PRODUCTS</Button></Box>}
            </Box>

        </Box>
    )
}

export default BestSellerProduct