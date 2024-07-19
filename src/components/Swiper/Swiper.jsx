// src/components/SwiperComponent.js

import { useTheme } from "@emotion/react";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperComponent = ({ slides }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const fields = slides ? slides : ["Slide One", "Slide Two"];

   const isXs = useMediaQuery(theme.breakpoints.down("xs"));
   const isSm = useMediaQuery(
     theme.breakpoints.up("sm") && theme.breakpoints.down("md")
   );
   const isMd = useMediaQuery(
     theme.breakpoints.up("md") && theme.breakpoints.down("lg")
   );
   const isLg = useMediaQuery(theme.breakpoints.up("lg"));

   let variant = "h4";
   if (isXs) {
     variant = "h4";
   } else if (isSm) {
     variant = "h4";
   } else if (isMd) {
     variant = "h4";
   } else if (isLg) {
     variant = "h3";
   }
  return (
    <Swiper
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {fields.map((slide, index) => {
        const { img, subHeading, heading } = slide;

        return (
          <SwiperSlide key={index}>
            <Box
              style={{
                minHeight: "100vh",
                height: "100%",
                backgroundPosition: "center center",
                // background: `url(${img})`,
                cursor: "grab",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
              }}
            >
              <Container>
                <Box
                  minHeight={"100vh"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  zIndex={20}
                >
                  <Typography
                    variant='h6'
                    color={theme.palette.colors.secondary}
                  >
                    {" "}
                    {subHeading}
                  </Typography>
                  <Typography color={"white"} variant={variant}>
                    {" "}
                    {heading}
                  </Typography>
                  {/* <Button
                    onClick={() => navigate("/contact-us")}
                    disableElevation
                    variant='contained'
                    sx={{
                      display: "inline-flex",
                      maxWidth: "fit-content",
                      backgroundColor: theme.palette.colors.secondary,
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: `1px solid ${theme.palette.colors.secondary}`,
                        // Adjust hover color if needed
                      },
                    }}
                  >
                    Book An Appointment{" "}
                  </Button> */}
                </Box>
              </Container>{" "}
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
