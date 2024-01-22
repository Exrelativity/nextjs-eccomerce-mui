"use client";
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Partners() {
    return (
        <Box className="flex w-full flex-row flex-wrap content-center items-center justify-center gap-10 py-40">
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
        </Box>
    )
}

export default Partners