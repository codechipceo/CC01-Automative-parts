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
      text: "It has been a wonderful experience in the last couple instances where I had some issues with the stereo system and the door buttons and both times the issue was effectively resolved at a very reasonable cost.",
      name: "Raghavendra madi",
      position: "Local Guide",
    },
    {
      text: "A place where experience meets expertise. Inside the office, you see a short man who greets you with warmth and respect. He has vast knowledge on car Electronics and Electrical stuff. He offers wide range of products including Infotainment systems, car accessories etc.",
      name: "RAGHU SATHYANARAYANA",
      position: "Car Enthusiast",
    },
    {
      text: "Good team, have the best quality products with quality service and reasonable price",
      name: "Vineeth Hiremath",
      position: "Autoparts Mechanic",
    },
    {
      text: "A great place for car accessories.  Mr. Sidhu is ur man at his best customer service and great knowledge on car products. Thank you.",
      name: "Brijith g.p.",
      position: "DIY Car Repair",
    },
    {
      text: "Very good responded and we'll knowledge people especially Mr siddu very humble and down to earth man. Thank you for the quality product and quality service.",
      name: "Ramanathan shivaraman",
      position: "Marketing Manager",
    },
    {
      text: "A good hope for repairing car music system and headlight,Natraj is polite and experienced person, who fix all issues in decent price",
      name: "vedavyasa H,S",
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
