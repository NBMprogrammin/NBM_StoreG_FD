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
} from "../../allsliceproj/Categories_Management_Bss/Categories_Management_Bss_Slice";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

let idAlerartToDoAction = 7989876567456;
let typRequest = "Show";
let typActionrespNoew = "";
let sangePageDat = 1;
let ModelShowDate = "show";

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
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

let MessageForUser = "";
let valuNameCategoryTosereachAndCreated = "";
let SheckBtnAfterAction = false;

export default function Categories_Management() {
  const navigate = useNavigate();
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
    return state.Categories_Management.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Categories_Management.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Categories_Management.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Categories_Management.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Categories_Management.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Categories_Management.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Categories_Management.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Categories_Management.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Categories_Management.lodingtorspact;
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
      if (ProfileSnageNow.TypProf !== "bss" ) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Categories-Management", ProfileSnageNow]); //== End Sheck Type Login And Profile Noew To Do Action ==//
  
  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    if(ProfileSnageNow.TypProf === "bss") {
      dispatsh(edartcategoryIndeexShow(1));
    }
  }, []);

  // He To Sow Reloding In Table
  const AllsTrAndTdForMyTable = React.useMemo(() => {
    return [
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
  const HandleUpdateCategory = (data) => {
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
      case "edartcategorybssToUpdateCategory":
        HandleCloseOrOpenReadinPage(false);
        typRequest = typActionrespNoew;
        switch (resultrquestaction) {
          case 1:
          OpenDialogForActionSuccess(
            `لقد نم تحديث تصنيف جدبد  ${Quadata.category} بنجاح و تم اظهار تغيير`
          );
          sangePageDat = 1;
          typRequest = "Show";
          ModelShowDate = "";  
          return;
          case 3:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
            return;
          case 5:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلمك كلمة السر الاعدادات يمكنك انشائها فلاعدادات الحساب"
            );
          return;
          case 7:
            OpenDialogForActionFound(
              `يبدو بان الاسم تصنيف  ${Quadata.category} سبق و تم انشائه و لا يتاح تكرار`
            );
          return;
          case 99:
            OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
            );
            sangePageDat = 1;
            typRequest = "Show";
            ModelShowDate = "";
            return;
        }
        return;
        case 'edartcategorybssToCreateNoewCategory':
          switch (resultrquestaction) {
            case 1:
              typRequest = "Show";
              sangePageDat = 1;
              OpenDialogForActionSuccess(
                `لقد نم انشاء تصنيف جدبد  ${generaldatClick} كما تم تحديث لبيانات`
              );
            return;
            case 2:
              OpenDialogForActionFound(
                "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
              );
            return;
            case 3:
              OpenDialogForActionFound(
                "يبدو بانك لا تمتلمك كلمة السر الاعدادات يمكنك انشائها فلاعدادات الحساب"
              );
            return;
            case 4:
              OpenDialogForActionFound(
                `يبدو بان الاسم ${generaldatClick} سبق و ان انشات عليه تصنيف اختر اسما مختلفا جديد كما تم تحديث لبيانات`
              );
            return;
            case 99:
              OpenDialogForActionFound(
                  "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
              );
              sangePageDat = 1;
              typRequest = "Show";
              ModelShowDate = "";
            return;
          }
    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

  // Start Sheck Loaading Now For Eny Request User
  React.useEffect(() => {
    switch (typRequest) {
      case "Show":
      ModelShowDate = "Show";
      switch (leadingtable) {
        case true:
        ModelShowDate = "";
        MessageForUser = "لا يوجد اي بيانات الان يمكنك بدا لغمل";  
        return;
        case "active":
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
        return;
        default:
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
        return;
      }
      case "Sereach":
        switch (leadingtable) {
          case true:
            MessageForUser = `لا يوجد اي بيانات بهذه الاسم ${valuNameCategoryTosereachAndCreated} تاكد من الاسم و حاول مر اخرى`;
            ModelShowDate = "GoToAllMyCategory";  
          return;
          case "active":
            MessageForUser = "ينم الان البحث عن البيانات";
          return;
          case returndata.length < 0:
            MessageForUser = `لا يوجد اي بيانات بهذه الاسم ${valuNameCategoryTosereachAndCreated} تاكد من الاسم و حاول مر اخرى`;
          default:
          ModelShowDate = "";
          MessageForUser = "ينم الان البحث عن البيانات";
          return;
      }
    }
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  const HandleSowPrevMyCategory = () => {
    switch (typRequest) {
        case "Show":
          if (sangePageDat > 1) {
            sangePageDat = sangePageDat - 1;
            typRequest = "Show";
            dispatsh(edartcategoryIndeexShow(sangePageDat));
          }
          return;
        case "Sereach":
          if (sangePageDat > 1) {
            sangePageDat = sangePageDat - 1;
            const data = {
              page: sangePageDat,
              name: valuNameCategoryTosereachAndCreated,
            };
            typRequest = "Sereach";
            dispatsh(edartcategorySearchCategoryname(data));
          }
          return;
    }
    // if (typRequest === "Show") {
    //   if (sangePageDat > 1) {
    //     sangePageDat = sangePageDat - 1;
    //     typRequest = "Show";
    //     dispatsh(edartcategoryIndeexShow(sangePageDat));
    //   }
    // } else if (typRequest === "Sereach") {
    //   if (sangePageDat > 1) {
    //     sangePageDat = sangePageDat - 1;
    //     const data = {
    //       page: sangePageDat,
    //       name: valuNameCategoryTosereachAndCreated,
    //     };
    //     typRequest = "Sereach";
    //     dispatsh(edartcategorySearchCategoryname(data));
    //   }
    // }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  const HandleSowNextMyCategory = () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat < last_page) {
          sangePageDat = sangePageDat + 1;
          typRequest = "Show";
          dispatsh(edartcategoryIndeexShow(sangePageDat));
        }
        return;
      case "Sereach":
        if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Sereach";
        const data = {
          page: sangePageDat,
          name: valuNameCategoryTosereachAndCreated,
        };
        dispatsh(edartcategorySearchCategoryname(data));
      }
        return;
    }
    // if (typRequest == "Show") {
    //   if (sangePageDat < last_page) {
    //     sangePageDat = sangePageDat + 1;
    //     typRequest = "Show";
    //     dispatsh(edartcategoryIndeexShow(sangePageDat));
    //   }
    // } else if (typRequest == "Sereach") {
    //   if (sangePageDat < last_page) {
    //     sangePageDat = sangePageDat + 1;
    //     typRequest = "Sereach";
    //     const data = {
    //       page: sangePageDat,
    //       name: valuNameCategoryTosereachAndCreated,
    //     };
    //     dispatsh(edartcategorySearchCategoryname(data));
    //   }
    // }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start To Handle Sereach Name Category
  const HandleClickToSereashCategoryName = (CategoryNameToSereach) => {
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
  const HandleShowSAllCategoryUser = () => {
    typRequest = "Show";
    sangePageDat = 1;
    dispatsh(edartcategoryIndeexShow(sangePageDat));
  } //== End To Show All Data Index In Page ==//

  // Start To Sheck Send Request For Create Noew Category
  const HanldeCreateMoreCategory = () => {
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
  const dateJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((category) => {
        return (
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
                <EditIcon style={{ fill: '#fff' }} onClick={() => HandleUpdateCategory(category)} />
              </Button>
            </TableCell>
          </TableRow>
        )
      });
    }
  }, [returndata]); // End JSX To Show All Date For Page Now ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") {
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
              dateX={dateJSX}
            />
          </div>
        </Container>

        <BtnToGoToDoActionForNextPage
          pargrafe={" انشاء تصنيف"}
          disabled={leadingtable && leadingtable != "active"}
          OnLciToDoActrion={HanldeCreateMoreCategory}
          TpeAction={"Create"}
        />
      </div>
    );
  }
}
