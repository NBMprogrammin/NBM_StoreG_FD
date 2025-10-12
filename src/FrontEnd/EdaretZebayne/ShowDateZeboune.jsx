import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDialogActionContext } from "../Context/DialogActionContext.jsx";
import CartH1AndPragrf from "../alert and Delog/CartH1AndPragrf";
import AvatarImgForAllType from "../alert and Delog/AvatarImgForAllType";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");
let ShowCategoryContect = "";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let GoToBageUpdateProdect = "";

export default function ShowDateZeboune({
  OpjectDateMyProdect,
  OpjectDateMyCategory,
  typeDialog,
  setTypeDialog,
  stateTitel,
  currentPay,
  TypeShowData,
  userAl,
  ArrarToShowMoredata,
}) {
  const { NowProfilShanfe } = useDialogActionContext();

  React.useMemo(() => {
    if (OpjectDateMyProdect != undefined) {
      GoToBageUpdateProdect = true;
    }

    if (ArrarToShowMoredata) {
      ShowCategoryContect = ArrarToShowMoredata.map((data) => {
        return (
          <div className={"CardSheckCategoryMore"} key={data.id}>
            <h4>الاسم المنتج: {data.name}</h4>

            {TypeShowData == "EdartProdects" ? (
              ""
            ) : (
              <>
                <p>السعر المنتج {data.price}</p>
                <p>كمية المنتج {data.quantite}</p>
              </>
            )}
          </div>
        );
      });
    }
  }, [ArrarToShowMoredata]);

  function handleClose() {
    setTypeDialog(false);
  }

  if (token) {
    if (NowProfilShanfe && NowProfilShanfe.TypProf == "bss") {
      return (
        <React.Fragment>
          <Dialog
            open={typeDialog}
            slots={{
              transition: Transition,
            }}
            style={{ direction: "rtl" }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <div style={{ padding: "0px 17px" }}>
              <DialogTitle
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                  paddingBottom: "0",
                }}
              >
                {stateTitel == "Found"
                  ? "خطا"
                  : stateTitel == "Success"
                  ? "تم الارسال"
                  : ""}
              </DialogTitle>

              <div style={{ padding: "10px 0", textAlign: "center" }}>
                <h1>
                  {TypeShowData == "EdartPaymentProd"
                    ? `تفاصيل المبيعة ${OpjectDateMyProdect.namezeboune}`
                    : "" || TypeShowData == "EdartOrders"
                    ? `تفاصيل طلبية ${OpjectDateMyProdect.namezeboune}`
                    : "" || TypeShowData == "rdareZebayme"
                    ? `تفاصيل العملية الشراء ${OpjectDateMyProdect.namezeboune}`
                    : "" || TypeShowData == "EdartZebayen"
                    ? `تفاصيل معاملات مع زبون ${OpjectDateMyProdect.username}`
                    : "" || TypeShowData == "EdartProdects"
                    ? ` تفاصيل المنتج المختار ${OpjectDateMyProdect.name} `
                    : "" || TypeShowData == "EdartOrderUser"
                    ? ` تفاصيل طلبية لمرسلة الى ${OpjectDateMyProdect.namezeboune} `
                    : "" || TypeShowData == "EdartMeweve"
                    ? ` تفاصيل المعاملة توظيف مع ${OpjectDateMyProdect.nameMewve} `
                    : ""}
                </h1>
              </div>

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
                  <h4>
                    {TypeShowData == "EdartPaymentProd" ||
                    TypeShowData == "EdartOrderUser" ||
                    TypeShowData == "EdartOrderUser"
                      ? "صورة تحويل الاموال"
                      : "" || TypeShowData == "EdartOrders"
                      ? "صورة تحويل الاموال"
                      : "" || TypeShowData == "EdartProdects"
                      ? "صورة المنتج"
                      : "" || TypeShowData == "EdartMeweve"
                      ? "صورة الحساب"
                      : ""}
                  </h4>
                  {TypeShowData == "EdartProdects" ||
                  TypeShowData == "EdartOrderUser" ||
                  TypeShowData == "EdartOrderUser" ||
                  OpjectDateMyProdect.imgconfirmedpay ? (
                    <AvatarImgForAllType
                      imgProd="active"
                      MyAvatar={
                        TypeShowData == "EdartProdects" ||
                        TypeShowData == "EdartMeweve"
                          ? OpjectDateMyProdect.img
                          : OpjectDateMyProdect.imgconfirmedpay
                      }
                    />
                  ) : (
                    <h1>لم يتم تحميل صورة</h1>
                  )}
                </div>

                <CartH1AndPragrf
                  titel={
                    TypeShowData == "EdartZebayen" &&
                    TypeShowData == "EdartPaymentProd" &&
                    TypeShowData == "EdartOrders"
                      ? "الاسم الزبون"
                      : "" || TypeShowData == "EdartProdects"
                      ? "الاسم المنتج"
                      : "" || TypeShowData == "EdartOrderUser"
                      ? ` الاسم تجاري `
                      : "" || TypeShowData == "EdartMeweve"
                      ? "الاسم الموضف"
                      : "الاسم المستخدم"
                  }
                  parg={
                    TypeShowData == "EdartPaymentProd"
                      ? OpjectDateMyProdect.namezeboune
                      : "" || TypeShowData == "EdartOrders"
                      ? OpjectDateMyProdect.namezeboune
                      : "" || TypeShowData == "EdartZebayen"
                      ? OpjectDateMyProdect.username
                      : "" || TypeShowData == "EdartProdects"
                      ? OpjectDateMyProdect.name
                      : "" || TypeShowData == "EdartOrderUser"
                      ? OpjectDateMyProdect.namezeboune
                      : "" || TypeShowData == "EdartMeweve"
                      ? OpjectDateMyProdect.nameMewve
                      : ""
                  }
                />
                <CartH1AndPragrf
                  titel={
                    TypeShowData == "EdartZebayen" &&
                    TypeShowData == "EdartPaymentProd" &&
                    TypeShowData == "EdartOrders"
                      ? "الرقم الزبون"
                      : "" || TypeShowData == "EdartProdects"
                      ? "تفاصيل المنتج"
                      : "" || TypeShowData == "EdartOrderUser"
                      ? "الاسم تجاري"
                      : "" || TypeShowData == "EdartMeweve"
                      ? "الرقم الموضف"
                      : "الرقم المستخدم"
                  }
                  parg={
                    TypeShowData == "EdartZebayen"
                      ? OpjectDateMyProdect.numberPhone
                      : "" || TypeShowData == "EdartProdects"
                      ? OpjectDateMyProdect.discreption
                      : "" ||
                        TypeShowData == "EdartOrderUser" ||
                        TypeShowData == "EdartOrders" ||
                        TypeShowData == "EdartPaymentProd"
                      ? OpjectDateMyProdect.numberzeboune
                      : "" || TypeShowData == "EdartMeweve"
                      ? OpjectDateMyProdect.numberMewve
                      : ""
                  }
                />

                {TypeShowData == "EdartPaymentProd" ||
                TypeShowData == "EdartZebayen" ||
                TypeShowData == "EdartMeweve" ? (
                  <CartH1AndPragrf
                    titel={
                      TypeShowData == "EdartMeweve"
                        ? "حال توضيفية"
                        : "حالت الحساب"
                    }
                    parg={
                      OpjectDateMyProdect.typeaccountzeboune == "Online"
                        ? "حقيقي"
                        : "" ||
                          OpjectDateMyProdect.typeaccountzeboune == "create_Use"
                        ? "يدويا"
                        : "" ||
                          (TypeShowData == "EdartZebayen" &&
                            OpjectDateMyProdect.TypeAccounte == "Online")
                        ? "حقيقي"
                        : "" || OpjectDateMyProdect.TypeAccounte == "create_Use"
                        ? "يدويا"
                        : "" ||
                          (TypeShowData == "EdartMeweve" &&
                            OpjectDateMyProdect.typerelation == 0)
                        ? "فلانتظار"
                        : "" || OpjectDateMyProdect.typerelation == 1
                        ? "قيد توضيف"
                        : "" || OpjectDateMyProdect.typerelation == 2
                        ? "الغاء توضيف"
                        : ""
                    }
                  />
                ) : (
                  ""
                )}

                {TypeShowData == "EdartOrders" ||
                TypeShowData == "EdartZebayen" ||
                TypeShowData == "EdartOrderUser" ||
                TypeShowData == "EdartProdects" ||
                TypeShowData == "EdartMeweve" ? (
                  <CartH1AndPragrf
                    titel={
                      TypeShowData == "EdartZebayen"
                        ? "حالت الدين"
                        : "" ||
                          TypeShowData == "EdartOrderUser" ||
                          TypeShowData == "EdartOrders"
                        ? "حالت طلبية"
                        : "" || TypeShowData == "EdartProdects"
                        ? "حالت المنتج البيعية"
                        : "" || TypeShowData == "EdartMeweve"
                        ? "صلاحية المبيعات"
                        : ""
                    }
                    parg={
                      TypeShowData == "EdartZebayen" &&
                      OpjectDateMyProdect.HaletDeyn == 0
                        ? "فلانتظار القرار"
                        : "" || OpjectDateMyProdect.HaletDeyn == 1
                        ? "تم سماح"
                        : "" || OpjectDateMyProdect.HaletDeyn == 2
                        ? "تم الغاء"
                        : "" ||
                          (TypeShowData == "EdartProdects" &&
                            OpjectDateMyProdect.TypePayprd == 1)
                        ? "سماح للبيع"
                        : "" || OpjectDateMyProdect.TypePayprd == 2
                        ? "ايقاف البيع"
                        : "" ||
                          (TypeShowData == "EdartOrders" &&
                            OpjectDateMyProdect.TypeShowData ==
                              "EdartOrderUser" &&
                            OpjectDateMyProdect.TypeOrder == 0)
                        ? "فلانتظار"
                        : "" || OpjectDateMyProdect.TypeOrder == 3
                        ? "قيد المعاملة"
                        : "" || OpjectDateMyProdect.TypeOrder == 1
                        ? "تم اتمام طلبية"
                        : "" || OpjectDateMyProdect.TypeOrder == 2
                        ? "تم الالفاء طلبية"
                        : "" ||
                          (TypeShowData == "EdartMeweve" &&
                            OpjectDateMyProdect.edartPaymentProdects == 1)
                        ? "تم سماح "
                        : "" || OpjectDateMyProdect.edartPaymentProdects == 2
                        ? "تم رفض"
                        : ""
                    }
                  />
                ) : (
                  ""
                )}

                {TypeShowData == "EdartZebayen" ||
                TypeShowData == "EdartProdects" ? (
                  <></>
                ) : (
                  <>
                    <CartH1AndPragrf
                      titel={
                        TypeShowData == "EdartMeweve"
                          ? "صلاحية طبيات"
                          : "حالت الدفع"
                      }
                      parg={
                        OpjectDateMyProdect.typepayment == 0
                          ? "فلانتظار"
                          : "" || OpjectDateMyProdect.typepayment == 1 //typepayment
                          ? "تم القبول"
                          : "" || OpjectDateMyProdect.typepayment == 2
                          ? "تم رفض"
                          : "" ||
                            (TypeShowData == "EdartMeweve" &&
                              OpjectDateMyProdect.edartOreders == 1)
                          ? "تم سماح "
                          : "" || OpjectDateMyProdect.edartOreders == 2
                          ? "تم رفض"
                          : ""
                      }
                    />

                    <CartH1AndPragrf
                      titel={
                        TypeShowData == "EdartMeweve"
                          ? "صلاحية الدفع الاكتروني"
                          : "طريقة الدفع"
                      }
                      parg={
                        TypeShowData == "EdartMeweve" &&
                        OpjectDateMyProdect.PaymentEcteronect == 1
                          ? "تم سماح "
                          : "" || OpjectDateMyProdect.PaymentEcteronect == 2
                          ? "تم رفض"
                          : OpjectDateMyProdect.paymentmethod
                      }
                    />

                    <CartH1AndPragrf
                      titel={
                        TypeShowData == "EdartMeweve"
                          ? "صلاحية الادارة المالية"
                          : "الرقم الدفع"
                      }
                      parg={
                        OpjectDateMyProdect.numberpaymentmethod == null
                          ? "غير مطلوب"
                          : "" ||
                            (TypeShowData == "EdartMeweve" &&
                              OpjectDateMyProdect.edartPaymentProdects == 1)
                          ? "تم سماح "
                          : "" || OpjectDateMyProdect.edartPaymentProdects == 2
                          ? "تم رفض"
                          : "" ||
                            (TypeShowData == "EdartMeweve" &&
                              OpjectDateMyProdect.edartemaney == 1)
                          ? "تم سماح "
                          : "" || OpjectDateMyProdect.edartemaney == 2
                          ? "تم رفض"
                          : OpjectDateMyProdect.numberpaymentmethod
                      }
                    />
                  </>
                )}

                {TypeShowData == "EdartZebayen" ||
                TypeShowData == "EdartMeweve" ? (
                  <></>
                ) : (
                  <div>
                    <h2>
                      {TypeShowData == "EdartPaymentProd"
                        ? "تفاصيل المنتجات المختار في المبيعة"
                        : "" ||
                          TypeShowData == "EdartOrders" ||
                          TypeShowData == "EdartOrderUser"
                        ? "تفاصيل المنتجات المختار في طلبية"
                        : "" || TypeShowData == "EdartProdects"
                        ? "تصنيفات المنتمي لها هذه لمنتج"
                        : ""}
                    </h2>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBlock: "16px",
                        marginTop: "25px",
                      }}
                    >
                      {ShowCategoryContect}
                    </div>
                  </div>
                )}

                <div>
                  <h2>
                    {TypeShowData == "EdartPaymentProd"
                      ? "المزيد من المعلومات المبيعة"
                      : "" ||
                        TypeShowData == "EdartOrders" ||
                        TypeShowData == "EdartOrderUser"
                      ? "المزيد من المعلومات طلبية"
                      : "" || TypeShowData == "EdartZebayen"
                      ? "المزيد من المعلومات "
                      : "" || TypeShowData == "EdartProdects"
                      ? "المزيد من المعلومات لمنتج"
                      : "" || TypeShowData == "EdartMeweve"
                      ? "المزيد من المعلومات الموضف"
                      : ""}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      textAlign: "center",
                      flexWrap: "wrap",
                      marginTop: "15px",
                      gap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <div className="CardSheckCategoryMore">
                      <h4>
                        {TypeShowData == "EdartZebayen"
                          ? "مرات الشراء"
                          : "" ||
                            TypeShowData == "EdartPaymentProd" ||
                            TypeShowData == "EdartOrderUser" ||
                            TypeShowData == "EdartOrders"
                          ? "عدد المنتجات"
                          : "" || TypeShowData == "EdartProdects"
                          ? "كمية المتبقية من المنتج"
                          : "" || TypeShowData == "EdartMeweve"
                          ? "الراتب الشهري"
                          : ""}
                      </h4>
                      <p style={{ margin: "12px 0 0" }}>
                        {TypeShowData == "EdartZebayen"
                          ? OpjectDateMyProdect.TotelBayMent
                          : "0" || TypeShowData == "EdartPaymentProd"
                          ? OpjectDateMyProdect.totalprodectspay
                          : "" || TypeShowData == "EdartProdects"
                          ? OpjectDateMyProdect.totaleinstorage
                          : "0"}

                        {TypeShowData == "EdartMeweve"
                          ? ` ${OpjectDateMyProdect.curent} ${OpjectDateMyProdect.Ratibe}`
                          : "0"}
                      </p>
                    </div>

                    <div className="CardSheckCategoryMore">
                      <h4>
                        {TypeShowData == "EdartZebayen"
                          ? "اجمالي الدين"
                          : "" ||
                            TypeShowData == "EdartPaymentProd" ||
                            TypeShowData == "EdartOrders" ||
                            TypeShowData == "EdartOrderUser"
                          ? "كمية المنتجات"
                          : "" || TypeShowData == "EdartProdects"
                          ? "سعر المنتج الاولي"
                          : "" || TypeShowData == "EdartMeweve"
                          ? "مرات ادارة المالية"
                          : ""}
                      </h4>
                      <p style={{ margin: "12px 0 0" }}>
                        {TypeShowData == "EdartZebayen"
                          ? `${OpjectDateMyProdect.TotelDeyn} ${currentPay}`
                          : "0" || TypeShowData == "EdartPaymentProd"
                          ? OpjectDateMyProdect.allquantitelprodect
                          : "" || TypeShowData == "EdartProdects"
                          ? `${OpjectDateMyProdect.price} ${currentPay}`
                          : "0"}

                        {TypeShowData == "EdartMeweve"
                          ? OpjectDateMyProdect.totaledartmaney
                          : "0"}
                      </p>
                    </div>

                    <div className="CardSheckCategoryMore">
                      <h4>
                        {TypeShowData == "EdartZebayen"
                          ? "نسبت رضا"
                          : "" ||
                            TypeShowData == "EdartPaymentProd" ||
                            TypeShowData == "EdartOrderUser"
                          ? "تكلفة الاجمالية"
                          : "" || TypeShowData == "EdartProdects"
                          ? "سعر المنتج ثاني"
                          : "" || TypeShowData == "EdartMeweve"
                          ? "مرات ادارة المبيعات"
                          : "تكلفة الاجمالية"}
                      </h4>
                      <p style={{ margin: "12px 0 0" }}>
                        {TypeShowData == "EdartPaymentProd" ||
                        TypeShowData == "EdartOrders" ||
                        TypeShowData == "EdartOrderUser"
                          ? ` ${OpjectDateMyProdect.totalpriceprodectspay} ${OpjectDateMyProdect.currentPay}`
                          : "0" || TypeShowData == "EdartZebayen"
                          ? OpjectDateMyProdect.TotelBayMent
                          : "0" || TypeShowData == "EdartMeweve"
                          ? OpjectDateMyProdect.totaledartPayProds
                          : "0"}

                        {TypeShowData == "EdartProdects"
                          ? `${OpjectDateMyProdect.descprice} ${currentPay}`
                          : "0"}
                      </p>
                    </div>

                    {TypeShowData == "EdartMeweve" ? (
                      <div className="CardSheckCategoryMore">
                        <h4>
                          {TypeShowData == "EdartMeweve"
                            ? "مرات ادارة طلبيات"
                            : ""}
                        </h4>
                        <p style={{ margin: "12px 0 0" }}>
                          {TypeShowData == "EdartMeweve"
                            ? OpjectDateMyProdect.totalorders
                            : "0"}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}

                    {TypeShowData == "EdartMeweve" ? (
                      <div className="CardSheckCategoryMore">
                        <h4>
                          {TypeShowData == "EdartMeweve"
                            ? "مرات ادارة الدفع الاكتروني"
                            : ""}
                        </h4>
                        <p style={{ margin: "12px 0 0" }}>
                          {TypeShowData == "EdartMeweve"
                            ? OpjectDateMyProdect.totaledartPayEct
                            : "0"}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {OpjectDateMyProdect.created_at ? (
                  <div>
                    <h4>تاريخ بداية المعاملة</h4>
                    <p style={{ margin: "12px 0 0" }}>
                      {OpjectDateMyProdect.created_at}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>

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
    } else {
      Cookies.remove("user_token");
      window.location.href = "home";
    }
  } else {
    Cookies.remove("user_token");
    window.location.href = "home";
  }
}
