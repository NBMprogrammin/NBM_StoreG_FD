import * as React from "react";
import "../../App.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import AleartToDoSemthingActions from "../MoreCommponnent/AleartToDoSemthingActions";
import AleartToShowMoreDataSemthings from "../Commponent/Commpontent For Alearts/AleartToShowMoreDataSemthings";
import Reading from "../Commponent/Reading";
import DialogToConfirmedSemthingAction from "../Commponent/Commpontent For Alearts/DialogToConfirmedSemthingAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Start Inport For Get Alls Data User Now
import {
  showdatausernow,
  starttoshangMyPhoneNumberInProfile,
} from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenowSlice";
//== Start Inport For Get Alls Data User Now ==//

// Start Inport For Edart Category Bss
import {
  edartcategoryBssCreate,
  edartcategoryUpdate,
} from "../../allsliceproj/Categories_Management_Bss/Categories_Management_Bss_Slice";
//== Start Inport For Edart Category Bss ==//

// Start Inport For Edart Prodects Bss
import {
  edartProdectActivePayProd,
  edartProdectDscActivePayProd,
  edartProdectUpdateStorageProd,
} from "../../allsliceproj/Products_Management_Bss/Products_Management_Bss_Slice";
//== End Inport For Edart Prodects Bss ==//

// Start Inport For Edart Pay Prodects Bss
import {
  edartpayprodectconfirmedpaymentProdect,
  edartpayprodectdscconfirmedpaymentProdect,
} from "../../allsliceproj/Sales_Management_Bss/Sales_Management_Bss_Slice";
//== End Inport For Edart Pay Prodects Bss ==//

// Start Inport For Edart Orders Bss
import {
  edartordersbssconfirmedOrder,
  edartordersbssconfirmedpaymentOrder,
  edartordersbssdscconfirmedpaymentOrder,
} from "../../allsliceproj/Order_Management_Bss/Order_Management_Bss_Slice";
//== End Inport For Edart Orders Bss ==//

//== End Inport For Edart Orders User ==//
import {
  edartordersuserdeletemyOrder,
  edartordersuserstopmyOrder,
} from "../../allsliceproj/Order_Management_User/Order_Management_User_Slice";
//== End Inport For Edart Orders User ==//

// Start Inport For Edart Teweve Bss
import {
  edartmewwvestostoptewevesemthinguserintrave,
  edarttewevebsstoactiveselahiyetedartmaney,
  edarttewevebsstoactiveselahiyetpaymentelectronect,
  edarttewevebsstoactiveslahiyetedartorders,
  edarttewevebsstoactiveslahiyetedartpayprodect,
  edarttewevebsstoadscctiveselahiyetpaymentelectronect,
  edarttewevebsstoadscctiveslahiyetedartorders,
  edarttewevebsstodscactiveselahiyetedartmaney,
  edarttewevebsstodscactiveslahiyetedartpayprodect,
  edarttewevebsstogetratibeformeweve,
  edarttewevebsstoupdateratibemeweve,
  edarttewevesbsstoadduserinteweves,
  edarttewevesbsstoSendMessageAddUserTeweve,
} from "../../allsliceproj/Employees_Management_Bss/Employees_Management_Bss_Slice";
// Start Inport For Edart Teweve Bss

// Start Inport For Edart Zeboaynes Bss
import {
  edartzebayensbssactivedeyneforzeboune,
  edartzebayensbssdscactivedeyneforzeboune,
  edartzebayensbsstoupdatedeynezeboune,
  edartZebouneBssToAddNewZebouneOnlineWithBss,
} from "../../allsliceproj/Customers_Management_Bss/Customers_Management_Bss_Slice";
// End Inport For Edart Zeboaynes Bss ==//

// Start Inport For Edart Payments Methods Bss
import {
  edartpaymentsmethodsbsstoactivepayment,
  edartpaymentsmethodsbsstoaddcurrentpaymentforbss,
  edartpaymentsmethodsbsstodscactivepayment,
  edartpaymentsmethodsbsstoupdatepaymentmethod,
} from "../../allsliceproj/Payment_Settings_Management_Bss/Payment_Settings_Management_Bss_Slice";
//== End Inport For Edart Payments Methods Bss ==//

