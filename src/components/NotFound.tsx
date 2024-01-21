"use client"; // Error components must be Client Components

import { Box, Button } from "@mui/material";
import { useEffect } from "react";

export default function Notfound({
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
    <Box>
      <h2>Something went wrong!</h2>
      <Button
        type="button"
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
