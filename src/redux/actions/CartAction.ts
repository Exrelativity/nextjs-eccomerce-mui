import { ProductCardData } from '@/components/ProductCard/ProductCard';
import {createAction} from '@reduxjs/toolkit';

export const AddToCartAction = createAction<ProductCardData>('AddToCartAction');
export const DeleteFromCartAction = createAction<number>('DeleteFromCartAction');
export const IncrementInCartAction = createAction<number>('IncrementInCartAction');
export const DecrementInCartAction = createAction<number>('DecrementInCartAction');

