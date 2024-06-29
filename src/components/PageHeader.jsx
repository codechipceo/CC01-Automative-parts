import { Typography, useTheme } from "@mui/material";
import React from "react";

export const PageHeader = ({ subHeading, heading }) => {
  const theme = useTheme();
  return (
    <div>
      <Typography
        color={theme.palette.colors.secondary}
        fontWeight={"bold"}
        variant='h6'
        textAlign={"center"}
      >
        {" "}
        {subHeading}
      </Typography>
      <Typography fontWeight={"bold"} variant='h4' textAlign={"center"} mb={5}>
        {" "}
        {heading}
      </Typography>
    </div>
  );
};
