import { Button, Container } from "@mui/joy";
import * as React  from "react";
import {useEffect } from "react";
import CountryInput from "../Commponent/CantryInput";
import { FormLabel } from "@mui/material";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import { useDialogActionContext } from "../Context/DialogActionContext";
import TitelPage from "../Commponent/TitelPage";
import { useSelector, useDispatch } from "react-redux";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { edartpayprodectbssCreateNowProdect } from "../../allsliceproj/Sales_Management_Bss/Sales_Management_Bss_Slice";
import { useNavigate } from "react-router-dom";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
const token = Cookies.get("token");

let DataUserSheck = "";
let ImageToSendMany = "";

let ValuePayMenteMethod = "";

let NumberPaymentMethod = "";
let TypeNamePaymenttOdOaCtion = "";
let valueProdUserClick = "";
// الامتدادات المسموح بها
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg"];

const Sales_Management_Add = () => {
  const navigate = useNavigate();
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const [valuePaymentNow, setvaluePaymentNow] = React.useState([]);
  
  const dispatsh = useDispatch();
  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Sales_Management_Bss.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.Sales_Management_Bss.typRequestNow;
  });

  const dataShowProd = useSelector((state) => {
    return state.Sales_Management_Bss.dataShowPayProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if (ProfileSnageNow.TypProf === "user" ) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
      setvaluePaymentNow([])
    };
    checkAuthentication();
  }, [navigate === "/Sales-Management/Add", ProfileSnageNow]);

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typeRequestRsp) {
      case "edartpayprodectbssToCreactPayProd":
        HandleCloseOrOpenReadinPage(false);
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `تم انشاء تخزين وثيقت البيع المشترك مع زبون (${DataUserSheck.nameTou}) ${DataUserSheck.nameOne} بنجاح كما انتقال الى صفحت لمبيعات`,
            );
            setvaluePaymentNow([])
            navigate("/Sales-Management");
          return;
          case 6:
            OpenDialogForActionFound(
              "تم رصد مشكلة في احد لمنتجات في كميته يبدو بانها غير منطقية او غير متوفر حاليا"
            );
          return;
          case 7:
            OpenDialogForActionFound(
              `يبدو بانك لا تمتلك كمية لكافية من لمنتج (${dataShowProd.name}) و لذي يتوفر منه ${dataShowProd.quantite} بينما تحاول بيع لكمية ${dataShowProd.quantitetopay} قم بزيادة المخزون او انقص لكمية لمطلوب`
            );
          return;
          case 10:
            OpenDialogForActionFound(
              "تم رصد مشكلة في احد لمنتجات لمطلوب للمبيعة حيث تم رصد حذفه من طرف تاجر او هناك مشكلة ما حاول في وقت اخر"
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان تاجر اوقف او لم يتيح للزبون ${DataUserSheck.nameOne} صلاحية الدين `
            );
          return;
          case 16:
            OpenDialogForActionFound(
              `يبدو بان تاجر اوقف او لم يتيح لك كمزضف صلاحية ادارة المبيعات `
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
  }, [
    resultrquestaction,
    typeRequestRsp === "edartpayprodectbssToCreactPayProd",
  ]); //== End Sheck Type Request To Show Result For User ==//

  // Start Cop Date Prodect To Update Prodect In Quantitel Shange
  const HandelGetValueSelectedUserClick = (valueInputeNow) => {
    if (valueInputeNow != null) {
      valueProdUserClick = valueInputeNow;
      const prod = selectedProdects.some(
        (prodect) => prodect.id === valueInputeNow.id
      );
      if (prod) {
        return;
      }
      if (valueInputeNow.nameThere != 0) {
        setSelectedProdects([...selectedProdects, {
          id: valueInputeNow.id,
          price: valueInputeNow.nameTou,
          name: valueInputeNow.nameOne,
          image: valueInputeNow.image,
          quantieStorage: valueInputeNow.nameThere,
          quantiteNow: parseInt(1),
          totals: valueInputeNow.nameTou,
          contentStor: false,
        }]);
      }
    }
  } //=== End Cop Date Prodect To Update Prodect In Quantitel Shange ===//

  // Start Get Date User To Storage For Prodect
  const ValueUserSeckeClick = (val) => {
    DataUserSheck = val;
  } //=== End Get Date User To Storage For Prodect ===//

  // Start Get Date User To Payment Method For Prodect
  const HandlePaymentMethod = (val) => {
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
  const HandelImgMyProdect = (val) => {
    ImageToSendMany = val;
  } // End Get Date User To Img For Prodect ==//

  // Start Here To Calcul To Payment Pordect For Maney
  const TotalPrice = React.useMemo(() => {
    return selectedProdects.reduce(
      (sum, item) => sum + item.price * item.quantiteNow,
      0
    );
  }, [selectedProdects]); //== End Here To Calcul To Payment Pordect For Maney ==//

  // دالة للتحقق من امتداد الملف
  const isValidFileExtension = (filename) => {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

  // Start To Handle Send Request For Create Now Payment Prodect
  const HandleClickToSendDateProdect = async (e) => {
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
      
      if (ImageToSendMany != '' && ImageToSendMany.size > 1000010) {
        OpenDialogForActionFound("حجم الصورة يجب أن يكون أقل من 1");
        return;
      }

      if (ImageToSendMany != '' && !ImageToSendMany.type.startsWith("image/")) {
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
      const FetchAllMoreDat = selectedProdects.map((prod) => {
        return (
          ArrayProdect.push(prod.id) && ArrayQuantite.push(prod.quantiteNow)
        );
      });
      const data = {
        productID: ArrayProdect,
        quantities: ArrayQuantite,
        imagePayment: ImageToSendMany,
        PaymentMethod: ValuePayMenteMethod.id,
        NamberZeboune: DataUserSheck.nameTou,
      };
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartpayprodectbssCreateNowProdect(data));
    }
  } //== End To Handle Send Request For Create Now Payment Prodect ==//

  if (
    (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") ||
    ProfileSnageNow.TypProf == "teweve"
  ) {
    return (
      <div style={{ marginTop: "110px" }}>
        <Header typeactive={"EdartPayProdects"} />
        <Container>
            <div
              className="DivContentPagAddSalse"
            >
              <TitelPage TitelPage="انشاء توثيقة البيع" />

              <form
                className="FromDateAddProdect"
                style={{ width: "90%", direction: "rtl" }}
                onSubmit={(e) => HandleClickToSendDateProdect(e)}
              >
                {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
                  <div style={{ width: "100%", marginBottom: "20px", textAlign: "right" }}>
                    <FormLabel
                      className="styLablToDoAc"
                    >
                      الاختيار طريقة الدفع
                    </FormLabel>

                    <CountryInput
                      TypeShowData={"payment"}
                      ValueUserSeckeClick={HandlePaymentMethod}
                      dataFeth={AllsDataUserNow.MyPaymentMehods}
                    />
                  </div>
                {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}
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
                      className="styLablToDoAc"
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
                      className="styLablToDoAc"
                    >
                      الاختيار المنتح
                    </FormLabel>
                    <div style={{ textAlign: "right", marginBottom: "12px" }}>
                      <CountryInput
                        TypeShowData={"Prodects"}
                        currentPayment={
                          AllsDataUserNow
                            ? AllsDataUserNow.MyCurrentPaymentPay
                                .currentCantry
                            : "MRU"
                        }
                        ValueUserSeckeClick={HandelGetValueSelectedUserClick}
                        dataFeth={AllsDataUserNow.MayProd}
                      />
                    </div>

                    <CartQuantiteProdect
                      TypeShowDate={"Quantitey"}
                      oneSelSel={"oneSelSel"}
                      currentPayment={'MRU'}
                      SheckCategoruProd={selectedProdects}
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
                        className="styLablToDoAc"
                      >
                        الاختيار زبون
                      </FormLabel>
                      <CountryInput
                        datPaymentToCont={TypeNamePaymenttOdOaCtion}
                        TypeShowData={ValuePayMenteMethod.nameOne}
                        TypeAction="BssUserClick"
                        dataFeth={AllsDataUserNow.MayZeboune}
                        ValueUserSeckeClick={ValueUserSeckeClick}
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
                      className="styLablToDoAc"
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
        </Container>
      </div>
    );
  }
}

export default Sales_Management_Add;