import { Container } from "@mui/joy";
import * as React from "react";

// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import TitelPage from "../Commponent/TitelPage";
import { SearchSelectForDateToClickAndBtn } from "../Commponent/SearchSelectForDateToClickAndBtn";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import { useSelector, useDispatch } from "react-redux";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import {
  edartzebayensBsshowallsdataMyZeboune,
  edartZebayensBssIndeexShow,
  edartZebayensBssSearchzeboune,
} from "../../allsliceproj/Customers_Management_Bss/Customers_Management_Bss_Slice";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

let dateX = "";
let ModelShowDate = "show";
let MessageForUser = "";

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
    titel: "الرقم زبون",
  },
  {
    id: 4,
    titel: "حالت الحساب",
  },
  {
    id: 5,
    titel: "حالت الدين",
  },
  {
    id: 6,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let typRequest = "Show";
let sangePageDat = 1;
let datUserClickAct = "";
let dateClickToSerch = "";
let typActionrespNoew = "";
export default function Customers_Management() {
  const navigate = useNavigate();
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    StartShowMoreDatImClick,
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
        titel: "",
      },
      {
        id: 4,
        titel: <CartLoader />,
        meesage: MessageForUser,
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
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.Customers_Management_Bss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Customers_Management_Bss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Customers_Management_Bss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Customers_Management_Bss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Customers_Management_Bss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Customers_Management_Bss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Customers_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Customers_Management_Bss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Customers_Management_Bss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Customers_Management_Bss.dataShowPayProd;
  });
  // End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck Type Login And Profile Noew To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if (ProfileSnageNow.TypProf !== "bss") {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Customers-Management", ProfileSnageNow]); //== End Sheck Type Login And Profile Noew To Do Action ==//
  
  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    dispatsh(edartZebayensBssIndeexShow(sangePageDat));
  }, []);

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      case "Show":
        if (resultrquestaction === 99) {
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;
          OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
        }
      return;
      case "edartzebaynesbsstoactivedeyneforzeboune":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تفعيل لخيار دين للزبون ${datUserClickAct.username} بنجاح كما تم تحديث لبيانات`
            );
            sangePageDat = 1;
            typRequest = "Show";
            ModelShowDate = "";
          return;
          case 5:
            OpenDialogForActionFound(
              `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              `يبدو بانك سبف لك و فعلت لخيار دين للزبون ${datUserClickAct.username} بلغعل`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              "رجاء انتظار اكمال العلاقة بينكم من اجل تعديل لحيارات حيث لم يرد المستخدم على طلبك بعد"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      case "edartzebounestodecativedeyneforzeboune":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تعطيل لخيار دين للزبون ${datUserClickAct.username} بنجاح كما تم تحديث لبيانات`
            );
            sangePageDat = 1;
            typRequest = "Show";
            ModelShowDate = "";
          return;
          case 5:
            OpenDialogForActionFound(
              `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              `يبدو بانك سبف لك و عطلت لخيار دين للزبون ${datUserClickAct.username} بلغعل`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              "رجاء انتظار اكمال العلاقة بينكم من اجل تعديل لحيارات حيث لم يرد المستخدم على طلبك بعد"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      case "edartzebaynetoupdatedeynezeboune":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تعديل دين للزبون ${datUserClickAct.username} بنجاح كما تم تحديث لبيانات`
            );
            sangePageDat = 1;
            typRequest = "Show";
            ModelShowDate = "";
          return;
          case 5:
            OpenDialogForActionFound(
              `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 9:
            // انتظار لقرار من اجل ايقاف تعديل عللى اليدن زبون في حالت لم يتاح له خيار دين؟؟؟؟؟
            OpenDialogForActionFound(
              `يبدو بان لمستخدم ${datUserClickAct.username} لم يرد على طلبية تكوين علاقة معك بعد رجاء انتظار رده `
            );
          return;
          case 12:
            OpenDialogForActionFound(
              "رجاء انتظار اكمال العلاقة بينكم من اجل تعديل لحيارات حيث لم يرد المستخدم على طلبك بعد"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      case "ShowAllsDataOrderZebouneFromEdartOrdersBss":
        typRequest = typActionrespNoew;
        if (resultrquestaction === 99) {
          OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
        StartShowMoreDatImClick(
          ShowAllsProdData.datone,
          "",
          "",
          ShowAllsProdData.datou,
          `تفاصيل معاملات مع زبون ${ShowAllsProdData.username}`,
          "صورة حساب زبون",
          ShowAllsProdData.image,
          "",
          `المزيد من المعلومات معاملات مع ${ShowAllsProdData.username}`,
          ShowAllsProdData.created_at,
          ShowAllsProdData.id
        );
      return;
    }
  }, [resultrquestaction]); // End Sheck Type Request To Show Result For User ==/

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start Type Page Now To Show Data
  React.useEffect(() => {
    if (typRequest === "Show") {
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
    } else if (typRequest === "Sereach") {
      ModelShowDate = "Sereach";
      if (leadingtable === true) {
        MessageForUser = `يبدو بان زبون لم يتم تسجيل عليه اي بيانات بعد و هو زبون يمتلك رقم ${dateClickToSerch.nameTou} او تاكد من زبون المعني و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else if (returndata.length < 0) {
        MessageForUser = `يبدو بان زبون لم يتم تسجيل عليه اي بيانات بعد و هو زبون يمتلك رقم ${dateClickToSerch.nameTou} او تاكد من زبون المعني و حاول مر اخرى`;
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else {
      ModelShowDate = "";
    }
  }, [leadingtable]); // Start Type Page Now To Show Data

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  const HandleSowPrevMyCategory = async() => {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartZebayensBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  const HandleSowNextMyCategory = async () => {
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartZebayensBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Sereach All Orders For Semthinge Zeboune
  const HandleShowSAllProdectsUser = async () => {
    typRequest = "Show";
    sangePageDat = 1;
    dispatsh(edartZebayensBssIndeexShow(sangePageDat));
  } //== End Sereach All Orders For Semthinge Zeboune ==//

  // Start To Sereach Data For Semthing Zeboune Bss Clcik
  const HandelSendDateAllsInThisForm = async (val) => {
    if (val != null) {
      dateClickToSerch = val;
      typRequest = "Sereach";
      sangePageDat = 1;
      typActionrespNoew = "Sereach";
      ModelShowDate = "";
      dispatsh(edartZebayensBssSearchzeboune(val.nameTou));
    }
  }; // End To Sereach Data For Semthing Zeboune Bss Clcik ==//

  // Start To Do Open Or Close Aleart For Confirmed Payment Prodect
  const HandleToDoActionsNow = (data, Type) => {
    datUserClickAct = data;
    if (typActionrespNoew === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
    }
    switch (Type) {
      case "ActiveDeyn":
      return TypeAlearVipNow(
        data,
        Type + "FromEdartZebayensBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        ` تاكيد تفعيل الدين للزبون  ${data.username} `,
        "تاكيد",
        "",
        "bss",
        `اللاكمال تفعيل خيار الدين للزبون ${data.username} يرجا ادخال كلمة السر لخاص بلاعدادات`,
        data.id
      );
      case "DscActiveDeyn":
      return TypeAlearVipNow(
        data,
        Type + "FromEdartZebayensBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل الدين للزبون  ${data.username}`,
        "تاكيد",
        "",
        "bss",
        `اللاكمال تعطيل خيار الدين للزبون ${data.username} يرجا ادخال كلمة السر لخاص بلاعدادات`,
        data.id
      );
      case "UpdateDeynMyZeboune":
      return TypeAlearVipNow(
        data,
        Type + "FromEdartZebouns",
        `دين لحالي و لجديد (${data.TotelDeyn ? data.TotelDeyn : "خاوي"})`,
        "number",
        "كلمة السر الاعدادات",
        "password",
        `تعديل دين زبون للزبون ${data.username}`,
        "تعديل",
        "",
        "importtouinputepayment",
        "",
        data.id
      );
      case 'ShowMyZeboune':
        return dispatsh(edartzebayensBsshowallsdataMyZeboune(data.id));
    }
  } //== End To Do Open Or Close Aleart For Confirmed Payment Prodect ==//

  // Start JSX To Show All Date For Prodect User
  const dateJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
        return (
          <TableRow
            key={dat.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              height: "70px",
            }}
          >
            <TableCell className="stletrintableforpageedar">{dat.id}</TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.username}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.numberPhone}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
            <span
              className='status-badge'
              style={{ backgroundColor: `${dat.TypeAccounte === "create_Use" ? '#fef3c7' : '#dbeafe'
              }`, color: `${dat.TypeAccounte === "create_Use" ? '#92400e' : '#065f46'
              }` }}
            >
              {dat.TypeAccounte === "create_Use" ? "يدويا" : "حقيقي"}
            </span>
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <span
              className='status-badge'
              style={{ backgroundColor: `${dat.HaletDeyn == 0 ? '#fef3c7' : "" ||
                dat.HaletDeyn == 1 ? '#d1fae5' : '#fee2e2'
              }`, color: `${dat.HaletDeyn == 0 ? '#92400e' : "" ||
                dat.HaletDeyn == 1 ?  '#065f46' : '#b91c1c'
              }` }}
            >
              {dat.HaletDeyn == 0
                ? "فلانتظار القرار"
                : "" || dat.HaletDeyn == 1
                ? "مفعل"
                : "" || dat.HaletDeyn == 2
                ? "معطل"
                : ""}
            </span>
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={dat}
                  TypeShow={"EdartZebayen"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={HandleToDoActionsNow}
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
        <Header typeactive={"Edartzebayn"} />
        <Container>
          <div className="stylallsectinpage">
            <TitelPage TitelPage="ادارة الزباين" />
            {leadingtable || typRequest === "Sereach" ? (
              ""
            ) : totalalldate > 3 ? (
              <div className="styleinptandbtntodoorshowdataaction">
                <h3>بحث من خلال الاسم زبون</h3>
                <SearchSelectForDateToClickAndBtn
                  dataFeth={AllsDataUserNow.MayZeboune}
                  HandelSendDateAllsInThisForm={HandelSendDateAllsInThisForm}
                  TypeShowData="Sereash"
                  ActionBtn="لبحث"
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
                HandleShowSAllProdectsUser={HandleShowSAllProdectsUser}
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
          pargrafe={" اضافة زبون "}
          disabled={leadingtable && leadingtable != "active"}
          linck={`Customers-Management/Add`}
        />
      </div>
    );
  }
}
