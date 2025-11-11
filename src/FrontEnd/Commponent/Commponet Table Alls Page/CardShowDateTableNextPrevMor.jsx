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
      className={loadingTabelBody ? "animationBG stylecardShowMoreDataTbles" : "stylecardShowMoreDataTbles"}
      style={{
        background: loadingTabelBody ? "" : "#4a6cf7",
      }}
    >
      <div
        className={loadingTabelBody ? "dispboxnone stylContCardShoDataTable" : "stylContCardShoDataTable"}
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
