import { Box, Container, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { CounterCard } from "../Cards/CounterCard";

export const Counter = ({ itemArr }) => {
  const theme = useTheme();

  return (
    <div>
      <Box bgcolor={theme.palette.navbar.main} py={4}>
        <Container>
          <Grid2 container>
            {itemArr.map((item, i) => {
              return (
                <Grid2 key={i} item xs={12} md={3}>
                  <CounterCard
                    label={item.label}
                    number={item.number}
                    color={theme.palette.colors.secondary}
                  />
                </Grid2>
              );
            })}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};
