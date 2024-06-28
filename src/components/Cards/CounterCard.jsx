import { Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
export const CounterCard = ({ number, label, color }) => {
  return (
    <div>
      <Typography color={color} variant='h3' textAlign={"center"}>
        <TrackVisibility once>
          {({ isVisible }) => (
            <span className='number count'>
              {isVisible ? <CountUp end={number} duration={3} /> : null}{" "}
              <span>+</span>
            </span>
          )}
        </TrackVisibility>
      </Typography>
      <Typography
        variant='h6'
        color={"lightgray"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        {label}
      </Typography>
    </div>
  );
};
