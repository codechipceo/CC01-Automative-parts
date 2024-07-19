import { Counter } from "../../components/Counter/Counter";
import { Footer } from "../../components/Footer/Footer";
import { HeaderOne } from "../../components/Header/HeaderOne";
import SwiperComponent from "../../components/Swiper/Swiper";
import { AboutSection } from "./AboutSection";
import { OurProducts } from "./OurProducts";
import { OurServices } from "./OurServices";
import { Testimonials } from "./Testimonials";

const itemArr = [
  {
    number: 11,
    label: "YEARS OF EXPERIENCE",
  },
  {
    number: 200,
    label: "PROJECTS COMPLETED",
  },
  {
    number: 150,
    label: "HAPPY CUSTOMERS",
  },
  {
    number: 8,
    label: "AWARD WINNING",
  },
];
export const Home = () => {
  const slides = [
    {
      img: "images/bg-3.jpg",
      // subHeading: "We are best in industry",
      heading: "Car Entertainment System",
      buttonLink: "",
    },
    {
      img: "images/bg-1.jpg",
      // subHeading: "We care about your vehicle",
      heading: "Security and Alarm System",
      buttonLink: "",
    },
    {
      img: "images/bg-2.jpg",
      // subHeading: "We care about your vehicle",
      heading: "Advance Driver Assistance System",
      buttonLink: "",
    },
  ];

  return (
    <>
      <HeaderOne />
      <SwiperComponent slides={slides} />
      <OurServices />
      <AboutSection />
      <Counter itemArr={itemArr} />
      <OurProducts />
      <Testimonials />
      <Footer />
    </>
  );
};
