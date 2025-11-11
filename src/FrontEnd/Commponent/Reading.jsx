import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Reading({ typReading }) {
  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: "#4a6cf7", zIndex: theme.zIndex.drawer + 1 })}
        open={typReading}
      >
        <CircularProgress 
        style={{ width: '70px', height: '70px' }} color="inherit" />
      </Backdrop>
    </div>
  );
}
