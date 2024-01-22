"use client";
import { CartProductType } from "@/redux/reducers/CartReducer";


export function calculateCartTotals(cart: CartProductType[]): { totalAmount: number; totalQuantity: number; totalItems: number } {
    let totalAmount = 0;
    let totalQuantity = 0;
    let totalItems = 0;

    cart.forEach((product) => {
        const productTotalAmount = product.price * product.quantity;
        totalAmount += productTotalAmount;
        totalQuantity += product.quantity;
        totalItems += 1; // Increment total items for each product
    });

    return { totalAmount, totalQuantity, totalItems };
}
