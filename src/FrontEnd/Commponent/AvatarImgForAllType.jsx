import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

import { blue } from "@mui/material/colors";

export default function AvatarImgForAllType({
  MyAvatar,
  typShowImg,
  style,
  imgProd,
}) {
  return (
    <>
      {MyAvatar || typShowImg === "ShowAlls" ? (
        <Avatar
          className={style ? style : ""}
          sx={{
            color: blue[600],
            width: imgProd == "active" ? "270px" : 56,
            height: imgProd == "active" ? "270px" : 56,
            borderRadius: imgProd == "active" ? "0px" : "50%",
          }}
          src={
            typShowImg === "ShowAlls"
              ? MyAvatar
              : `http://localhost:8000/${MyAvatar}`
          }
        ></Avatar>
      ) : (
        <Avatar
          className={style ? style : ""}
          sx={{
            bgcolor: blue[100],
            color: blue[600],
            width: "95px",
            height: "95px",
          }}
        >
          <PersonIcon
            style={{
              width: "75px",
              height: "75px",
            }}
          />
        </Avatar>
      )}
    </>
  );
}
