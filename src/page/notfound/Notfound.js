import { Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" component="h2">
        404
      </Typography>
      <Typography variant="subtitle1" component="subtitle1">
        PAGE NOT FOUND
      </Typography>
    </div>
  );
}
