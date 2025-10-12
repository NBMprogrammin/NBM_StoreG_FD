export default function CartModrDateShow({ titel, date }) {
  return (
    <div className="CardSheckCategoryMore">
      <h5 style={{ fontSize: "26px", fontWeight: "bold", color: "#fff" }}>
        {titel}
      </h5>
      <h1 style={{ fontSize: "26px", fontWeight: "bold", color: "#fff" }}>
        {date}
      </h1>
    </div>
  );
}
