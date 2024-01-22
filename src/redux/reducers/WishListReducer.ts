"use client";
import { ProductCardData } from '../../components/ProductCard/ProductCard';
import {PayloadAction, createReducer} from '@reduxjs/toolkit';
import { AddToWishListAction, DecrementInWishListAction, DeleteFromWishListAction, IncrementInWishListAction } from '../actions/WishListActions';

export interface WishListProductType extends ProductCardData  {
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
    quantity : number

}

export type wishlistStateType = {
    wishlists : WishListProductType[]
}

const wishlistState: wishlistStateType = {
    wishlists: []
};

const WishListReducer = createReducer(wishlistState, builder => {
    builder.addCase(DeleteFromWishListAction, (state, action: PayloadAction<number>) => {
        const wishlistItemIndex = state.wishlists.findIndex(c => c.id === action.payload);
        if (wishlistItemIndex !== -1) {
            const wishlists = [
                ...state.wishlists.slice(0, wishlistItemIndex),
                ...state.wishlists.slice(wishlistItemIndex + 1)
            ];
            return { ...state, wishlists };
        }
        return state;
    });

    builder.addCase(IncrementInWishListAction, (state, action: PayloadAction<number>) => {
        const wishlistItemIndex = state.wishlists.findIndex(c => c.id === action.payload);
        if (wishlistItemIndex !== -1) {
            const updatedItem = {
                ...state.wishlists[wishlistItemIndex],
                quantity: state.wishlists[wishlistItemIndex].quantity + 1
            };
            const wishlists = [
                ...state.wishlists.slice(0, wishlistItemIndex),
                updatedItem,
                ...state.wishlists.slice(wishlistItemIndex + 1)
            ];
            return { ...state, wishlists };
        }
        return state;
    });

    builder.addCase(DecrementInWishListAction, (state, action: PayloadAction<number>) => {
        const wishlistItemIndex = state.wishlists.findIndex(c => c.id === action.payload);
        if (wishlistItemIndex !== -1) {
            const updatedItem = {
                ...state.wishlists[wishlistItemIndex],
                quantity: Math.max(state.wishlists[wishlistItemIndex].quantity - 1, 0)
            };
            const wishlists = [
                ...state.wishlists.slice(0, wishlistItemIndex),
                updatedItem,
                ...state.wishlists.slice(wishlistItemIndex + 1)
            ];
            return { ...state, wishlists };
        }
        return state;
    });

    builder.addCase(AddToWishListAction, (state, action: PayloadAction<ProductCardData>) => {
        const newItem: WishListProductType = {
            ...action.payload,
            quantity: 1
        };
    
        // Check if the item already exists in the wishlist
        const existingIndex = state.wishlists.findIndex(item => item.id === newItem.id);
    
        if (existingIndex !== -1) {
            // If the item exists, update its quantity instead of adding a duplicate
            const updatedWishLists = [...state.wishlists];
            updatedWishLists[existingIndex].quantity += 1;
    
            return { ...state, wishlists: updatedWishLists };
        } else {
            // If the item doesn't exist, add it to the wishlist
            return { ...state, wishlists: [...state.wishlists, newItem] };
        }
    });
});

export default WishListReducer;
