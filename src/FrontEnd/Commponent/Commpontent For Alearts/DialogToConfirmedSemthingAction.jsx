import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TypIconShowActionA = (status) => {
  switch (status) {
    case "Success":
      return (
        <CheckCircleIcon
          style={{ fontSize: "150px" }}
          color="success"
          className="autouMoveIcounDialogSemthingAction styliconalert"
        />
      );
    default:
      return (
        <HighlightOffIcon
          style={{ fontSize: "150px" }}
          color="success"
          className="autouMoveIcounDialogSemthingActionFound styliconalert"
        />
      );
  }
}

export default function DialogToConfirmedSemthingAction({
  discription,
  conteOpenDialog,
  typeShowDialog,
  setTypeDialog,
  typeDialog,
  setTypReading,
}) {
  const handleClose = () => {
    setTypeDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={typeDialog}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          className="stlaleartdl"
        >
          {TypIconShowActionA(typeShowDialog)}
        </div>
        <DialogTitle
          textAlign={"center"}
          padding="0"
          bottom="12px"
          fontSize="30px"
        >
          {typeShowDialog == "Success" ? "تمت بنجاح" : "حدث خطا"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            textAlign="center"
            fontSize="27px"
            dir="rtl"
          >
            {discription}
          </DialogContentText>
        </DialogContent>
        <Button
          className="styleBigBtnOkInAleartShow"
          onClick={handleClose}
        >
          حسنا
        </Button>
      </Dialog>
    </React.Fragment>
  );
}
