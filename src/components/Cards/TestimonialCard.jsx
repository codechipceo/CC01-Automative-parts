import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 5, height:200 }}>
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {testimonial.text}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {/* <Avatar
            alt={testimonial.name}
            src={testimonial.avatar}
            sx={{ mr: 2 }}
          /> */}
        </Box>
        <Typography variant='h6'>{testimonial.name} </Typography>
        <Typography variant='body2' color={"text.secondary"}>
          {testimonial.position}
        </Typography>
      </CardContent>
    </Card>
  );
};
