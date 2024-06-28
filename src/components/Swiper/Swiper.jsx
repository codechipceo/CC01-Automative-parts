// src/components/SwiperComponent.js

import { useTheme } from "@emotion/react";
import { Box, Button, Container, Typography } from "@mui/material";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperComponent = ({ slides }) => {
  const theme = useTheme();
  const fields = slides ? slides : ["Slide One", "Slide Two"];
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
                backgroundPosition: "center center",
                // background: `url(${img})`,
                cursor: "grab",
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
              }}
            >
              <Container>
                <Box
                  minHeight={"100vh"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  zIndex={20}
                >
                  <Typography
                    variant='h6'
                    color={theme.palette.colors.secondary}
                  >
                    {" "}
                    {subHeading}
                  </Typography>
                  <Typography color={"white"} variant='h2'>
                    {" "}
                    {heading}
                  </Typography>
                  <Button
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
                  </Button>
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
