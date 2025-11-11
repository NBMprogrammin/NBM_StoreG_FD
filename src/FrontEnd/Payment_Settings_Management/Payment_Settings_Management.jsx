import { Container } from "@mui/joy";
import * as React from "react";

// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import { useSelector, useDispatch } from "react-redux";
import { edartPaymentsMethodsBssIndeexShow } from "../../allsliceproj/Payment_Settings_Management_Bss/Payment_Settings_Management_Bss_Slice";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "طريقة الدفغ",
  },
  {
    id: 3,
    titel: "رقم الحساب",
  },
  {
    id: 4,
    titel: "حالت الخدمة",
  },
  {
    id: 6,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let ModelShowDate = "show";
let MessageForUser = "";


let typRequest = "Show";
let sangePageDat = 1;
let datUserClickAct = "";

const Payment_Settings_Management = () => {
  const navigate = useNavigate();
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  // He To Sow Reloding In Table
  const AllsTrAndTdForMyTable = React.useMemo(() => {
    return [
      {
        id: 1,
        titel: "",
      },
      {
        id: 2,
        titel: "",
      },
      {
        id: 3,
        titel: <CartLoader />,
        meesage: MessageForUser,
      },
      {
        id: 4,
        titel: "",
      },
      {
        id: 5,
        titel: "",
      },
      {
        id: 6,
        titel: "",
      },
    ];
  }, [MessageForUser]); //== He To Sow Reloding In Table ==//

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.lodingtorspact;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck User Login Now To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if(ProfileSnageNow && ProfileSnageNow.TypProf !== "bss") {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Payment-Settings-Management", ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

    React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    dispatsh(edartPaymentsMethodsBssIndeexShow(sangePageDat));
  }, []);
  
  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if(typRequest === "Show") {
      if (resultrquestaction === 99) {
        typRequest = "Show";
        ModelShowDate = "";
        sangePageDat = 1;
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    } else if (typRequest === "edartpaymentsmethodsbsstoactivepayment") {
      typRequest = "Show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تفعيل لخيار الدفع ${datUserClickAct.namepayment} بنجاح كما تم تحديث لبيانات `
        );
        sangePageDat = 1;
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `لقد سبق لك تفعيل لخيار الدفع ${datUserClickAct.namepayment} مسبقا كما تم تحديث لبيانات `
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بان هناك خطا اثناء محاولت تفعيل الدفع حاول مرة اخرى كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تملك كلمة السر الاغدادات يمكنك انشائعا فلمركز الاعدادات"
        );
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    } else if (typRequest === "edartpaymentmathodsToDscactivePayment") {
      typRequest = "Show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ايقاف لخيار الدفع ${datUserClickAct.namepayment} بنجاح كما تم تحديث لبيانات `
        );
        sangePageDat = 1;
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `لقد سبق لك ايقاف لخيار الدفع ${datUserClickAct.namepayment} مسبقا كما تم تحديث لبيانات `
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بان هناك خطا اثناء محاولت ايقاف الدفع حاول مرة اخرى كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تملك كلمة السر الاغدادات يمكنك انشائعا فلمركز الاعدادات"
        );
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    } else if (typRequest === "edartpaymentsmethodsbsstoupdatepaymentmethod") {
      typRequest = "Show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تحديث لخيار الدفع ${datUserClickAct.namepayment} بنجاح كما تم تحديث لبيانات `
        );
        sangePageDat = 1;
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 11) {
        OpenDialogForActionFound(
          "يبدو بان هناك نفس المعلومات دفع لمطلوب و لا يتاح تكرارها كما تم تحديث لبيانات"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تملك كلمة السر الاغدادات يمكنك انشائعا فلمركز الاعدادات"
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          "يبدو بانك تحاول تحديث خيارات الدغع نقدي او سلف و لتي لا يتاح تعديلها ولا لاحاج لها لكن تم تحديث لبيانات"
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "لا يتاح تعديل على خيارات مثل الدفع نقدي او سلف من طرف تاجر و لا حاج لذالك كما تم تحديث لبيانات"
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بان هناك خطا اثناء محاولت تحديق لخيار الدفع حاول مرة اخرى كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (typRequest === "Show") {
      if (leadingtable === true) {
        MessageForUser = "لا يوجد اي بيانات الان يمكنك بدا لغمل";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else {
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    }
  }, [leadingtable]); //== End Her To Sheck loding Response ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  const HandleSowPrevMyCategory = () => {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartPaymentsMethodsBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  const HandleSowNextMyCategory = () => {
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartPaymentsMethodsBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Open Aleart For Semthing Ac tion
  const HandAddTypeThisActions = (dat, TypeAction) => {
    datUserClickAct = dat;
    if (TypeAction === "ActivePayment") {
      TypeAlearVipNow(
        dat,
        TypeAction + "FromEdartPaymentMethodsBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تفعيل الخيار الدفع المختار ${dat.namepayment}`,
        "تاكيد",
        "",
        "bss",
        "من اجل اكمال تفعيل لخيار الدفع المختار رجا ادخال الكلمة السر الاعدادات",
        dat.id
      );
    } else if (TypeAction === "StopPayment") {
      TypeAlearVipNow(
        dat,
        TypeAction + "FromEdartPaymentMethodsBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل الخيار الدفع المختار ${dat.namepayment}`,
        "تاكيد",
        "",
        "bss",
        "من اجل اكمال احراء تعطيل لخيار الدفع المختار رجا ادخال الكلمة السر الاعدادات",
        dat.id
      );
    } else if (TypeAction === "UpdatePayment") {
      TypeAlearVipNow(
        dat,
        TypeAction + "FromEdartPayprod",
        `رقم الدفغ الجديد ${dat.TypeNumberPay}`,
        "number",
        `كلمة السر الاعدادات`,
        "password",
        `تحديث طريقة الدفع ${dat.namepayment}`,
        "تحديث",
        "",
        "importtouinputepayment",
        "",
        dat.id
      );
    }
  } //=== End Open Aleart For Semthing Ac tion ===//

  // Start JSX To Show All Date For Prodect User
  const dateJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
        return (
          <TableRow
            key={dat.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell className="stletrintableforpageedar">{dat.id}</TableCell>
            <TableCell className="stletrintableforpageedar">
              {dat.namepayment}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              className="stletrintableforpageedar"
            >
              {dat.namepayment == "CASH" || dat.namepayment == "Selefe"
                ? "غير مطلوب"
                : dat.TypeNumberPay}
            </TableCell>
            <TableCell className="stletrintableforpageedar">
              <span
              className='status-badge'
              style={{ backgroundColor: `${dat.TypePayment == 1 ? '#d1fae5' : '#fee2e2'
              }`, color: `${dat.TypePayment == 1 ? '#065f46' : '#b91c1c'
              }` }}
            >
              {dat.TypePayment == 1 ? "مفغل" : "موقف"}
            </span>
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={dat}
                  TypeShow={"EdartPaymentMethod"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={HandAddTypeThisActions}
                />
              </div>
            </TableCell>
          </TableRow>
        )
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For Prodect User ===//

  if (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"Edartpaymentmethods"} />
        <Container>
          <div className="stylallsectinpage">
            <TitelPage TitelPage="ادارة الاعدادات الدفع" />

            <div className="headerTable">
              <CardShowDateTableNextPrevMor
                loadingTabelBody={leadingtable}
                TypShow="More"
                TitelFirst="الاجمالي"
                totelPageCategory={totalalldate}
                startPageNow={currentpagenow}
                startPageTo={currentpagetogo}
              />

              <CartAllBtnClickToGoNextAndPrevShowDataTable
                loadingTabelBody={leadingtable}
                ModelShowDate={leadingtable != true ? ModelShowDate : ""}
                currentPageAndTypeShow={sangePageDat}
                last_Page={last_page}
                HandleSowNextMyCategory={HandleSowNextMyCategory}
                HandleSowPrevMyCategory={HandleSowPrevMyCategory}
              />
            </div>
            <AllTabletOShowMoreData
              datToShowTablec={datToShowTablec}
              AllsTrAndTdForMyTable={AllsTrAndTdForMyTable}
              MessageForUser={MessageForUser}
              GlesStyleTabl={
                leadingtable == false
                  ? "styleBTbleBodyShowAlss"
                  : "styleBTbleBodyShow"
              }
              loadingTabelBody={leadingtable}
              dateX={dateJSX}
            />
          </div>
        </Container>

        <BtnToGoToDoActionForNextPage
          pargrafe={" اضافة طريقة الدفع "}
          disabled={leadingtable && leadingtable != "active"}
          linck={`Payment-Settings-Management/Add`}
        />
      </div>
    );
  }
}


export default Payment_Settings_Management;