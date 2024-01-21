import { ProductCardData } from '@/components/ProductCard/ProductCard';
import {createAction} from '@reduxjs/toolkit';

export const AddToWishListAction = createAction<ProductCardData>('AddToWishListAction');
export const DeleteFromWishListAction = createAction<number>('DeleteFromWishListAction');
export const IncrementInWishListAction = createAction<number>('IncrementInWishListAction');
export const DecrementInWishListAction = createAction<number>('DecrementInWishListAction');

