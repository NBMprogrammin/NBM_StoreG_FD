import { Container } from "@mui/joy";
import * as React from "react";
// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import { SearchSelectForDateToClickAndBtn } from "../Commponent/SearchSelectForDateToClickAndBtn";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import TitelPage from "../Commponent/TitelPage";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import { useSelector, useDispatch } from "react-redux";
import {
  edartOrdersUserIndeexShow,
  edartOrdersUserSearchdatzebounedata,
  edartOrdersuserShowAllsDataMyOrder,
} from "../../allsliceproj/Edart Orders user/edartOrdersUserSlice";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

// Her Place Alls Colums To Start Do Semthing Action
let datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "الاسم تجاري",
  },
  {
    id: 4,
    titel: "حالت طلبية",
  },
  {
    id: 5,
    titel: "عدد المنتجات",
  },
  {
    id: 6,
    titel: "حالت الدفع",
  },
  {
    id: 7,
    titel: "تكلفة الاجمالبة",
  },
  {
    id: 8,
    titel: "طريقة الدفع",
  },
  {
    id: 9,
    titel: "الرقم الدفع",
  },
  {
    id: 10,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let AllsTrAndTdForMyTable = [];

let typRequest = "Show";
let sangePageDat = 1;
let datUserClickAct = [];

let dateX = "";
let ModelShowDate = "show";
let MessageForUser = "";

let valuNameCategoryTosereachAndCreated = "";
let DataMyZebounses = [];
let typActionrespNoew = "";

export default function UserForOllOrdersForZeboune() {
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    StartShowMoreDatImClick,
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
      {
        id: 10,
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
    dispatsh(edartOrdersUserIndeexShow(sangePageDat));
  }, []);

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.edartOrdersUser.data;
  });

  const leadingtable = useSelector((state) => {
    return state.edartOrdersUser.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.edartOrdersUser.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.edartOrdersUser.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.edartOrdersUser.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.edartOrdersUser.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartOrdersUser.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartOrdersUser.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartOrdersUser.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartOrdersUser.dataShowPayProd;
  });
  // End Get Alls Data To Do Semthong In The Page Form Slice Controller

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DataMyZebounses = AllsDataUserNow.DatBssICalyan;
    }
  }, [AllsDataUserNow]); // Start Get Value Varyale Generale To Semthing Action

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "edartordersuserstomyorder") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تعطيل طلبية لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} بنجاح كما تم اظهار تحديث لبيانات`
        );
        typRequest = "Show";
        ModelShowDate = "";
        sangePageDat = 1;
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
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم الحذف طلبية بنجاح لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} كما تم تحديث لبيانات`
        );
        typRequest = "Show";
        ModelShowDate = "";
        sangePageDat = 1;
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
      typRequest = typActionrespNoew;
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

  // Start Her To Sheck And Waite Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck And Waite Response ==//

  // Start Sheck Type Request To Show Result For User
  React.useEffect(() => {
    if (typRequest === "Show") {
      ModelShowDate = "Show";
      if (leadingtable === true) {
        ModelShowDate = "";
        MessageForUser =
          "لا يوجد اي بيانات الان يمكنك بدا تكوين طلبياتك مع تجار في اي وقت";
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
        MessageForUser = `يبدو بانك لم تكون اي طلبيات مع تاجر ${valuNameCategoryTosereachAndCreated.nameTou} او تاكد من خيارك و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else if (returndata.length < 0) {
        MessageForUser = `يبدو بانك لم تكون اي طلبيات مع تاجر ${valuNameCategoryTosereachAndCreated.nameTou} او تاكد من خيارك و حاول مر اخرى`;
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else {
      ModelShowDate = "";
    }
  }, [leadingtable]); // End Sheck Type Request To Show Result For User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  function HandleSowPrevMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartOrdersUserIndeexShow(sangePageDat));
      }
    } else if (typRequest === "Sereach") {
      if (sangePageDat > 1) {
        typRequest = "Sereach";
        sangePageDat = sangePageDat - 1;
        const data = {
          page: sangePageDat,
          name: valuNameCategoryTosereachAndCreated.id,
        };
        dispatsh(edartOrdersUserSearchdatzebounedata(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  function HandleSowNextMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartOrdersUserIndeexShow(sangePageDat));
      }
    } else if (typRequest === "Sereach") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Sereach";

        const data = {
          page: sangePageDat,
          name: valuNameCategoryTosereachAndCreated.id,
        };
        dispatsh(edartOrdersUserSearchdatzebounedata(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start To Sereach Alls My Orders For Semthing Bss
  function HandleShowSAllProdectsUser() {
    typRequest = "Show";
    typActionrespNoew = "Show";
    sangePageDat = 1;
    dispatsh(edartOrdersUserIndeexShow(sangePageDat));
  } //== End To Sereach Alls My Orders For Semthing Bss ==//

  // Start Sereach Alls My Order For Smething Bss
  const HandelSendDateAllsInThisForm = async (val) => {
    if (val != null) {
      ModelShowDate = "";
      typRequest = "Sereach";
      typActionrespNoew = "Sereach";
      valuNameCategoryTosereachAndCreated = val;
      sangePageDat = 1;
      const data = {
        page: sangePageDat,
        name: val.id,
      };
      dispatsh(edartOrdersUserSearchdatzebounedata(data));
    }
  }; //== End Sereach Alls My Order For Smething Bss ==//

  // Start Open Aleart For Semthing Ac tion
  function HandAddTypeThisActions(AllDataNow, TypeActionnow) {
    datUserClickAct = AllDataNow;
    if (typRequest === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
    }
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

  // Start JSX To Show All Date For Prodect User
  React.useMemo(() => {
    if (returndata) {
      dateX = returndata.map((dat) => {
        return dat.Zeboune == "" ? (
          ""
        ) : (
          <>
            <TableRow
              key={dat.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                height: "70px",
              }}
            >
              <TableCell className="stletrintableforpageedar">
                {dat.id}
              </TableCell>

              <TableCell className="stletrintableforpageedar">
                {dat.namebss}
              </TableCell>

              <TableCell className="stletrintableforpageedar">
                {dat.TypeOrder == 0
                  ? "فلانتظار"
                  : "" || dat.TypeOrder == 3
                  ? "قيد المعالجة"
                  : "" || dat.TypeOrder == 4
                  ? "تم الغاء طلبية"
                  : "" || dat.TypeOrder == 1
                  ? "تم اتمام طلبية"
                  : "" || dat.TypeOrder == 2
                  ? "تم رفض طلبية"
                  : ""}
              </TableCell>

              <TableCell className="stletrintableforpageedar">
                {dat.totalprodectspay}
              </TableCell>

              <TableCell className="stletrintableforpageedar">
                {dat.typepayment == 1
                  ? "تم القبول"
                  : "" || dat.typepayment == 2
                  ? "تم رفض"
                  : "" || dat.typepayment == 0
                  ? "فلانتطار"
                  : ""}
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
                    TypeShow={"EdartOrdersUser"}
                    NowProfilShanfe={ProfileSnageNow}
                    HandleToDoActionsNow={HandAddTypeThisActions}
                  />
                </div>
              </TableCell>
            </TableRow>
          </>
        );
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For Prodect User ===//

  if (token) {
    if (
      AllsDataUserNow &&
      ProfileSnageNow &&
      ProfileSnageNow.TypProf == "user"
    ) {
      return (
        <div style={{ height: "100vh", width: "100%", paddingBottom: "40px" }}>
          <Container>
            <div className="stylallsectinpage">
              <TitelPage TitelPage="ادارة طلبيات المستخدم" />

              {!leadingtable && typRequest === "Show" ? (
                <div className="styleinptandbtntodoorshowdataaction">
                  <h3>بحث من خلال طلبياتي للتجار</h3>
                  <SearchSelectForDateToClickAndBtn
                    dataFeth={DataMyZebounses}
                    HandelSendDateAllsInThisForm={HandelSendDateAllsInThisForm}
                    TypeShowData="Sereash"
                    ActionBtn="لبحث"
                  />
                </div>
              ) : (
                ""
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
            pargrafe={" + اضافة طلبية "}
            disabled={leadingtable && leadingtable != "active"}
            linck={`My-Orders/add`}
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
