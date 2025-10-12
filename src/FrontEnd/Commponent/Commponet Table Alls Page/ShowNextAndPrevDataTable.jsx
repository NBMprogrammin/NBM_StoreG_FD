export default function ShowNextAndPrevDataTable({
  loadingTabelBody,
  totelPageCategory,
  startPageTo,
  startPageNow,
  TypShow,
  TitelFirst,
}) {
  return (
    <div
      className={loadingTabelBody ? "animationBG" : ""}
      style={{
        minWidth: "300px",
        display: "flex",
        gap: "25px",
        justifyContent: "center",
        height: "55px",
        margin: "auto",
        alignItems: "center",
      }}
    >
      {TypShow == "More" && totelPageCategory > 1 ? (
        <p style={{ color: "#fff" }}>
          من {startPageNow} الى {startPageTo}
        </p>
      ) : (
        ""
      )}
      <h2
        className="TotalPageCategory"
        style={{ display: "flex", alignItems: "center", gap: "15px" }}
      >
        {TitelFirst}: {totelPageCategory}
      </h2>
    </div>
  );
}
