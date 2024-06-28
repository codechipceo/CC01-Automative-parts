import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCard } from "../../components/Cards/TestimonialCard";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Your business not only provides top-quality components but also offers excellent customer service. The delivery was fast, and the parts fit perfectly.",
      name: "Ayush Aggarwal",
      position: "Marketing Manager",
    },
    {
      text: "The parts arrived well-packaged and exactly as described. My car is running smoothly again, thanks to you. I'll definitely be back for future purchases.",
      name: "Karthik",
      position: "Car Enthusiast",
    },
    {
      text: "Your business has become my go-to for everything I need. The detailed product descriptions and easy communication make my job so much easier.",
      name: "Naren",
      position: "Autoparts Mechanic",
    },
    {
      text: "They helped me find the exact part I needed and even provided tips for installation. The whole process was seamless.",
      name: "Saqib",
      position: "DIY Car Repair",
    },
    {
      text: "The parts are always genuine, and the prices are competitive. Plus, the efficient ordering process makes everything a breeze. Keep up the great work",
      name: "Roger Scott",
      position: "Marketing Manager",
    },
    {
      text: "I've never had a better experience purchasing car parts online. The website is user-friendly, and the support team is incredibly helpful.",
      name: "Priya Mehta",
      position: "Car Owner",
    },
    {
      text: "The quality of the components exceeded my expectations. My car is running like new again. I appreciate the swift service and attention to detail.",
      name: "Aditya Sharma",
      position: "Engineer",
    },
    {
      text: "Exceptional service and high-quality parts every time. I highly recommend this business to anyone in need of reliable car components.",
      name: "Vikram Patel",
      position: "Garage Owner",
    },
    {
      text: "Finding the right part was so easy on your website. The descriptions were accurate, and the delivery was prompt. Great job!",
      name: "Anjali Rao",
      position: "IT Professional",
    },
    {
      text: "Your team went above and beyond to ensure I got the correct part. The customer service is outstanding, and the parts are top-notch.",
      name: "Rohit Singh",
      position: "Mechanic",
    },
  ];
  const theme = useTheme();
  return (
    <div>
      {" "}
      <Box mt={10} py={10} bgcolor={"#f8f9fd"}>
        <Typography
          color={theme.palette.colors.secondary}
          fontWeight={"bold"}
          variant='h6'
          textAlign={"center"}
        >
          {" "}
          Testimonials
        </Typography>
        <Typography fontWeight={"bold"} variant='h4' textAlign={"center"}>
          {" "}
          Happy Clients & Feedbacks
        </Typography>
        <Container>
          <Swiper
            loop
            spaceBetween={4}
            autoplay={{
              disableOnInteraction: false,
              delay: 2500,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonialItem, i) => (
              <SwiperSlide key={i}>
                <Grid2 item xs={12} sm={6} md={4} lg={4}>
                  <TestimonialCard testimonial={testimonialItem} />
                </Grid2>
              </SwiperSlide>
            ))}
          </Swiper>
          <Grid2 container spacing={3}></Grid2>
        </Container>
      </Box>
    </div>
  );
};
