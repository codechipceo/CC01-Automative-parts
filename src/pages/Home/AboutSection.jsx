import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const MissionTabs = () => {
  const tabsObj = [
    {
      tabName: "Our Mission",
      tabContent:
        "Our mission is to revolutionize the automotive landscape by delivering innovative solutions that prioritize safety, convenience, and excellence",
    },
    {
      tabName: "Our Vision",
      tabContent:
        "Our vision is simple yet profound – to redefine the automotive landscape by providing solutions that enhance safety, convenience, and driving experiences",
    },
    {
      tabName: "Our Value",
      tabContent: `
We are committed to quality, reliability, and customer satisfaction. Our team prioritizes integrity, transparency, and excellence, ensuring that every service we provide meets the highest standards.`,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabsObj[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Grid2 container>
        {tabsObj.map((tabItem, i) => {
          return (
            <Grid2 key={i} item xs={12} md={3} mx={1} my={1}>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: activeIndex === i ? "primary" : "white",
                  color: activeIndex === i ? "primary" : "black",
                  fontWeight: "bold",
                }}
                fullWidth
                disableElevation
                onClick={() => {
                  setActiveTab(tabItem);
                  setActiveIndex(i);
                }}
              >
                {tabItem.tabName}
              </Button>
            </Grid2>
          );
        })}
      </Grid2>
      <Box bgcolor={"white"} px={2} py={3}>
        <Typography color={"grey"} variant='body1'>
          {activeTab.tabContent}
        </Typography>
      </Box>
    </>
  );
};

export const AboutSection = () => {
  const theme = useTheme();
  const { colors } = theme.palette;
  return (
    <Box sx={{ backgroundColor: "#f8f9fd" }} my={10}>
      <Container>
        <Grid2 container columnSpacing={4}>
          <Grid2 item xs={12} md={6} lg={6}>
            <Box width={"100%"}>
              <img src='images/about.jpg' alt='' width={"100%"} />
            </Box>
          </Grid2>
          <Grid2
            item
            xs={12}
            md={6}
            lg={6}
            py={4}
            my={"auto"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={2}
            rowSpacing={4}
          >
            <Typography
              color={colors.secondary}
              textAlign={"left"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              Welcome to LNVASUKI ENTERPRISES Pvt.Ltd.
            </Typography>
            <Typography
              fontWeight={"bold"}
              variant='h4'
              textTransform={"uppercase"}
              textAlign={"justify"}
            >
              We help more than 45 years serving customer car
            </Typography>
            <Typography color={"grey"}>LNVASUKI ENTERPRISES PVT LTD</Typography>
            <Typography color={"grey"} textAlign={"justify"}>
              {" "}
              redefines automotive solutions. As leaders in importing,
              assembling, and distributing automotive parts, accessories,
              safety, security, and entertainment products, we bring innovation
              to every journey. Our services extend beyond supply – encompassing
              installation, repair, and maintenance, delivering a complete
              automotive solution{" "}
            </Typography>
            <MissionTabs />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
