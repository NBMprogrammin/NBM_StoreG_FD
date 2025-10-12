import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function BtnToGoToDoActionForNextPage({
  linck,
  pargrafe,
  OnLciToDoActrion,
  disabled,
  TpeAction,
}) {
  return (
    <div className="stletngenerageforallpageedart">
      {linck ? (
        <Link to={`/${linck}`} aria-disabled={disabled}>
          <Fab
            variant="extended"
            aria-disabled={disabled}
            className="stylebtntodoactioninpageedar"
          >
            <NavigationIcon sx={{ mr: 1 }} />
            {pargrafe}
          </Fab>
        </Link>
      ) : (
        <Fab
          className="stylebtntodoactioninpageedar"
          variant="extended"
          onClick={() => OnLciToDoActrion(TpeAction)}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          {pargrafe}
        </Fab>
      )}
    </div>
  );
}
