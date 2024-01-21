"use client"; // Error components must be Client Components

import Header from "@/components/Header/Header";
import { Suspense } from "react";
export default function Loading() {
    return (
        <Suspense>
            <div
                style={{ height: "100vh" }}
                className="dark:bg-dark block h-screen w-full overflow-auto bg-white"
            >
                <Header />
                <div className="m-auto flex h-full w-full flex-grow flex-col items-center justify-center align-middle">
                    <div><span className="loading loading-infinity w-[100px] text-red-900"></span></div>
                </div>
            </div>
        </Suspense >
    );
}
