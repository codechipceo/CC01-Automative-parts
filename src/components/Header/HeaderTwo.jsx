import { Box, Typography } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";

export const HeaderTwo = ({ pageName }) => {
  return (
    <div>
      <Navbar />
      <Box
        height={""}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          minHeight: "50vh",
          backgroundPosition: "center center",
          // background: `url(${img})`,
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/bg_2.webp)`,
        }}
      >
        <Typography color={"white"} variant='h3' fontWeight={"bold"}>
          {pageName}
        </Typography>
      </Box>
    </div>
  );
};
