import { Button, Container } from "@mui/joy";
import * as React from "react";
// import logo from "../../logo.png";
import CountryInput from "../Commponent/CantryInput";
import { FormLabel } from "@mui/material";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import { useDialogActionContext } from "../Context/DialogActionContext";
import { useSelector, useDispatch } from "react-redux";
import TitelPage from "../Commponent/TitelPage";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { edartordersuserstoCreateNowMyOrder } from "../../allsliceproj/Edart Orders user/edartOrdersUserSlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

let datBssToSendOrder = "";
let ImageToSendMany = "";

let ValuePayMenteMethod = "";
let TotalPrice = "";
let NumberPaymentMethod = "";
let TypeNamePaymenttOdOaCtion = "";
let dataMyICalyan = "";
let dataAllProdBss = "";
let AllsPaymentsMethodsBss = "";
let NameBssToSendOrder = "";
export default function AddMyOrdersForProdectsPay() {
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const [satUserClickNow, setsatUserClickNow] = React.useState({
    IdBssUserValueClick: "",
    ProdUserClick: "",
    paymentUserClick: "",
  });

  const dispatsh = useDispatch();

  // Start Get Data Form Edart Orders ser To Create New Order
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartOrdersUser.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.edartOrdersUser.typRequestNow;
  });

  const dataShowProd = useSelector((state) => {
    return state.edartOrdersUser.dataShowPayProd;
  });
  //== End Get Data Form Edart Orders ser To Create New Order ==//

  // Start Get Date User To Storage For Prodect
  function HandleAllsVlueUserClick(val, tpeAction) {
    if (val != null) {
      if (tpeAction === "BssUserClick") {
        datBssToSendOrder = val;
        NameBssToSendOrder = val.nameOne;
        setsatUserClickNow({ ...satUserClickNow, IdBssUserValueClick: val.id });
      } else if (tpeAction === "Prodects") {
        setsatUserClickNow({ ...satUserClickNow, ProdUserClick: val.id });
        if (val != null) {
          const prod = selectedProdects.some(
            (prodect) => prodect.id === val.id
          );
          if (prod) {
            return;
          }
          if (val.nameThere != 0) {
            const prodectNoew = {
              id: val.id,
              price: val.nameTou,
              name: val.nameOne,
              image: val.image,
              quantieStorage: val.nameThere,
              quantiteNow: parseInt(1),
              totals: val.nameTou,
              contentStor: false,
            };
            setSelectedProdects([...selectedProdects, prodectNoew]);
          }
        }
      } else if (tpeAction === "paymentMethod") {
        ValuePayMenteMethod = val;
        TypeNamePaymenttOdOaCtion = val.nameOne;
        NumberPaymentMethod = val.nameTou;
        setsatUserClickNow({ ...satUserClickNow, paymentUserClick: val.id });
      }
    } else {
      if (tpeAction === "BssUserClick") {
        setsatUserClickNow({
          ...satUserClickNow,
          IdBssUserValueClick: "",
          ProdUserClick: "",
          paymentUserClick: "",
        });
        TypeNamePaymenttOdOaCtion = "";
        NumberPaymentMethod = "";
        setSelectedProdects([]);
      } else if (tpeAction === "paymentMethod") {
        setsatUserClickNow({ ...satUserClickNow, paymentUserClick: "" });
      }
    }
  } //=== End Get Date User To Storage For Prodect ===//

  const {
    AllDatdsDasb,
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  // Start Show Aleart For User Semo Semthing Action
  React.useMemo(() => {
    if (typeRequestRsp === "edartorderUserToCreateNowOrder") {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `تم انشاء طلبيتك فلانتظار رد من تاخر ${NameBssToSendOrder} سيتم نقلك الى صفحت طلبيات  `,
          "active"
        );
        setTimeout(() => {
          window.location.href = "/My-Orders";
        }, 4500);
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان تاجر لم يتيح لك بعد صلاحية لدين او انه اوقفها رجا تواص مع تاجر فلموضوع`
        );
      } else if (resultrquestaction === 7) {
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
      } else if (resultrquestaction === 22) {
        OpenDialogForActionFound(
          "لقد تم رصد مشكلة فلكمية احد لمنتجات لمختار غير مفهوم رجاء حاول في وقت  لاحق"
        );
      } else if (resultrquestaction === 10) {
        OpenDialogForActionFound(
          "يبدو بان احد لمنتجات لمختار لم يعد متوفر او ان هناك مشكلة اخرى رجاء حاول مرة اخرى"
        );
      }
    }
  }, [resultrquestaction, typeRequestRsp === "edartorderUserToCreateNowOrder"]); //== End Show Aleart For User Semo Semthing Action ==//

  // Start Get All Data To Do Semthing Action
  React.useMemo(() => {
    if (AllDatdsDasb) {
      dataMyICalyan = AllDatdsDasb.DatBssICalyan;
      dataAllProdBss = AllDatdsDasb.dataAllProdBss;
      AllsPaymentsMethodsBss = AllDatdsDasb.PaymentsMeyhods;
    }
  }, [AllDatdsDasb]); //== End Get All Data To Do Semthing Action ==//

  // Start Her To Handle Value Img Confirmed Payment
  function HandelImgMyProdect(val) {
    ImageToSendMany = val;
  } //== End Her To Handle Value Img Confirmed Payment ==//

  // Start Here To Calcule ToTale Orders
  React.useMemo(() => {
    if (satUserClickNow.IdBssUserValueClick != "") {
      TotalPrice = selectedProdects.reduce(
        (sum, item) => sum + item.price * item.quantiteNow,
        0
      );
    } else {
      TotalPrice = 0;
    }
  }, [selectedProdects]); //== End Here To Calcule ToTale Orders ==//

  // Start Handle Data To Send Request For Create Now Order
  function HandleClickToSendDateProdect(e) {
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

  if (token) {
    if (ProfileSnageNow && ProfileSnageNow.TypProf === "user") {
      return (
        <div className="stlefirstdivcontrolinpage">
          <Header typeactive={"Edartorders"} />
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
              }}
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
                      style={{
                        fontSize: "25px",
                        color: "#fff",
                        marginRight: "15px",
                        marginBottom: "10px",
                      }}
                    >
                      الاختيار تاجر
                    </FormLabel>
                    <CountryInput
                      TypeShowData={"PayProdForZeboune"}
                      dataFeth={dataMyICalyan}
                      TypeAction="BssUserClick"
                      // ValueUserSeckeClick={HandleValueBssToSendMyOrder}
                      ValueUserSeckeClick={HandleAllsVlueUserClick}
                      // logo={logo}
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
                      style={{
                        fontSize: "25px",
                        color: "#fff",
                        marginRight: "15px",
                        marginBottom: "10px",
                      }}
                    >
                      الاختيار المنتح
                    </FormLabel>
                    <div style={{ textAlign: "right", marginBottom: "12px" }}>
                      <CountryInput
                        TypeShowData={"PayProd"}
                        currentPayment={"mru"}
                        ValueUserSeckeClick={HandleAllsVlueUserClick}
                        TypeAction="Prodects"
                        dataFeth={dataAllProdBss}
                      />
                    </div>

                    <CartQuantiteProdect
                      TypeShowDate={"Quantitey"}
                      oneSelSel={"oneSelSel"}
                      currentPayment={"mru"}
                      SheckCategoruProd={selectedProdects}
                      // logo={logo}
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
                        style={{
                          fontSize: "25px",
                          color: "#fff",
                          marginRight: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        الاختيار طريقة الدفع
                      </FormLabel>

                      <CountryInput
                        TypeShowData={"payment"}
                        // ValueUserSeckeClick={HandlePaymentMethod}
                        ValueUserSeckeClick={HandleAllsVlueUserClick}
                        // dataFeth={DatePaymentMethod}
                        TypeAction="paymentMethod"
                        dataFeth={AllsPaymentsMethodsBss}
                      />
                      {/* <CountryInput  ValueUserSeckeClick={HandelGetValueSelectedUserClick} dataFeth={DataProdectUs} logo={logo}/>   valueShangHandleNow={HandleValueShangeNow}  */}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {/* {datBssToSendOrder != "" && datBssToSendOrder != null ? (
                  ) : (
                    <></>
                  )} */}
                {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}

                {/* TypeNamePaymenttOdOaCtion */}
                {satUserClickNow.IdBssUserValueClick != "" &&
                satUserClickNow.paymentUserClick != "" &&
                TypeNamePaymenttOdOaCtion != "Selefe" &&
                TypeNamePaymenttOdOaCtion != "CASH" ? (
                  <div
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      textAlign: "right",
                    }}
                  >
                    <FormLabel
                      style={{
                        fontSize: "25px",
                        color: "#fff",
                        marginRight: "15px",
                        marginBottom: "10px",
                      }}
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
                        color: "#fff",
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
  } else {
    HandleCloseOrOpenReadinPage(true);
    Cookies.remove("user_token");
    window.location.href = "home";
  }
}
