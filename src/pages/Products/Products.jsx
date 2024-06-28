import { Box, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { productData } from "../../Data/productData";
import { ProductCard } from "../../components/Cards/ProductCard";
import { HeaderTwo } from "../../components/Header/HeaderTwo";
import { Footer } from "../../components/Footer/Footer";
import { Testimonials } from "../Home/Testimonials";

export const Products = () => {
  const productList = productData.map((eachProduct, i) => {
    return (
      <Grid2 item key={i} xs={12} md={3}>
        <ProductCard productItem={eachProduct} key={i} />
      </Grid2>
    );
  });
  return (
    <div>
      <HeaderTwo pageName={"Products"} />
      <Box sx={{ backgroundColor: "#f8f9fd" }}>
        <Container>
          <Grid2 container spacing={1} py={5}>
            {productList}
          </Grid2>
        </Container>
      </Box>
      <Testimonials />
      <Footer />
    </div>
  );
};
