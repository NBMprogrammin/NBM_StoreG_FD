import { Button, Container } from "@mui/joy";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { useDialogActionContext } from "../Context/DialogActionContext";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormLabel } from "@mui/material";
import CountryInput from "../Commponent/CantryInput";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import TitelPage from "../Commponent/TitelPage";
import { edartProdectBssCreateProdect } from "../../allsliceproj/Products_Management_Bss/EdartProdectSlice";
import Header from "../layoute/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

let ImgMyProdect = "";
let descProdect = "";
let priceProdect = "";
let descriptionProdectAtr = "";
let titelProdectnow = "";
let TotalStorageProdect = "";
let DataMyCategory = "";
let DatShowFromD = "";

export default function Products_Management_Add() {
  const navigate = useNavigate();
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartprodectsbss.resultrquestactionProd;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.edartprodectsbss.typRequestNowProd;
  });

  const AllDatdsDasb = useSelector((state) => {
    return state.datauser.datauser;
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
    }, [navigate === "/Products-Management/add", ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  // Start Here To Get Sult For Semthing Request In Page
  React.useMemo(() => {
    if (resultrquestaction === 1) {
      HandleCloseOrOpenReadinPage(false);
      OpenDialogForActionSuccess(
        `تم انشاء المنتج ${titelProdectnow} بنجاح بعد قليل سيتم توجيهك الى صفحت المنتجاتك`,
        "active"
      );
      setTimeout(() => {
        window.location.href = "/My-Prodect";
      }, 5000);
    } else if (resultrquestaction === 6) {
      HandleCloseOrOpenReadinPage(false);
      OpenDialogForActionFound(
        `سبق و قمت بتخزين منتج باسم ${titelProdectnow} و لا حاج فتعدد اسماء نفس لمنتج رجاء تغييره`
      );
    } else if (resultrquestaction === 9) {
      HandleCloseOrOpenReadinPage(false);
      OpenDialogForActionFound(
        "حدث خطا اثناء انشاء المنتجك نعتذر و حاول في وقت لاحق"
      );
    } else if (resultrquestaction === 99) {
      OpenDialogForActionFound(
        "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
      );
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "edartprodectsbsstocreatemoreprodect",
  ]); //== End Here To Get Sult For Semthing Request In Page ==//

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllDatdsDasb) {
      DataMyCategory = AllDatdsDasb.MayCategory;
    }
  }, [AllDatdsDasb]); //== End Get Value Varyale Generale To Semthing Action ==//

  // Start Get Category Prodect For Content Create Prodect
  function HandleCategoryProdectIDUserClick(value, bn) {
    if (value != null) {
      const prod = selectedProdects.some((prodect) => prodect.id === value.id);
      if (prod) {
        return;
      }
      const prodectNoew = {
        id: value.id,
        name: value.nameOne,
      };
      setSelectedProdects([...selectedProdects, prodectNoew]);
    }
  } //=== End Get Category Prodect For Content Create Prodect ===//

  // Start Skek Eny Action To Do Semthing Now
  function HandleSheckActionDoNow(value, TypeActio) {
    if (TypeActio === "ImgToCreateProdecd") {
      ImgMyProdect = value;
    } else if (TypeActio === "TitelToCreateProdecd") {
      titelProdectnow = value;
    } else if (TypeActio === "DscroptionToCreateProdecd") {
      descriptionProdectAtr = value;
    } else if (TypeActio === "FirstPriceToCreateProdecd") {
      priceProdect = value;
    } else if (TypeActio === "TotalStorageToCreateProdecd") {
      TotalStorageProdect = value;
    } else if (TypeActio === "LastPriceToCreateProdecd") {
      descProdect = value;
    }
  } //=== End Skek Eny Action To Do Semthing Now ===//

  // Start Send Request Data For Create Nou Prodect User
  const HandleToCreateMyProdect = async (e) => {
    e.preventDefault();
    if (selectedProdects.length == 0) {
      OpenDialogForActionFound(
        "من اجل اكمال الخطوات التالية من ضروري ادخال علل الاقل تصنيف واحد لهذه المنتج"
      );
    } else if (titelProdectnow == undefined || titelProdectnow == "") {
      OpenDialogForActionFound("من ضروري ادخال اسم للمنتج ");
    } else if (titelProdectnow.length > 100) {
      OpenDialogForActionFound(
        "من ضروري ان لا يتجاوز اسم المنتج اكثر من 10a0 حرف  "
      );
    } else if (descriptionProdectAtr.length > 150) {
      OpenDialogForActionFound(
        "من ضروري ان لا يتجاوز تفاصيل المنتج اكثر من 150 حرف  "
      );
    } else if (
      priceProdect == undefined ||
      priceProdect == null ||
      priceProdect == "" ||
      priceProdect == 0
    ) {
      OpenDialogForActionFound("من ضروري ادخال سعر للمنتج كامل ");
    } else if (
      TotalStorageProdect == undefined ||
      TotalStorageProdect == undefined ||
      TotalStorageProdect == "" ||
      TotalStorageProdect == 0
    ) {
      OpenDialogForActionFound(
        "من ضروري ادخال كمية المخوزن المتوفر من او لكمية المتوقع "
      );
    } else {
      let errayDateIDCoop = [];
      errayDateIDCoop = selectedProdects.map((category) => {
        return category.id;
      });

      const DateProdect = {
        name: titelProdectnow,
        descprice: descProdect,
        priceprodect: priceProdect,
        discreption: descriptionProdectAtr,
        image: ImgMyProdect,
        categoryID: errayDateIDCoop,
        totaleinstorage: TotalStorageProdect,
      };
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartProdectBssCreateProdect(DateProdect));
    }
  }; //=== End Send Data For Create Nou Prodect User ===//

  // Start Here Get Alls Data Inpute To Do Semthing Action In Page From
  React.useMemo(() => {
    const dataShowTable = [
      {
        id: 1,
        titepInpt: "صورة المنتج",
        TypeInput: "file",
        TypAction: "ImgToCreateProdecd",
      },
      {
        id: 2,
        titepInpt: "الاسم المنتج",
        TypeInput: "text",
        TypAction: "TitelToCreateProdecd",
      },
      {
        id: 3,
        titepInpt: "تفاصيل المنتج",
        TypeInput: "text",
        TypAction: "DscroptionToCreateProdecd",
      },
      {
        id: 4,
        titepInpt: "سعر المنتج الاول",
        TypeInput: "number",
        TypAction: "FirstPriceToCreateProdecd",
      },
      {
        id: 5,
        titepInpt: "كمية المخزون من المنتج",
        TypeInput: "number",
        TypAction: "TotalStorageToCreateProdecd",
      },
      {
        id: 6,
        titepInpt: "سعر المنتج الثاني",
        TypeInput: "number",
        TypAction: "LastPriceToCreateProdecd",
      },
    ];

    DatShowFromD = dataShowTable.map((ShowDat) => {
      return (
        <div
          style={{
            marginBlock: "16px",
          }}
          key={ShowDat.id}
        >
          <SelectInputeAndDate
            key={ShowDat.id}
            TitlInp={ShowDat.titepInpt}
            typeMyInput={ShowDat.TypeInput}
            ValueInpuNowAndThisShange={HandleSheckActionDoNow}
            TypObj={ShowDat.TypAction}
          />
        </div>
      );
    });
  }, []); //== End Here Get Alls Data Inpute To Do Semthing Action In Page From ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf == "bss") {
    return (
      <div style={{ marginTop: "110px" }}>
        <Header typeactive={"EdartProdects"} />
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
              <TitelPage TitelPage="الاضافة المنتجات" />

              <form
                className="FromDateAddProdect"
                style={{ width: "90%", direction: "rtl" }}
                onSubmit={(e) => HandleToCreateMyProdect(e)}
              >
                {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
                <div style={{ textAlign: "right", marginTop: "25px" }}>
                  <FormLabel
                    style={{
                      fontSize: "25px",
                      color: "#fff",
                      marginRight: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    الاختيار تصنيف
                  </FormLabel>
                  <div style={{ textAlign: "right", marginBottom: "12px" }}>
                    <CountryInput
                      TypeShowData="AddProdectBss"
                      ValueUserSeckeClick={HandleCategoryProdectIDUserClick}
                      dataFeth={DataMyCategory}
                    />
                  </div>

                  <CartQuantiteProdect
                    TypeShowDate={"CategoryBss"}
                    oneSelSel={"oneSelSel"}
                    SheckCategoruProd={selectedProdects}
                    setSheckCategoruProd={setSelectedProdects}
                  />
                </div>
                {/*===  End User Prodect Sheck For Select And Shange Quantite Prodect ===*/}

                {DatShowFromD}

                <Button
                  style={{
                    marginTop: "12px",
                    padding: "12px 22px",
                    fontSize: "27px",
                  }}
                  type="submit"
                >
                  اصافة
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
