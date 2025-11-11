import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

import { blue } from "@mui/material/colors";


export default function AvatarImgForAllType({
  MyAvatar,
  typShowImg,
  style,
  imgProd,
}) {
  const TypeShowImgUserNow = (status) => {
    switch (status) {
      case "icone":
        return (<Avatar
          className={style ? style : ""}
          sx={{
            bgcolor: blue[100],
            color: blue[600],
          }}
          style={style}
        >
          {MyAvatar}
        </Avatar>);
      default:
        return (<Avatar
          className={style ? style : ""}
          sx={{
            color: blue[600],
          }}
          style={style}
          src={
            typShowImg === "src"
              ? MyAvatar
              : `http://localhost:8000/${MyAvatar}`
          }
        ></Avatar>);
    }
  }
  return (
    <>
      {TypeShowImgUserNow(typShowImg)}
    </>
  );
}
