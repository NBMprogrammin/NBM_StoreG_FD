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
    if (conteOpenDialog == "active") {
      setTypReading(true);
    }
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
          style={{
            width: "100%",
            textAlign: "center",
            paddingTop: "15px",
            height: "145px",
          }}
        >
          {typeShowDialog == "Success" ? (
            <CheckCircleIcon
              style={{ fontSize: "150px" }}
              color="success"
              className="autouMoveIcounDialogSemthingAction"
            />
          ) : (
            <HighlightOffIcon
              style={{ fontSize: "150px" }}
              color="success"
              className="autouMoveIcounDialogSemthingActionFound"
            />
          )}
        </div>
        <DialogTitle
          textAlign={"center"}
          padding="0"
          bottom="12px"
          fontSize="30px"
        >
          {typeShowDialog == "Success" ? "تمت لعملية بنجاح" : "حدث خطا"}
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
          style={{
            marginTop: "15px",
            fontSize: "35px",
            padding: "10px 15px",
            color: "#fff",
            background: " rgba(47, 188, 207, 0.86)",
          }}
          onClick={handleClose}
        >
          حسنا
        </Button>
      </Dialog>
    </React.Fragment>
  );
}
