import React, { useMemo, useRef, useEffect } from "react";
import "./Dashboard.css";
import { useDialogActionContext } from "../Context/DialogActionContext";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import { useSelector, useDispatch } from "react-redux";
import { AccountBalance, Store, Work } from "@mui/icons-material";
import { edartOrdersuserShowAllsDataMyOrder } from "../../allsliceproj/Order_Management_User/Order_Management_User_Slice";
import PeopleYouMayKnow from "../Commponent/PeopleYouMayKnow";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import GroupIcon from "@mui/icons-material/Group";

let datUserClickAct = "";
let typRequest = "";

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
    return state.Order_Management_User.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Order_Management_User.typRequestNow;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Order_Management_User.dataShowPayProd;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Order_Management_User.lodingtorspact;
  });

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
          <h4>
            لا يوجد اي بيانات الان يمكنك بدا تكوين طلبياتك مع تجار في اي وقت
          </h4>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }, [AllsDataUserNow.AllsMyOrders.data]); //== He To Sow Reloding In Table ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      case "edartordersuserstomyorder":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تعطيل طلبية لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} بنجاح كما تم اظهار تحديث لبيانات`
            );
            typRequest = "";
          return;
          case 3:
            typRequest = "";
            OpenDialogForActionFound(
              "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
            );
          return;
          case 4:
            typRequest = "";
            OpenDialogForActionFound(
              `لقد قام تاجر بتعديل على لطلبيتك ${datUserClickAct.namebss} كما تم تحديث لبيانات بلجديدة `
            );
          return;
          case 6:
            typRequest = "";
            OpenDialogForActionFound(
              " يبدو بانك سبق و قمت بلاغاء طلبية بلفعل و لا يتاح لخيار تعديل لقرارات كما تم تحديث لبيانات"
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
      case "edartordersuserdeletemyorder":
      switch (resultrquestaction) {
        case 1:
          typRequest = "";
          OpenDialogForActionSuccess(
            `لقد تم الحذف طلبية بنجاح لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} كما تم تحديث لبيانات`
          );
          typRequest = "";
        return;
        case 3:
          typRequest = "";
          OpenDialogForActionFound(
            "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
          );
        return;
        case 4:
          typRequest = "";
          OpenDialogForActionFound(
            "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
          );
        return;
        case 6:
          typRequest = "";
          OpenDialogForActionFound(
            " يبدو بانك سبق و قمت بلاغاء طلبية بلفعل و لا يتاح لخيار تعديل لقرارات كما تم تحديث لبيانات"
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
      case "ShowAllsMyOrderDataFromEdartOrdersUser":
        HandleCloseOrOpenReadinPage(false);
        typRequest = '';
        switch (resultrquestaction) {
          case 2:
            typRequest = "";
            OpenDialogForActionFound(
              "حدث خطا غير معروف اثناء جذب لبيانات او انك حذفت طلبية لذا تم تحديث لبيانات رجاء حاول مرة اخرى"
            );
          return;
          case 99:
          typRequest = "";
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
          default: StartShowMoreDatImClick(
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
          return;
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
  const HandAddTypeThisActions = (AllDataNow, TypeActionnow) => {
    datUserClickAct = AllDataNow;
    switch (TypeActionnow) {
      case "StopMyOrderFromEdartOrderUser":
        return TypeAlearVipNow(
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
      );;
      case "DeleteMyOrderFromEdartOrderUser":
        return TypeAlearVipNow(
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
      case "ShowMoreDatMyOrderFromEdartOrderUser":
        return dispatsh(edartOrdersuserShowAllsDataMyOrder(AllDataNow.id));;
    }
  } //=== End Open Aleart For Semthing Ac tion ===//

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

  // محاكاة تحميل البيانات
  const JSXShowAllsDataBss = useMemo(() => {
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
      return [
        {
          id: 1,
          icon: <AccountBalance className="iconShwStyle" />,
          title: "إجمالي المديونية",
          value: TotalMyDeyanForBss,
          color: "#4a6cf7",
        },
        {
          id: 2,
          icon: <GroupIcon className="iconShwStyle" />,
          title: "العلاقات التجارية",
          value: AllsDataUserNow.DatBssICalyan.length.toLocaleString(),
          color: "#10b981",
        },
        {
          id: 3,
          icon: <GroupRemoveIcon className="iconShwStyle" />,
          title: "عدد تجار يدينون لي",
          value: `${allbbshasdeyforMy.length.toLocaleString()}`,
          color: "#f59e0b",
        },
        {
          id: 4,
          icon: <Work className="iconShwStyle" />,
          title: "الوظائف النشطة",
          value: `${AllsDataUserNow.Profile_tweve.length.toLocaleString()}`,
          color: "#f59e0b",
        },
        {
          id: 5,
          icon: <AddShoppingCartIcon className="iconShwStyle" />,
          title: "اجمالي طلبيات",
          value: `${AllsDataUserNow.TotalOrderIDo.toLocaleString()}`,
          color: "#f59e0b",
        },
      ].map((card, index) => {
        return (
          <div key={index} className="stat-card warning animate-slide-in" style={{ animationDelay: `${index * 0.4}s` }} >
            <div className="stat-icon">{card.icon}</div>
            <div className="stat-content">
              <h3>{card.title}</h3>
              <span className="stat-number" data-count={card.value} >0</span>
            </div>
          </div>
        );
      });
    }
  }, [AllsDataUserNow]);

  const JsxdatalastBaymentsProdects = useMemo(() => {
    if (AllsDataUserNow.AllsMyOrders) {
      return AllsDataUserNow.AllsMyOrders.data.map(
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
                // className={`status-badge ${getStatusClass(order.TypeOrder)}`}
                style={{ backgroundColor: `${getStatusClass(order.TypeOrder)}` }}
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
