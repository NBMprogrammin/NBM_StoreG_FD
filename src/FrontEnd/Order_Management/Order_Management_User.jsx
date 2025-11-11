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
} from "../../allsliceproj/Order_Management_User/Order_Management_User_Slice";

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
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

let typRequest = "Show";
let sangePageDat = 1;
let datUserClickAct = [];

let ModelShowDate = "show";
let MessageForUser = "";

let valuNameCategoryTosereachAndCreated = "";
let DataMyZebounses = [];
let typActionrespNoew = "";

const Order_Management_User =() => {
  const {
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    StartShowMoreDatImClick,
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

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.Order_Management_User.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Order_Management_User.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Order_Management_User.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Order_Management_User.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Order_Management_User.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Order_Management_User.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Order_Management_User.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Order_Management_User.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Order_Management_User.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Order_Management_User.dataShowPayProd;
  });
  // End Get Alls Data To Do Semthong In The Page Form Slice Controller

  
  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    dispatsh(edartOrdersUserIndeexShow(sangePageDat));
  }, []);
  
  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DataMyZebounses = AllsDataUserNow.DatBssICalyan;
    }
  }, [AllsDataUserNow]); // Start Get Value Varyale Generale To Semthing Action

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      case 'Show':
      if (resultrquestaction === 99) {
        typRequest = "Show";
        ModelShowDate = "";
        sangePageDat = 1;
        OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
      return;
      case "edartordersuserstomyorder":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تعطيل طلبية لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} بنجاح كما تم اظهار تحديث لبيانات`
            );
            typRequest = "Show";
            ModelShowDate = "";
            sangePageDat = 1;
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
            );
          return;
          case 4:
            OpenDialogForActionFound(
              `لقد قام تاجر بتعديل على لطلبيتك ${datUserClickAct.namebss} كما تم تحديث لبيانات بلجديدة `
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " يبدو بانك سبق و قمت بلاغاء طلبية بلفعل و لا يتاح لخيار تعديل لقرارات كما تم تحديث لبيانات"
            );
            return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }  
      return;
      case "edartordersuserdeletemyorder":
      switch (resultrquestaction) {
        case 1:
          OpenDialogForActionSuccess(
            `لقد تم الحذف طلبية بنجاح لتي تم ارسالها للتاجر  ${datUserClickAct.namebss} كما تم تحديث لبيانات`
          );
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;
        return;
        case 3:
          OpenDialogForActionFound(
            "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
          );
        return;
        case 4:
          OpenDialogForActionFound(
            "يبدو بان طلبية لم تعد موجود ربما حذفتها سابقا كما تم تحديث لبيانات يمكنك اعادت لمحاول"
          );
        return;
        case 6:
          OpenDialogForActionFound(
            " يبدو بانك سبق و قمت بلاغاء طلبية بلفعل و لا يتاح لخيار تعديل لقرارات كما تم تحديث لبيانات"
          );
        return;
        case 99:
        OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
        return;
      }
      return;
      case "ShowAllsMyOrderDataFromEdartOrdersUser":
        HandleCloseOrOpenReadinPage(false);
        typRequest = typActionrespNoew;
        switch (resultrquestaction) {
          case 2:
            OpenDialogForActionFound(
              "حدث خطا غير معروف اثناء جذب لبيانات او انك حذفت طلبية لذا تم تحديث لبيانات رجاء حاول مرة اخرى"
            );
          return;
          case 99:
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
      return;
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
  const HandleSowPrevMyCategory = async () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat > 1) {
          sangePageDat = sangePageDat - 1;
          typRequest = "Show";
          dispatsh(edartOrdersUserIndeexShow(sangePageDat));
        }
      return;
      case "Sereach":
        if (sangePageDat > 1) {
          typRequest = "Sereach";
          sangePageDat = sangePageDat - 1;
          const data = {
            page: sangePageDat,
            name: valuNameCategoryTosereachAndCreated.id,
          };
          dispatsh(edartOrdersUserSearchdatzebounedata(data));
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
          dispatsh(edartOrdersUserIndeexShow(sangePageDat));
        }
      return;
      case "Sereach":
        if (sangePageDat < last_page) {
          sangePageDat = sangePageDat + 1;
          typRequest = "Sereach";
    
          const data = {
            page: sangePageDat,
            name: valuNameCategoryTosereachAndCreated.id,
          };
          dispatsh(edartOrdersUserSearchdatzebounedata(data));
        }
      return;
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start To Sereach Alls My Orders For Semthing Bss
  const HandleShowSAllProdectsUser = async () => {
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
  const HandAddTypeThisActions = (AllDataNow, TypeActionnow) => {
    datUserClickAct = AllDataNow;
    if (typRequest === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
    }

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
      );
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
      return dispatsh(edartOrdersuserShowAllsDataMyOrder(AllDataNow.id));
    }
  } //=== End Open Aleart For Semthing Ac tion ===//

  // Start JSX To Show All Date For Prodect User
  const dateJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
        return (<TableRow
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
          <span
              className='status-badge'
              style={{ backgroundColor: `${dat.TypeOrder == 0 ? '#fef3c7' : '' || 
                dat.TypeOrder == 2 || dat.TypeOrder == 4 ? '#fee2e2' : '' ||
                dat.TypeOrder == 3 ? '#dbeafe' : '' ||
                dat.TypeOrder == 1 ? '#d1fae5' : ''
              }`, color: `${dat.TypeOrder == 0 ? '#92400e' : '' || 
                dat.TypeOrder == 2 || dat.TypeOrder == 4 ? '#b91c1c' : '' ||
                dat.TypeOrder == 3 ? '#1e40af' : '' ||
                dat.TypeOrder == 1 ? '#065f46' : ''
              }` }}
            >
                {TitelTypOrder(dat.TypeOrder)}
            </span>
          </TableCell>

          <TableCell className="stletrintableforpageedar">
            {dat.totalprodectspay}
          </TableCell>

          <TableCell className="stletrintableforpageedar">
          <span
            className='status-badge'
            style={{ backgroundColor: `${dat.typepayment == 0 ? '#fef3c7' : '' || 
                dat.typepayment == 2 ||
                dat.typepayment == 1 ? '#d1fae5' : ''
              }`, color: `${dat.typepayment == 0 ? '#92400e' : '' || 
                dat.typepayment == 2 ||
                dat.typepayment == 1 ? '#065f46' : ''
              }` }}
          >
            {TypPaymentOrder(dat.typepayment)}
          </span>
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
        </TableRow>)
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For Prodect User ===//

  return (
    <div style={{ width: "100%", paddingBottom: "40px" }}>
      <Container>
        <div className="stylallsectinpage">
          <TitelPage TitelPage="ادارة طلبيات المستخدم" />

          {!leadingtable && typRequest === "Show" ? (
            <div className="styleinptandbtntodoorshowdataaction">
              <h3>بحث من خلال طلبياتي للتجار</h3>
              <SearchSelectForDateToClickAndBtn
                dataFeth={DataMyZebounses}
                HandelSendDateAllsInThisForm={HandelSendDateAllsInThisForm}
                TypeAction="BssUserClick"
                TypeShowData="Sereash"
                ActionBtn="لبحث"
                style={{
                width: '65px',
                height: '65px', 
                direction: 'rtl'
                }}
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
            dateX={dateJSX}
          />
        </div>
      </Container>

      <BtnToGoToDoActionForNextPage
        pargrafe={" اضافة طلبية "}
        disabled={leadingtable && leadingtable != "active"}
        linck={`Order-Management/add`}
      />
    </div>
  );
}


const TitelTypOrder = (title) => {
  switch (title) {
    case 0:
    return 'فلانتظار';
    case 1:
    return 'تم اتمام طلبية';
    case 2:
    return 'تم رفض طلبية';
    case 3:
    return 'قيد المعالجة';
    case 4:
      return 'تم الغاء طلبية';
  }
}

const TypPaymentOrder = (title) => {
  switch (title) {
    case '0':
    return 'فلانتظار';
    case '1':
    return 'تم القبول';
    case '2':
    return 'تم رفض';
  }
}

export default Order_Management_User;