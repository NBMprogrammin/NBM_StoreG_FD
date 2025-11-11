import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import AvatarImgForAllType from "../AvatarImgForAllType";
import CartH1AndPragrf from "../CartH1AndPragrf";
import { formatRelativeDate } from "../../../utils/dateUtils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  const ShowCategoryContect = React.useMemo(() => {
    if (ArrarToShowMoredata) {
      return ArrarToShowMoredata.map((data) => {
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

  const rrayShoMorDat = React.useMemo(() => {
    if (ArrarToShowMoredataMore) {
      return ArrarToShowMoredataMore.map((data) => {
        return (
          <div className="CardSheckCategoryMore" key={data.id}>
            <h4>{data.titel}</h4>
            <p style={{ margin: "12px 0 0" }}>{data.parg}</p>
          </div>
        );
      });
    }
  }, [ArrarToShowMoredataMore]);

  const TitlAndpargShowDt = React.useMemo(() => {
    if (ArrarDatTitAndPag) {
      return ArrarDatTitAndPag.map((data) => {
        return (
          <CartH1AndPragrf key={data.id} titel={data.titel} parg={data.parg} />
        );
      });
    }
  }, [ArrarDatTitAndPag]);

  const handleClose = () => {
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
            className="StyTitelAleartShow"
          >
            {TitelAleartShowD}
          </DialogTitle>

          {typeShopAleart === "FromEdartmaneybss" ? (
            <div>
              <div>
                <h3>تفاصبل الاحداث ليوم</h3>
                <h3>{MorShowDatBox}</h3>
              </div>

              <div style={{ marginBlock: "12px" }}>
                <h4>تاريخ بداية المعاملة</h4>
                <p style={{ margin: "12px 0 0" }}>{DateTimeDet}</p>
              </div>
            </div>
          ) : (
            <div>
              <div
                className="styAllsBoxsToShowMoreDataAleart"
              >
                <h4>{PagDscImg}</h4>
                {ImgToShow != null && ImgToShow != "" ? (
                  <AvatarImgForAllType
                    style={{ 
                      width: '150px',
                      height: '150px'
                     }}
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
                    className={
                      TypFrstArry === "ratibe" ? 'stleboxmoreAlerat' : 'styleBoxsShowDat'
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
                  className={
                    TypFrstArry === "ratibe" ? 'styleBoxsShowDat' : 'stleboxmoreAlerat'
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
                  <p style={{ margin: "12px 0 0" }}>{formatRelativeDate(DateTimeDet)}</p>
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
              className="styleBigBtnOkInAleartShow"
            >
              حسنا
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
