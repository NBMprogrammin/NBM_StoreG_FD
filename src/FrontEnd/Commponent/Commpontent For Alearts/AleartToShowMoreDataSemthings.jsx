import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import AvatarImgForAllType from "../AvatarImgForAllType";
import CartH1AndPragrf from "../CartH1AndPragrf";
let ShowCategoryContect = "";
let TitlAndpargShowDt = "";
let rrayShoMorDat = "";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const stleboxmore = {
  display: "flex",
  justifyContent: "flex-start",
  textAlign: "center",
  flexWrap: "wrap",
  marginTop: "15px",
  gap: "12px",
  marginBottom: "15px",
};

const stleboxFirstdata = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginBlock: "16px",
  marginTop: "25px",
};

export default function AleartToShowMoreDataSemthings({
  typeDialog,
  setTypeDialog,
  ArrarToShowMoredata,
  TypFrstArry,
  ArrarToShowMoredataMore,
  ArrarDatTitAndPag,
  TitelAleartShowD,
  PagDscImg,
  ImgToShow,
  TiteMoreFirtDt,
  DateTimeDet,
  MorShowDatBox,
  KeyGoldAleart,
  typeShopAleart,
}) {
  React.useMemo(() => {
    if (ArrarToShowMoredata) {
      ShowCategoryContect = ArrarToShowMoredata.map((data) => {
        return (
          <div className={"CardSheckCategoryMore"} key={data.id}>
            {TypFrstArry === "prodect" ? (
              <div key={data.id}>
                <h4>الاسم المنتج: {data.name}</h4>
                <p>السعر المنتج {data.price}</p>
                <p>كمية المنتج {data.quantite}</p>
              </div>
            ) : "" || TypFrstArry === "ratibe" ? (
              <div key={data.id}>
                <h4>الرقم الموضف: {data.NumberPhone}</h4>
                <p>الراتب الشهر: {data.Ratibe + data.curent}</p>
                <p>الشهر الراتب العمل {data.MentheNow}</p>
                <p>تاريخ الدفع الراتب {data.created_at}</p>
              </div>
            ) : "" || TypFrstArry === "category" ? (
              <div key={data.id}>
                <h4>الاسم تصنيف: {data.name}</h4>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      });
    }
  }, [ArrarToShowMoredata]);

  React.useMemo(() => {
    if (ArrarToShowMoredataMore) {
      rrayShoMorDat = ArrarToShowMoredataMore.map((data) => {
        return (
          <div className="CardSheckCategoryMore" key={data.id}>
            <h4>{data.titel}</h4>
            <p style={{ margin: "12px 0 0" }}>{data.parg}</p>
          </div>
        );
      });
    }
  }, [ArrarToShowMoredataMore]);

  React.useMemo(() => {
    if (ArrarDatTitAndPag) {
      TitlAndpargShowDt = ArrarDatTitAndPag.map((data) => {
        return (
          <CartH1AndPragrf key={data.id} titel={data.titel} parg={data.parg} />
        );
      });
    }
  }, [ArrarDatTitAndPag]);

  function handleClose() {
    setTypeDialog(false);
  }

  return (
    <React.Fragment key={KeyGoldAleart}>
      <Dialog
        key={KeyGoldAleart}
        open={typeDialog}
        slots={{
          transition: Transition,
        }}
        style={{ direction: "rtl" }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ padding: "0px 17px" }} key={KeyGoldAleart}>
          <DialogTitle
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
              paddingBottom: "0",
            }}
          >
            {TitelAleartShowD}
          </DialogTitle>

          {typeShopAleart === "FromEdartmaneybss" ? (
            <div>
              <div>
                <h3>تفاصبل الاحداث ليوم</h3>
                <h3>{MorShowDatBox ? MorShowDatBox : "لم يتم تخزين بيانات"}</h3>
              </div>

              <div style={{ marginBlock: "12px" }}>
                <h4>تاريخ بداية المعاملة</h4>
                <p style={{ margin: "12px 0 0" }}>{DateTimeDet}</p>
              </div>
            </div>
          ) : (
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "17px",
                  paddingTop: "12px",
                }}
              >
                <h4>{PagDscImg}</h4>
                {ImgToShow != null && ImgToShow != "" ? (
                  <AvatarImgForAllType
                    style={"ImgNowProf"}
                    MyAvatar={ImgToShow}
                  />
                ) : (
                  <h1>لم يتم تحميل صورة</h1>
                )}
              </div>

              {TitlAndpargShowDt}

              {TiteMoreFirtDt != "" ? (
                <div>
                  <h2>{TiteMoreFirtDt}</h2>

                  <div
                    style={
                      TypFrstArry === "ratibe" ? stleboxmore : stleboxFirstdata
                    }
                  >
                    {TypFrstArry === "ratibe"
                      ? rrayShoMorDat
                      : ShowCategoryContect}
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div>
                <h2>{MorShowDatBox}</h2>
                <div
                  style={
                    TypFrstArry === "ratibe" ? stleboxFirstdata : stleboxmore
                  }
                >
                  {TypFrstArry === "ratibe"
                    ? ShowCategoryContect
                    : rrayShoMorDat}
                </div>
              </div>

              {DateTimeDet ? (
                <div>
                  <h4>تاريخ بداية المعاملة</h4>
                  <p style={{ margin: "12px 0 0" }}>{DateTimeDet}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          )}

          <DialogActions
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Button
              onClick={handleClose}
              style={{
                textAlign: "center",
                marginTop: "7px",
                fontSize: "30px",
                width: "100%",
                background: "#626161e6",
                color: "#fff",
              }}
            >
              حسنا
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
