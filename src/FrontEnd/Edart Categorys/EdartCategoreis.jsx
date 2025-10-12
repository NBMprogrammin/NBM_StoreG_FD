import { Button, Container } from "@mui/joy";
import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import { useDialogActionContext } from "../Context/DialogActionContext";
import { FormInInputAndBtnToDoAction } from "../Commponent/inpute and from/FormInInputAndBtnToDoAction";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import { useSelector, useDispatch } from "react-redux";
import {
  edartcategoryIndeexShow,
  edartcategorySearchCategoryname,
} from "../../allsliceproj/edartcategoryuserBss/edartcategorySlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

let idAlerartToDoAction = 7989876567456;
let typRequest = "Show";
let typActionrespNoew = "";
let sangePageDat = 1;
let ModelShowDate = "show";

// Her Place Alls Colums To Start Do Semthing Action
let datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "الاسم تصنيف",
  },
  {
    id: 6,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let AllsTrAndTdForMyTable = [];
let dateX = "";
let MessageForUser = "";
let valuNameCategoryTosereachAndCreated = "";
let SheckBtnAfterAction = false;

export default function EdartCategoreis() {
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    OpenDialogForActionFound,
    TypeAlearVipNow,
    generaldatClick,
    Quadata,
  } = useDialogActionContext();

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.edartcategory.data;
  });

  const leadingtable = useSelector((state) => {
    return state.edartcategory.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.edartcategory.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.edartcategory.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.edartcategory.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.edartcategory.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartcategory.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartcategory.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartcategory.lodingtorspact;
  });
  // End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    dispatsh(edartcategoryIndeexShow(1));
  }, []);

  // He To Sow Reloding In Table
  React.useMemo(() => {
    AllsTrAndTdForMyTable = [
      {
        id: 1,
        titel: "",
      },
      {
        id: 5,
        titel: <CartLoader />,
        meesage: MessageForUser,
      },
      {
        id: 10,
        titel: "",
      },
    ];
  }, [MessageForUser]); //== He To Sow Reloding In Table ==//

  // Start Handle To Send Request Update Smething Category
  function HandleUpdateCategory(data) {
    typRequest = typActionrespNoew;
    if (typRequest === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
    }
    TypeAlearVipNow(
      data,
      "UpdateMyCategoryFromEdartCategory",
      `اسم تصنيف لجديد ${data.category}`,
      "text",
      "كلمة السر الاعدادات",
      "password",
      `تحديث تصنيف لحالي للمنتجات `,
      "تحديث",
      "",
      "",
      "",
      data.id
    );
  } //== End Handle To Send Request Update Smething Category ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); // End Her To Sheck loding Response

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "edartcategorybssToUpdateCategory") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد نم تحديث تصنيف جدبد  ${Quadata.category} بنجاح و تم اظهار تغيير`
        );
        sangePageDat = 1;
        typRequest = "Show";
        ModelShowDate = "";
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          `يبدو بان الاسم تصنيف  ${Quadata.category} سبق و تم انشائه و لا يتاح تكرار`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلمك كلمة السر الاعدادات يمكنك انشائها فلاعدادات الحساب"
        );
      }
    } else if (typRequest === "edartcategorybssToCreateNoewCategory") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        typRequest = "Show";
        sangePageDat = 1;
        OpenDialogForActionSuccess(
          `لقد نم انشاء تصنيف جدبد  ${generaldatClick} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `يبدو بان الاسم ${generaldatClick} سبق و ان انشات عليه تصنيف اختر اسما مختلفا جديد كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلمك كلمة السر الاعدادات يمكنك انشائها فلاعدادات الحساب"
        );
      }
    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

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
        MessageForUser = `لا يوجد اي بيانات بهذه الاسم ${valuNameCategoryTosereachAndCreated} تاكد من الاسم و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else if (returndata.length < 0) {
        MessageForUser = `لا يوجد اي بيانات بهذه الاسم ${valuNameCategoryTosereachAndCreated} تاكد من الاسم و حاول مر اخرى`;
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else {
      ModelShowDate = "";
    }
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  function HandleSowPrevMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartcategoryIndeexShow(sangePageDat));
      }
    } else if (typRequest === "Sereach") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        const data = {
          page: sangePageDat,
          name: valuNameCategoryTosereachAndCreated,
        };
        typRequest = "Sereach";
        dispatsh(edartcategorySearchCategoryname(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  function HandleSowNextMyCategory() {
    if (typRequest == "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartcategoryIndeexShow(sangePageDat));
      }
    } else if (typRequest == "Sereach") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Sereach";
        const data = {
          page: sangePageDat,
          name: valuNameCategoryTosereachAndCreated,
        };
        dispatsh(edartcategorySearchCategoryname(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start To Handle Sereach Name Category
  function HandleClickToSereashCategoryName(CategoryNameToSereach) {
    typActionrespNoew = "Sereach";
    typRequest = "Sereach";
    valuNameCategoryTosereachAndCreated = CategoryNameToSereach;
    sangePageDat = 1;
    const data = {
      page: sangePageDat,
      name: CategoryNameToSereach,
    };

    ModelShowDate = "";
    dispatsh(edartcategorySearchCategoryname(data));
  } //== End To Handle Sereach Name  ==//

  // Start To Show All Data Index In Page
  function HandleShowSAllCategoryUser() {
    typRequest = "Show";
    sangePageDat = 1;
    dispatsh(edartcategoryIndeexShow(sangePageDat));
  } //== End To Show All Data Index In Page ==//

  // Start To Sheck Send Request For Create Noew Category
  function HanldeCreateMoreCategory() {
    TypeAlearVipNow(
      idAlerartToDoAction + 4567,
      "CreateMyCategoryFromEdartCategory",
      `اسم تصنيف لجديد`,
      "text",
      "كلمة السر الاعدادات",
      "password",
      `انشاء تصنيف جديد للمنتجات `,
      "انشاء",
      "",
      "",
      "",
      idAlerartToDoAction + 1
    );
  } //== End To Sheck Send Request For Create Noew Category ==//

  // Start JSX To Show All Date For Page Now
  React.useMemo(() => {
    if (returndata) {
      dateX = returndata.map((category) => {
        return category.category == "" ? (
          ""
        ) : (
          <TableRow
            key={category.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell className="stletrintableforpageedar">
              {category.id}
            </TableCell>
            <TableCell className="stletrintableforpageedar">
              {category.category}
            </TableCell>
            <TableCell className="stletrintableforpageedar">
              <Button style={{ fontSize: "22px", background: "#4a6cf7" }}>
                <EditIcon onClick={() => HandleUpdateCategory(category)} />
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    }
  }, [returndata]); // End JSX To Show All Date For Page Now ==//

  if (token) {
    if (ProfileSnageNow) {
      if (ProfileSnageNow.TypProf == "bss") {
        return (
          <div className="stlefirstdivcontrolinpage">
            <Header typeactive={"category"} />
            <Container>
              <div className="stylallsectinpage">
                <TitelPage TitelPage="ادارت تصنيف المنتجات" />

                {leadingtable ? (
                  ""
                ) : totalalldate >= 15 ? (
                  <FormInInputAndBtnToDoAction
                    typeMyInput={"text"}
                    HandelSendDateAllsInThisForm={
                      HandleClickToSereashCategoryName
                    }
                    TypeBtnToContent={SheckBtnAfterAction}
                    placeholder="لبحث عن تصنيف من خلال اسمه"
                    ActionBtn="لبحث"
                  />
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
                    HandleShowSAllProdectsUser={HandleShowSAllCategoryUser}
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
              pargrafe={" + انشاء تصنيف"}
              disabled={leadingtable && leadingtable != "active"}
              OnLciToDoActrion={HanldeCreateMoreCategory}
              TpeAction={"Create"}
            />
          </div>
        );
      }
    }
  } else {
    HandleCloseOrOpenReadinPage(true);
    Cookies.remove("user_token");
    window.location.href = "home";
  }
}
