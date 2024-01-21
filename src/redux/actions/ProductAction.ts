import { ProductCardData } from '@/components/ProductCard/ProductCard';
import {createAction} from '@reduxjs/toolkit';

export const Product_ACTION = createAction<ProductCardData[]>('Product_ACTION');
export const Get_Product_ACTION = createAction<number>('Get_Product_ACTION');
export const Update_Product_ACTION = createAction<ProductCardData>('Update_Product_ACTION');
export const Add_Product_ACTION = createAction<ProductCardData>('Add_Product_ACTION');
export const Delete_Product_ACTION = createAction<number>('Delete_Product_ACTION');
export const Search_Product_ACTION = createAction<string>('Search_Product_ACTION');


