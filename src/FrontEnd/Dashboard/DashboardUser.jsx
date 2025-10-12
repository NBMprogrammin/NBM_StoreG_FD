import React, { useEffect, useMemo } from "react";
import "./Dashboard.css";
import { useDialogActionContext } from "../Context/DialogActionContext";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import { useSelector, useDispatch } from "react-redux";
import { AccountBalance, Store, Work } from "@mui/icons-material";
import { edartOrdersuserShowAllsDataMyOrder } from "../../allsliceproj/Edart Orders user/edartOrdersUserSlice";
import PeopleYouMayKnow from "../Commponent/PeopleYouMayKnow";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import { useNavigate } from "react-router-dom";

let AllsTrAndTdForMyTable = "";

let JSXShowAllsDataBss = "";
let JsxdatalastBaymentsProdects = "";

let datUserClickAct = "";
let typRequest = "";
let datShowUser = "";

let DatShowUser = [];

let DatShowBss = [];

const DashboardUser = () => {
  const navigate = useNavigate();
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
    return state.edartOrdersUser.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartOrdersUser.typRequestNow;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartOrdersUser.dataShowPayProd;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartOrdersUser.lodingtorspact;
  });

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
          <h4>
            لا يوجد اي بيانات الان يمكنك بدا تكوين طلبياتك مع تجار في اي وقت
          </h4>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }, [AllsDataUserNow.AllsMyOrders.data]); //== He To Sow Reloding In Table ==//

  // Start Her To Get Storage Type Profile Login Now
  useEffect(() => {
    if (ProfileSnageNow && ProfileSnageNow.TypProf) {
      datShowUser = ProfileSnageNow.TypProf;
    }
  }, [ProfileSnageNow]); //== End Her To Get Storage Type Profile Login Now ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "edartordersuserstomyorder") {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تعطيل طلبية لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} بنجاح كما تم اظهار تحديث لبيانات`
        );
        typRequest = "Show";
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `لقد قام تاجر بتعديل على لطلبيتك ${datUserClickAct.namebss} كما تم تحديث لبيانات بلجديدة `
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " يبدو بانك سبق و قمت بلاغاء طلبية بلفعل و لا يتاح لخيار تعديل لقرارات كما تم تحديث لبيانات"
        );
      }
    } else if (typRequest === "edartordersuserdeletemyorder") {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم الحذف طلبية بنجاح لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} كما تم تحديث لبيانات`
        );
        typRequest = "Show";
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `لقد قام تاجر بتعديل على لطلبيتك ${datUserClickAct.namebss} كما تم تحديث لبيانات بلجديدة `
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " يبدو بانك سبق و قمت بلاغاء طلبية بلفعل و لا يتاح لخيار تعديل لقرارات كما تم تحديث لبيانات"
        );
      }
    } else if (typRequest === "ShowAllsMyOrderDataFromEdartOrdersUser") {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا غير معروف اثناء جذب لبيانات او انك حذفت طلبية لذا تم تحديث لبيانات رجاء حاول مرة اخرى"
        );
      } else {
        StartShowMoreDatImClick(
          ShowAllsProdData.datone,
          "prodect",
          ShowAllsProdData.datthere,
          ShowAllsProdData.datou,
          `تفاصيل طلبية مرسل الى  ${ShowAllsProdData.namebss}`,
          "صورة تحويل  الاموال  ",
          ShowAllsProdData.imgconfirmedpay,
          `تفاصيل المنتجات المختار في طبيتك الى ${ShowAllsProdData.namebss}`,
          `المزيد من المعلومات طلبية مرسل الى ${ShowAllsProdData.namebss}`,
          ShowAllsProdData.created_at,
          ShowAllsProdData.id
        );
      }
    }
  }, [resultrquestaction]); // End Sheck Type Request To Show Result For User ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    }
  }, [lodingtorspact]); // End Her To Sheck loding Response

  // Start Open Aleart For Semthing Ac tion
  function HandAddTypeThisActions(AllDataNow, TypeActionnow) {
    datUserClickAct = AllDataNow;
    if (TypeActionnow === "StopMyOrderFromEdartOrderUser") {
      TypeAlearVipNow(
        AllDataNow,
        TypeActionnow,
        "",
        "",
        "",
        "",
        `تاكيد ايقاف طلبية لمرسلة الى ${AllDataNow.namebss}`,
        "تاكيد",
        "",
        "user",
        "هل انت متاكد من رغبتك في ايقاف طلبية و هي مرحلة ما قبل لحذف اذ لا يتاح لك بعدها سوا لحذف رجاء تاكد من القرار",
        AllDataNow.id
      );
    } else if (TypeActionnow === "DeleteMyOrderFromEdartOrderUser") {
      TypeAlearVipNow(
        AllDataNow,
        TypeActionnow,
        "",
        "",
        "",
        "",
        `تاكيد الحذف طلبية لمرسلة الى ${AllDataNow.namebss}`,
        "تاكيد",
        "",
        "user",
        "هل انت متاكد من رغبتك في الحذف و هي مرحلة لا رجع عنها و ستنتج اختفاء طلبية لذا رجاء تاكد من القرار",
        AllDataNow.id
      );
    } else if (TypeActionnow === "ShowMoreDatMyOrderFromEdartOrderUser") {
      dispatsh(edartOrdersuserShowAllsDataMyOrder(AllDataNow.id));
    }
  } //=== End Open Aleart For Semthing Ac tion ===//

  // محاكاة تحميل البيانات
  useMemo(() => {
    if (AllsDataUserNow && AllsDataUserNow.AllsMyOrders) {
      const TotalMyDeyanForBss = AllsDataUserNow.DatBssICalyan.reduce(
        (sum, item) => sum + item.totaleMyDeyn,
        0
      );
      DatShowUser = AllsDataUserNow.AllsUserToShow;
      DatShowBss = AllsDataUserNow.AllsBssToShow;

      const allbbshasdeyforMy = AllsDataUserNow.DatBssICalyan.filter((prod) => {
        return prod.totaleMyDeyn > 0;
      });

      const MyDataToShow = [
        {
          id: 1,
          icon: <AccountBalance />,
          title: "إجمالي المديونية",
          value: TotalMyDeyanForBss.toLocaleString(),
          color: "#4a6cf7",
        },
        {
          id: 2,
          icon: <Store />,
          title: "العلاقات التجارية",
          value: AllsDataUserNow.DatBssICalyan.length.toLocaleString(),
          color: "#10b981",
        },
        {
          id: 3,
          icon: "💰",
          title: "عدد تجار يدينون لي",
          value: `${allbbshasdeyforMy.length.toLocaleString()}`,
          color: "#f59e0b",
        },
        {
          id: 4,
          icon: <Work />,
          title: "الوظائف النشطة",
          value: `${AllsDataUserNow.Profile_tweve.length.toLocaleString()}`,
          color: "#f59e0b",
        },
        {
          id: 5,
          icon: <Work />,
          title: "اجمالي طلبيات",
          value: `${AllsDataUserNow.TotalOrderIDo.toLocaleString()}`,
          color: "#f59e0b",
        },
      ];

      JSXShowAllsDataBss = MyDataToShow.map((card, index) => {
        return (
          <div key={index} className="stat-card warning">
            <div className="stat-icon">{card.icon}</div>
            <div className="stat-content">
              <h3>{card.title}</h3>
              <span className="stat-number">{card.value}</span>
            </div>
          </div>
        );
      });
    }
  }, [AllsDataUserNow]);

  useMemo(() => {
    if (AllsDataUserNow.AllsMyOrders) {
      JsxdatalastBaymentsProdects = AllsDataUserNow.AllsMyOrders.data.map(
        (order) => (
          <tr key={order.id}>
            <td>#{order.id}</td>
            <td>{order.namebss}</td>
            <td>{order.allquantitelprodect}</td>
            <td>
              {order.totalpriceprodectspay.toLocaleString()} {order.currentPay}
            </td>
            <td>
              <span
                className={`status-badge ${getStatusClass(order.TypeOrder)}`}
              >
                {order.TypeOrder == 0
                  ? "فلانتظار"
                  : "" || order.TypeOrder == 3
                  ? "قيد المعالجة"
                  : "" || order.TypeOrder == 4
                  ? "تم الغاء"
                  : "" || order.TypeOrder == 1
                  ? "مكتمل"
                  : "" || order.TypeOrder == 2
                  ? "تم رفض"
                  : ""}
              </span>
            </td>
            <td>
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={order}
                  TypeShow={"EdartOrdersUser"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={HandAddTypeThisActions}
                />
              </div>
            </td>
          </tr>
        )
      );
    }
  }, [AllsDataUserNow.AllsMyOrders]);

  return (
    <div className="dashboard">
      {/* شريط العنوان */}
      <div className="dashboard-header">
        <p>نظرة عامة على أدائك ونشاطك</p>
      </div>

      {/* إحصائيات سريعة */}
      <div className="stats-grid">{JSXShowAllsDataBss}</div>

      <div>
        {/* محتوى بداية الصفحة */}
        <PeopleYouMayKnow
          FirsttitelComp="تجار قد تعرفهم"
          typeShow="bss"
          DataToShowForUser={DatShowBss}
        />{" "}
        {/* في منتصف الصفحة */}
        {/* محتوى باقي الصفحة */}
      </div>

      {/* قسم العملاء والطلبات */}
      <div className="dashboard-content">
        {/* الطلبات الحديثة */}
        <div className="orders-section Orders-User">
          <h2>الطلبات الأخيرة</h2>
          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>رقم الطلب</th>
                  <th>تاجر</th>
                  <th>عدد </th>
                  <th>المبلغ الإجمالي</th>
                  <th>الحالة</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody
                className={
                  AllsDataUserNow.AllsMyOrders.data.length > 1
                    ? ""
                    : "styleBTbleBodyShow"
                }
              >
                {AllsDataUserNow.AllsMyOrders.data.length > 1
                  ? JsxdatalastBaymentsProdects
                  : AllsTrAndTdForMyTable}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        {/* محتوى بداية الصفحة */}
        <PeopleYouMayKnow
          FirsttitelComp="اشخاص قد تعرفهم"
          DataToShowForUser={DatShowUser}
        />{" "}
        {/* في منتصف الصفحة */}
        {/* محتوى باقي الصفحة */}
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
    case "3":
      return "info";
    case "4":
      return "info";
    case "1":
      return "success";
    default:
      return "info";
  }
};

export default DashboardUser;
