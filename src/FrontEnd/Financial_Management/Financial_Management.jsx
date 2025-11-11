import { Container } from "@mui/joy";
import * as React from "react";
import "../../App.css";

// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import { useSelector, useDispatch } from "react-redux";
import { edartManyBssIndexShowData } from "../../allsliceproj/Financial_Management_Bss/Financial_Management_Bss_Slice";
import Header from "../layoute/Header";
import { formatDate } from "../../utils/dateUtils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
let idAlerartToDoAction = 9376541;

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
  {
    id: 1,
    titel: "تاريخ تخزين",
  },
  {
    id: 2,
    titel: "المسؤول",
  },
  {
    id: 3,
    titel: "الاجمالي المدخرات",
  },
  {
    id: 4,
    titel: "الاجمالي نفقات",
  },
  {
    id: 5,
    titel: "الاجمالي ارباح",
  },
  {
    id: 6,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let AllsTrAndTdForMyTable = [];

let MessageForUser = "";

let typRequest = "Show";
let sangePageDat = 1;
export default function Financial_Management() {
  const navigate = useNavigate();
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    OpenDialogForActionFound,
    StartShowMoreDatImClick
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
    return state.Financial_Management_Bss.data;
  });

  const totaleMonthe = useSelector((state) => {
    return state.Financial_Management_Bss.totaleformonthe;
  });

  const leadingtable = useSelector((state) => {
    return state.Financial_Management_Bss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Financial_Management_Bss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Financial_Management_Bss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Financial_Management_Bss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Financial_Management_Bss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Financial_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Financial_Management_Bss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Financial_Management_Bss.lodingtorspact;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck Type Login And Profile Noew To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if (ProfileSnageNow.TypProf === "user" || ProfileSnageNow.TypProf === "teweve" && ProfileSnageNow.edartmaney != 1 ) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Financial-Management", ProfileSnageNow]); //== End Sheck Type Login And Profile Noew To Do Action ==//
  
    React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    if (ProfileSnageNow.TypProf === "bss" || ProfileSnageNow.TypProf === "teweve" && ProfileSnageNow.edartmaney == 1 ) {
      dispatsh(edartManyBssIndexShowData(sangePageDat));
    }
  }, [ProfileSnageNow]);
  
  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      case "Show":
        HandleCloseOrOpenReadinPage(false);
        if (resultrquestaction === 99) {
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;
          OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
        }
      return;
      case "edartmaneybsstoUpdatesemthingforedartmany":
        typRequest = "Show";
        HandleCloseOrOpenReadinPage(false);
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              "لقد تم تحديث نتيجت المعاملاتك المالية التي اخترتها بنجاح كما تم تحديث لبيانات"
            );
            sangePageDat = 1;
          return;
          case 3:
            OpenDialogForActionFound(
              "حدث خطا غير معروف اثناء تحديث طلبك كما تم تحديث لبيانات حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              "غير مسموح للموضفين تعديل على شؤون الادارة المالية لكن لو ارتكبت خطا يمكنك مشاركته مع التاجر و سيحله كما تم تحديث لبيانات"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      case 'edartmaneybsstoaddsemthingedartmaney':
        typRequest = "Show";
        HandleCloseOrOpenReadinPage(false);
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              "لقد تم تحزين نتيجت المعاملاتك المالية لهذ اليوم بنجاح كما تم تحديث لبليانات"
            );
            sangePageDat = 1;
          return;
          case 3:
            OpenDialogForActionFound(
              "حدث خطا غير معروف اثناء انشاء طلبك كما تم تحديث لبليانات رجاء حاول مرة اخرى"
            );
          return;
          case 6:
            OpenDialogForActionFound(
              "لقد وصلت لحد الاقصى المسموح به للانشاء و تخزين المعاملات المالية للفرد الواحد و لمقدر بي 33 عملية اي 33 مرة في شهر واحد و مرة فليوم"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              "يبدو بان تاجر لم يتيح لك صلاحية ادارة المالية بعد للمزيد تواصل معه"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
        return;
    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start Sheck Loaading Now For Eny Request User
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
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  const HandleSowPrevMyCategory = async () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat > 1) {
          sangePageDat = sangePageDat - 1;
          typRequest = "Show";
          dispatsh(edartManyBssIndexShowData(sangePageDat));
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
          dispatsh(edartManyBssIndexShowData(sangePageDat));
        }
      return;
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start To Show Aleart For Confirmed Create Now Edart Maney
  const StartAcionToAddMayent = (Type, value) => {
    TypeAlearVipNow(
      {
        id: idAlerartToDoAction,
      },
      "CreateOneEdartManForDayInEdarManyMenh",
      "اجمالي لمدخرات ليوم",
      "number",
      "اجمالي نفقات اليوم",
      "number",
      `تخزين المعاملات المالية اليومية`,
      "تخزين",
      "",
      "edartmaneybss",
      "",
      idAlerartToDoAction,
      "تفاصيل لحدث ليومي",
      "text"
    );
  } //== End To Show Aleart For Confirmed Create Now Edart Maney ==//

  // Start To Show Aleart For Confirmed Update Semthing Edart Maney For Id
  const ShowToUpdateMayent = (val, typ, keyG) => {
    if(typ === 'ShowMoreDataEdartManeybss') {
      StartShowMoreDatImClick(
          '',
          "",
          '',
          '',
          '',
          '',
          '',
          '',
          val.descripctionforday ? val.descripctionforday : "لم يتم تخزين بيانات",
          formatDate(val.created_at, { type: 'short' }),
          val.id,
          'FromEdartmaneybss'
        );
    } else {
      TypeAlearVipNow(
        val,
        "UpdateOneEdartManForDayInEdarManyMenh",
        `اجمالي لمدخرات ليوم ${val.totalEdichal}`,
        "number",
        `اجمالي نفقات ليوم ${val.totalEstehlakat}`,
        "number",
        `تعديل المعاملات المالية اليومية ${formatDate(val.created_at, { type: 'short' })}`,
        "تعديل",
        "",
        "edartmaneybss",
        "",
        keyG,
        "تفاصيل لحدث ليومي",
        "text"
      );
    }
  } //== End To Show Aleart For Confirmed Update Semthing Edart Maney For Id ==//

  // Start JSX To Show All Date For Edart Maney
  const ShowdataPage = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
        return (
          <TableRow
            key={dat.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell className="stletrintableforpageedar">{
            formatDate(dat.created_at, { type: 'short' })
            }</TableCell>
            <TableCell
              key={dat.id + 10}
              component="th"
              scope="row"
              style={{ textAlign: "center", fontSize: "22px" }}
            >
            <span
              className='status-badge'
              style={{ backgroundColor: `${dat.NumberMeshol == 1 ? '#d1fae5' : '#dbeafe'
              }`, color: `${dat.NumberMeshol == 1 ? '#1e40af' : '#065f46'
              }` }}
            >
              {dat.NumberMeshol == 1 ? "المالط" : dat.NumberMeshol}
            </span>
            </TableCell>
            <TableCell className="stletrintableforpageedar">
              {dat.totalEdichal + dat.currentPay}
            </TableCell>
            <TableCell className="stletrintableforpageedar">
              {dat.totalEstehlakat + dat.currentPay}
            </TableCell>
            <TableCell className="stletrintableforpageedar">
              {dat.TotalErbahe + dat.currentPay}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  key={dat.id + 16}
                  dataZebouneClick={dat}
                  TypeShow={"edartManyBss"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={ShowToUpdateMayent}
                />
              </div>
            </TableCell>
          </TableRow>
        );
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For Edart Maney ===//

  if (
    (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") ||
    ProfileSnageNow.TypProf == "teweve"  && ProfileSnageNow.edartmaney == 1 
  ) {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"Edartmaney"} />
        <Container>
          <div className="stylallsectinpage">
            <TitelPage TitelPage="ادارة المالية" />

            <div className="headerTable">
              <CardShowDateTableNextPrevMor
                TitelFirst="مرات طلبيات "
                TypShow=""
                loadingTabelBody={leadingtable}
                totelPageCategory={totaleMonthe}
              />

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
              dateX={ShowdataPage}
            />
          </div>
        </Container>

        <BtnToGoToDoActionForNextPage
          pargrafe={" اضافة"}
          disabled={
            (leadingtable && leadingtable != "active") || totaleMonthe == 33
          }
          OnLciToDoActrion={StartAcionToAddMayent}
          TpeAction={"Create"}
        />
      </div>
    );
  }
}
