// Icon For MaterUi
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/joy";
import { useState } from "react";
import { SelectInputeAndDate } from "./SelectInputeAndDate";
import { FormLabel } from "@mui/material";

export function FormInInputAndBtnToDoAction({
  HandelSendDateAllsInThisForm,
  placeholder,
  ActionBtn,
  typeMyInput,
  dispast,
}) {
  const [valiTypeBtnOpenClose, setvaliTypeBtnOpenClose] = useState("");
  function ValueInpuNowAndThisShange(valueInpute) {
    setvaliTypeBtnOpenClose(valueInpute);
  }

  return (
    <div
      style={{
        width: "100%",
        textAlign: "right",
      }}
    >
      <FormLabel
        className={placeholder == "" ? "dispboxnone" : "styletitelinputeaction"}
      >
        {placeholder}
      </FormLabel>
      <form
        className="FromDateAddProdect"
        style={{ width: "100%", direction: "rtl" }}
        onSubmit={(e) => {
          e.preventDefault();
          HandelSendDateAllsInThisForm(valiTypeBtnOpenClose);
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            idth: "100%",
          }}
        >
          <SelectInputeAndDate
            typeMyInput={typeMyInput}
            TitlInp={""}
            ValueInpuNowAndThisShange={ValueInpuNowAndThisShange}
          />
          <Button
            className={
              !valiTypeBtnOpenClose && valiTypeBtnOpenClose.length != dispast
                ? "btninputeseatoraction"
                : "normarstlbtnactioninpt"
            }
            type="submit"
            style={{ fontSize: "27px", height: "72px", padding: "0 30px" }}
            disabled={
              !valiTypeBtnOpenClose && valiTypeBtnOpenClose.length != dispast
            }
          >
            {ActionBtn}
            <AddIcon style={{ fontSize: "25px" }} />
          </Button>
        </div>
      </form>
    </div>
  );
}
