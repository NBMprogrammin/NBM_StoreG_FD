import AddIcon from "@mui/icons-material/Add";

import { Button } from "@mui/joy";
import CountryInput from "./CantryInput";
import { useState } from "react";

export function SearchSelectForDateToClickAndBtn({
  HandelSendDateAllsInThisForm,
  dataFeth,
  ActionBtn,
  TypeShowData,
  currentPayment,
}) {
  const [valiTypeBtnOpenClose, setvaliTypeBtnOpenClose] = useState("");

  function ValueUserSeckeClick(value) {
    setvaliTypeBtnOpenClose(value);
  }

  return (
    <form
      className="FromDateAddProdect"
      style={{ width: "100%", direction: "rtl" }}
      onSubmit={(e) => {
        e.preventDefault();
        HandelSendDateAllsInThisForm(valiTypeBtnOpenClose);
      }}
    >
      <div style={{ display: "flex", alignItems: "center", idth: "100%" }}>
        <div style={{ width: "100%" }}>
          <CountryInput
            dataFeth={dataFeth}
            ValueUserSeckeClick={ValueUserSeckeClick}
            TypeShowData={TypeShowData}
            currentPayment={currentPayment}
          />
        </div>
        <Button
          // className={"BtnSendDateCategory"}
          className={
            !valiTypeBtnOpenClose
              ? "btninputeseatoraction"
              : "normarstlbtnactioninpt"
          }
          type="submit"
          style={{ fontSize: "27px", height: "72px", padding: "0 30px" }}
          disabled={!valiTypeBtnOpenClose}
        >
          {ActionBtn}
          <AddIcon style={{ fontSize: "25px" }} />
        </Button>
      </div>
    </form>
  );
}
