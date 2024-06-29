import React from "react";
import { PageHeader } from "../../components/PageHeader";
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const AboutOwner = () => {
  const profile = [
    "I, here by Mr. Revanashiddeshwar Hiremath, called as (R Siddu Hiremath in short) finished my diploma in electronics and ITI 3 years apprenticeship in turner/fitter/machinist in Air Teck Engineering Dharwad. That is 1989 to 1993.",
    "In the year 1993 to 1994, worked as a machinist on the production line. Worked in various machines like milling, drilling, lathe, grinding, and CNC lathe machines in Hubli.",
    "In January 1996, joined M/S Autocop (India) Pvt Ltd, (it’s a car security system company) as a service engineer for the Bangalore branch. I was the first employee for the South Autocop company. I have taken that as a challenge and worked as a fitter, trainer, supplier, accountant, and marketing the products, built a good relationship with all car showrooms and car accessories retailers in Karnataka.",
    "After my performance, my company promoted me as regional manager for South India in 1997, so I started working in all 5 states in South Indian cities like Chennai, Pondy, Cochin, and Hyderabad. We have established our business in a span of 4 to 5 years from 200 crores it’s gone up to 400 crores till my last day.",
    "In the year 1999, I got the best employee of the year and got Rs-10000/- cash reward. And the same year I got promoted as a technical director of the sister concern company of Autocop based in Bangalore again. In the year 2000, I had been transferred to Mumbai on a deputation basis, for improving business and service. I had been there for 6 months.",
    "In the year 2001, the company sent me to Delhi to take care of Daewoo Car Factory’s OEM dealing. I have done work on Matiz Car and Cielo Car and we got approved as an OEM on line fitment.",
    "In the year 2002, I came back to Bangalore. Again, the same year I got 2nd prize from the company. In December 2005, I left the company to start my own firm, and joined hands with Mr. Manohar Singh, a friend of mine. He started the company called M/S Redsoul Enterprises Pvt Ltd. I joined as CEO of the company to develop the business.",
    "In the year 2007, I traveled to China to source car accessories. Since I was into the OEM business and technically sound, it became easy to choose the best products. It helped me to get a brand name in the South Indian market. We opened offices in all cities in South India and reached a business of 2 to 2.5 crores in 5 years' time. Due to a small investment by my friend, we have not grown faster.",
    "In the year 2012, me and another ex-colleague purchased the shares for 15 lakhs each and became owners. Due to my partner not being focused and not supportive, he left and I took another partner. We are doing better afterward.",
    "Our Redsoul brand product and my staff satisfied our end-users and we are happy to rise to the expected level. Our products are very much suitable for all Indian car brands like Toyota, Honda, Suzuki, Renault, Nissan, Tata, Mahindra, etc.",
    "I am happy to inform that M/S Syndicate Bank has supported me by providing financial support since 2005 to till today. We are under the MSME certificate and also we are assembling a few models which we import from China.",
    "I had been traveling and attended all automobile fairs in Singapore, Malaysia, Korea, Hong Kong, and Taiwan. I was a technical advisor in 2013 and 2014 for KES-SIEOL (Korea Electronic Show). The Korean government paid for my stay and air ticket and appointed me as a technical adviser.",
    "Due to misunderstandings started between partners, I resigned as a director in November 2021. Came out settling all my dues. My partners also closed that Redsoul company on March 31st, 2022.",
    "I opened a new firm by the name M/S LNVasuki Enterprises Pvt Ltd on 17/02/2022. I am the working director and my wife is the director.",
    "My customer is now Minda Corporation Pune, Ashok Leyland, Vedanta Ltd Goa, local car showrooms Ravindu Toyota, Viva Toyota, Advaith Hyundai, etc.",
    "Last year business (1st year) 2022-23 is 83 lakhs. This 22-23 financial year projection is 2 crores to 3 crores. I am importing products from China and supplying to Vedanta Iron Ore Goa plant, and Countr Microfine Goa. And Minda Corporation Pune. And also supplying power foot steps to Toyota car dealers.",
    "Hoping that my dreams come true in my future life.",
    "With best regards, Revanashiddeshwar Hiremath. (R Siddu Hiremath)",
  ];

  return (
    <div>
      <Box mt={5}>
        <PageHeader
          subHeading={"Meet The Director"}
          heading={"About Managing Director"}
        />
        <Container>
          <Grid2 container>
            <Grid2 item xs={12} md={5}>
              <img
                src='ceo.jpg'
                width={"100%"}
                style={{ objectFit: "contain" }}
              />
            </Grid2>

            <Grid2 xs={12} md={6}>
              {profile.map((eachPara, i) => {
                return (
                  <Typography
                    mb={1}
                    color={"text.secondary"}
                    variant='body2'
                    key={i}
                    textAlign={"justify"}
                  >
                    {eachPara}
                  </Typography>
                );
              })}
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};
