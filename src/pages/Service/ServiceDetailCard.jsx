import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const ServiceDetailCard = ({
  image,
  title,
  description,
  isReverse,
  secondPara,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Grid container mt={5} mb={isSmallScreen ? 5 : 15}>
        <Card
          style={{
            display: "flex",
            flexDirection: isSmallScreen
              ? "column"
              : isReverse
              ? "row-reverse"
              : "row",
          }}
          elevation={0}
        >
          <Grid item xs={12} sm={5}>
            <CardMedia
              component='img'
              image={image}
              alt={title}
              style={{
                objectFit: "cover",
                borderRadius: 10,
                aspectRatio: "2/1.5",
              }}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={12} sm={6} my={"auto"}>
            <CardContent>
              <Typography variant='h5' component='div' mb={2} mt={"auto"}>
                {title}
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
                mb={2}
                textAlign={"justify"}
              >
                {description}
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
                textAlign={"justify"}
              >
                {secondPara}
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};
