"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ApiService } from '../services/Api';
import ProductReducer from './reducers/ProductReducer';
import CartReducer, { CartStateType } from './reducers/CartReducer';
import WishListReducer, { wishlistStateType } from './reducers/WishListReducer';
import localStorageMiddleware from './localStorageMiddleware';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

export const makeStore:any = () => {

  const rootReducer:any = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
    [ApiService.reducerPath]: ApiService.reducer,
  });

  const cartStateJSON = typeof localStorage !== 'undefined' ? localStorage.getItem('cartState') : null;
  const wishlistStateJSON = typeof localStorage !== 'undefined' ? localStorage.getItem('wishlistState') : null;


  const persistedCartState: CartStateType | undefined = cartStateJSON
    ? JSON.parse(cartStateJSON) as CartStateType
    : undefined;

  const persistedWishlistState: wishlistStateType | undefined = wishlistStateJSON
    ? JSON.parse(wishlistStateJSON) as wishlistStateType
    : undefined;

  return configureStore({
    reducer: rootReducer,
    preloadedState: {
      cart: persistedCartState,
      wishlist: persistedWishlistState
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(ApiService.middleware).concat(localStorageMiddleware),
  })
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
makeStore().subscribe(() => {
  const state = makeStore().getState();
  localStorage.setItem('cartState', JSON.stringify(state.cart));
  localStorage.setItem('wishlistState', JSON.stringify(state.wishlist));
});

