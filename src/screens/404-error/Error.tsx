"use client"; // Error components must be Client Components

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Button } from "@mui/material";
import { Suspense, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Suspense>
      <Box
        style={{ height: "100vh" }}
        className="dark:bg-dark block h-screen w-full overflow-auto bg-white"
      >
        <Header />
        <Box className="m-auto flex h-full w-full flex-grow flex-col items-center justify-center gap-16 align-middle">
          <Box className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl">Something went wrong!</h2>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Suspense >
  );
}
