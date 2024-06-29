import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductCard } from "../../components/Cards/ProductCard";
import { productData } from "../../Data/productData";
import { Link } from "react-router-dom";

export const OurProducts = () => {
  const theme = useTheme();
  const allData = productData;

  return (
    <div>
      {" "}
      <Box mt={10}>
        <Typography
          color={theme.palette.colors.secondary}
          fontWeight={"bold"}
          variant='h6'
          textAlign={"center"}
        >
          {" "}
          PRODUCTS
        </Typography>
        <Typography fontWeight={"bold"} variant='h4' textAlign={"center"}>
          {" "}
          Our Products
        </Typography>
        <Container>
          <Grid2 container spacing={1} mt={5}>
            {allData.slice(0, 8).map((productItem, i) => (
              <Grid2 item xs={12} sm={6} md={4} lg={3} key={i}>
                <ProductCard productItem={productItem} />
              </Grid2>
            ))}
          </Grid2>
          <Typography
            mt={5}
            textAlign={"center "}
            variant='body1'
            color={theme.palette.colors.secondary}
          >
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              {" "}
              View All Products
            </Link>
          </Typography>
        </Container>
      </Box>
    </div>
  );
};
