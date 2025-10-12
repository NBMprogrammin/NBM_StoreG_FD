import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import React from 'react';
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";

let TypShowAl = false;

export default function AleartToDoSemthingActions({
  HandleConfirmedAleartToDoAction,
  DagtDoAct,
  OpenCloceAleartT,
  typeShowAleart,
  TitelInpuOne,
  TypeInpuOne,
  TitelInpuTou,
  TypeInpuT,
  titelAleart,
  titelBtn,
  TitelInpuThere,
  TypeInpuThere,
  setOpenCloceAleartT,
  valueInputeSmt,
  setvalueInputeSmt,
  discriptionAlt,
  tyShowAlt,
  KeyGoldAleart,
}) {
  function CloseAlert() {
    setOpenCloceAleartT(false);
    setvalueInputeSmt({
      ...valueInputeSmt,
      valueOne: "",
      valueTou: "",
      valueThere: "",
    });
  }

  function HandleVlueSemthingInputeNow(value, data, typeaction) {
    if (typeaction === "actionforinputone") {
      setvalueInputeSmt({
        ...valueInputeSmt,
        valueOne: value,
      });
    } else if (typeaction === "actionforinputou") {
      setvalueInputeSmt({
        ...valueInputeSmt,
        valueTou: value,
      });
    } else if (typeaction === "actionforinputhere") {
      setvalueInputeSmt({
        ...valueInputeSmt,
        valueThere: value,
      });
    }
  }

  return (
    <Modal
      open={OpenCloceAleartT}
      onClose={() => CloseAlert()}
      key={KeyGoldAleart + 3}
      dir="rtl"
    >
      <ModalDialog key={KeyGoldAleart + 4}>
        <DialogTitle
          style={{
            fontSize: "27px",
          }}
          key={KeyGoldAleart + 5}
        >
          {titelAleart}
        </DialogTitle>
        {tyShowAlt === "bss" ||
        tyShowAlt === "user" ||
        tyShowAlt === "teweve" ? (
          <DialogContent
            key={DagtDoAct + 6}
            style={{
              fontSize: "20px",
            }}
            sx={{ margin: "30px 0px" }}
          >
            {discriptionAlt}
          </DialogContent>
        ) : (
          ""
        )}
        <form
          key={DagtDoAct + 7}
          style={{
            paddingTop: tyShowAlt == "bss" ? "0px" : "30px",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            HandleConfirmedAleartToDoAction(
              valueInputeSmt.valueOne,
              valueInputeSmt.valueTou,
              typeShowAleart,
              DagtDoAct,
              valueInputeSmt.valueThere
            );
          }}
        >
          <Stack spacing={2} key={DagtDoAct + 8}>
            {tyShowAlt === "user" || tyShowAlt === "teweve" ? (
              ""
            ) : (
              <div
                key={DagtDoAct + 9}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {tyShowAlt === "bss" ? (
                  ""
                ) : (
                  <SelectInputeAndDate
                    key={DagtDoAct + 10}
                    TitlInp={TitelInpuOne}
                    typeMyInput={TypeInpuOne}
                    ValueInpuNowAndThisShange={HandleVlueSemthingInputeNow}
                    typeActionN="actionforinputone"
                    TypObj={DagtDoAct}
                  />
                )}

                <SelectInputeAndDate
                  key={DagtDoAct + 11}
                  TitlInp={TitelInpuTou}
                  typeMyInput={TypeInpuT}
                  ValueInpuNowAndThisShange={HandleVlueSemthingInputeNow}
                  typeActionN="actionforinputou"
                  TypObj={DagtDoAct}
                />

                {tyShowAlt === "edartmaneybss" ? (
                  <SelectInputeAndDate
                    key={DagtDoAct + 9809}
                    TitlInp={TitelInpuThere}
                    typeMyInput={TypeInpuThere}
                    ValueInpuNowAndThisShange={HandleVlueSemthingInputeNow}
                    typeActionN="actionforinputhere"
                    TypObj={DagtDoAct}
                  />
                ) : (
                  ""
                )}
              </div>
            )}

            <div
              key={DagtDoAct + 12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  padding: "12px",
                  fontSize: "22px",
                  width: "100%",
                }}
                type="submit"
                disabled={
                  tyShowAlt === "bss"
                    ? valueInputeSmt.valueTou.length < 4
                    : "" || tyShowAlt === "user" || tyShowAlt === "teweve"
                    ? false
                    : false || tyShowAlt === "edartmaneybss"
                    ? valueInputeSmt.valueOne == 0 ||
                      valueInputeSmt.valueOne == "" ||
                      valueInputeSmt.valueTou == "" ||
                      valueInputeSmt.valueTou == 0
                    : false || tyShowAlt === "importtouinputepayment"
                    ? valueInputeSmt.valueOne == "" ||
                      valueInputeSmt.valueOne == 0 ||
                      valueInputeSmt.valueTou == "" ||
                      valueInputeSmt.valueTou == 0 ||
                      valueInputeSmt.valueTou.length < 4
                    : valueInputeSmt.valueOne == "" ||
                      valueInputeSmt.valueTou.length < 4
                }
              >
                {titelBtn}
              </Button>
              <Button
                style={{
                  padding: "12px",
                  fontSize: "22px",
                  width: "100%",
                }}
                onClick={() => CloseAlert()}
              >
                الالغاء
              </Button>
            </div>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}
