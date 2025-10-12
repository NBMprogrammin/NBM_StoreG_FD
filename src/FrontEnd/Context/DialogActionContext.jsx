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
} from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
//== Start Inport For Get Alls Data User Now ==//

// Start Inport For Edart Category Bss
import {
  edartcategoryBssCreate,
  edartcategoryUpdate,
} from "../../allsliceproj/edartcategoryuserBss/edartcategorySlice";
//== Start Inport For Edart Category Bss ==//

// Start Inport For Edart Prodects Bss
import {
  edartProdectActivePayProd,
  edartProdectDscActivePayProd,
  edartProdectUpdateStorageProd,
} from "../../allsliceproj/edartProdectsBss/EdartProdectSlice";
//== End Inport For Edart Prodects Bss ==//

// Start Inport For Edart Pay Prodects Bss
import {
  edartpayprodectconfirmedpaymentProdect,
  edartpayprodectdscconfirmedpaymentProdect,
} from "../../allsliceproj/Edart Pay Prodects/edartPayProdectdsSlice";
//== End Inport For Edart Pay Prodects Bss ==//

// Start Inport For Edart Orders Bss
import {
  edartordersbssconfirmedOrder,
  edartordersbssconfirmedpaymentOrder,
  edartordersbssdscconfirmedpaymentOrder,
} from "../../allsliceproj/Edart Orders bss/edartOrdersBssSlice";
//== End Inport For Edart Orders Bss ==//

//== End Inport For Edart Orders User ==//
import {
  edartordersuserdeletemyOrder,
  edartordersuserstopmyOrder,
} from "../../allsliceproj/Edart Orders user/edartOrdersUserSlice";
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
} from "../../allsliceproj/Edart teweves/edartTewevesBssSlice";
// Start Inport For Edart Teweve Bss

// Start Inport For Edart Zeboaynes Bss
import {
  edartzebayensbssactivedeyneforzeboune,
  edartzebayensbssdscactivedeyneforzeboune,
  edartzebayensbsstoupdatedeynezeboune,
  edartZebouneBssToAddNewZebouneOnlineWithBss,
} from "../../allsliceproj/Edart zebayens/edartZebayensBssSlice";
// End Inport For Edart Zeboaynes Bss ==//

// Start Inport For Edart Payments Methods Bss
import {
  edartpaymentsmethodsbsstoactivepayment,
  edartpaymentsmethodsbsstoaddcurrentpaymentforbss,
  edartpaymentsmethodsbsstodscactivepayment,
  edartpaymentsmethodsbsstoupdatepaymentmethod,
} from "../../allsliceproj/Edart Peyments Methods/edartPaymentsMethodsBssSlice";
//== End Inport For Edart Payments Methods Bss ==//

