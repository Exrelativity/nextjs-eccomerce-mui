"use client";
import React, { CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

export default function ApplicationLogo({ className, style }: { className?: string; style?: CSSProperties }) {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push("/")}
      className={`flex flex-row text-black text-2xl max-md:flex-shrink font-bold hover:scale-105 hover:cursor-pointer ${className}`} style={style}
    >
      Bandage
    </Box>
  );
}
