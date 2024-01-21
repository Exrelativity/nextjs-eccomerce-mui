'use client'
import { useRef } from 'react';
import { AppStore, makeStore } from './store';
import { Provider } from 'react-redux';

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>();
    if (storeRef.current === undefined) {
        storeRef.current = makeStore()
    }
    return (<Provider store={storeRef.current}> {children} </Provider>)
}