import { useMemo } from "react";
import { Button } from "@mui/joy";
import "../../../App.css";

export default function CartAllBtnClickToGoNextAndPrevShowDataTable({
  loadingTabelBody,
  ModelShowDate,
  HandleShowSAllProdectsUser,
  currentPageAndTypeShow,
  last_Page,
  HandleSowNextMyCategory,
  HandleSowPrevMyCategory,
}) {
  return (
    <div className="styledivallbtntablenps" >
      {ModelShowDate === "GoToAllMyCategory" ? (
        <button
          className="styleBtnShowIndexDataPageTableDsp"
          onClick={HandleShowSAllProdectsUser}
        >
          {" "}
          {"الكل"}
        </button>
      ) : (
        ""
      )}

      <div
        className="styleDivTouBtnShowNextAndPrevData"
      >
        <button
        className={
          loadingTabelBody || currentPageAndTypeShow == 1
              ? 'styleBtnShowIndexDataPageTable'
              : 'styleBtnShowIndexDataPageTableDsp'
        }
          disabled={loadingTabelBody || currentPageAndTypeShow == 1}
          onClick={HandleSowPrevMyCategory}
        >
          {" "}
          {"تالي>"}
        </button>
        <button
          className={
            loadingTabelBody || currentPageAndTypeShow == last_Page
                ? 'styleBtnShowIndexDataPageTable'
                : 'styleBtnShowIndexDataPageTableDsp'
          }
          disabled={loadingTabelBody || currentPageAndTypeShow == last_Page}
          onClick={HandleSowNextMyCategory}
        >
          {" "}
          {"<الماضي "}{" "}
        </button>
      </div>
    </div>
  );
}
