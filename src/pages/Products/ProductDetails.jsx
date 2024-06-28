import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../Data/productData";
import { Navbar } from "../../components/Navbar/Navbar";
import { filterProduct } from "../../hooks/utils";
import { ProductCard } from "../../components/Cards/ProductCard";
import { HeaderTwo } from "../../components/Header/HeaderTwo";
import { Testimonials } from "../Home/Testimonials";
import { Footer } from "../../components/Footer/Footer";

export const ProductDetails = () => {
  const { slug } = useParams();
  const getProduct = filterProduct(productData, slug);

  const { title, description, price, extraImages, bulletPointDescription } =
    getProduct;
  const [selectedImage, setSelectedImage] = useState(extraImages[0]);
  return (
    <div>
      <HeaderTwo pageName={"Product Details"} />
      {/* <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          minHeight: "50vh",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/bg_1.jpg)`,
        }}
      >
        <Typography
          textAlign={"center"}
          variant='h2'
          color={"white"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Product Details{" "}
        </Typography>
      </Box> */}
      <Container disableGutters>
        <Grid2 container mt={5} columnSpacing={4}>
          <Grid2 item xs={12} md={6} lg={6} display={"flex"}>
            <Box display={"flex"} flexDirection={"column"} gap={1} mt={1}>
              {extraImages.map((image, i) => {
                return (
                  <Box key={i} sx={{ "&:hover": { cursor: "pointer" } }}>
                    <img
                      height={60}
                      style={{
                        border: selectedImage === image ? "1px solid red" : "",
                      }}
                      src={image}
                      onClick={() => setSelectedImage(image)}
                      alt=''
                    />
                  </Box>
                );
              })}
            </Box>
            <Box width={"100%"} height={"100%"}>
              <img
                src={`${selectedImage}`}
                alt=''
                style={{ objectFit: "cover" }}
                width={"100%"}
              />
            </Box>
          </Grid2>
          <Grid2
            item
            xs={12}
            md={6}
            lg={6}
            py={4}
            my={2}
            display={"flex"}
            flexDirection={"column"}
            rowGap={2}
            rowSpacing={4}
          >
            <Typography
              fontWeight={"bold"}
              variant='h4'
              textTransform={"uppercase"}
              textAlign={"justify"}
            >
              {title}
            </Typography>
            <hr />
            <Typography
              fontWeight={""}
              variant='h6'
              textTransform={"uppercase"}
              textAlign={"justify"}
            >
              Price : &#8377; {price}
            </Typography>
            <Typography color={"grey"} textAlign={"justify"}>
              {" "}
              {description}
            </Typography>
            {bulletPointDescription && (
              <Typography fontWeight={"bold"}>About This Item</Typography>
            )}

            {bulletPointDescription.map((points, i) => {
              return (
                <ul key={i}>
                  <li>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      textAlign={"justify"}
                    >
                      {points}
                    </Typography>
                  </li>
                </ul>
              );
            })}
          </Grid2>
        </Grid2>
      </Container>
      <Testimonials />
      <Footer />
    </div>
  );
};