// Start Inport For Edart Maney Bss
import {
  edartmaneybsstoAddsemthingforedartmaney,
  edartmaneybsstoUpdatesemthingforedartmany,
} from "../../allsliceproj/Financial_Management_Bss/Financial_Management_Bss_Slice";
import {
  StartToConfirmedAddMyZebouneForBss,
  StartToConfirmedMyDemandToTraveForBss,
  StartToConfirmedMyRatibeForTraveBss,
  StartToDscConfirmedMyDemandToTraveForBss,
  StartToDscConfirmedMyRatibeForTraveBss,
  StartToStopAddMyZebouneForBss,
} from "../../allsliceproj/Message Alls User/MessageAllsUserSlice";
import Cookies from "js-cookie";
let tokenFoul = Cookies.get("token");
//== End Inport For Edart Maney Bss ==//

let KeyGoldAleart = 1;
let TitelInpuThereAlertAct = "";
let TypeInpuThereAlertAct = "";

const DialogActionContext = React.createContext({});

let AllDatdsDasb = [];
let generaldatClick = "";
let TypeContentStiopActionUser = "";
let discriptionmMessageAleart = "";
let TypeShowAleartMessageAction = "";
let TypeAcounteShow = "";

let TitelInpuTou = "";
let typeShowAleart = "";
let TypeInpuOne = "";
let TitelInpuOne = "";
let TypeInpuT = "";
let titelAleart = "";
let titelBtn = "";
let disbSup = "";
let DagtDoAct = "";
let tyShowAlt = "";
let discriptionAlt = "";
let Quadata = "";

let ArrarToShowMoredataAlt = [];
let ArrarToShowMoredataMoreAlt = [];
let ArrarDatTitAndPagAlt = [];
let TitelAleartShowDAlt = "";
let PagDscImgAlt = "";
let ImgToShowAlt = "";
let TiteMoreFirtDtAlt = "";
let DateTimeDetAlt = "";
let MorShowDatBoxAlt = "";
let TypFrstArry = "";

let typeShopAleart = "";

