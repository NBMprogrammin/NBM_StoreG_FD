import { Input } from "@mui/joy";
import { FormLabel } from "@mui/material";

export function SelectInputeAndDate({
  TypObj,
  typeMyInput,
  TitlInp,
  ValueInpuNowAndThisShange,
  ValueInputNow,
  keyG,
  typeActionN,
}) {
  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      {TitlInp != "" ? (
        <FormLabel
          key={keyG}
          style={{
            fontSize: "25px",
            color: "#9b8b8b",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        >
          {TitlInp}
        </FormLabel>
      ) : (
        ""
      )}

      <Input
        // value={ValueInputNow}
        sx={{
          "&::before": {
            display: "none",
          },
          "&:focus-within": {
            outline: "2px solid var(--Input-focusedHighlight)",
            outlineOffset: "2px",
            fontSize: "23px !important",
          },
          fontSize: "20px",
          padding: "20px",
        }}
        type={typeMyInput}
        onChange={(valu) => {
          ValueInpuNowAndThisShange(
            typeMyInput == "file" ? valu.target.files[0] : valu.target.value,
            TypObj,
            typeActionN
          );
        }}
        size="20px"
        style={{ fontSize: "20px" }}
      />
    </div>
  );
}

// background-color: ;
