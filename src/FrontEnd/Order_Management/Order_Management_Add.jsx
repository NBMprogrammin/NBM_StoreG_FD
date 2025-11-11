import { Button, Container } from "@mui/joy";
import React, { useRef } from "react";
import CountryInput from "../Commponent/CantryInput";
import { FormLabel } from "@mui/material";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import { useDialogActionContext } from "../Context/DialogActionContext";
import { useSelector, useDispatch } from "react-redux";
import TitelPage from "../Commponent/TitelPage";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { edartordersuserstoCreateNowMyOrder } from "../../allsliceproj/Order_Management_User/Order_Management_User_Slice";
import Header from "../layoute/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

let datBssToSendOrder = "";
let ImageToSendMany = "";

let ValuePayMenteMethod = "";
let NumberPaymentMethod = "";
let TypeNamePaymenttOdOaCtion = "";
let NameBssToSendOrder = "";
let PaodUserClick = '';
let typRequest = '';
// الامتدادات المسموح بها
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg"];

const Order_Management_Add = () => {
  const navigate = useNavigate();
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const [satUserClickNow, setsatUserClickNow] = React.useState({
    IdBssUserValueClick: "",
    ProdUserClick: "",
    paymentUserClick: "",
  });

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  const dispatsh = useDispatch();

  // Start Get Data Form Edart Orders ser To Create New Order
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Order_Management_User.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.Order_Management_User.typRequestNow;
  });

  const AllDatdsDasb = useSelector((state) => {
    return state.datauser.datauser;
  });

  const dataShowProd = useSelector((state) => {
    return state.Order_Management_User.dataShowPayProd;
  });
  //== End Get Data Form Edart Orders ser To Create New Order ==//

  // Start Sheck User Login Now To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if(ProfileSnageNow && ProfileSnageNow.TypProf !== "user") {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Order-Management/add", ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

  // Start Handle Data First Bss User Click
  const dhlddattaFirst = (val) => {
    datBssToSendOrder = val;
    NameBssToSendOrder = val.nameOne;
      
    dataAllProdBss = AllDatdsDasb.dataAllProdBss.map((Prod) => {
      return Prod.IdBss === val.id ? Prod : null;
    });

    AllsPaymentsMethodsBss = AllDatdsDasb.PaymentsMeyhods.map((Prod) => {
      return Prod.IdBss === val.id ? Prod : null;
    });
  
    setsatUserClickNow({ ...satUserClickNow, IdBssUserValueClick: val.id });
  } // End Handle Data First Bss User Click ==//

  // Start Handle Data Prodect User Click
  const SheckDataProdects = (val) => {
    const prod = selectedProdects.some(
      (prodect) => prodect.id === val.id
    );
    if (prod) {
      return;
    }
    if (val.nameThere != 0) {
      PaodUserClick = val;
      setsatUserClickNow({ ...satUserClickNow, ProdUserClick: val.id });
      setSelectedProdects([...selectedProdects, {
        id: val.id,
        price: val.nameTou,
        name: val.nameOne,
        image: val.image,
        quantieStorage: val.nameThere,
        quantiteNow: parseInt(1),
        totals: val.nameTou,
        contentStor: false,
      }]);
    }
  } //== End Handle Data Prodect User Click ==//

  // Start Handle Data Payment Method User Click
  const fetchDataPaymentMethod = (val) => {
    ValuePayMenteMethod = val;
    TypeNamePaymenttOdOaCtion = val.nameOne;
    NumberPaymentMethod = val.nameTou;
    setsatUserClickNow({ ...satUserClickNow, paymentUserClick: val.id });
  } //== End Handle Data Payment Method User Click ==//

  // Start Handle Data User Click To Show Semthing Action
  const HandleDataValNow = (status,val) => {
    switch (status) {
      case "BssUserClick":
        return dhlddattaFirst(val);
      case "Prodects":
        return SheckDataProdects(val);
      case "payment":
        return fetchDataPaymentMethod(val);
    }
  } //== End Handle Data User Click To Show Semthing Action ==//

  // Start Delete Alls Data Step User Click
  const dhlddattaFirstFound = () => {
    setsatUserClickNow({
      ...satUserClickNow,
      IdBssUserValueClick: "",
      ProdUserClick: "",
      paymentUserClick: "",
    });
    setSelectedProdects([]);
  } //== End Delete Alls Data Step User Click ==//

  // Start Delete Data Alls Prodect User Click
  const SheckDataProdectsFound = () => {
    TypeNamePaymenttOdOaCtion = "";
    NumberPaymentMethod = "";
    setsatUserClickNow({ ...satUserClickNow, paymentUserClick: "" });
  } //== End Delete Data Alls Prodect User Click ==//

  // Start Delete Alls Step User Click To Do Action
  const HandleDataValNowFoud = (status,val) => {
    switch (status) {
      case "BssUserClick":
        return dhlddattaFirstFound(val);
      case "Prodects":
        return SheckDataProdectsFound(val);
    }
  } //== End Delete Alls Step User Click To Do Action ==//

  // دالة للتحقق من امتداد الملف
  const isValidFileExtension = (filename) => {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

  // Start Get Date User To Storage For Prodect
  const HandleAllsVlueUserClick = (val, tpeAction) => {
    if (val != null) {
      HandleDataValNow(tpeAction, val);
    } else {
      HandleDataValNowFoud(tpeAction, val);
    }
  } //=== End Get Date User To Storage For Prodect ===//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typeRequestRsp;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//
  
  // Start Show Aleart For User Semo Semthing Action
  React.useMemo(() => {
    switch (TypeAction) {
      case "0":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `تم انشاء طلبيتك فلانتظار رد من تاخر ${NameBssToSendOrder} كما تم نقلك الى صفحت طلبيات  `,
            );
            navigate("/Order-Management");
          return;
          case 7:
            OpenDialogForActionFound(
              `يبدو بان كمية لتي تحاول شرائها و هي ${
                dataShowProd.quantitetopay
              } فلمنتج (${dataShowProd.name}) ${
                dataShowProd.quantite == 0
                  ? " تم تفريغ لمخزون من لمنتج لمطوب و اصبح خاوي"
                  : "" || dataShowProd.quantitetopay > dataShowProd.quantite
                  ? "لكمية لمطلوب اكثر من متوفر قم بنقصها"
                  : ""
              }`
            );
          return;
          case 10:
            OpenDialogForActionFound(
              "يبدو بان احد لمنتجات لمختار لم يعد متوفر او ان هناك مشكلة اخرى رجاء حاول مرة اخرى"
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان تاجر لم يتيح لك بعد صلاحية لدين او انه اوقفها رجا تواص مع تاجر فلموضوع`
            );
          return;
          case 22:
            OpenDialogForActionFound(
              "لقد تم رصد مشكلة فلكمية احد لمنتجات لمختار غير مفهوم رجاء حاول في وقت  لاحق"
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
  }, [resultrquestaction, typeRequestRsp === "edartorderUserToCreateNowOrder"]); //== End Show Aleart For User Semo Semthing Action ==//

  // Start Her To Handle Value Img Confirmed Payment
  const HandelImgMyProdect = (val) => {
    ImageToSendMany = val;
  } //== End Her To Handle Value Img Confirmed Payment ==//

  // Start Here To Calcule ToTale Orders
  const TotalPrice = React.useMemo(() => {
    if (satUserClickNow.IdBssUserValueClick != "") {
      return selectedProdects.reduce(
        (sum, item) => sum + item.price * item.quantiteNow,
        0
      );
    } else {
      return 0;
    }
  }, [selectedProdects]); //== End Here To Calcule ToTale Orders ==//

  // Start Handle Data To Send Request For Create Now Order
  const HandleClickToSendDateProdect = async (e) => {
    e.preventDefault();

    if (datBssToSendOrder == "" || datBssToSendOrder == null) {
      OpenDialogForActionFound(
        "رجاء ادخال الاسم تاجر المستفيد من البيع من اجل ارسال طلبية"
      );
    } else if (selectedProdects == "") {
      OpenDialogForActionFound(
        "رجاء ادخال على الاقل منتج واحد من اجل ارسال طلبية"
      );
    } else if (ValuePayMenteMethod == "" || ValuePayMenteMethod == null) {
      OpenDialogForActionFound("رجاء ادخال طريقة الدغع من اجل ارسال طلبية");
    } else {

      if (ImageToSendMany != undefined && ImageToSendMany.size > 1000010) {
        OpenDialogForActionFound("حجم الصورة يجب أن يكون أقل من 1");
        return;
      }

      if (ImageToSendMany != undefined && !ImageToSendMany.type.startsWith("image/")) {
        OpenDialogForActionFound("الملف يجب أن يكون صورة");
        return;
      }
      if (ImageToSendMany && !isValidFileExtension(ImageToSendMany.name)) {
        OpenDialogForActionFound(
          "❌ يجب ان تكون صورة من احد انواع تالية jpeg او jpg و فقط"
        );
        return null;
      }
      let ArrayProdect = [];
      let ArrayQuantite = [];
      const Srt = selectedProdects.map((prod) => {
        return (
          ArrayProdect.push(prod.id) && ArrayQuantite.push(prod.quantiteNow)
        );
      });

      const data = {
        productID: ArrayProdect,
        quantities: ArrayQuantite,
        imagePayment: ImageToSendMany,
        PaymentMethod: ValuePayMenteMethod.id,
        IDBss: datBssToSendOrder.id,
      };
      
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartordersuserstoCreateNowMyOrder(data));
    }
  } //== End Handle Data To Send Request For Create Now Order ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf === "user") {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"Edartorders"} />
        <Container>
          <div
            className="DivContentPagAddSalse"
          >
            <TitelPage TitelPage="انشاء طلبيتي" />

            <form
              className="FromDateAddProdect"
              style={{ width: "90%", direction: "rtl" }}
              onSubmit={(e) => HandleClickToSendDateProdect(e)}
            >
              {/*  Start Eghteyare User For Select Users */}
              <div style={{ width: "100%", marginBottom: "20px" }} dir="rtl">
                <div style={{ textAlign: "right" }}>
                  <FormLabel
                    className="styLablToDoAc"
                  >
                    الاختيار تاجر
                  </FormLabel>
                  <CountryInput
                    TypeShowData={"PayProdForZeboune"}
                    dataFeth={AllDatdsDasb.DatBssICalyan}
                    TypeAction="BssUserClick"
                    ValueUserSeckeClick={HandleAllsVlueUserClick}
                  />
                </div>
              </div>
              {/*===  End Eghteyare User For Select Users ===*/}

              {/* {datBssToSendOrder != "" && datBssToSendOrder != null ? ( */}
              {satUserClickNow.IdBssUserValueClick != "" ? (
                <div
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    textAlign: "right",
                  }}
                  dir="rtl"
                >
                  <FormLabel
                    className="styLablToDoAc"
                  >
                    الاختيار المنتح
                  </FormLabel>
                  <div style={{ textAlign: "right", marginBottom: "12px" }}>
                    <CountryInput
                      TypeShowData={"user"}
                      currentPayment={"mru"}
                      ValueUserSeckeClick={HandleAllsVlueUserClick}
                      TypeAction="Prodects"
                      dataFeth={AllDatdsDasb.dataAllProdBss}
                    />
                  </div>

                  <CartQuantiteProdect
                    TypeShowDate={"Quantitey"}
                    oneSelSel={"oneSelSel"}
                    currentPayment={"mru"}
                    typShowImg={'Prodect'}
                    SheckCategoruProd={selectedProdects}
                    setSheckCategoruProd={setSelectedProdects}
                  />
                </div>
              ) : (
                ""
              )}
              {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}

              {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
              {satUserClickNow.ProdUserClick != "" &&
              satUserClickNow.IdBssUserValueClick != "" ? (
                <div
                  style={{ width: "100%", marginBottom: "20px" }}
                  dir="rtl"
                >
                  <div style={{ textAlign: "right" }}>
                    <FormLabel
                      className="styLablToDoAc"
                    >
                      الاختيار طريقة الدفع
                    </FormLabel>

                    <CountryInput
                      TypeShowData={"payment"}
                      TypeAction={'payment'}
                      ValueUserSeckeClick={HandleAllsVlueUserClick}
                      dataFeth={AllDatdsDasb.PaymentsMeyhods}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}

              {satUserClickNow.IdBssUserValueClick != "" &&
              satUserClickNow.paymentUserClick != "" &&
              satUserClickNow.ProdUserClick != "" &&
              TypeNamePaymenttOdOaCtion != "Selefe" &&
              TypeNamePaymenttOdOaCtion != "CASH" 
              ? (
                <div
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    textAlign: "right",
                  }}
                >
                  <FormLabel
                    className="styLablToDoAc"
                  >
                    صورة توثيق تحويل الاموال الى {`(${NumberPaymentMethod})`}
                  </FormLabel>
                  <SelectInputeAndDate
                    TitlInp={""}
                    typeMyInput={"file"}
                    ValueInpuNowAndThisShange={HandelImgMyProdect}
                  />
                </div>
              ) : (
                ""
              )}

              {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}

              {/*  Start Eghteyare User For Select Users */}
              <div style={{ width: "100%", marginBottom: "20px" }} dir="rtl">
                <div style={{ textAlign: "right" }}>
                  <FormLabel
                    style={{
                      fontSize: "25px",
                      color: "rgb(74, 108, 247)",
                      marginRight: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    تكلفة الاجمالية{" "}
                    <span style={{ color: "#f00" }}>{`${TotalPrice} ${
                      // AllDatdsDasb
                      //   ? AllDatdsDasb.MyCurrentPaymentPay.currentCantry
                      //   : ""
                      " MRU"
                    }`}</span>
                  </FormLabel>
                </div>
              </div>
              {/*===  End Eghteyare User For Select Users ===*/}

              {/*  Start Style Btn To Send All Data User */}
              <Button
                type="submit"
                style={{ padding: "12px 22px", fontSize: "27px" }}
              >
                اصافة
              </Button>
              {/* === End Style Btn To Send All Data User ===*/}
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Order_Management_Add;