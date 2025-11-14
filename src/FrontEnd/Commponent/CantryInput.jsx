import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AvatarImgForAllType from "./AvatarImgForAllType";
import "../../App.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { FaBoxes } from "react-icons/fa";
import VerifiedIcon from "@mui/icons-material/Verified";

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

const TypDipsBoxShow = (status, typact) => {
  switch (status) {
    case "Sereash":
      return false;
      case "payment":
      switch (typact) {
        case 'DscActive':
          return true;
        default:
          return false;
      }
      case "Prodects":
      switch (typact) {
        case 'DscActive':
          return true;
        default:
          return false;
      }
    case "Selefe":
      switch (typact) {
        case 'DscActive':
          return true;
        default:
          return false;
      }
    case typact === "DscActive":
      return true;
    default:
      return false;
  }
}

const TypImgIconShow = (status) => {
  switch (status) {
    case "payment":
      return <CreditScoreIcon />;
    case "Prodects":
      return <FaBoxes />;
    default:
      return false;
  }
}

const TypeShowImgInInputeSelect = (status, dat) => {
  switch (status) {
    case "categorys":
      return null;
    default:
      return (<AvatarImgForAllType
        style={dat.style} 
        typShowImg={dat.MyAvatar ? dat.MyAvatar : 'icone'} 
        MyAvatar={dat.MyAvatar ? dat.MyAvatar : TypImgIconShow(dat.TypeAction)} 
      />);
  }
}

const TypeShowTitelUser = (status) => {
  switch (status) {
    case "payment":
      return <CreditScoreIcon />;
    case "PayProd":
      return <FaBoxes />;
    default:
      return false;
  }
}

export default function CountryInput({
  TypeShowData,
  ValueUserSeckeClick,
  currentPayment,
  dataFeth,
  TypeAction,
  datPaymentToCont,
  typShowImg,
  style,
  Goldlabel,
  name,
  valueNow,
  valSlctNow,
  disabled
}) {

  const TypeShowDiveeAction = (status, StaTou) => {
    switch (status) {
      case "categorys":
        return null;
      case "BssUserClick":
        return <VerifiedIcon style={{ color: "#4a6cf7" }} />;
        case 'SereashUser':
        switch (StaTou) {
          case "Active":
            return <VerifiedIcon style={{ color: "#4a6cf7" }} />;
          case "DscActive":
            return boxDsConfirmd;
        }
        return;
          default:
        switch (StaTou) {
          case "Active":
            return boxConfirm;
          case "DscActive":
            return boxDsConfirmd;
        }
        return;
    }
  }

  return (
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
              disabled={disabled}
              aria-disabled={
                TypDipsBoxShow(TypeShowData, option.TypeActionNow)
              }
            >
              <>
                {TypeShowImgInInputeSelect(option.TypeData, {
                  style: style,
                  TypeAction: TypeShowData,
                  MyAvatar: option.image,
                })}
                <div style={{ marginLeft: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    {option.nameOne}
                    {
                      TypeShowDiveeAction(TypeAction, option.TypeActionNow)
                    }
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
            label={Goldlabel}
            name={name}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
        value={valueNow}
        onChange={(avent, newValue) => {
          ValueUserSeckeClick(newValue, TypeAction);
        }}
        disabled={disabled}
      />
  );
}
