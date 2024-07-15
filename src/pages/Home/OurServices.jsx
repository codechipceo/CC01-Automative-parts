import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ServiceCard } from "../../components/Cards/ServiceCard";
import { services } from "../../Data/serviceData";

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
        <Typography
          fontWeight={"bold"}
          variant='h4'
          textAlign={"center"}
          mb={5}
        >
          {" "}
          Our Services
        </Typography>
        <Container>
          <Grid2 container spacing={3} height={"100%"}>
            {services.map((service, i) => (
              <Grid2
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                key={i}
                sx={{
                  "&:hover": { backgroundColor: "#fff2cc" },
                  cursor: "pointer",
                }}
                height={"100%"}
              >
                <ServiceCard service={service} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};
