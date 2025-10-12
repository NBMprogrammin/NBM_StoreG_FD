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
} from "../../allsliceproj/Edart zebayens/edartZebayensBssSlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

let dateX = "";
let ModelShowDate = "show";
let MessageForUser = "";

// Her Place Alls Colums To Start Do Semthing Action
let datToShowTablec = [
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
let DataMyZebounses = "";
let AllsTrAndTdForMyTable = [];
export default function EdartZebayen() {
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    StartShowMoreDatImClick,
    TypeAlearVipNow,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  // He To Sow Reloding In Table
  React.useMemo(() => {
    AllsTrAndTdForMyTable = [
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

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    dispatsh(edartZebayensBssIndeexShow(sangePageDat));
  }, []);

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.edartzebayensbss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.edartzebayensbss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.edartzebayensbss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.edartzebayensbss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.edartzebayensbss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.edartzebayensbss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartzebayensbss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartzebayensbss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartzebayensbss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartzebayensbss.dataShowPayProd;
  });
  // End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DataMyZebounses = AllsDataUserNow.MayZeboune;
    }
  }, [AllsDataUserNow]); //== End Get Value Varyale Generale To Semthing Action ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "edartzebaynesbsstoactivedeyneforzeboune") {
      typRequest = typActionrespNoew;
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تفعيل لخيار دين للزبون ${datUserClickAct.username} بنجاح كما تم تحديث لبيانات`
        );
        sangePageDat = 1;
        typRequest = "Show";
        ModelShowDate = "";
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          `يبدو بانك سبف لك و فعلت لخيار دين للزبون ${datUserClickAct.username} بلغعل`
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          "رجاء انتظار اكمال العلاقة بينكم من اجل تعديل لحيارات حيث لم يرد المستخدم على طلبك بعد"
        );
      }
    } else if (typRequest === "edartzebounestodecativedeyneforzeboune") {
      typRequest = typActionrespNoew;
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تعطيل لخيار دين للزبون ${datUserClickAct.username} بنجاح كما تم تحديث لبيانات`
        );
        ModelShowDate = "";
        sangePageDat = 1;
        typRequest = "Show";
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          `يبدو بانك سبف لك و عطلت لخيار دين للزبون ${datUserClickAct.username} بلغعل`
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          "رجاء انتظار اكمال العلاقة بينكم من اجل تعديل لحيارات حيث لم يرد المستخدم على طلبك بعد"
        );
      }
    } else if (typRequest === "edartzebaynetoupdatedeynezeboune") {
      typRequest = typActionrespNoew;
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تعديل دين للزبون ${datUserClickAct.username} بنجاح كما تم تحديث لبيانات`
        );
        sangePageDat = 1;
        typRequest = "Show";
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 9) {
        // انتظار لقرار من اجل ايقاف تعديل عللى اليدن زبون في حالت لم يتاح له خيار دين؟؟؟؟؟
        OpenDialogForActionFound(
          `يبدو بان لمستخدم ${datUserClickAct.username} لم يرد على طلبية تكوين علاقة معك بعد رجاء انتظار رده `
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          "رجاء انتظار اكمال العلاقة بينكم من اجل تعديل لحيارات حيث لم يرد المستخدم على طلبك بعد"
        );
      }
    } else if (typRequest === "ShowAllsDataOrderZebouneFromEdartOrdersBss") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
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
  function HandleSowPrevMyCategory() {
    console.log(dateClickToSerch);
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartZebayensBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  function HandleSowNextMyCategory() {
    console.log(dateClickToSerch);
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartZebayensBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Sereach All Orders For Semthinge Zeboune
  function HandleShowSAllProdectsUser() {
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
  function HandleToDoActionsNow(data, Type) {
    datUserClickAct = data;
    if (typActionrespNoew === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
    }
    if (Type === "ActiveDeyn") {
      TypeAlearVipNow(
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
    } else if (Type === "DscActiveDeyn") {
      TypeAlearVipNow(
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
    } else if (Type === "UpdateDeynMyZeboune") {
      TypeAlearVipNow(
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
    } else if (Type === "ShowMyZeboune") {
      dispatsh(edartzebayensBsshowallsdataMyZeboune(data.id));
    }
  } //== End To Do Open Or Close Aleart For Confirmed Payment Prodect ==//

  // Start JSX To Show All Date For Prodect User
  React.useMemo(() => {
    if (returndata) {
      dateX = returndata.map((dat) => {
        return dat.Zeboune == "" ? (
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
              {dat.username}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.numberPhone}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.TypeAccounte == "create_Use" ? "يدويا" : "حقيقي"}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.HaletDeyn == 0
                ? "فلانتظار القرار"
                : "" || dat.HaletDeyn == 1
                ? "مفعل"
                : "" || dat.HaletDeyn == 2
                ? "معطل"
                : ""}
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
        );
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For Prodect User ===//

  if (token) {
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
                    dataFeth={DataMyZebounses}
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
                dateX={dateX}
              />
            </div>
          </Container>

          <BtnToGoToDoActionForNextPage
            pargrafe={" + اضافة زبون "}
            disabled={leadingtable && leadingtable != "active"}
            linck={`Add-Zebayen`}
          />
        </div>
      );
    }
  } else {
    HandleCloseOrOpenReadinPage(true);
    Cookies.remove("user_token");
    window.location.href = "home";
  }
}
