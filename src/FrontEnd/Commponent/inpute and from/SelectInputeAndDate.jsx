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

  const HandleVluereInputeNow = (e) => {
    const file = typeMyInput === "file" ? e.target.files[0] : '';

    if (file && typeMyInput === "file") {
      const reader = new FileReader();
      
      reader.onload = (loadEvent) => {
        const datImg = loadEvent.target.result;
        
        ValueInpuNowAndThisShange(
          typeMyInput == "file" ? e.target.files[0] : e.target.value,
          TypObj,
          typeActionN,
          datImg
        );
      };
      
      reader.readAsDataURL(file);
    } else {
      ValueInpuNowAndThisShange(
        e.target.value,
        TypObj,
        typeActionN,
        ''
      );
    }
  }
  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      {TitlInp != "" ? (
        <FormLabel
          key={keyG}
          className="styLableInputeUser"
        >
          {TitlInp}
        </FormLabel>
      ) : (
        ""
      )}

      <Input
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
        // onChange={(valu) => {
        //   const reader = new FileReader();
        //   const datImg = reader.onload = (e) =>  e.target.result;
        //   reader.readAsDataURL(valu.target.files[0]);
        //   ValueInpuNowAndThisShange(
        //     typeMyInput == "file" ? valu.target.files[0] : valu.target.value,
        //     TypObj,
        //     typeActionN,
        //     typeMyInput == "file" ? datImg : ''
        //   );
        // }}
        onChange={HandleVluereInputeNow}
        size="20px"
        style={{ fontSize: "20px" }}
      />
    </div>
  );
}
