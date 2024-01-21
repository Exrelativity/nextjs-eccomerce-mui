"use client";
import { PropsWithChildren, Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Box } from "@mui/material";


export default function GuestLayout({ children, ...props }: PropsWithChildren) {
  return (
    <Suspense>
      <Box>
        <Header />
        {children}
        <Footer />
      </Box>
    </Suspense >
  );
}