export const DialogActionContextProvider = ({ children }) => {
  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.datauser.typRequestNow;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.datauser.resultrquestaction;
  });

  const leadingtable = useSelector((state) => {
    return state.datauser.lodingtorspact;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  const navigate = useNavigate();

  React.useEffect(() => {
    const checkAuthentication = () => {
      tokenFoul = Cookies.get("token");
    };
    checkAuthentication();
  }, [navigate]);

  const [typeDialog, setTypeDialog] = React.useState(false);
  const [typfirstalertdat, settypfirstalertdat] = React.useState(false);

  const [typeDialogAl, settypeDialogAl] = React.useState(false);
  const [OpenCloceAleartT, setOpenCloceAleartT] = React.useState(false);
  const [valueInputeSmt, setvalueInputeSmt] = React.useState({
    valueOne: "",
    valueTou: "",
    valueThere: "",
  });

  const [typReading, setTypReading] = React.useState(false);

  // Start Sheck Loaading Now For Eny Request User
  React.useEffect(() => {
    if (leadingtable === true) {
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    if (typeRequestRsp === "ShowAllsDataUserLoginNow") {
        settypfirstalertdat(false)
      if (resultrquestaction === 99) {
        navigate("/home");
      }
    }
  }, [typeRequestRsp === "ShowAllsDataUserLoginNow"]);
  //== End Here To Get Sult For Semthing Request In Page ==//

  // Here Sheck User Login And Send Request For Get Alls Data Profile Login Now
  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      settypfirstalertdat(true);
      dispatsh(showdatausernow());
    }
  }, []);
  //== Here Sheck User Login And Send Request For Get Alls Data Profile Login Now ==//

  // Start Here To Controller Typ ReadiOpenDialogForActionFoundng For Any Page
  const HandleCloseOrOpenReadinPage = (type) => {
    setTypReading(type);
  } //== End Here To Controller Typ Reading For Any Page ==//

  // Start Open Aleart Success Semthing Action
  const OpenDialogForActionSuccess = (message, importe) => {
    setTypeDialog(true);
    discriptionmMessageAleart = message;
    TypeContentStiopActionUser = importe;
    TypeShowAleartMessageAction = "Success";
  } //== End Open Aleart Success Semthing Action ==//

  // Start Open Aleart Found Semthing Action
  const OpenDialogForActionFound = (message, importe) => {
    discriptionmMessageAleart = message;
    TypeContentStiopActionUser = importe;
    TypeShowAleartMessageAction = "Found";
    setTypeDialog(true);
  } //== End Open Aleart Found Semthing Action ==//

  const MyDataGrid = () => {
    const { data } = useDemoData({
      dataSet: "Commodity",
      rowLength: 100,
      maxColumns: 6,
    });

    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid {...data} />
      </div>
    );
  }

  // Start Open Aleart To Confirmed Or Not Semthing Action
  const TypeAlearVipNow = (
    data,
    typeShowAleartQ,
    TitelInpuOneQ,
    TypeInpuOneQ,
    TitelInpuTouQ,
    TypeInpuTQ,
    titelAleartQ,
    titelBtnQ,
    disbSupQ,
    TyAlt,
    dasc,
    keyG,
    titepinputther,
    typepinputther
  ) => {
    TitelInpuThereAlertAct = titepinputther;
    TypeInpuThereAlertAct = typepinputther;
    setOpenCloceAleartT(true);
    typeShowAleart = typeShowAleartQ;
    TitelInpuOne = TitelInpuOneQ;
    TypeInpuOne = TypeInpuOneQ;
    TypeInpuT = TypeInpuTQ;
    TitelInpuTou = TitelInpuTouQ;
    titelAleart = titelAleartQ;
    titelBtn = titelBtnQ;
    DagtDoAct = data;
    disbSup = disbSupQ;
    tyShowAlt = TyAlt;
    discriptionAlt = dasc;
    KeyGoldAleart = keyG;
  } //== End Open Aleart To Confirmed Or Not Semthing Action ==//

  // Start Alls Action Confirmed Now To Send Request
  const HandleConfirmedAleartToDoActionT = async (
    val,
    valw,
    TypeAction,
    dat,
    valuethere
  ) => {
    generaldatClick = val;
    setOpenCloceAleartT(false);
    setvalueInputeSmt({
      ...valueInputeSmt,
      valueOne: "",
      valueTou: "",
      valueThere: "",
    });
    Quadata = {
      passwordSetting: valw,
      ratibeUodate: val,
      data: dat,
    };

    switch (TypeAction) {
      // Start Alls Action For Profile User
      case "StartToShangeMyNumberPhone":
        dispatsh(starttoshangMyPhoneNumberInProfile({
          passwordSetting: valw,
          PhoneUpd: DagtDoAct.numberphone,
        }));
        return;
      //== End Alls Action For Profile User ==//

      // Sart Alss Actions User For Them Message
      case "DscConfirmedGetMyRatibeTeweveUser":
        HandleCloseOrOpenReadinPage(true);
        dispatsh(StartToDscConfirmedMyRatibeForTraveBss({
          id: DagtDoAct.id,
        }));
        return;
      case "ConfirmedGetMyRatibeTeweve":
        HandleCloseOrOpenReadinPage(true);
        dispatsh(StartToConfirmedMyRatibeForTraveBss({
          id: DagtDoAct.id,
        }));
        return;
      case "ConfirmedMessagForAddMyZeboune":
        HandleCloseOrOpenReadinPage(true);
        dispatsh(StartToConfirmedAddMyZebouneForBss({
          id: DagtDoAct.id,
        }));
        return;
      case "ConfirmedMessagForAddMyTeweve":
        HandleCloseOrOpenReadinPage(true);
        dispatsh(StartToConfirmedMyDemandToTraveForBss({
          id: DagtDoAct.id,
        }));
        return;
      case "DscConfirmedMessagForAddMyZeboune":
        HandleCloseOrOpenReadinPage(true);
        dispatsh(StartToStopAddMyZebouneForBss({
          id: DagtDoAct.id,
        }));
        return;
      case 'DscConfirmedMessagForAddTewve':
        dispatsh(StartToDscConfirmedMyDemandToTraveForBss({
          id: DagtDoAct.id,
        }));
        return;
      // Sart Alss Actions User For Them Message

      // Start Actions For Edart Meweves Bss
      case 'addUserTewiveFormEdartTewevesBss':
        dispatsh(edarttewevesbsstoadduserinteweves({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'StopToweve':
        dispatsh(edartmewwvestostoptewevesemthinguserintrave({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'SlaheyetEdartMany':
        dispatsh(edarttewevebsstoactiveselahiyetedartmaney({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'StopSlaheyetEdartMany':
        dispatsh(edarttewevebsstodscactiveselahiyetedartmaney({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'SlaheyetEdartPaymentProdectsSlaheyetEdartOrders':
        dispatsh(edarttewevebsstoactiveslahiyetedartpayprodect({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'StopSlaheyetEdartPaymentProdects':
        dispatsh(edarttewevebsstodscactiveslahiyetedartpayprodect({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'SlaheyetEdartOrdersFormEdartTewevesBss':
        dispatsh(edarttewevebsstoactiveslahiyetedartorders({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'StopSlaheyetOrders':
        dispatsh(edarttewevebsstoadscctiveslahiyetedartorders({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'SlaheyetPaymentMethodEctFormEdartTewevesBss':
        dispatsh(edarttewevebsstoactiveselahiyetpaymentelectronect({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'StopSlaheyetPaymentMethodEctEct':
        dispatsh(edarttewevebsstoadscctiveselahiyetpaymentelectronect({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'UpdateRatibeMeweve':
        dispatsh(edarttewevebsstoupdateratibemeweve({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'GetRatibeMeweve':
        dispatsh(edarttewevebsstogetratibeformeweve({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      // End Actions For Edart Meweves Bss

      // Start Send Message User bss To Add Trave
      case 'SendDemendAddUserToTrave':
        dispatsh(edarttewevesbsstoSendMessageAddUserTeweve({
          passwordSetting: valw,
          ratibeMeweve: val,
          user_id: DagtDoAct.user_id,
        }));
        return;
      // End Send Message User bss To Add Trave

      // Start All Requests For Edart Prodects Bss
      case 'ActivePayProdFromEdartProdects':
        dispatsh(edartProdectActivePayProd({
          passwordSetting: valw,
          StorageUp: val,
          id: DagtDoAct.id,
        }));
        return;
      case 'DscActivePayProdFromEdartProdects':
        dispatsh(edartProdectDscActivePayProd({
          passwordSetting: valw,
          StorageUp: val,
          id: DagtDoAct.id,
        }));
        return;
      case 'UpdateStorageThisProdectFromEdartProdect':
        dispatsh(edartProdectUpdateStorageProd({
          passwordSetting: valw,
          StorageUp: val,
          id: DagtDoAct.id,
        }));
        return;
      // End All Requests For Edart Prodects Bss

      // Start All Requests For Edart Pay Prodects Bss
      case 'ConfirmedPaymentProdFromEdartPayprod':
        dispatsh(edartpayprodectconfirmedpaymentProdect({
          passwordSetting: valw,
          id: dat,
        }));
        return;
      case 'StopPaymentProdFromEdartPayprod':
        dispatsh(edartpayprodectdscconfirmedpaymentProdect({
          passwordSetting: valw,
          id: dat,
        }));
        return;
      //== End All Requests For Edart Pay Prodects Bss ==//

      // Start All Requests For Edart Orders
      // Start All Requests For Edart Orders Bss
      case 'ConfirmedPaymentOrderFromEdartOrdersBss':
        dispatsh(edartordersbssconfirmedpaymentOrder({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'ConfirmedOrderFromEdartOrdersBss':
        dispatsh(edartordersbssconfirmedOrder({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'DscConfirmedPaymentOrderFromEdartOrdersBss':
        dispatsh(edartordersbssdscconfirmedpaymentOrder({
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      //== End All Requests For Edart Orders Bss ==//

      // Start Send Alls Request For Edart Orders For User
      case 'StopMyOrderFromEdartOrderUser':
        dispatsh(edartordersuserstopmyOrder({
          id: DagtDoAct.id,
        }));
        return;
      case 'DeleteMyOrderFromEdartOrderUser':
        dispatsh(edartordersuserdeletemyOrder({
          id: DagtDoAct.id,
        }));
        return;
      // End Send Alls Request For Edart Orders For User
      // End All Requests For Edart Orders From Zeboune Bss

      // Start All Requests For Edart Many From Bss
      case 'CreateOneEdartManForDayInEdarManyMenh':
        dispatsh(edartmaneybsstoAddsemthingforedartmaney({
          totalePaye: val,
          totaleIpay: valw,
          dscripctionday: valuethere,
        }));
        return;
      case 'UpdateOneEdartManForDayInEdarManyMenh':
        dispatsh(edartmaneybsstoUpdatesemthingforedartmany({
          id: DagtDoAct.id,
          totalePaye: val,
          totaleIpay: valw,
          dscripctionday: valuethere,
        }));
        return;
      //== End All Requests For Edart Many From Bss ==//

      // Start All Requests For Edart Payment Method From Bss
      case 'StopPaymentFromEdartPaymentMethodsBss':
        dispatsh(edartpaymentsmethodsbsstodscactivepayment({
          passwordSetting: valw,
          PaymentID: DagtDoAct.id,
        }));
        return;
      case 'ActivePaymentFromEdartPaymentMethodsBss':
        dispatsh(edartpaymentsmethodsbsstoactivepayment({
          passwordSetting: valw,
          PaymentID: DagtDoAct.id,
        }));
        return;
      case 'UpdatePaymentFromEdartPayprod':
        dispatsh(edartpaymentsmethodsbsstoupdatepaymentmethod({
          numberPay: val,
          passwordSetting: valw,
          id: DagtDoAct.id,
        }));
        return;
      case 'CreateCurrentPaymentFromEdartPaymentMethodsBss':
        HandleCloseOrOpenReadinPage(true);
        dispatsh(edartpaymentsmethodsbsstoaddcurrentpaymentforbss({
          currentCantery: DagtDoAct.nameOne,
          passwordSetting: valw,
        }));
        return;
      //== End All Requests For Edart Payment Method From Bss ==//

      // Start All Requests For Edart Zebayens From Bss
      case 'addUserToMyZebounFromEdartZebayens':
        HandleCloseOrOpenReadinPage(true);
        dispatsh(edartZebouneBssToAddNewZebouneOnlineWithBss({
          TypeAddZeboune: "Online",
          IdUser: DagtDoAct.user_id,
          numberPhone: DagtDoAct.NumberPhone,
          passwordSetting: valw,
        }));
        return;
      case 'ActiveDeynFromEdartZebayensBss':
        dispatsh(edartzebayensbssactivedeyneforzeboune({
          id: DagtDoAct.id,
          passwordSetting: valw,
        }));
        return;
      case 'DscActiveDeynFromEdartZebayensBss':
        dispatsh(edartzebayensbssdscactivedeyneforzeboune({
          id: DagtDoAct.id,
          passwordSetting: valw,
        }));
        return;
      case 'UpdateDeynMyZebouneFromEdartZebouns':
        dispatsh(edartzebayensbsstoupdatedeynezeboune({
          id: DagtDoAct.id,
          deynUpdate: val,
          passwordSetting: valw,
        }));
        return;
      // Start All Requests For Edart Zebayens From Bss

      // Start All Requests For Edart Category Bss
      case 'CreateMyCategoryFromEdartCategory':
        dispatsh(edartcategoryBssCreate({
          id: DagtDoAct.id,
          category: val,
          passwordSetting: valw,
        }));
        return;
      case 'UpdateMyCategoryFromEdartCategory':
        dispatsh(edartcategoryUpdate({
          id: DagtDoAct.id,
          category: val,
          passwordSetting: valw,
        }));
        return;
      // End All Requests For Edart Category Bss

    }

  } //== End Alls Action Confirmed Now To Send Request ==//

  // Start To Open Aleart To Show More Data Semthing
  const StartShowMoreDatImClick = (
    dataPagAndTit,
    typarrfirst,
    arratFirstMorDat,
    arratTouMorDat,
    bigTitel,
    bigBrg,
    imgShowD,
    fiestTitelDatArr,
    TouTitelDatArr,
    dateData,
    keyG,
    typeAleartshp
  ) => {
    settypeDialogAl(true);
    ArrarDatTitAndPagAlt = dataPagAndTit;
    TypFrstArry = typarrfirst;
    ArrarToShowMoredataAlt = arratFirstMorDat;
    ArrarToShowMoredataMoreAlt = arratTouMorDat;
    TitelAleartShowDAlt = bigTitel;
    PagDscImgAlt = bigBrg;
    ImgToShowAlt = imgShowD;
    TiteMoreFirtDtAlt = fiestTitelDatArr;
    MorShowDatBoxAlt = TouTitelDatArr;
    DateTimeDetAlt = dateData;
    KeyGoldAleart = keyG;
    typeShopAleart = typeAleartshp;
  } //== End To Open Aleart To Show More Data Semthing ==//

  const LoadingScreen = () => {
    return (
      <div className="loading-screen"
        // sx={(theme) => ({ zIndex: theme.zIndex.drawer + 3 })}
      >
        <div className="loading-logo">
          <div className="loading_testgo">
            <div className="logo-shape">
              <span>NBM</span>
            </div>
          </div>
        </div>
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
        <p style={{ direction: 'rtl' }}>جاري تحميل المنصة...</p>
      </div>
    );
  };

  return (
    <DialogActionContext.Provider
      value={{
        generaldatClick,
        Quadata,
        HandleConfirmedAleartToDoActionT,
        OpenDialogForActionSuccess,
        OpenDialogForActionFound,
        StartShowMoreDatImClick,
        AllDatdsDasb,
        MyDataGrid,
        HandleCloseOrOpenReadinPage,
        TypeAcounteShow,
        TypeAlearVipNow,
      }}
    >
      {typfirstalertdat ? <LoadingScreen /> : ''}
      {/* Start Aleart To Shwo Result Semthing Action Now */}
      <DialogToConfirmedSemthingAction
        discription={discriptionmMessageAleart}
        conteOpenDialog={TypeContentStiopActionUser}
        typeShowDialog={TypeShowAleartMessageAction}
        setTypeDialog={setTypeDialog}
        typeDialog={typeDialog}
        setTypReading={setTypReading}
      />
      {/*== End Aleart To Shwo Result Semthing Action Now ==//*/}

      {/* Start Show Aleart To Reading Page */}
      <Reading typReading={typReading} />
      {/*== End Show Aleart To Reading Page ==// */}

      {/* Start Aleart To Do Semthing Action Now */}
      <AleartToDoSemthingActions
        key={KeyGoldAleart}
        KeyGoldAleart={KeyGoldAleart}
        OpenCloceAleartT={OpenCloceAleartT}
        setOpenCloceAleartT={setOpenCloceAleartT}
        typeShowAleart={typeShowAleart}
        TitelInpuOne={TitelInpuOne}
        TypeInpuOne={TypeInpuOne}
        TypeInpuT={TypeInpuT}
        TitelInpuThere={TitelInpuThereAlertAct}
        TypeInpuThere={TypeInpuThereAlertAct}
        TitelInpuTou={TitelInpuTou}
        titelAleart={titelAleart}
        disbSup={disbSup}
        discriptionAlt={discriptionAlt}
        titelBtn={titelBtn}
        tyShowAlt={tyShowAlt}
        DagtDoAct={KeyGoldAleart}
        HandleConfirmedAleartToDoAction={HandleConfirmedAleartToDoActionT}
        valueInputeSmt={valueInputeSmt}
        setvalueInputeSmt={setvalueInputeSmt}
      />
      {/*== End Aleart To Do Semthing Action Now ==// */}

      {/* Start To Show Alls Data User Click */}
      <AleartToShowMoreDataSemthings
        key={KeyGoldAleart + 19888}
        typeDialog={typeDialogAl}
        setTypeDialog={settypeDialogAl}
        ArrarToShowMoredata={ArrarToShowMoredataAlt}
        ArrarToShowMoredataMore={ArrarToShowMoredataMoreAlt}
        ArrarDatTitAndPag={ArrarDatTitAndPagAlt}
        TitelAleartShowD={TitelAleartShowDAlt}
        TypFrstArry={TypFrstArry}
        PagDscImg={PagDscImgAlt}
        ImgToShow={ImgToShowAlt}
        TiteMoreFirtDt={TiteMoreFirtDtAlt}
        DateTimeDet={DateTimeDetAlt}
        MorShowDatBox={MorShowDatBoxAlt}
        KeyGoldAleart={KeyGoldAleart}
        typeShopAleart={typeShopAleart}
      />
      {/*== End To Show Alls Data User Click ==// */}

      {children}
    </DialogActionContext.Provider>
  );
};

export const useDialogActionContext = () => {
  return React.useContext(DialogActionContext);
};
