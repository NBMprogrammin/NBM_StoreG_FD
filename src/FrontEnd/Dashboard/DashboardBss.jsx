import React, { useEffect, useRef, useMemo } from "react";
import "./Dashboard.css";
import { useDialogActionContext } from "../Context/DialogActionContext";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import { edartpayprodectshowallsdatapaymentprod } from "../../allsliceproj/Sales_Management_Bss/Sales_Management_Bss_Slice";
import { useSelector } from "react-redux";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import { useDispatch } from "react-redux";

// Start Import Icons
import { FaBoxes } from "react-icons/fa";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

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

const DashboardBss = () => {
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
    return state.Sales_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Sales_Management_Bss.typRequestNow;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Sales_Management_Bss.dataShowPayProd;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Sales_Management_Bss.lodingtorspact;
  });

  // Start Her To Get Storage Type Profile Login Now
  useEffect(() => {
    if (ProfileSnageNow && ProfileSnageNow.TypProf) {
      datShowUser = ProfileSnageNow.TypProf;
    }
  }, [ProfileSnageNow]); //== End Her To Get Storage Type Profile Login Now ==//

  // He To Sow Reloding In Table
  const AllsTrAndTdForMyTable = React.useMemo(() => {
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <div style={{ marginBottom: "20px" }}>
            <CartLoader />
          </div>
          <h4>لا يوجد اي بيانات الان يمكنك بدا تكوين مبيعاتك تجارية</h4>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }, [AllsDataUserNow.MyPaymentProdectPay]); //== He To Sow Reloding In Table ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      case "edartpayprodectconfirmedpaymentprod":
      HandleCloseOrOpenReadinPage(false);
      typRequest = '';
      switch (resultrquestaction) {
          case 1:
          OpenDialogForActionSuccess(
          `لقد نمت موافق  و تاكيد  على استلام الاموال من زبون ${datUserClickAct.namezeboune} و اتمام لمبيع بنجاح و اظهار تحديث`
          );
          typRequest = "Show";
          return;
          case 4:
          OpenDialogForActionFound(
              `يبدو بان ناجر اوقف خاصية دين عن زبون ${datUserClickAct.namezeboune} و لقد تم استرداد طلبية و ارجاع لكمية لمبيع من للمخزون فكل لمنتج موجود فطلبية`
          );
          return;
          case 6:
          OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
          );
          return;
          case 9:
          OpenDialogForActionFound(
              "بدو بانك لا تمتلك صلاحية تاكيد الاستلام الاموال لطرق دفع الاكترونية  و هي تنتمي للادارة الدفع الاكتروني"
          );
          return;
          case 13:
          OpenDialogForActionFound(
              "بدو باتنك سبق لك و ان رفضت دفع طلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
          );
          return;
          case 16:
          OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية ادارة لمبيعات يمكنك طلبها من تاجر لتوفيرها لك"
          );
          return;
          case 22:
          OpenDialogForActionFound(
              "تم رصد مشكلة في احد لمنتجات لمبيع حيث لم يتم لعثور عليها و لاحتمال لاكبر يقول بان تاجر حذف لمنتج يمكنك محاول لاحقا"
          );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
      }
      return;
      case 'edartpayprodectdscconfirmedpaymentprod':
      HandleCloseOrOpenReadinPage(false);
      switch (resultrquestaction) {
          case 1:
          OpenDialogForActionSuccess(
              `لقد نم رفض تاكيد استلام الاموال من زبون ${datUserClickAct.namezeboune}  و استرداد كل لمنتجات لموجود في طلبية و بلكمية للمخزون كل منج و تم اظهار تحديث`
          );
          typRequest = "";
          return;
          case 2:
          typRequest = "";
          OpenDialogForActionSuccess(
              "حدث خطا اثناء اتمام طلبية لتي تمثل تاكيد استلام الاموال سيتم تحميل صفحة و معاود مرة اخرى"
          );
          typRequest = "";
          return;
          case 4:
          OpenDialogForActionFound(
              `يبدو بان ناجر اوقف خاصية دين عن زبون ${datUserClickAct.namezeboune} و لقد تم استرداد طلبية و ارجاع لكمية لمبيع من للمخزون فكل لمنتج موجود فطلبية`
          );
          typRequest = "";
          return;
          case 6:
          typRequest = "";
          OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
          );
          return;
          case 9:
          typRequest = "";
          OpenDialogForActionFound(
              "بدو بانك لا تمتلك صلاحية تاكيد الاستلام الاموال لطرق دفع الاكترونية  و هي تنتمي للادارة الدفع الاكتروني"
          );
          return;
          case 13:
          typRequest = "";
          OpenDialogForActionFound(
              "بدو باتنك سبق لك و ان رفضت دفع طلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
          );
          return;
          case 14:
          typRequest = "";
          OpenDialogForActionFound(
              "بدو باتنك سبق لك و ان وافقت على دفع للطلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
          );
          return;
          case 16:
          typRequest = "";
          OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية ادارة لمبيعات يمكنك طلبها من تاجر لتوفيرها لك"
          );
          return;
          case 22:
          typRequest = "";
          OpenDialogForActionFound(
              "تم رصد مشكلة في احد لمنتجات لمبيع حيث لم يتم لعثور عليها و لاحتمال لاكبر يقول بان تاجر حذف لمنتج يمكنك محاول لاحقا"
          );
          return;
          case 99:
          typRequest = "";
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
      }
      return;
      case 'ShowAllsDataPayProdectForId':
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 99) {
          OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          typRequest = "";
          return;
      }
      typRequest = '';
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
      return;
    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    }
  }, [lodingtorspact]); // End Her To Sheck loding Response

  // Start Open Aleart For Semthing Action
  const HandAddTypeThisActions = (AllDataNow, TypeAction) => {
    datUserClickAct = AllDataNow;
    switch (TypeAction) {
      case "ConfirmedPaymentProd":
        return TypeAlearVipNow(
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
      case "StopPaymentProd":
        return TypeAlearVipNow(
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
      case "ShowDatePaymentProd":
      return dispatsh(edartpayprodectshowallsdatapaymentprod(AllDataNow.id));
    }
  } //=== End Open Aleart For Semthing Action ===//

  // محاكاة تحميل البيانات
  const JsxtopCustomers = useMemo(() => {
    if (AllsDataUserNow && AllsDataUserNow.MayZeboune) {
      return AllsDataUserNow.MayZeboune.map((customer) => (
        <div key={customer.id} className="customer-card">
          <AvatarImgForAllType
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

  // أضف هذه الـ refs في بداية المكون
  const numbersAnimated = React.useRef(false);
  const sectionRef = React.useRef(null);
  
      // دالة الحركة الرقمية
  const animateNumber = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };
  
    // بعد جلب البيانات من API، أضف هذا useEffect منفصل للحركة
  useEffect(() => {
    if (!AllsDataUserNow || numbersAnimated.current) return;
  
    // انتظر حتى يصبح DOM جاهزاً
    const timer = setTimeout(() => {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((element) => {
        const target = parseInt(element.getAttribute('data-count'));
        if (!isNaN(target) && target > 0) {
          animateNumber(element, 0, target, 2000);
        }
      });
      numbersAnimated.current = true;
    }, 500);
  
    return () => clearTimeout(timer);
  }, [AllsDataUserNow]);
  
  // useEffect للحركة
  React.useEffect(() => {
    if (!sectionRef.current) return;
      
      observer.observe(sectionRef.current);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
  
    observer.observe(sectionRef.current);
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const JSXShowAllsDataBss = useMemo(() => {
  ProdFinsh = AllsDataUserNow.MayProd.filter((prod) => {
    return prod.nameThere == 0;
  });

    prodHasFish = AllsDataUserNow.MayProd.filter((prod) => {
      return prod.nameThere < 15;
    });

    TotalDeynForAlsZeboune = AllsDataUserNow.MayZeboune.filter((Zeboune) => {
      return Zeboune.nameThere > 15;
    });

    const ToTalDeyn = AllsDataUserNow.MayZeboune.reduce(
      (sum, item) => sum + item.nameThere,
      0
    );
    totalCategorys = AllsDataUserNow.MayCategory.length;
    totalProdects = AllsDataUserNow.MayProd.length;
    totalCustomersGnL = AllsDataUserNow.MayZeboune.length;

    if (AllsDataUserNow.MyPaymentProdectPay) {
      return [
        {
          id: 8,
          titel: "التصنيفات",
          data: totalCategorys,
          icon: <CategoryIcon className="iconShwStyledas" />,
          tycolor: "",
        },
        {
          id: 9,
          titel: "عدد المنتجات",
          data: totalProdects,
          icon: <FaBoxes className="iconShwStyledas" />,
          tycolor: "",
        },
        {
          id: 3,
          titel: "منتجات نفدت",
          data: ProdFinsh.length,
          icon: "🚫",
          tycolor: "danger",
        },
        {
          id: 4,
          titel: "منتجات قاربت على النفاد",
          data: prodHasFish.length,
          icon: "⚠️",
          tycolor: "warning",
        },
        {
          id: 5,
          titel: "عدد زباين",
          data: totalCustomersGnL,
          icon: <PeopleIcon className="iconShwStyledas" />,
          tycolor: "",
        },

        {
          id: 6,
          titel: "طلبيات فلانتظار",
          data: AllsDataUserNow.allOrderDontConfrmed,
          icon: <FaBoxes className="iconShwStyledas" />,
          tycolor: "warning",
        },
        {
          id: 7,
          titel: "زباين مدانون",
          data: TotalDeynForAlsZeboune.length.toLocaleString(),
          icon: <PeopleIcon className="iconShwStyledas" />,
          tycolor: "danger",
        },
        {
          id: 1,
          titel: "إجمالي الديون هذا الشهر",
          data: ToTalDeyn,
          color: "#f59e0b",
          icon: <AssuredWorkloadIcon className="iconShwStyledas" />,
          tycolor: "danger",
        },
        {
          id: 2,
          titel: "اجمالي الارباح هذا الشهر",
          data: AllsDataUserNow.TotaleProfiteMonth,
          icon: <AssuredWorkloadIcon className="iconShwStyledas" />,
          tycolor: "danger",
        },
      ].map((card, index) => {
        return (
          <div key={index} className="stat-card warning animate-slide-in" style={{ animationDelay: `${index * 0.4}s` }} >
            <div className="stat-icon">{card.icon}</div>
            <div className="stat-content">
              <h3>{card.titel}</h3>
              <div style={{ display: 'flex', gap: '7px', alignItems: 'center', justifyContent: 'center' }}>
                <span className="stat-number" data-count={card.data}>0</span>
                {card.titel === 'إجمالي الديون هذا الشهر' || card.titel === 'اجمالي الارباح هذا الشهر' ? AllsDataUserNow.MyCurrentPaymentPay.currentCantry : ''}
              </div>
            </div>
          </div>
        );
      });
    }
  }, [AllsDataUserNow]);

  const JsxdatalastBaymentsProdects = useMemo(() => {
    if (AllsDataUserNow.MyPaymentProdectPay) {
      return AllsDataUserNow.MyPaymentProdectPay.map(
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
        <p>نظرة عامة على أداء متجرك</p>
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
            <h3>💳 حالة الديون</h3>
            <div className="debt-analysis">
              <div className="debt-item">
                <span>إجمالي الديون</span>
                <span className="debt-amount">
                  {ToTalDeyn.toLocaleString()}{" "}
                  {AllsDataUserNow &&
                  AllsDataUserNow.MyCurrentPaymentPay &&
                  AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                    ? AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                    : "0"}
                </span>
              </div>
              <div className="debt-item">
                <span>عدد زباين المدينين</span>
                <span className="debt-count">
                  {TotalDeynForAlsZeboune.length}
                </span>
              </div>
              <div className="debt-item">
                <span>متوسط الدين للعميل</span>
                <span className="debt-average">
                  {TotalDeynForAlsZeboune.length > 0
                    ? (
                        ToTalDeyn / TotalDeynForAlsZeboune.length
                      ).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : 0}{" "}
                  {AllsDataUserNow &&
                  AllsDataUserNow.MyCurrentPaymentPay &&
                  AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                    ? AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                    : "0"}
                </span>
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

export default DashboardBss;
