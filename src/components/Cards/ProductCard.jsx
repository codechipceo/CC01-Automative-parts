import { Box, Button, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
export const ProductCard = ({ productItem }) => {
  const { img, title, description, price, link, id, extraImages } =
    productItem;
  const theme = useTheme();

  const buttonColor = theme.palette.colors.secondary;
  return (
    <Card
      elevation={1}
      sx={{
        padding: 1,
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component='img'
        height='194'
        sx={{ objectFit: "fill" }}
        image={`${extraImages[0]}`}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          display={"flex"}
          alignItems={"start"}
          justifyContent={"space-between"}
        >
          <Typography variant='body1' fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography fontWeight={"bold"} variant='body1' display={"flex"}>
            &#8377;{price}
          </Typography>
        </Box>
        <Typography
          variant='body2'
          color='text.secondary'
          textAlign={"justify"}
        >
          {description.substring(0, 120)}
        </Typography>
      </CardContent>
      <Box >
        <Link to={"/product-details/" + id} style={{ textDecoration: "none" }}>
          <Button
            disableElevation
            variant='contained'
            fullWidth
            sx={{
              backgroundColor: buttonColor,
              "&:hover": {
                backgroundColor: "transparent",
                color: `${buttonColor}`,
                border: `1px solid ${buttonColor}`,
              },
            }}
          >
            View Product
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
