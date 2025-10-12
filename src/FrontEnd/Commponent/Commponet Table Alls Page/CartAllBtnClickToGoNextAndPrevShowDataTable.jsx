import { Button } from "@mui/joy";

const stlbtndef = {
  fontSize: "20px",
  backgroundColor: "#4a6cf7",
  border: "2px solid #4a6cf7",
  color: "#fff",
  borderRadius: "12px",
  padding: "11px 30px",
  cursor: "pointer",
};

const stlbtndefdsp = {
  fontSize: "20px",
  backgroundColor: " rgba(250, 249, 249, 0.21)",
  border: "2px solid #4a6cf7",
  color: "#4a6cf7",
  borderRadius: "12px",
  padding: "10px",
  cursor: "no-drop",
};

const stylallbtntodoaction = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

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
    <div className="styledivallbtntablenps" style={stylallbtntodoaction}>
      {ModelShowDate === "GoToAllMyCategory" ? (
        <button
          // className="btnForNextAndPrevDateCategory"
          style={stlbtndef}
          onClick={HandleShowSAllProdectsUser}
        >
          {" "}
          {"الكل"}
        </button>
      ) : (
        ""
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "flex-end",
        }}
      >
        <button
          // style={{ fontSize: "22px" }}
          style={
            loadingTabelBody || currentPageAndTypeShow == last_Page
              ? stlbtndefdsp
              : stlbtndef
          }
          disabled={loadingTabelBody || currentPageAndTypeShow == last_Page}
          onClick={HandleSowNextMyCategory}
        >
          {" "}
          {"<تالي "}{" "}
        </button>
        <button
          style={
            loadingTabelBody || currentPageAndTypeShow == 1
              ? stlbtndefdsp
              : stlbtndef
          }
          disabled={loadingTabelBody || currentPageAndTypeShow == 1}
          onClick={HandleSowPrevMyCategory}
        >
          {" "}
          {"الماضي>"}
        </button>
      </div>
    </div>
  );
}
