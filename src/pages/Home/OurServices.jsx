import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ServiceCard } from "../../components/Cards/ServiceCard";

const services = [
  {
    heading: "Electrical System Diagnostics",
    para: " Identify and resolve electrical issues swiftly with our comprehensive diagnostics services. We offer battery testing, alternator and starter checks, and detailed diagnostic trouble code (DTC) scanning for accurate problem detection ",
    link: "",
    img: "",
  },
  {
    heading: "Electronic Control Unit (ECU) Services",
    para: " Optimize your vehicle's performance with our specialized ECU services. We provide ECU testing, replacement,& performance tuning to ensure your car runs efficiently and smoothly. Trust our experts to enhance your vehicle's engine management and overall functionality.",
    link: "",
    img: "",
  },
  {
    heading: "In-Car Entertainment and Connectivity",
    para: " Upgrade your driving experience with our premium in-car entertainment and connectivity solutions. From audio system installations to GPS navigation, Bluetooth, and hands-free kits, we ensure you stay connected and entertained on the road. ",
    link: "",
    img: "",
  },
  {
    heading: " Advanced Driver-Assistance Systems",
    para: " Enhance safety and convenience with our advanced driver-assistance systems. We install and service backup cameras, parking sensors, blind spot detection, and lane departure warning systems to make your driving safer and easier. ",
    link: "",
    img: "",
  },
  {
    heading: "Lighting Solutions",
    para: " Brighten up your vehicle with our comprehensive lighting solutions. From headlight and taillight replacements to LED upgrades and interior lighting installations, we ensure you have optimal visibility and style ",
    link: "",
    img: "",
  },
  {
    heading: "Security and Alarm Systems",
    para: " Enhance your vehicle's protection with our state-of-the-art security and alarm systems. We offer expert installation of car alarms, keyless entry systems, immobilizers, and GPS tracking to keep your vehicle safe and secure ",
    link: "",
    img: "",
  },
];

export const OurServices = () => {
  const theme = useTheme();
  return (
    <div>
      <Box mt={10}>
        <Typography
          color={theme.palette.colors.secondary}
          fontWeight={"bold"}
          variant='h6'
          textAlign={"center"}
        >
          {" "}
          What we Offer
        </Typography>
        <Typography fontWeight={"bold"} variant='h4' textAlign={"center"}>
          {" "}
          Our Services
        </Typography>
        <Container>
          <Grid2 container spacing={3}>
            {services.map((service, i) => (
              <Grid2 item xs={12} sm={6} md={4} lg={4} key={i}>
                <ServiceCard service={service} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};
