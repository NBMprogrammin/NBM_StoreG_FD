import { Container } from "@mui/joy";
import * as React from "react";
// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import { SearchSelectForDateToClickAndBtn } from "../Commponent/SearchSelectForDateToClickAndBtn";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import { useMemo, useEffect } from "react";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  edartpayprodectSearchdatzeboune,
  edartpayprodectshowallsdatapaymentprod,
  edartpayprodectsIndeexShow,
} from "../../allsliceproj/Sales_Management_Bss/Sales_Management_Bss_Slice";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
const token = Cookies.get("token");

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "الاسم زبون",
  },
  {
    id: 3,
    titel: "الرقم الزبون",
  },
  {
    id: 4,
    titel: "حالت الدفع",
  },
  {
    id: 5,
    titel: "عدد المنتجات",
  },
  {
    id: 6,
    titel: "تكلفة الاجمالبة",
  },
  {
    id: 7,
    titel: "طريقة الدفع",
  },
  {
    id: 8,
    titel: "الرقم الدفع",
  },
  {
    id: 9,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let datShowUser = "";
let typRequest = "Show";
let sangePageDat = 1;
let ModelShowDate = "show";
let MessageForUser = "";
let typActionrespNoew = "";
let valueToSearchZeboune = "";
let datUserClickAct = "";


const Sales_Management = () => {
  const navigate = useNavigate();

  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    StartShowMoreDatImClick,
    TypeAlearVipNow,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.Sales_Management_Bss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Sales_Management_Bss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Sales_Management_Bss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Sales_Management_Bss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Sales_Management_Bss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Sales_Management_Bss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Sales_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Sales_Management_Bss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Sales_Management_Bss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Sales_Management_Bss.dataShowPayProd;
  });
  // End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck Type Login And Profile Noew To Do Action
  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if (ProfileSnageNow.TypProf === "user" || ProfileSnageNow.TypProf === "teweve" && ProfileSnageNow.edartpayprodects != 1 ) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Sales-Management", ProfileSnageNow]); //== End Sheck Type Login And Profile Noew To Do Action ==//

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    if(ProfileSnageNow.TypProf === "bss" || ProfileSnageNow.TypProf === "teweve" && ProfileSnageNow.edartpayprodects == 1) {
      dispatsh(edartpayprodectsIndeexShow(1));
    }
  }, [ProfileSnageNow]);
  
  const DataMyZebounses = React.useMemo(() => {
    if (AllsDataUserNow) {
      return AllsDataUserNow.MayZeboune;
    }
  }, [AllsDataUserNow]);

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      case "Show":
      if (resultrquestaction === 99) {
          HandleCloseOrOpenReadinPage(false);
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;
          OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
      }
      return;
      case "edartpayprodectconfirmedpaymentprod":
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      switch (resultrquestaction) {
          case 1:
          OpenDialogForActionSuccess(
          `لقد نمت موافق  و تاكيد  على استلام الاموال من زبون ${datUserClickAct.namezeboune} و اتمام لمبيع بنجاح و اظهار تحديث`
          );
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;  
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
      typRequest = typActionrespNoew;
      switch (resultrquestaction) {
          case 1:
          OpenDialogForActionSuccess(
              `لقد نم رفض تاكيد استلام الاموال من زبون ${datUserClickAct.namezeboune}  و استرداد كل لمنتجات لموجود في طلبية و بلكمية للمخزون كل منج و تم اظهار تحديث`
          );
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;
          return;
          case 2:
          OpenDialogForActionSuccess(
              "حدث خطا اثناء اتمام طلبية لتي تمثل تاكيد استلام الاموال سيتم تحميل صفحة و معاود مرة اخرى"
          );
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
          case 14:
          OpenDialogForActionFound(
              "بدو باتنك سبق لك و ان وافقت على دفع للطلبية سيتم تحميل صفحة و اضهار نتيجة نهائية "
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
      case 'ShowAllsDataPayProdectForId':
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 99) {
          OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
      }
      typRequest = typActionrespNoew;
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

  // Start Sheck Loaading Now For Eny Request User
  React.useEffect(() => {    
    if (typRequest == "Show") {
      ModelShowDate = "Show";
      if (leadingtable === true) {
        ModelShowDate = "";
        MessageForUser = "لا يوجد اي بيانات الان يمكنك بدا لغمل";
      } else if (leadingtable === "active") {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else if (typRequest == "Sereach") {
      ModelShowDate = "Sereach";
      if (leadingtable === true) {
        MessageForUser = `يبدو بان زبون لم يتم تسجيل عليه اي بيانات بعد و هو زبون يمتلك رقم ${valueToSearchZeboune.nameTou} او تاكد من زبون المعني و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else if (returndata.length < 0) {
        MessageForUser = `يبدو بان زبون لم يتم تسجيل عليه اي بيانات بعد و هو زبون يمتلك رقم ${valueToSearchZeboune.nameTou} او تاكد من زبون المعني و حاول مر اخرى`;
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else {
      ModelShowDate = "";
    }
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  const HandleSowPrevMyCategory = async () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat > 1) {
          sangePageDat = sangePageDat - 1;
          typRequest = "Show";
          dispatsh(edartpayprodectsIndeexShow(sangePageDat));
        }
      return;
      case "Sereach":
        if (sangePageDat > 1) {
          sangePageDat = sangePageDat - 1;
          const data = {
            page: sangePageDat,
            name: valueToSearchZeboune.id,
          };
          typRequest = "Sereach";
          dispatsh(edartpayprodectSearchdatzeboune(data));
        }
      return;
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  const HandleSowNextMyCategory = async () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat < last_page) {
          sangePageDat = sangePageDat + 1;
          typRequest = "Show";
          dispatsh(edartpayprodectsIndeexShow(sangePageDat));
        }
      return;
      case "Sereach":
        if (sangePageDat < last_page) {
          sangePageDat = sangePageDat + 1;
          typRequest = "Sereach";
          const data = {
            page: sangePageDat,
            name: valueToSearchZeboune.id,
          };
          dispatsh(edartpayprodectSearchdatzeboune(data));
        }
      return;
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Her To Get Storage Type Profile Login Now
  React.useEffect(() => {
    if (ProfileSnageNow && ProfileSnageNow.TypProf) {
      datShowUser = ProfileSnageNow.TypProf;
    }
  }, [ProfileSnageNow.TypProf]); //== End Her To Get Storage Type Profile Login Now ==//

  // Start To Show All Data Index In Page
  const HandleShowSAllPayProdectsBss = async () => {
    typRequest = "Show";
    sangePageDat = 1;
    dispatsh(edartpayprodectsIndeexShow(sangePageDat));
  } //== End To Show All Data Index In Page ==//

  // Start To Handle Sereach Name Category
  const HandelSendDateAllsInThisForm = async (datpayprod) => {
    if (datpayprod != null) {
      valueToSearchZeboune = datpayprod;
      typRequest = "Sereach";
      typActionrespNoew = "Sereach";
      sangePageDat = 1;
      const data = {
        page: sangePageDat,
        name: datpayprod.id,
      };

      ModelShowDate = "";
      dispatsh(edartpayprodectSearchdatzeboune(data));
    }
  }; //== End To Handle Sereach Name  ==//

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

  // He To Sow Reloding In Table
  const AllsTrAndTdForMyTable = useMemo(() => {
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
        titel: "",
      },
      {
        id: 4,
        titel: "",
      },
      {
        id: 5,
        titel: <CartLoader />,
        meesage: MessageForUser,
      },
      {
        id: 6,
        titel: "",
      },
      {
        id: 7,
        titel: "",
      },
      {
        id: 8,
        titel: "",
      },
      {
        id: 9,
        titel: "",
      },
    ];
  }, [MessageForUser]); //== He To Sow Reloding In Table ==//

  // Start JSX To Show All Date For Prodect User
  const dateJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
        return dat.name == "" ? (
          ""
        ) : (
          <TableRow
            key={dat.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              height: "70px",
            }}
          >
            <TableCell className="stletrintableforpageedar">{dat.id}</TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.namezeboune}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.numberzeboune}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <span
                className='status-badge'
                style={{ backgroundColor: `${getStatusClass(dat.typepayment)}`, color: `${getStatusClasscolor(dat.typepayment)}` }}
              >
                {typPaymnt(dat.typepayment)}
              </span>
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.totalprodectspay}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.totalpriceprodectspay + `${dat.currentPay}`}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.paymentmethod}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.paymentmethod == "CASH" || dat.paymentmethod == "Selefe"
                ? "غير مطلوب"
                : dat.numberpaymentmethod}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={dat}
                  TypeShow={"EdartPaymentProd"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={HandAddTypeThisActions}
                />
              </div>
            </TableCell>
          </TableRow>
        );
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For Prodect User ===//

  if (
    (ProfileSnageNow &&
      AllsDataUserNow &&
      ProfileSnageNow.TypProf == "teweve") ||
    ProfileSnageNow.TypProf == "bss"
  ) {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"EdartPayProdects"} />
        <Container>
          <div className="stylallsectinpage">
            <TitelPage TitelPage="ادارة المبيعات" />

            {leadingtable ? (
              ""
            ) : returndata.length > 3 ? (
              <div className="styleinptandbtntodoorshowdataaction">
                <h3>بحث من خلال المبيعات الزباين</h3>
                <SearchSelectForDateToClickAndBtn
                  dataFeth={DataMyZebounses}
                  HandelSendDateAllsInThisForm={HandelSendDateAllsInThisForm}
                  TypeShowData="Sereash"
                  ActionBtn="لبحث"
                  TypeAction="SereashUser"
                />
              </div>
            ) : (
              <></>
            )}

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
                HandleShowSAllProdectsUser={HandleShowSAllPayProdectsBss}
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
          pargrafe={" اضافة مبيع "}
          disabled={leadingtable && leadingtable != "active"}
          linck={`Sales-Management/Add`}
        />
      </div>
    );
  }
}

const typPaymnt = (status) => {
  switch (status) {
    case "0":
      return "فلانتظار";
    case "1":
      return "تم تاكيد";
    case "2":
      return "تم رفض";
    case "3":
      return "تم الغاء";
  }
}

// دالة مساعدة لتحديد كلاس الحالة
const getStatusClass = (status) => {
  switch (status) {
    case "0":
      return "#fef3c7";
    case "2":
      return "#fee2e2";
    case "3":
      return "#fee2e2";
    case "1":
      return "#d1fae5";
    default:
      return "info";
  }
}

// Start For Color
const getStatusClasscolor = (status) => {
  switch (status) {
    case "0":
      return "#92400e";
    case "2":
      return "#b91c1c";
    case "3":
      return "#b91c1c";
    case "1":
      return "#065f46";
    default:
      return "info";
  }
}

export default Sales_Management;