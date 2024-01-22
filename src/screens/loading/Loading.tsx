"use client"; // Error components must be Client Components

import Header from "@/components/Header/Header";
import LoadingComponent from "@/components/LoadingComponent";
import { Suspense } from "react";
export default function Loading() {
    return (
        <Suspense>
            <div
                style={{ height: "100vh" }}
                className="dark:bg-dark block h-screen w-full overflow-auto bg-white"
            >
                <Header />
                <LoadingComponent />
            </div>
        </Suspense >
    );
}
