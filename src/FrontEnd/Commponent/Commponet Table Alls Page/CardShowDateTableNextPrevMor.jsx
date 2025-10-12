export default function CardShowDateTableNextPrevMor({
  loadingTabelBody,
  ShowTypeData,
  totelPageCategory,
  startPageNow,
  startPageTo,
  TypShow,
  TitelFirst,
}) {
  return (
    <div
      className={loadingTabelBody ? "animationBG" : "#4a6cf7"}
      style={{
        minWidth: "300px",
        background: loadingTabelBody ? "" : "#4a6cf7",
        display: "flex",
        gap: "15px",
        height: "55px",
        borderRadius: "12px",
      }}
    >
      {/* {loadingTabelBody ? "" : ShowTypeData} */}

      <div
        className={loadingTabelBody ? "dispboxnone" : ""}
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
    </div>
  );
}
