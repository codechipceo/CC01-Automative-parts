import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const ServiceCard = ({ service }) => {
  const { heading, para, img } = service;
  const navigate = useNavigate();
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <img src={img} alt='' />
        </Box>
        <Box>
          <Typography fontWeight={'bold '} variant="h6">{heading}</Typography>
          <Typography fontWeight={"normal"} variant="body2" textAlign={"justify"}>{para}</Typography>
          {/* <Button variant='text' onClick={() => navigate(link)}>
            View More{" "}
          </Button> */}
        </Box>
      </Box>
    </div>
  );
};
