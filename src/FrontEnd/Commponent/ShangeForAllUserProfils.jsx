import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AvatarImgForAllType from "./AvatarImgForAllType";

export default function ShangeForAllUserProfils({
  open,
  setOpen,
  showDateUser,
  DataUserClickLoginNow,
  ProfilreNow,
}) {
  const SimpleDialog = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value, TypeAction) => {
      onClose(value);
      DataUserClickLoginNow(value, TypeAction);
    };

    const ShowDatFirstProfile = React.useMemo(() => {
      if (ProfilreNow && showDateUser.Profile_Bss && showDateUser.Profile_tweve) {
        return (
          <ListItem key={showDateUser.Profile.id} disablePadding>
            <ListItemButton
              key={showDateUser.Profile.id + 9}
              disabled={ProfilreNow.name == showDateUser.Profile.name}
              sx={{ gap: "10px" }}
              onClick={() => handleListItemClick(showDateUser.Profile, "user")}
            >
              <ListItemAvatar key={showDateUser.Profile.id + 3}>
                <AvatarImgForAllType MyAvatar={showDateUser.Profile.image} />
              </ListItemAvatar>
              <div key={showDateUser.Profile.user_id + 5}>
                <ListItemText primary={showDateUser.Profile.name} />
                <ListItemText primary={"شخصي"} />
              </div>
            </ListItemButton>
          </ListItem>
        );
      }
    }, [showDateUser]);

    const ShowAllsMyProfileBss = React.useMemo(() => {
      if (ProfilreNow && showDateUser.Profile_Bss && showDateUser.Profile_tweve) {
        return showDateUser.Profile_Bss.map((Profile) => (
          <ListItem
            key={Profile.id + 70}
            disablePadding
            disabled={ProfilreNow.name == Profile.usernameBss}
          >
            <ListItemButton
              key={Profile.id + 66}
              sx={{ gap: "10px" }}
              onClick={() => handleListItemClick(Profile, "bss")}
              disabled={ProfilreNow.name == Profile.usernameBss}
            >
              <ListItemAvatar key={Profile.id + 22}>
                <AvatarImgForAllType MyAvatar={Profile.image} />
              </ListItemAvatar>
              <div key={Profile.id + 59}>
                <ListItemText primary={Profile.usernameBss} />
                <div
                  key={Profile.id + 102}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemText primary={Profile.megaleBss} />
                  <ListItemText primary={"تجاري"} />
                </div>
              </div>
            </ListItemButton>
          </ListItem>
        ));
      }
    }, [showDateUser]);

    const ShowAllsMyProfileTrave = React.useMemo(() => {
      if (ProfilreNow && showDateUser.Profile_Bss && showDateUser.Profile_tweve) {
        return showDateUser.Profile_tweve.map((Profile) => (
          <ListItem
            disablePadding
            key={Profile.id +634567}
            disabled={ProfilreNow.name == Profile.usernameBss}
          >
            <ListItemButton
            key={Profile.id +3456788}
              sx={{ gap: "10px" }}
              onClick={() => handleListItemClick(Profile, "teweve")}
              disabled={ProfilreNow.name == Profile.usernameBss}
            >
              <ListItemAvatar 
            key={Profile.id +931111114567}>
                <AvatarImgForAllType MyAvatar={Profile.image} />
              </ListItemAvatar>
              <div 
                key={Profile.id +77777777776}>
                <ListItemText primary={Profile.usernameBss} />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItemText primary={Profile.megaleBss} />
                  <ListItemText
                    style={{ marginInline: "10px" }}
                    primary={" موضف "}
                  />
                </div>
              </div>
            </ListItemButton>
          </ListItem>
        ));
      }
    }, [showDateUser]);

    if (showDateUser) {
      return (
        <Dialog key={ProfilreNow.id + 55555555} onClose={handleClose} open={open}>
          <DialogTitle
            fontSize={"30px"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            ادارة الحسابات
          </DialogTitle>

          {ShowDatFirstProfile}

          <List key={ProfilreNow.id + 1323} sx={{ pt: 0 }}>
            {showDateUser.Profile_Bss ? ShowAllsMyProfileBss : <></>}

            {showDateUser.Profile_tweve ? ShowAllsMyProfileTrave : <></>}
          </List>
        </Dialog>
      );
    }
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
