import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AvatarImgForAllType from "./AvatarImgForAllType";
import "../../App.css";
let boxConfirm = (
  <div
    className="BoxHaletUserNow"
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#fff725",
    }}
  ></div>
);

let colorNormal = "#8e8484ff";
let colorDanger = "#eb0505ff";

let boxDsConfirmd = (
  <div
    className="BoxHaletUserNow"
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#c11111",
    }}
  ></div>
);
export default function CountryInput({
  TypeShowData,
  ValueUserSeckeClick,
  currentPayment,
  dataFeth,
  TypeAction,
  profileNow,
  datPaymentToCont,
}) {
  return (
    <>
      <Autocomplete
        id="country-select-demo"
        width="100%"
        dir="rtl"
        options={dataFeth}
        autoHighlight
        getOptionLabel={(option) => option.nameOne}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={option.id}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
              style={{ fontSize: "20px" }}
              disabled={true}
              aria-disabled={
                TypeShowData === "Sereash"
                  ? ""
                  : "" ||
                    option.TypeData === "PaymentMethods" ||
                    option.TypeData === "Prodects"
                  ? option.TypeActionNow == "DscActive" || option.nameThere == 0
                  : option.TypeActionNow == "DscActive" &&
                    TypeShowData === "PayProdForZeboune" &&
                    datPaymentToCont === "Selefe"
                  ? option.TypeActionNow == "DscActive"
                  : ""
              }
            >
              <>
                {option.TypeData === "categorys" ? (
                  <></>
                ) : (
                  <AvatarImgForAllType MyAvatar={option.image} />
                )}
                <div style={{ marginLeft: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    {option.nameOne}
                    {option.TypeData === "categorys" ? (
                      <></>
                    ) : "" || option.TypeActionNow == "Active" ? (
                      boxConfirm
                    ) : (
                      boxDsConfirmd
                    )}
                    {profileNow ? profileNow : ""}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "6px",
                        color:
                          option.TypeData === "Prodects"
                            ? colorDanger
                            : colorNormal,
                      }}
                    >
                      {option.TypeData === "Prodects"
                        ? `(${option.nameTou} ${currentPayment})`
                        : option.nameTou}
                    </div>
                    {TypeShowData != "user" &&
                    option.TypeData === "Prodects" ? (
                      <div style={{ marginLeft: "6px", color: "#35e115" }}>
                        {`(${option.nameThere})`}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            style={{ fontSize: "20px" }}
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
        onChange={(avent, newValue) => {
          ValueUserSeckeClick(newValue, TypeAction);
        }}
      />
    </>
  );
}
