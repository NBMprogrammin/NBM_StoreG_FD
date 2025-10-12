import { Button, Container } from "@mui/joy";
import * as React from "react";
// import logo from "../../logo.png";
import CountryInput from "../Commponent/CantryInput";
import { FormLabel } from "@mui/material";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import { useDialogActionContext } from "../Context/DialogActionContext";
import TitelPage from "../Commponent/TitelPage";
import { useSelector, useDispatch } from "react-redux";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { edartpayprodectbssCreateNowProdect } from "../../allsliceproj/Edart Pay Prodects/edartPayProdectdsSlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

let DataUserSheck = "";
let ImageToSendMany = "";

let ValuePayMenteMethod = "";

let TotalPrice = "";
let DataMyProdect = [];
let DataMyZebounses = [];
let NumberPaymentMethod = "";
let TypeNamePaymenttOdOaCtion = "";
let datPaymentMethods = [];
let valueProdUserClick = "";
// الامتدادات المسموح بها
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export default function MyPayMenteUser() {
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const [valuePaymentNow, setvaluePaymentNow] = React.useState([]);
  const [handlevalueImgPayment, setHandleValueImgPayment] = React.useState("");

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartpayprodects.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.edartpayprodects.typRequestNow;
  });

  const dataShowProd = useSelector((state) => {
    return state.edartpayprodects.dataShowPayProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typeRequestRsp === "edartpayprodectbssToCreactPayProd") {
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `تم انشاء تخزين وثيقت البيع المشترك مع زبون (${DataUserSheck.nameTou}) ${DataUserSheck.nameOne} بنجاح سيتم انتقال الى صفحت لمبيعات`,
          "active"
        );
        setTimeout(() => {
          window.location.href = "/My-Payment-Prodect";
        }, 4500);
      } else if (resultrquestaction === 7) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          `يبدو بانك لا تمتلك كمية لكافية من لمنتج (${dataShowProd.name}) و لذي يتوفر منه ${dataShowProd.quantite} بينما تحاول بيع لكمية ${dataShowProd.quantitetopay} قم بزيادة المخزون او انقص لكمية لمطلوب`
        );
      } else if (resultrquestaction === 12) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          `يبدو بان تاجر اوقف او لم يتيح للزبون ${DataUserSheck.nameOne} صلاحية الدين `
        );
      } else if (resultrquestaction === 16) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          `يبدو بان تاجر اوقف او لم يتيح لك كمزضف صلاحية ادارة المبيعات `
        );
      } else if (resultrquestaction === 10) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          "تم رصد مشكلة في احد لمنتجات لمطلوب للمبيعة حيث تم رصد حذفه من طرف تاجر او هناك مشكلة ما حاول في وقت اخر"
        );
      } else if (resultrquestaction === 6) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          "تم رصد مشكلة في احد لمنتجات في كميته يبدو بانها غير منطقية او غير متوفر حاليا"
        );
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "edartpayprodectbssToCreactPayProd",
  ]); //== End Sheck Type Request To Show Result For User ==//

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DataMyProdect = AllsDataUserNow.MayProd;
      DataMyZebounses = AllsDataUserNow.MayZeboune;
      datPaymentMethods = AllsDataUserNow.MyPaymentMehods;
    }
  }, [AllsDataUserNow]); //== End Get Value Varyale Generale To Semthing Action ==//

  // Start Cop Date Prodect To Update Prodect In Quantitel Shange
  function HandelGetValueSelectedUserClick(valueInputeNow) {
    if (valueInputeNow != null) {
      valueProdUserClick = valueInputeNow;
      const prod = selectedProdects.some(
        (prodect) => prodect.id === valueInputeNow.id
      );
      if (prod) {
        return;
      }
      if (valueInputeNow.nameThere != 0) {
        const prodectNoew = {
          id: valueInputeNow.id,
          price: valueInputeNow.nameTou,
          name: valueInputeNow.nameOne,
          image: valueInputeNow.image,
          quantieStorage: valueInputeNow.nameThere,
          quantiteNow: parseInt(1),
          totals: valueInputeNow.nameTou,
          contentStor: false,
        };
        setSelectedProdects([...selectedProdects, prodectNoew]);
      }
    }
  } //=== End Cop Date Prodect To Update Prodect In Quantitel Shange ===//

  // Start Get Date User To Storage For Prodect
  function ValueUserSeckeClick(val) {
    DataUserSheck = val;
  } //=== End Get Date User To Storage For Prodect ===//

  // Start Get Date User To Payment Method For Prodect
  function HandlePaymentMethod(val) {
    ValuePayMenteMethod = val;
    setvaluePaymentNow(val);

    if (val == null) {
      TypeNamePaymenttOdOaCtion = "";
      NumberPaymentMethod = "";
    } else {
      TypeNamePaymenttOdOaCtion = val.nameOne;
      NumberPaymentMethod = val.nameTou;
    }
  } //== End Get Date User To Payment Method For Prodect ==//

  // Start Get Date User To Img For Prodect
  function HandelImgMyProdect(val) {
    ImageToSendMany = val;
    setHandleValueImgPayment(val);
  } // End Get Date User To Img For Prodect ==//

  // Start Here To Calcul To Payment Pordect For Maney
  React.useMemo(() => {
    TotalPrice = selectedProdects.reduce(
      (sum, item) => sum + item.price * item.quantiteNow,
      0
    );
  }, [selectedProdects]); //== End Here To Calcul To Payment Pordect For Maney ==//

  // دالة للتحقق من امتداد الملف
  function isValidFileExtension(filename) {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

  // Start To Handle Send Request For Create Now Payment Prodect
  function HandleClickToSendDateProdect(e) {
    e.preventDefault();
    if (ValuePayMenteMethod == "") {
      OpenDialogForActionFound(
        "رجاء ادخال طريقة الدغع من اجل للاكمال توثيق البيع"
      );
    } else if (selectedProdects == "") {
      OpenDialogForActionFound(
        "رجاء ادخال على الاقل منتج واحد من اجل للاكمال توثيق البيع"
      );
    } else if (DataUserSheck == "" || DataUserSheck == null) {
      OpenDialogForActionFound(
        "رجاء ادخال الاسم زبون المستفيد من البيع من اجل للاكمال توثيق البيع"
      );
    } else {
      if (handlevalueImgPayment.size > 1000010) {
        OpenDialogForActionFound("حجم الصورة يجب أن يكون أقل من 1");
        return;
      }

      if (!handlevalueImgPayment.type.startsWith("image/")) {
        OpenDialogForActionFound("الملف يجب أن يكون صورة");
        return;
      }
      if (!isValidFileExtension(handlevalueImgPayment.name)) {
        OpenDialogForActionFound(
          "❌ يجب ان تكون صورة من احد انواع تالية jpeg او jpg و فقط"
        );
        return null;
      }
      let ArrayProdect = [];
      let ArrayQuantite = [];
      const FetchAllMoreDat = selectedProdects.map((prod) => {
        return (
          ArrayProdect.push(prod.id) && ArrayQuantite.push(prod.quantiteNow)
        );
      });
      const data = {
        productID: ArrayProdect,
        quantities: ArrayQuantite,
        imagePayment: handlevalueImgPayment,
        PaymentMethod: ValuePayMenteMethod.id,
        NamberZeboune: DataUserSheck.nameTou,
      };
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartpayprodectbssCreateNowProdect(data));
    }
  } //== End To Handle Send Request For Create Now Payment Prodect ==//

  if (token) {
    if (
      (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") ||
      ProfileSnageNow.TypProf == "teweve"
    ) {
      return (
        <div style={{ marginTop: "110px" }}>
          <Header typeactive={"EdartPayProdects"} />
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
                marginBottom: "30px",
                width: "100%",
              }}
            >
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
                <TitelPage TitelPage="انشاء توثيقة البيع" />

                <form
                  className="FromDateAddProdect"
                  style={{ width: "90%", direction: "rtl" }}
                  onSubmit={(e) => HandleClickToSendDateProdect(e)}
                >
                  {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
                  <div
                    style={{ width: "100%", marginBottom: "20px" }}
                    dir="rtl"
                  >
                    <div style={{ textAlign: "right" }}>
                      <FormLabel
                        style={{
                          fontSize: "25px",
                          marginRight: "15px",
                          marginBottom: "10px",
                          color: "rgb(155, 139, 139)",
                        }}
                      >
                        الاختيار طريقة الدفع
                      </FormLabel>

                      <CountryInput
                        TypeShowData={"payment"}
                        ValueUserSeckeClick={HandlePaymentMethod}
                        dataFeth={datPaymentMethods}
                      />
                      {/* <CountryInput  ValueUserSeckeClick={HandelGetValueSelectedUserClick} dataFeth={DataProdectUs} logo={logo}/>   valueShangHandleNow={HandleValueShangeNow}  */}
                    </div>
                  </div>
                  {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}
                  {/* TypeNamePaymenttOdOaCtion */}
                  {TypeNamePaymenttOdOaCtion != "" &&
                  TypeNamePaymenttOdOaCtion != null &&
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
                          color: "rgb(155, 139, 139)",
                          marginRight: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        صورة توثيق تحويل الاموال الى{" "}
                        {`(${NumberPaymentMethod})`}
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
                  {TypeNamePaymenttOdOaCtion != "" &&
                  TypeNamePaymenttOdOaCtion != null ? (
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
                          color: "rgb(155, 139, 139)",
                          marginRight: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        الاختيار المنتح
                      </FormLabel>
                      <div style={{ textAlign: "right", marginBottom: "12px" }}>
                        <CountryInput
                          TypeShowData={"PayProd"}
                          currentPayment={
                            AllsDataUserNow
                              ? AllsDataUserNow.MyCurrentPaymentPay
                                  .currentCantry
                              : ""
                          }
                          ValueUserSeckeClick={HandelGetValueSelectedUserClick}
                          dataFeth={DataMyProdect}
                        />
                      </div>

                      <CartQuantiteProdect
                        TypeShowDate={"Quantitey"}
                        oneSelSel={"oneSelSel"}
                        currentPayment={
                          AllsDataUserNow
                            ? AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                            : ""
                        }
                        SheckCategoruProd={selectedProdects}
                        // logo={logo}
                        setSheckCategoruProd={setSelectedProdects}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}

                  {/*  Start Eghteyare User For Select Users */}
                  {TypeNamePaymenttOdOaCtion != "" &&
                  TypeNamePaymenttOdOaCtion != null &&
                  valueProdUserClick != "" &&
                  valueProdUserClick != null ? (
                    <div
                      style={{ width: "100%", marginBottom: "20px" }}
                      dir="rtl"
                    >
                      <div style={{ textAlign: "right" }}>
                        <FormLabel
                          style={{
                            fontSize: "25px",
                            color: "rgb(155, 139, 139)",
                            marginRight: "15px",
                            marginBottom: "10px",
                          }}
                        >
                          الاختيار زبون
                        </FormLabel>
                        <CountryInput
                          datPaymentToCont={TypeNamePaymenttOdOaCtion}
                          TypeShowData={"PayProdForZeboune"}
                          dataFeth={DataMyZebounses}
                          ValueUserSeckeClick={ValueUserSeckeClick}
                          // logo={logo}
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/*===  End Eghteyare User For Select Users ===*/}

                  {/*  Start Eghteyare User For Select Users */}
                  <div
                    style={{ width: "100%", marginBottom: "20px" }}
                    dir="rtl"
                  >
                    <div style={{ textAlign: "right" }}>
                      <FormLabel
                        style={{
                          fontSize: "25px",
                          color: "rgb(155, 139, 139)",
                          marginRight: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        تكلفة الاجمالية{" "}
                        <span style={{ color: "#f00" }}>{`${TotalPrice} ${
                          AllsDataUserNow
                            ? AllsDataUserNow.MyCurrentPaymentPay.currentCantry
                            : ""
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
            </div>
          </Container>
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
