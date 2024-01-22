"use client";
import { Middleware } from 'redux';

const localStorageMiddleware: Middleware = store => next => action => {
  const prevState = store.getState();
  const result = next(action);
  const nextState = store.getState();

  
  if (prevState.carts !== nextState.carts || prevState.wishlists !== nextState.wishlists) {
    const { carts, wishlists } = nextState; 
    localStorage.setItem('cartState', JSON.stringify(carts));
    localStorage.setItem('wishlistState', JSON.stringify(wishlists));
  }

  return result;
};

export default localStorageMiddleware;
