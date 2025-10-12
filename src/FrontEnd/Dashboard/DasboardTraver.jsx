import React, { useEffect, useMemo } from "react";
import "./Dashboard.css";
import { useDialogActionContext } from "../Context/DialogActionContext";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import { edartpayprodectshowallsdatapaymentprod } from "../../allsliceproj/Edart Pay Prodects/edartPayProdectdsSlice";
import { useSelector, useDispatch } from "react-redux";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";

let AllsTrAndTdForMyTable = "";

let JSXShowAllsDataBss = "";
let JsxtopCustomers = "";
let JsxdatalastBaymentsProdects = "";

let datShowUser = "";
let datUserClickAct = "";
let typRequest = "";
let ToTalDeyn = 0;
let TotalDeynForAlsZeboune = 0;
let totalCategorys = 0;
let totalProdects = 0;
let totalCustomersGnL = 0;
let ProdFinsh = 0;
let prodHasFish = 0;

const DasboardTraver = () => {
  const {
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
    OpenDialogForActionSuccess,
    TypeAlearVipNow,
    StartShowMoreDatImClick,
  } = useDialogActionContext();

  const dispatsh = useDispatch();

  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartpayprodects.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartpayprodects.typRequestNow;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartpayprodects.dataShowPayProd;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartpayprodects.lodingtorspact;
  });

  // Start Her To Get Storage Type Profile Login Now
  useEffect(() => {
    if (ProfileSnageNow && ProfileSnageNow.TypProf) {
      datShowUser = ProfileSnageNow.TypProf;
    }
  }, [ProfileSnageNow]); //== End Her To Get Storage Type Profile Login Now ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "edartpayprodectconfirmedpaymentprod") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = "";
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد نمت موافق  و تاكيد  على استلام الاموال من زبون ${datUserClickAct.namezeboune} و اتمام لمبيع بنجاح و اظهار تحديث`
        );
      } else if (resultrquestaction === 13) {
        OpenDialogForActionFound(
          "بدو باتنك سبق لك و ان رفضت دفع طلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          "بدو بانك لا تمتلك صلاحية تاكيد الاستلام الاموال لطرق دفع الاكترونية  و هي تنتمي للادارة الدفع الاكتروني"
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `يبدو بان ناجر اوقف خاصية دين عن زبون ${datUserClickAct.namezeboune} و لقد تم استرداد طلبية و ارجاع لكمية لمبيع من للمخزون فكل لمنتج موجود فطلبية`
        );
      } else if (resultrquestaction === 16) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية ادارة لمبيعات يمكنك طلبها من تاجر لتوفيرها لك"
        );
      } else if (resultrquestaction === 22) {
        OpenDialogForActionFound(
          "تم رصد مشكلة في احد لمنتجات لمبيع حيث لم يتم لعثور عليها و لاحتمال لاكبر يقول بان تاجر حذف لمنتج يمكنك محاول لاحقا"
        );
      } else {
        typRequest = "";
      }
    } else if (typRequest === "edartpayprodectdscconfirmedpaymentprod") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = "";
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد نم رفض تاكيد استلام الاموال من زبون ${datUserClickAct.namezeboune}  و استرداد كل لمنتجات لموجود في طلبية و بلكمية للمخزون كل منج و تم اظهار تحديث`
        );
      } else if (resultrquestaction === 2) {
        OpenDialogForActionSuccess(
          "حدث خطا اثناء اتمام طلبية لتي تمثل تاكيد استلام الاموال سيتم تحميل صفحة و معاود مرة اخرى"
        );
      } else if (resultrquestaction === 14) {
        OpenDialogForActionFound(
          "بدو باتنك سبق لك و ان وافقت على دفع للطلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
        );
      } else if (resultrquestaction === 13) {
        OpenDialogForActionFound(
          "بدو باتنك سبق لك و ان رفضت دفع طلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          "بدو بانك لا تمتلك صلاحية تاكيد الاستلام الاموال لطرق دفع الاكترونية  و هي تنتمي للادارة الدفع الاكتروني"
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `يبدو بان ناجر اوقف خاصية دين عن زبون ${datUserClickAct.namezeboune} و لقد تم استرداد طلبية و ارجاع لكمية لمبيع من للمخزون فكل لمنتج موجود فطلبية`
        );
      } else if (resultrquestaction === 16) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية ادارة لمبيعات يمكنك طلبها من تاجر لتوفيرها لك"
        );
      } else if (resultrquestaction === 22) {
        OpenDialogForActionFound(
          "تم رصد مشكلة في احد لمنتجات لمبيع حيث لم يتم لعثور عليها و لاحتمال لاكبر يقول بان تاجر حذف لمنتج يمكنك محاول لاحقا"
        );
      }
    } else if (typRequest === "ShowAllsDataPayProdectForId") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = "";
      StartShowMoreDatImClick(
        ShowAllsProdData.datone,
        "prodect",
        ShowAllsProdData.datthere,
        ShowAllsProdData.datou,
        `تفاصيل المبيعة لل  ${ShowAllsProdData.namezeboune}`,
        "صورة تحويل  الاموال  ",
        ShowAllsProdData.imgconfirmedpay,
        `تفاصيل المنتجات المختار في المبيعة ${ShowAllsProdData.namezeboune}`,
        `المزيد من المعلومات المبيعة لل ${ShowAllsProdData.namezeboune}`,
        ShowAllsProdData.created_at,
        ShowAllsProdData.id
      );
    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    }
  }, [lodingtorspact]); // End Her To Sheck loding Response

  // He To Sow Reloding In Table
  React.useMemo(() => {
    AllsTrAndTdForMyTable = (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <div style={{ marginBottom: "20px" }}>
            <CartLoader />
          </div>
          <h4>لا يوجد اي بيانات الان يمكنك بدا تكوين مبيعات للمتجر</h4>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }, [AllsDataUserNow.MyPaymentProdectPay]); //== He To Sow Reloding In Table ==//

  // Start Open Aleart For Semthing Action
  function HandAddTypeThisActions(AllDataNow, TypeAction) {
    datUserClickAct = AllDataNow;
    if (TypeAction === "ConfirmedPaymentProd") {
      TypeAlearVipNow(
        AllDataNow,
        TypeAction + "FromEdartPayprod",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد بلاستلام الاموال من الزبون ${AllDataNow.namezeboune}`,
        "تاكيد",
        "",
        datShowUser,
        datShowUser === "teweve"
          ? "هل انت متاكد من تحملت لمسؤولية تاكيد استلام الاموال من زبون نظرا لعدم قدرة على تراجع عن القرار رجاء تاكد من اتخاذ لقرار صحيح"
          : "من اجل تاكيد الاستلام الاموال رجاء ادخال كلمة السر الاعدادات مع لعلم بعدم قدرتك في تغيير القرار بعد تاكيده تاكد من اختيار القرار صحيح",
        AllDataNow.id
      );
    } else if (TypeAction === "StopPaymentProd") {
      TypeAlearVipNow(
        AllDataNow,
        TypeAction + "FromEdartPayprod",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد بعدم استلام الاموال من الزبون ${AllDataNow.namezeboune}`,
        "تاكيد",
        "",
        datShowUser,
        datShowUser === "teweve"
          ? "هل انت متاكد من تحملت لمسؤولية رفض او نفي استلام الاموال من زبون نظرا لعدم قدرة على تراجع عن القرار رجاء تاكد من اتخاذ لقرار صحيح"
          : "من اجل تاكيد الاستلام الاموال رجاء ادخال كلمة السر الاعدادات مع لعلم بعدم قدرتك في تغيير القرار بعد تاكيده تاكد من اختيار القرار صحيح",
        AllDataNow.id
      );
    } else if (TypeAction === "ShowDatePaymentProd") {
      dispatsh(edartpayprodectshowallsdatapaymentprod(AllDataNow.id));
    }
  } //=== End Open Aleart For Semthing Action ===//

  // محاكاة تحميل البيانات
  useMemo(() => {
    if (AllsDataUserNow && AllsDataUserNow.MayZeboune) {
      JsxtopCustomers = AllsDataUserNow.MayZeboune.map((customer) => (
        <div key={customer.id} className="customer-card">
          <AvatarImgForAllType
            style={"styleimgprofilcust"}
            MyAvatar={customer.image}
          />
          <div className="customer-info">
            <h4>{`${customer.nameOne} (${customer.nameTou})`}</h4>
            <p
              style={{ direction: "rtl" }}
              className={`debt-status ${
                customer.debt > 0 ? "danger" : "success"
              }`}
            >
              {customer.nameThere > 0
                ? `مدين: ${customer.nameThere.toLocaleString()} ${
                    AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                  }`
                : "لا يوجد ديون"}
            </p>
          </div>
          <span
            className={`status-badge ${
              customer.nameThere > 0 ? "danger" : "success"
            }`}
          >
            حالت دين <br />
            {customer.TypeActionNow === "DscActive" ? " معطل " : " مفعل "}
          </span>
        </div>
      ));
    }
  }, [AllsDataUserNow.MayZeboune]);

  useMemo(() => {
    ProdFinsh = AllsDataUserNow.MayProd.filter((prod) => {
      return prod.nameThere == 0;
    });

    prodHasFish = AllsDataUserNow.MayProd.filter((prod) => {
      return prod.nameThere < 15;
    });

    TotalDeynForAlsZeboune = AllsDataUserNow.MayZeboune.filter((Zeboune) => {
      return Zeboune.nameThere > 15;
    });

    ToTalDeyn = AllsDataUserNow.MayZeboune.reduce(
      (sum, item) => sum + item.nameThere,
      0
    );
    totalProdects = AllsDataUserNow.MayProd.length;
    totalCustomersGnL = AllsDataUserNow.MayZeboune.length;

    if (AllsDataUserNow.MyPaymentProdectPay) {
      const dataShowMoreBss = [
        {
          id: 2,
          titel: "عدد المنتجات",
          data: totalProdects.toLocaleString(),
          icon: "📦",
          tycolor: "",
        },
        {
          id: 3,
          titel: "منتجات نفدت",
          data: ProdFinsh.length.toLocaleString(),
          icon: "🚫",
          tycolor: "danger",
        },
        {
          id: 4,
          titel: "منتجات قاربت على النفاد",
          data: prodHasFish.length.toLocaleString(),
          icon: "⚠️",
          tycolor: "warning",
        },
        {
          id: 5,
          titel: "عدد زباين",
          data: totalCustomersGnL.toLocaleString(),
          icon: "👥",
          tycolor: "",
        },

        {
          id: 6,
          titel: "طلبيات فلانتظار",
          data: AllsDataUserNow.allOrderDontConfrmed,
          icon: "📊",
          tycolor: "warning",
        },
        {
          id: 7,
          titel: "زباين مدانون",
          data: TotalDeynForAlsZeboune.length.toLocaleString(),
          icon: "👥",
          tycolor: "danger",
        },
      ];

      JSXShowAllsDataBss = dataShowMoreBss.map((card, index) => {
        return (
          <div key={index} className="stat-card warning">
            <div className="stat-icon">{card.icon}</div>
            <div className="stat-content">
              <h3>{card.titel}</h3>
              <span className="stat-number">{card.data}</span>
            </div>
          </div>
        );
      });
    }
  }, [AllsDataUserNow]);

  useMemo(() => {
    if (AllsDataUserNow.MyPaymentProdectPay) {
      JsxdatalastBaymentsProdects = AllsDataUserNow.MyPaymentProdectPay.map(
        (order) => (
          <tr key={order.id}>
            <td>#{order.id}</td>
            <td>{order.namezeboune}</td>
            <td>{order.allquantitelprodect}</td>
            <td>
              {order.totalpriceprodectspay.toLocaleString()}{" "}
              {AllsDataUserNow.MyCurrentPaymentPay.currentCantry}
            </td>
            <td>
              <span
                className={`status-badge ${getStatusClass(order.typepayment)}`}
              >
                {order.typepayment == 0
                  ? "فلانتظار "
                  : "" || order.typepayment == 1
                  ? "مكتمل "
                  : "" || order.typepayment == 2
                  ? "تم رفض "
                  : "" || order.typepayment == 3
                  ? "تم الغاء "
                  : ""}
              </span>
            </td>
            <td>
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={order}
                  TypeShow={"EdartPaymentProd"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={HandAddTypeThisActions}
                />
              </div>
            </td>
          </tr>
        )
      );
    }
  }, [AllsDataUserNow.MyPaymentProdectPay]);

  return (
    <div className="dashboard">
      {/* شريط العنوان */}
      <div className="dashboard-header">
        <h1>
          لوحة التحكم <span></span>
        </h1>
        <p>نظرة عامة على أداء متجر</p>
      </div>

      {/* إحصائيات سريعة */}
      <div className="stats-grid">{JSXShowAllsDataBss}</div>

      {/* قسم العملاء والطلبات */}
      <div className="dashboard-content">
        {/* العملاء المدينون */}
        <div className="customers-section">
          <h2>قائمة الزباين</h2>
          <div className="customers-grid">{JsxtopCustomers}</div>
        </div>

        {/* الطلبات الحديثة */}
        <div className="orders-section">
          <h2>المبيعات الأخيرة</h2>
          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>رقم الطلب</th>
                  <th>العميل</th>
                  <th>عدد المنتجات</th>
                  <th>المبلغ الإجمالي</th>
                  <th>الحالة</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody
                className={
                  AllsDataUserNow.MyPaymentProdectPay.length > 1
                    ? ""
                    : "styleBTbleBodyShow"
                }
              >
                {JsxdatalastBaymentsProdects}
                {AllsDataUserNow.MyPaymentProdectPay.length > 1
                  ? JsxdatalastBaymentsProdects
                  : AllsTrAndTdForMyTable}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* تحليلات سريعة */}
      <div className="analytics-section">
        <h2>تحليلات سريعة</h2>
        <div className="analytics-cards">
          <div className="analytics-card">
            <h3>📈 أداء المخزون</h3>
            <div className="progress-container">
              <div className="progress-info">
                <span>منتجات قاربت على النفاد</span>
                <span>
                  {((prodHasFish.length / totalProdects) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill warning"
                  style={{
                    width: `${(prodHasFish.length / totalProdects) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="progress-container">
              <div className="progress-info">
                <span>منتجات نفدت</span>
                <span>
                  {((ProdFinsh.length / totalProdects) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill danger"
                  style={{
                    width: `${(ProdFinsh.length / totalProdects) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <h3>📊 نظرة عامة</h3>
            <div className="summary-stats">
              <div className="summary-item">
                <span className="summary-label">التصنيفات النشطة</span>
                <span className="summary-value">{totalCategorys}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">إجمالي المنتجات</span>
                <span className="summary-value">{totalProdects}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">إجمالي العملاء</span>
                <span className="summary-value">{totalCustomersGnL}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">طلبات فلانتظار</span>
                <span className="summary-value">
                  {AllsDataUserNow.allOrderDontConfrmed}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// دالة مساعدة لتحديد كلاس الحالة
const getStatusClass = (status) => {
  switch (status) {
    case "0":
      return "warning";
    case "2":
      return "info";
    case "1":
      return "success";
    default:
      return "info";
  }
};

export default DasboardTraver;
