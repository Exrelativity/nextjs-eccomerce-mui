"use client";
import { ProductCardData } from './../../components/ProductCard/ProductCard';
import {PayloadAction, createReducer} from '@reduxjs/toolkit';
import { Add_Product_ACTION, Delete_Product_ACTION, Get_Product_ACTION, Product_ACTION, Search_Product_ACTION, Update_Product_ACTION } from '../actions/ProductAction';

type productStateType = {
    products : ProductCardData[];
    selectedProducts? : ProductCardData[];
    product?: ProductCardData
}
const fetchProduct = () => {
    return [{
        id: 1,
        title: "Product 1",
        description: "Description of Product 1",
        price: 19.99,
        discountPercentage: 10,
        rating: 4.5,
        stock: 50,
        brand: "Brand A",
        category: "Electronics",
        thumbnail: "url/to/thumbnail.jpg",
        images: ["url/to/image1.jpg", "url/to/image2.jpg"],
        isNew: true,
        releaseDate: "2022-03-01",
      }]
}
const productState: productStateType = {
    products: fetchProduct(),
    product: undefined,
    selectedProducts: undefined
};

const ProductReducer = createReducer(productState, builder => {
    builder.addCase(Product_ACTION, (state, action: PayloadAction<ProductCardData[]>) => {
        return {...state, products: [...state.products, ...action.payload]}}
    );
    builder.addCase(Get_Product_ACTION, (state, action: PayloadAction<number>) => {
        const product = state.products.filter((item)=>{
            item.id === action.payload
        })[0];
        return {...state, product: product}}
    );
    builder.addCase(Update_Product_ACTION, (state, action: PayloadAction<ProductCardData>) =>{
        const productIndex = state.products.findIndex((item)=>{
            item.id === action.payload.id
        }) ?? -1;
        const products = [
            ...state.products.slice(0, productIndex - 1),
            {
                id: action.payload.id ? action.payload.id : state.products[productIndex].id,
                title: action.payload?.title ? action.payload.title : state.products[productIndex].title,
                price: action.payload?.price ? action.payload.price : state.products[productIndex].price,
                description: action.payload.description ? action.payload.description : state.products[productIndex].description,
                images: action.payload.images ? action.payload.images : state.products[productIndex].images,
                discountPercentage: action.payload.discountPercentage ? action.payload.discountPercentage : state.products[productIndex].discountPercentage,
                category: action.payload.category ? action.payload.category : state.products[productIndex].category,
                stock: action.payload.stock ? action.payload.stock : state.products[productIndex].stock,
                rating: action.payload.rating ? action.payload.rating : state.products[productIndex].rating,
                thumbnail: action.payload.thumbnail ? action.payload.thumbnail : state.products[productIndex].thumbnail,
                brand: action.payload.brand ? action.payload.brand : state.products[productIndex].brand,
            },
            ...state.products.slice(productIndex + 1, state.products.length)
        ];
        const product = products.filter((item)=>{
            item.id === action.payload.id
        })[0];
        return {...state, products:products, product: product}
    });
    builder.addCase(Delete_Product_ACTION, (state, action: PayloadAction<number>) =>{
        const productIndex = state.products.findIndex((item)=>{
            item.id === action.payload
        }) ?? -1;
        const products = [
            ...state.products.slice(0, productIndex - 1),
            ...state.products.slice(productIndex + 1, state.products.length)
        ];
        const product = products.filter((item)=>{
            item.id === action.payload
        })[0];
        return {...state, products:products, product: product}
    });
    builder.addCase(Add_Product_ACTION, (state, action: PayloadAction<ProductCardData>) =>{
        const products = [
            ...state.products,
            action.payload
        ];
        const product = products.filter((item)=>{
            item.id === action.payload.id
        })[0];
        return {...state, products:products, product: product}
    });
    builder.addCase(Search_Product_ACTION, (state, action: PayloadAction<string>) =>{
        const selectedProduct = state.products.filter((item)=>{
            String(item.id).includes(action.payload) 
            || String(item.price).includes(action.payload) 
            || String(item.discountPercentage).includes(action.payload)
            || item.title.includes(action.payload)
            || item.description.includes(action.payload)
            || String(item.discountPercentage).includes(action.payload)
            || String(item.stock).includes(action.payload)
            || String(item.rating).includes(action.payload)
        });
        return {...state, selectedProduct: selectedProduct}
    });
});
export default ProductReducer;
