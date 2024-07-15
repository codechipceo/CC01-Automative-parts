import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
export const Footer = () => {
  const services = [
    "In Car Entertainment",
    " Advanced Driver-Assistance Systems",
    "Lighting Solutions",
    "Security and Alarm Systems",
  ];
  const theme = useTheme();
  return (
    <div>
      <Box bgcolor={theme.palette.navbar.main} py={5}>
        <Container>
          <Grid2 container rowSpacing={4} spacing={4}>
            <Grid2 item xs={12} md={3} lg={3}>
              <Box>
                <Typography variant='h4' color={"white"} fontWeight={"bold"}>
                  {" "}
                  LNVASUKI <br /> ENTERPRISES
                </Typography>
                <Typography variant='body2' color={"whitesmoke"} mt={3}>
                  No 212/2 Shiva Nilaya, Ground Floor, 7th Cross, 7th Main,
                  Poornaprajna Layout, Uttarahalli,, Bangalore, Bangalore,
                  Karnataka, India, 560061
                </Typography>
              </Box>
            </Grid2>
            <Grid2 item xs={12} md={3}>
              <Box>
                <Typography
                  variant='h5'
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"left"}
                >
                  {" "}
                  Services
                </Typography>
                {services.map((item) => (
                  <Typography
                    key={item}
                    color={"whitesmoke"}
                    variant='body1'
                    textAlign={"left"}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                        color: theme.palette.colors.secondary,
                      },
                    }}
                  >
                    {item}{" "}
                  </Typography>
                ))}
              </Box>
            </Grid2>
            <Grid2 item xs={12} md={3}>
              <Box>
                <Typography
                  variant='h5'
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"left"}
                >
                  {" "}
                  Contact Information
                </Typography>

                <Typography
                  color={"whitesmoke"}
                  variant='body1'
                  textAlign={"left"}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: theme.palette.colors.secondary,
                    },
                  }}
                >
                  <CallIcon />
                  +91 99001 76466
                </Typography>
                <Typography
                  color={"whitesmoke"}
                  variant='body1'
                  textAlign={"left"}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: theme.palette.colors.secondary,
                    },
                  }}
                >
                  <AlternateEmailIcon /> rsiddu@gmail.com
                </Typography>
              </Box>
            </Grid2>
            <Grid2 item xs={12} md={3}>
              <Box>
                <Typography
                  variant='h5'
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"left"}
                >
                  {" "}
                  Business Hours
                </Typography>
                <Typography
                  color={"whitesmoke"}
                  variant='body1'
                  textAlign={"left"}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: theme.palette.colors.secondary,
                    },
                  }}
                >
                  Monday – Friday : 9am to 20 pm Saturday : 9am to 17 pm
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
          <Typography textAlign={"center"} color={"whitesmoke"} mt={5}>
            Copyright © {new Date().getFullYear()} All rights reserved | This
            website is design and developed by{" "}
            <a
              target='_blank'
              style={{ color: "white", textDecoration: "none" }}
              href='https://www.codechip.in'
            >
              {" "}
              CODECHIP | Studios{" "}
            </a>
          </Typography>
        </Container>
      </Box>
    </div>
  );
};
