import { Button, Container } from "@mui/joy";
import * as React from "react";
import CountryInput from "../Commponent/CantryInput";
import { FormLabel } from "@mui/material";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import { useDialogActionContext } from "../Context/DialogActionContext";
import { useSelector, useDispatch } from "react-redux";
import TitelPage from "../Commponent/TitelPage";
import { edartpaymentsmethodsbsstoaddnowpaymentmethodforbss } from "../../allsliceproj/Payment_Settings_Management_Bss/Payment_Settings_Management_Bss_Slice";
import Header from "../layoute/Header";
import { SearchSelectForDateToClickAndBtn } from "../Commponent/SearchSelectForDateToClickAndBtn";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// Here To Get Data Paymetn Methods Now Is Not For Server
const DataMtmentMethod = [
  { id: 1, nameOne: "Bankily", image: "", nameTou: 0 },
  { id: 6, nameOne: "Selefe", image: "", nameTou: 0 },
  { id: 2, nameOne: "Masref", image: "", nameTou: 0 },
  { id: 3, nameOne: "Sedad", image: "", nameTou: 0 },
  { id: 5, nameOne: "MoveMorel", image: "", nameTou: 0 },
  { id: 4, nameOne: "CASH", image: "", nameTou: 0 },
]; //== Here To Get Data Paymetn Methods Now Is Not For Server ==//

// Here To Get Data Current Cantry Now Is Not For Server
const DataCantry = [
  { id: 1, nameOne: "MRU", image: "" },
  { id: 2, nameOne: "USD", image: "" },
  { id: 3, nameOne: "USDT", image: "" },
  { id: 5, nameOne: "EAD", image: "" },
]; //== Here To Get Data Current Cantry Now Is Not For Server ==//

let datUserClick = "";

let SheckBtnAfterAction = false;

