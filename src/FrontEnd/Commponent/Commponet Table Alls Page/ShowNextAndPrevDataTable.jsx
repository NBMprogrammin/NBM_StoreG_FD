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
      className={loadingTabelBody ? "animationBG stylContCardShoDataTable" : "stylContCardShoDataTable"}
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
      >
        {TitelFirst}: {totelPageCategory}
      </h2>
    </div>
  );
}