// Start Inport For Edart Maney Bss
import {
  edartmaneybsstoAddsemthingforedartmaney,
  edartmaneybsstoUpdatesemthingforedartmany,
} from "../../allsliceproj/Edart Maney/edartManeyBssSlice";
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
  const [typeDialogAl, settypeDialogAl] = React.useState(false);
  const [showDateUser, setShowDateUser] = React.useState("");
  const [OpenCloceAleartT, setOpenCloceAleartT] = React.useState(false);
  const [valueInputeSmt, setvalueInputeSmt] = React.useState({
    valueOne: "",
    valueTou: "",
    valueThere: "",
  });

  const [typReading, setTypReading] = React.useState(false);
  const [NowProfilShanfe, setNowProfilShanfe] = React.useState({});

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
      if (resultrquestaction === 99) {
        Cookies.remove("token");
        navigate("/home");
      }
    }
  }, [typeRequestRsp === "ShowAllsDataUserLoginNow"]);
  //== End Here To Get Sult For Semthing Request In Page ==//

  // Here Sheck User Login And Send Request For Get Alls Data Profile Login Now
  React.useEffect(() => {
    if (tokenFoul) {
      dispatsh(showdatausernow());
    }
  }, []);
  //== Here Sheck User Login And Send Request For Get Alls Data Profile Login Now ==//

  // Start Here To Controller Typ Reading For Any Page
  function HandleCloseOrOpenReadinPage(type) {
    setTypReading(type);
  } //== End Here To Controller Typ Reading For Any Page ==//

  // Start Open Aleart Success Semthing Action
  function OpenDialogForActionSuccess(message, importe) {
    setTypeDialog(true);
    discriptionmMessageAleart = message;
    TypeContentStiopActionUser = importe;
    TypeShowAleartMessageAction = "Success";
  } //== End Open Aleart Success Semthing Action ==//

  // Start Open Aleart Found Semthing Action
  function OpenDialogForActionFound(message, importe) {
    discriptionmMessageAleart = message;
    TypeContentStiopActionUser = importe;
    TypeShowAleartMessageAction = "Found";
    setTypeDialog(true);
  } //== End Open Aleart Found Semthing Action ==//

  function MyDataGrid() {
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
  function TypeAlearVipNow(
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
  ) {
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
  function HandleConfirmedAleartToDoActionT(
    val,
    valw,
    TypeAction,
    dat,
    valuethere
  ) {
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

    // Start Alls Action For Profile User
    if (TypeAction === "StartToShangeMyNumberPhone") {
      Quadata = {
        passwordSetting: valw,
        PhoneUpd: DagtDoAct.numberphone,
      };
      dispatsh(starttoshangMyPhoneNumberInProfile(Quadata));
    }
    //== End Alls Action For Profile User ==//

    // Sart Alss Actions User For Them Message
    Quadata = {
      id: DagtDoAct.id,
    };
    if (TypeAction === "DscConfirmedGetMyRatibeTeweveUser") {
      HandleCloseOrOpenReadinPage(true);
      dispatsh(StartToDscConfirmedMyRatibeForTraveBss(DagtDoAct));
    } else if (TypeAction === "ConfirmedGetMyRatibeTeweve") {
      dispatsh(StartToConfirmedMyRatibeForTraveBss(DagtDoAct));
    } else if (TypeAction === "ConfirmedMessagForAddMyZeboune") {
      dispatsh(StartToConfirmedAddMyZebouneForBss(DagtDoAct));
    } else if (TypeAction === "ConfirmedMessagForAddMyTeweve") {
      dispatsh(StartToConfirmedMyDemandToTraveForBss(DagtDoAct));
    } else if (TypeAction === "DscConfirmedMessagForAddMyZeboune") {
      dispatsh(StartToStopAddMyZebouneForBss(DagtDoAct));
    } else if (TypeAction === "DscConfirmedMessagForAddTewve") {
      dispatsh(StartToDscConfirmedMyDemandToTraveForBss(DagtDoAct));
    }
    // Sart Alss Actions User For Them Message

    // Start Actions For Edart Meweves Bss
    Quadata = {
      passwordSetting: valw,
      id: DagtDoAct.id,
    };
    if (TypeAction === "addUserTewiveFormEdartTewevesBss") {
      dispatsh(edarttewevesbsstoadduserinteweves(Quadata));
    } else if (TypeAction === "StopToweve") {
      dispatsh(edartmewwvestostoptewevesemthinguserintrave(Quadata));
    } else if (TypeAction === "SlaheyetEdartMany") {
      dispatsh(edarttewevebsstoactiveselahiyetedartmaney(Quadata));
    } else if (TypeAction === "StopSlaheyetEdartMany") {
      dispatsh(edarttewevebsstodscactiveselahiyetedartmaney(Quadata));
    } else if (
      TypeAction === "SlaheyetEdartPaymentProdectsSlaheyetEdartOrders"
    ) {
      dispatsh(edarttewevebsstoactiveslahiyetedartpayprodect(Quadata));
    } else if (TypeAction === "StopSlaheyetEdartPaymentProdects") {
      dispatsh(edarttewevebsstodscactiveslahiyetedartpayprodect(Quadata));
    } else if (TypeAction === "SlaheyetEdartOrdersFormEdartTewevesBss") {
      dispatsh(edarttewevebsstoactiveslahiyetedartorders(Quadata));
    } else if (TypeAction === "StopSlaheyetOrders") {
      dispatsh(edarttewevebsstoadscctiveslahiyetedartorders(Quadata));
    } else if (TypeAction === "SlaheyetPaymentMethodEctFormEdartTewevesBss") {
      dispatsh(edarttewevebsstoactiveselahiyetpaymentelectronect(Quadata));
    } else if (TypeAction === "StopSlaheyetPaymentMethodEctEct") {
      dispatsh(edarttewevebsstoadscctiveselahiyetpaymentelectronect(Quadata));
    } else if (TypeAction === "UpdateRatibeMeweve") {
      dispatsh(edarttewevebsstoupdateratibemeweve(Quadata));
    } else if (TypeAction === "GetRatibeMeweve") {
      dispatsh(edarttewevebsstogetratibeformeweve(Quadata));
    }
    // End Actions For Edart Meweves Bss

    // Start Send Message User bss To Add Trave
    if (TypeAction === "SendDemendAddUserToTrave") {
      Quadata = {
        passwordSetting: valw,
        ratibeMeweve: val,
        user_id: DagtDoAct.user_id,
      };
      dispatsh(edarttewevesbsstoSendMessageAddUserTeweve(Quadata));
    }
    // End Send Message User bss To Add Trave

    // Start All Requests For Edart Prodects Bss
    Quadata = {
      passwordSetting: valw,
      StorageUp: val,
      id: DagtDoAct.id,
    };
    if (TypeAction === "ActivePayProdFromEdartProdects") {
      dispatsh(edartProdectActivePayProd(Quadata));
    } else if (TypeAction === "DscActivePayProdFromEdartProdects") {
      dispatsh(edartProdectDscActivePayProd(Quadata));
    } else if (TypeAction === "UpdateStorageThisProdectFromEdartProdect") {
      dispatsh(edartProdectUpdateStorageProd(Quadata));
    }
    // End All Requests For Edart Prodects Bss

    // Start All Requests For Edart Pay Prodects Bss
    Quadata = {
      passwordSetting: valw,
      id: dat,
    };
    if (TypeAction === "ConfirmedPaymentProdFromEdartPayprod") {
      dispatsh(edartpayprodectconfirmedpaymentProdect(Quadata));
    } else if (TypeAction === "StopPaymentProdFromEdartPayprod") {
      dispatsh(edartpayprodectdscconfirmedpaymentProdect(Quadata));
    }
    //== End All Requests For Edart Pay Prodects Bss ==//

    // Start All Requests For Edart Orders
    // Start All Requests For Edart Orders Bss
    Quadata = {
      passwordSetting: valw,
      id: DagtDoAct.id,
    };
    if (TypeAction === "ConfirmedPaymentOrderFromEdartOrdersBss") {
      dispatsh(edartordersbssconfirmedpaymentOrder(Quadata));
    } else if (TypeAction === "ConfirmedOrderFromEdartOrdersBss") {
      dispatsh(edartordersbssconfirmedOrder(Quadata));
    } else if (TypeAction === "DscConfirmedPaymentOrderFromEdartOrdersBss") {
      dispatsh(edartordersbssdscconfirmedpaymentOrder(Quadata));
    }
    //== End All Requests For Edart Orders Bss ==//

    Quadata = {
      id: DagtDoAct.id,
    };
    // Start Send Alls Request For Edart Orders For User
    if (TypeAction === "StopMyOrderFromEdartOrderUser") {
      dispatsh(edartordersuserstopmyOrder(Quadata));
    } else if (TypeAction === "DeleteMyOrderFromEdartOrderUser") {
      dispatsh(edartordersuserdeletemyOrder(Quadata));
    }
    // End Send Alls Request For Edart Orders For User
    // End All Requests For Edart Orders From Zeboune Bss

    // Start All Requests For Edart Many From Bss

    if (TypeAction === "CreateOneEdartManForDayInEdarManyMenh") {
      const LQuadata = {
        totalePaye: val,
        totaleIpay: valw,
        dscripctionday: valuethere,
      };
      dispatsh(edartmaneybsstoAddsemthingforedartmaney(LQuadata));
    } else if (TypeAction === "UpdateOneEdartManForDayInEdarManyMenh") {
      const LQuadata = {
        id: DagtDoAct.id,
        totalePaye: val,
        totaleIpay: valw,
        dscripctionday: valuethere,
      };
      dispatsh(edartmaneybsstoUpdatesemthingforedartmany(LQuadata));
    }
    //== End All Requests For Edart Many From Bss ==//

    // Start All Requests For Edart Payment Method From Bss
    Quadata = {
      passwordSetting: valw,
      PaymentID: DagtDoAct.id,
    };

    if (TypeAction === "StopPaymentFromEdartPaymentMethodsBss") {
      dispatsh(edartpaymentsmethodsbsstodscactivepayment(Quadata));
    } else if (TypeAction === "ActivePaymentFromEdartPaymentMethodsBss") {
      dispatsh(edartpaymentsmethodsbsstoactivepayment(Quadata));
    } else if (TypeAction === "UpdatePaymentFromEdartPayprod") {
      Quadata = {
        numberPay: val,
        passwordSetting: valw,
        id: DagtDoAct.id,
      };
      dispatsh(edartpaymentsmethodsbsstoupdatepaymentmethod(Quadata));
    } else if (
      TypeAction === "CreateCurrentPaymentFromEdartPaymentMethodsBss"
    ) {
      Quadata = {
        currentCantery: DagtDoAct.nameOne,
        passwordSetting: valw,
      };
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartpaymentsmethodsbsstoaddcurrentpaymentforbss(Quadata));
    }
    //== End All Requests For Edart Payment Method From Bss ==//

    // Start All Requests For Edart Zebayens From Bss

    if (TypeAction === "addUserToMyZebounFromEdartZebayens") {
      Quadata = {
        TypeAddZeboune: "Online",
        IdUser: DagtDoAct.user_id,
        numberPhone: DagtDoAct.NumberPhone,
        passwordSetting: valw,
      };
      // HandleSendRequestToAddUserOnMyZebouneBssOnline(Quadata);
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartZebouneBssToAddNewZebouneOnlineWithBss(Quadata));
    }

    // Start All Requests For Edart Zebayens From Bss

    Quadata = {
      id: DagtDoAct.id,
      passwordSetting: valw,
    };
    if (TypeAction === "ActiveDeynFromEdartZebayensBss") {
      dispatsh(edartzebayensbssactivedeyneforzeboune(Quadata));
    } else if (TypeAction === "DscActiveDeynFromEdartZebayensBss") {
      dispatsh(edartzebayensbssdscactivedeyneforzeboune(Quadata));
    } else if (TypeAction === "UpdateDeynMyZebouneFromEdartZebouns") {
      Quadata = {
        id: DagtDoAct.id,
        deynUpdate: val,
        passwordSetting: valw,
      };
      dispatsh(edartzebayensbsstoupdatedeynezeboune(Quadata));
    }
    //== End All Requests For Edart Zebayens From Bss ==//

    // Start All Requests For Edart Category Bss
    Quadata = {
      id: DagtDoAct.id,
      category: val,
      passwordSetting: valw,
    };
    if (TypeAction === "CreateMyCategoryFromEdartCategory") {
      dispatsh(edartcategoryBssCreate(Quadata));
    } else if (TypeAction === "UpdateMyCategoryFromEdartCategory") {
      dispatsh(edartcategoryUpdate(Quadata));
    }
    // End All Requests For Edart Category Bss
  } //== End Alls Action Confirmed Now To Send Request ==//

  // Start To Open Aleart To Show More Data Semthing
  function StartShowMoreDatImClick(
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
  ) {
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
        showDateUser,
        NowProfilShanfe,
        setNowProfilShanfe,
        MyDataGrid,
        HandleCloseOrOpenReadinPage,
        TypeAcounteShow,
        TypeAlearVipNow,
      }}
    >
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