const Payment_Settings_Management_Add = () => {
  const navigate = useNavigate();
  const [selectedProdects, setSelectedProdects] = React.useState([]);

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.Payment_Settings_Management_Bss.typRequestNow;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck User Login Now To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if(ProfileSnageNow && ProfileSnageNow.TypProf !== "bss") {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Payment-Settings-Management/Add", ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
  } = useDialogActionContext();

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typeRequestRsp) {
        case "edartpaymentsmethodsbsstoaddnowpaymentmethodbss":
          HandleCloseOrOpenReadinPage(false);  
          switch (resultrquestaction) {
            case 0:
              OpenDialogForActionSuccess(
                "لقد تم انشاء المعلومات الدفع بنجاح كما تم تحويلك الى صفحت الادارة الاعدادات الدفع",
              );
              navigate('/Payment-Settings-Management')
            return;
            case 5:
              OpenDialogForActionFound(
                "تعذر تغيير  البيانات او هناك مشكلة فشبك الانترنت حاول في وقت لاحق"
              );
            return;
            case 9:
              OpenDialogForActionFound(
                "يبدو بانك تحاول تكرار خيارات الدغع نقدي او سلف و لتي لا يتاح تكرارها ولا حاج لها يمكنك تغيير لبيانات و لمحاول"
              );
            return;
            case 11:
              OpenDialogForActionFound(
                " يبدو بانك سبق و قمت باضافت نفس معلومات من قبل و لا حاج لتكرارها قم بتغيير لبيانات و لمحاول "
              );
            return;
            case 99:
              OpenDialogForActionFound(
                "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
              );
            return;
          }
        return;
        case "edartpaymentsmethodsbsstoaddcurectpaymentbss":
          HandleCloseOrOpenReadinPage(false); 
          switch (resultrquestaction) {
            case 1:
              OpenDialogForActionSuccess(
                `لقد تم انشاء العملة ${datUserClick.nameOne} للدفع و لمعاملات المالية بنجاح`,
              );
              navigate('/Payment-Settings-Management');
            return;
            case 3:
              OpenDialogForActionFound(
                "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
              );
            return;
            case 4:
              OpenDialogForActionFound(
                `يبدو بانك لا تملك كلمة السر الاعدادات تختاج لتفغيلعا و توجد فلاعدادات الحساب`
              );
            return;
            case 5:
              OpenDialogForActionFound(
                "تعذر تغيير  البيانات او هناك مشكلة فشبك الانترنت",
              );
              navigate('/Payment-Settings-Management');
            return;
            case 7:
              OpenDialogForActionFound(
                `لقد اضفت الخيار من قبل و لتغديله رجاء تواصل مع الدعم فلمركز المساعدات`
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
    typeRequestRsp === "edartpaymentsmethodsbsstoaddcurectpaymentbss",
    typeRequestRsp === "edartpaymentsmethodsbsstoaddnowpaymentmethodbss",
  ]); //== End Sheck Type Request To Show Result For User ==//

  // Start Cop Date Prodect To Update Prodect In Quantitel Shange
  const HandelGetValueSelectedUserClick = (valueInputeNow) => {
    if (valueInputeNow != null) {
      const prodectNoew = {
        id: valueInputeNow.id,
        name: valueInputeNow.nameOne,
        number: "",
      };
      setSelectedProdects([prodectNoew]);
    }
  } //=== End Cop Date Prodect To Update Prodect In Quantitel Shange ===//

  // Start To Send Confirmed Data For Create Payment method
  const HandleClickToSendDateProdect = async (e) => {
    e.preventDefault();
    const MxmuinNmb = 4;
    if (selectedProdects.length == 0) {
      OpenDialogForActionFound("رجاء ادخال على الاقل طريقة الدفع واحد");
    } else if (
      selectedProdects[0].name != "CASH" &&
      selectedProdects[0].name != "Selefe" &&
      selectedProdects[0].number.length < MxmuinNmb
    ) {
      return OpenDialogForActionFound(
        `رجاء ادخال الارقام يكونو ب${MxmuinNmb} الارقام بلا زيادة او نقصان فاخيار ${selectedProdects[0].name}`
      );
    } else {
      const data = {
        NamesPaymentmethod: selectedProdects[0].name,
        NumbersPaymentmethod: selectedProdects[0].number,
      };
      
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartpaymentsmethodsbsstoaddnowpaymentmethodforbss(data));
    }
  } //=== To Send Confirmed Data For Create Payment method === //

  // Start Show Aleart To Confirmed Add Current Payment For Bss
  const HandelSendRequestCurrentPayment = (valueInput) => {
    if (valueInput == "" || valueInput == null) {
      OpenDialogForActionFound("رجاء ادخال على الاقل طريقة الدفع واحد");
    } else {
      datUserClick = valueInput;
      TypeAlearVipNow(
        valueInput,
        "CreateCurrentPaymentFromEdartPaymentMethodsBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد العملية انشاء العملة للمعاملات المالية ${valueInput.nameOne}`,
        "تاكيد",
        "",
        "bss",
        `تاكيد عملبية اختيار ${valueInput.nameOne} خيار دائم للدفع على علم بان عملية تحديثه ستتطلب تواصل مع الدعم من اجل نضام المعلومات `,
        valueInput.id
      );
    }
  } //== End Show Aleart To Confirmed Add Current Payment For Bss ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"Edartpaymentmethods"} />
        <Container>
          <div className="stlcartfroalldatapagaddmeweve">
            <TitelPage TitelPage="اضافة خيارات الدفع و العملة" />

            <form
              className="FromDateAddProdect"
              style={{ width: "90%", direction: "rtl" }}
              onSubmit={(e) => HandleClickToSendDateProdect(e)}
            >
              {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
              <div style={{ width: "100%", marginBottom: "20px" }} dir="rtl">
                <div style={{ textAlign: "right" }}>
                  <FormLabel
                    style={{
                      fontSize: "25px",
                      color: "#3F51B5",
                      marginRight: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    الاختيار طريقة الدغع
                  </FormLabel>
                  <CountryInput
                    ValueUserSeckeClick={HandelGetValueSelectedUserClick}
                    dataFeth={DataMtmentMethod}
                    // logo={logo}
                  />
                </div>
                <CartQuantiteProdect
                  SheckCategoruProd={selectedProdects}
                  // logo={logo}
                  setSheckCategoruProd={setSelectedProdects}
                />
              </div>
              {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}

              {/*  Start Style Btn To Send All Data User */}
              <button
                className={`Stlybtntoaddmorepaymentmenthod ${
                  selectedProdects.length != 0 ? "active" : ""
                }`}
                disabled={selectedProdects.length == 0}
                type="submit"
                style={{ padding: "12px 22px", fontSize: "27px" }}
              >
                تاكيد البيانات
              </button>
              {/* === End Style Btn To Send All Data User ===*/}
            </form>

            {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
            <div style={{ width: "90%", marginBottom: "20px" }} dir="rtl">
              <div style={{ textAlign: "right" }}>
                <FormLabel
                  style={{
                    fontSize: "25px",
                    color: "#3F51B5",
                    marginRight: "15px",
                    marginBottom: "10px",
                  }}
                >
                  الاختيار العملة للمعاملات
                </FormLabel>
                <SearchSelectForDateToClickAndBtn
                  dataFeth={DataCantry}
                  HandelSendDateAllsInThisForm={
                    HandelSendRequestCurrentPayment
                  }
                  TypeShowData="Sereash"
                  ActionBtn="تاكيد"
                />
              </div>
            </div>
            {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}
          </div>
        </Container>
      </div>
    );
  }
}

export default Payment_Settings_Management_Add;