"use client";
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { AddToCartAction, DecrementInCartAction, DeleteFromCartAction, IncrementInCartAction } from '../actions/CartAction';
import { ProductCardData } from './../../components/ProductCard/ProductCard';

export interface CartProductType extends ProductCardData {
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
    quantity: number;
}

export type CartStateType = {
    carts: CartProductType[];
}

const cartState: CartStateType = {
    carts: []
};

const CartReducer = createReducer(cartState, builder => {
    builder.addCase(DeleteFromCartAction, (state, action: PayloadAction<number>) => {
        const cartItemIndex = state.carts.findIndex(c => c.id === action.payload);
        if (cartItemIndex !== -1) {
            const carts = [
                ...state.carts.slice(0, cartItemIndex),
                ...state.carts.slice(cartItemIndex + 1)
            ];
            return { ...state, carts };
        }
        return state;
    });

    builder.addCase(IncrementInCartAction, (state, action: PayloadAction<number>) => {
        const cartItemIndex = state.carts.findIndex(c => c.id === action.payload);
        if (cartItemIndex !== -1) {
            const updatedItem = {
                ...state.carts[cartItemIndex],
                quantity: state.carts[cartItemIndex].quantity + 1
            };
            const carts = [
                ...state.carts.slice(0, cartItemIndex),
                updatedItem,
                ...state.carts.slice(cartItemIndex + 1)
            ];
            return { ...state, carts };
        }
        return state;
    });

    builder.addCase(DecrementInCartAction, (state, action: PayloadAction<number>) => {
        const cartItemIndex = state.carts.findIndex(c => c.id === action.payload);
        if (cartItemIndex !== -1) {
            const updatedItem = {
                ...state.carts[cartItemIndex],
                quantity: Math.max(state.carts[cartItemIndex].quantity - 1, 0)
            };
            const carts = [
                ...state.carts.slice(0, cartItemIndex),
                updatedItem,
                ...state.carts.slice(cartItemIndex + 1)
            ];
            return { ...state, carts };
        }
        return state;
    });

    builder.addCase(AddToCartAction, (state, action: PayloadAction<ProductCardData>) => {
        const newItem: CartProductType = {
            ...action.payload,
            quantity: 1
        };
    
        // Check if the item already exists in the cart
        const existingIndex = state.carts.findIndex(item => item.id === newItem.id);
    
        if (existingIndex !== -1) {
            // If the item exists, update its quantity instead of adding a duplicate
            const updatedCarts = [...state.carts];
            updatedCarts[existingIndex].quantity += 1;
    
            return { ...state, carts: updatedCarts };
        } else {
            // If the item doesn't exist, add it to the cart
            return { ...state, carts: [...state.carts, newItem] };
        }
    });
});

export default CartReducer;
