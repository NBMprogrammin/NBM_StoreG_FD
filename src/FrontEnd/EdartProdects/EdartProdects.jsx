import { Container } from "@mui/joy";

import * as React from "react";
// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import { SearchSelectForDateToClickAndBtn } from "../Commponent/SearchSelectForDateToClickAndBtn";
import { TableCell, TableRow } from "@mui/material";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import { useSelector, useDispatch } from "react-redux";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import {
  edartprodectSearchprodectForCategory,
  edartprodectSearchprodectname,
  edartProdectShowAllsDataProd,
  edartprodectsIndeexShow,
} from "../../allsliceproj/edartProdectsBss/EdartProdectSlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");
let titelInp = "ProdectsT";

// Her Place Alls Colums To Start Do Semthing Action
let datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "صورة",
  },
  {
    id: 3,
    titel: "الاسم المنتج",
  },
  {
    id: 4,
    titel: "السعر المنتج",
  },
  {
    id: 6,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let sangePageDat = 1;
let typRequest = 1;
let dateX = "";
let ModelShowDate = "show";
let MessageForUser = "";

let valuNameCategoryTosereachAndCreated = "";
let typActionrespNoew = "";

let datClickUser = [];

let DatMyProds = "";
let currentPay = "";
let DatCategory = [];
let AllsTrAndTdForMyTable = [];

export default function EdartProdects() {
  const dispatsh = useDispatch();

  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    StartShowMoreDatImClick,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    dispatsh(edartprodectsIndeexShow(1));
  }, []);

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.edartprodectsbss.dataProd;
  });

  const leadingtable = useSelector((state) => {
    return state.edartprodectsbss.isLindingProd;
  });

  const totalalldate = useSelector((state) => {
    return state.edartprodectsbss.totaldatProd;
  });

  const currentpagenow = useSelector((state) => {
    return state.edartprodectsbss.pagenowProd;
  });

  const currentpagetogo = useSelector((state) => {
    return state.edartprodectsbss.pagetogoProd;
  });

  const last_page = useSelector((state) => {
    return state.edartprodectsbss.last_pageProd;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartprodectsbss.resultrquestactionProd;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartprodectsbss.typRequestNowProd;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartprodectsbss.lodingtorspactProd;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartprodectsbss.dataShowProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "ActivePayProdect") {
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionSuccess(
          `لقد تم تفعيل لخيار بيع المنتج ${datClickUser.name} بنجاح و تم اظهار تغيير `
        );
        typRequest = "Show";
        ModelShowDate = "";
        sangePageDat = 1;
      } else if (resultrquestaction === 4) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          `رجاء ادخال كمية من المنتج ${datClickUser.name} من اجل اتاحت بيعه فهو حاليا لا يحتوي على اي كمية `
        );
      } else if (resultrquestaction === 3) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(`يبدو بانك فعلت لخيار لبيع للمنتج من قبل`);
      } else if (resultrquestaction === 7) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلمك كلمة السر الاعدادات يمكنك انشائها فلاعدادات الحساب"
        );
        // }
      } else {
        typRequest = "";
      }
    } else if (typRequest === "DscActivePayProdect") {
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ايقاف لخيار بيع المنتج ${datClickUser.name} بنجاح و اظهار تحديث `
        );
        sangePageDat = 1;
        typRequest = "Show";
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بانك سبق و ان اوقفت لخيار لبيع للمنتج ${datClickUser.name} من قبل`
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تملك كلمة السر الاغدادات يمكنك انشائعا فلمركز الاعدادات"
        );
      }
    } else if (typRequest === "UpdateStorageProdect") {
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تحديث كمية المخزون من المنتج ${datClickUser.name} بنجاح و تم اظهار تحديث `
        );
        sangePageDat = 1;
        typRequest = "Show";
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تملك كلمة السر الاغدادات يمكنك انشائعا فلمركز الاعدادات"
        );
      }
    } else if (typRequest === "ShowAllsDataProdectForId") {
      typRequest = typActionrespNoew;
      StartShowMoreDatImClick(
        ShowAllsProdData.datone,
        "category",
        ShowAllsProdData.datthere,
        ShowAllsProdData.datou,
        `تفاصيل المنتج المختار  ${ShowAllsProdData.name}`,
        "صورة المنتج",
        ShowAllsProdData.img,
        `تصنيفات المنتمي لها المنتج ${ShowAllsProdData.name}`,
        `المزيد من المعلومات لمنتج ${ShowAllsProdData.name}`,
        ShowAllsProdData.created_at,
        ShowAllsProdData.id
      );
    }
    HandleCloseOrOpenReadinPage(false);
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

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
        id: 5,
        titel: <CartLoader />,
        meesage: MessageForUser,
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

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DatMyProds = AllsDataUserNow.MayProd;
      DatCategory = AllsDataUserNow.MayCategory;
      currentPay =
        AllsDataUserNow || AllsDataUserNow.MyCurrentPaymentPay.currentCantry;
    }
  }, [AllsDataUserNow]); //== End Get Value Varyale Generale To Semthing Action ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start Handle Click Sereach To Prodect Id
  const HandleToSereachNameProdect = async (val) => {
    if (val != null) {
      typActionrespNoew = "Sereach";
      typRequest = "Sereach";
      ModelShowDate = "GoToAllMyCategory";
      valuNameCategoryTosereachAndCreated = val;
      sangePageDat = 1;
      dispatsh(edartprodectSearchprodectname(val.id));
    }
  }; // === End Handle Click Sereach To Prodect Id === //

  // Start Handle Click Sereach To Prodect Id
  const HandleSereachForProdectContectCategory = async (val) => {
    if (val != null) {
      typActionrespNoew = "Sereachprodcateg";
      typRequest = "Sereachprodcateg";
      ModelShowDate = "GoToAllMyCategory";
      valuNameCategoryTosereachAndCreated = val;
      sangePageDat = 1;
      const data = {
        id: val.id,
        page: sangePageDat,
      };
      dispatsh(edartprodectSearchprodectForCategory(data));
    }
  }; // === End Handle Click Sereach To Prodect Id === //

  // Start Sheck Loaading Now For Eny Request User
  React.useEffect(() => {
    if (typRequest === "Show") {
      if (leadingtable === true) {
        MessageForUser = "لا يوجد اي بيانات الان يمكنك بدا لغمل";
        MessageForUser = "ينم الان البحث عن البيانات";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else {
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else if (typRequest === "Sereach" || typRequest === "Sereachprodcateg") {
      ModelShowDate = "GoToAllMyCategory";
      if (leadingtable === true) {
        MessageForUser = `لا يوجد اي منتجات مرتبطة بتصنيف ${valuNameCategoryTosereachAndCreated.nameOne} تاكد من تصنيف تريده و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else if (leadingtable === "active") {
        MessageForUser = `لا يوجد اي منتجات مرتبطة بتصنيف ${valuNameCategoryTosereachAndCreated.nameOne} تاكد من تصنيف تريده و حاول مر اخرى`;
      } else if (returndata.length < 0) {
        MessageForUser = `لا يوجد اي بيانات بهذه الاسم ${valuNameCategoryTosereachAndCreated.nameOne} تاكد من الاسم و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else {
        MessageForUser = "ينم الان البحث عن البيانات";
        ModelShowDate = "GoToAllMyCategory";
      }
    }
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  function HandleSowPrevMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartprodectsIndeexShow(sangePageDat));
      }
    } else if (typRequest === "Sereachprodcateg") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Sereachprodcateg";
        const data = {
          id: valuNameCategoryTosereachAndCreated.id,
          page: sangePageDat,
        };
        dispatsh(edartprodectSearchprodectForCategory(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  function HandleSowNextMyCategory() {
    if (typRequest == "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartprodectsIndeexShow(sangePageDat));
      }
    } else if (typRequest == "Sereachprodcateg") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Sereachprodcateg";
        const data = {
          id: valuNameCategoryTosereachAndCreated.id,
          page: sangePageDat,
        };
        dispatsh(edartprodectSearchprodectForCategory(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start To Show All Data Index In Page
  function HandleShowSAllProdectsUser() {
    typRequest = "Show";
    ModelShowDate = "";
    MessageForUser = "ينم الان البحث عن البيانات";
    sangePageDat = 1;
    dispatsh(edartprodectsIndeexShow(sangePageDat));
  } //== End To Show All Data Index In Page ==//

  // Start Open Aleart For Semthing Action
  function HandleToDoActionsNow(data, type, keyG) {
    datClickUser = data;
    if (typRequest === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
    }
    if (type === "UpdateProdectFromEdartProdects") {
      window.location.href = `/My-Prodect-update/${data.id}`;
      HandleCloseOrOpenReadinPage(true);
    } else if (type === "ActivePayProdFromEdartProdects") {
      TypeAlearVipNow(
        data,
        "ActivePayProdFromEdartProdects",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد سماح البيع لهذ المنتج ${data.name}`,
        "تاكيد",
        "",
        "bss",
        "من اجل اتمام اجراء تفعيل خيار البيع المنتج رجاء ادخال كلمة السر الاعدادات",
        data.id + 234567
      );
    } else if (type === "DscActivePayProdFromEdartProdects") {
      TypeAlearVipNow(
        data,
        type,
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد ايقاف البيع لهذ المنتج ${data.name}`,
        "تاكيد",
        "",
        "bss",
        "من اجل اتمام اجراء ايقاف خيار البيع المنتج رجاء ادخال كلمة السر الاعدادات",
        data.id + 23497867564
      );
    } else if (type === "UpdateStorageThisProdectFromEdartProdect") {
      TypeAlearVipNow(
        data,
        type,
        `اخال المخزون الجديد يدويا (${
          data.totaleinstorage === 0 ? "خاوي" : data.totaleinstorage
        })`,
        "number",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تحديث كمية المخزون لهذ المنتج ${data.name}`,
        "تحديث",
        "",
        "importtouinputepayment",
        "",
        data.id + 9876543234567
      );
    } else if (type === "ShowMoreDataThisProdectFromEdartProdect") {
      dispatsh(edartProdectShowAllsDataProd(data.id));
    }
  } //== End Open Aleart For Semthing Action ==//

  // Start JSX To Show All Date For Prodect User
  React.useMemo(() => {
    if (returndata) {
      dateX = returndata.map((dat) => {
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
              <AvatarImgForAllType MyAvatar={dat.img} />
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.name}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.price + dat.currentPay}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={dat}
                  TypeShow={"EdartProdects"}
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
    if (AllsDataUserNow && ProfileSnageNow.TypProf === "bss") {
      return (
        <div className="stlefirstdivcontrolinpage">
          <Header typeactive={"EdartProdects"} />
          <Container>
            <div className="stylallsectinpage">
              <TitelPage TitelPage="ادارة المنتجات" />

              <div className="stlemoreinputeandbtnwetherinpageedar">
                {leadingtable ? (
                  ""
                ) : totalalldate >= 9 ? (
                  <div className="styleinptandbtntodoorshowdataaction">
                    <h3>بحث من خلال تصنيف المنتجات</h3>
                    <SearchSelectForDateToClickAndBtn
                      dataFeth={DatCategory}
                      profileNow={ProfileSnageNow.TypProf}
                      HandelSendDateAllsInThisForm={
                        HandleSereachForProdectContectCategory
                      }
                      ActionBtn="لبحث"
                      TypeShowData="Sereash"
                      TypeShowDataT={titelInp}
                      TypUserShowData="bss"
                    />
                  </div>
                ) : (
                  ""
                )}

                {leadingtable ? (
                  ""
                ) : totalalldate >= 9 ? (
                  <div className="styleinptandbtntodoorshowdataaction">
                    <h3>بحث من خلال الاسم المنتجات</h3>
                    <SearchSelectForDateToClickAndBtn
                      dataFeth={DatMyProds}
                      currentPayment={currentPay}
                      profileNow={ProfileSnageNow.TypProf}
                      HandelSendDateAllsInThisForm={HandleToSereachNameProdect}
                      TypeShowData="Sereash"
                      TypeShowDataT={titelInp}
                      ActionBtn="لبحث"
                      TypUserShowData="bss"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

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
            pargrafe={" + اضافة المنتج "}
            disabled={leadingtable && leadingtable != "active"}
            linck={`Pordect/add`}
          />
        </div>
      );
    } else {
      HandleCloseOrOpenReadinPage(true);
      Cookies.remove("user_token");
      window.location.href = "home";
    }
  } else {
    HandleCloseOrOpenReadinPage(true);
    Cookies.remove("user_token");
    window.location.href = "home";
  }
}
