import React from "react";
import { Box, Typography } from "@mui/material";

export default function Welcome({ user }) {
  return (
    <Box>
      <Typography variant="h5" color={"primary"}>
        Namaste, {user.name.split(" ")[0]} 🙏
      </Typography>
    </Box>
  );
}
