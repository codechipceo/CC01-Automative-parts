import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

export const AboutCompany = () => {
  const theme = useTheme();
  return (
    <div>
      {" "}
      <Typography
        color={theme.palette.colors.secondary}
        fontWeight={"bold"}
        variant='h6'
        textAlign={"center"}
      >
        {" "}
        Know About Us
      </Typography>
      <Typography fontWeight={"bold"} variant='h4' textAlign={"center"} mb={5}>
        {" "}
        About Company
      </Typography>
      <Container>
        <Box>
          <Typography
            variant='body1'
            color={"text.secondary"}
                      textAlign={"justify"}
                      mb={2}
          >
            Founded in 17/02/2022, M/S LNVASUKI ENTERPRISES PVT.LTD. This
            private ltd company is a shade of Autocop(I) pvt ltd –Established
            was 1989. And, Red Soul Enterprises pvt ltd.Established was 2005 by
            me.
          </Typography>
          <Typography
            variant='body1'
            color={"text.secondary"}
                      textAlign={"justify"}
                      mb={2}
          >
            Myself Revanashiddeshwar Hiremath, everyone calls me Siddu. I was
            the first employee as well as director of both above mentioned
            companies. I was the technical director for the Autocop and managing
            director for Red soul. My total work experience is 28 years in
            automobile industry. And the present company has taken over the Red
            soul brand and it’s all products and customer requirements hence the
            company is now fully closed.
          </Typography>
          <Typography
            variant='body1'
            color={"text.secondary"}
            textAlign={"justify"}
          >
            The present company M/S LNVASUKI ENTERPRISES PVT.LTD is having two
            directors that is me and my wife, she is BA, LLB graduate but
            presently not practicing. She is supporting me in official works
            like banking, import, financial agreements etc.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};
