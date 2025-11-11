import { Button, Container } from "@mui/joy";
import { useState } from "react";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { useDialogActionContext } from "../Context/DialogActionContext";
import * as React from "react";
import { FormLabel } from "@mui/material";
import CountryInput from "../Commponent/CantryInput";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import { useParams } from "react-router-dom";
import TitelPage from "../Commponent/TitelPage";
import { useSelector, useDispatch } from "react-redux";
import Header from "../layoute/Header";
import {
  edartProdectBssUpdateProdect,
  edartProdectShowAllsDataProd,
} from "../../allsliceproj/Products_Management_Bss/EdartProdectSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

let ImgMyProdect = "";
let descProdect = "";
let priceProdect = "";
let descriptionProdectAtr = "";
let titelProdectnow = "";
let TotalStorageProdect = "";
let datCate = "";
let DataMyCategory = "";
let DatShowFromD = "";
let ObiDatTiUpdateProd = {};
let datSho = [];

export default function Products_Management_Update() {
  const navigate = useNavigate();
  const [SheckCategoruProd, setSheckCategoruProd] = useState([]);
  const [selectedProdects, setSelectedProdects] = React.useState([]);

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartprodectsbss.resultrquestactionProd;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.edartprodectsbss.typRequestNowProd;
  });

  const dataShowProd = useSelector((state) => {
    return state.edartprodectsbss.dataShowProd;
  });

  const lodingtorspactProd = useSelector((state) => {
    return state.edartprodectsbss.lodingtorspactProd;
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
  }, [navigate === "/My-Prodect-update/:prodectID", ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typeRequestRsp === "ShowAllsDataProdectForId") {
      if (resultrquestaction === 1) {
        HandleCloseOrOpenReadinPage(false);
        ObiDatTiUpdateProd = dataShowProd.allData;
        setSelectedProdects(dataShowProd.datthere);
      } else if (resultrquestaction === 3) {
        navigate("/home");
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    } else if (typeRequestRsp === "edartprodectsbsstoUpdateprodect") {
      if (resultrquestaction === 1) {
        const imageProdectUpdate = dataShowProd.img ? "صورة المنتج و" : "";
        const nameProdctUpdate = dataShowProd.name ? " و الاسم المنتج" : "";
        const PriceProdctUpdate = dataShowProd.price ? " و السعر المنتج" : "";
        const ProdectUpdatecategoryID = dataShowProd.categoryID
          ? "و تصنيفات منتمي لها المنتج"
          : "";
        const ProdectUpdatediscreption = dataShowProd.discreption
          ? " و تفاصيل المنتج"
          : "";
        const ProdectUpdatetotaleinstorage = dataShowProd.totaleinstorage
          ? " و كمية المخزون من المنتج"
          : "";
        const ProdectUpdatedescprice = dataShowProd.descprice
          ? " و السعر المنتج الثاني"
          : "";
        let messageShow = `لقد تم تحديث البيانات المنتج التالية
                    (${imageProdectUpdate}  ${nameProdctUpdate}  ${PriceProdctUpdate}  ${ProdectUpdatecategoryID}  ${ProdectUpdatediscreption}  ${ProdectUpdatetotaleinstorage}  ${ProdectUpdatedescprice}) بنجاح`;
        OpenDialogForActionSuccess(messageShow, "active");

        setTimeout(() => {
          navigate("/My-Prodect");
        }, 6000);
      } else if (resultrquestaction === 6) {
        HandleCloseOrOpenReadinPage(false);
        OpenDialogForActionFound(
          `يبدو بان لاسم لذي اخترته ${titelProdectnow} سبق لك و استعملته و لا يتاح تكرار نفس لاسم للمنتج الواحد`
        );
      } else if (resultrquestaction === 3) {
        navigate("/home");
        navigate("/My-PeymentMethod/Setting");
      } else if (resultrquestaction === 4) {
        navigate("/home");
        navigate("/My-PeymentMethod/Setting");
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    }
  }, [resultrquestaction, typeRequestRsp]); //== End Sheck Type Request To Show Result For User ==//

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DataMyCategory = AllsDataUserNow.MayCategory;
    }
  }, [AllsDataUserNow]); //== End Get Value Varyale Generale To Semthing Action ==//

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
    if (TypeActio == "ImgToCreateProdecd") {
      ImgMyProdect = value;
    } else if (TypeActio == "TitelToCreateProdecd") {
      titelProdectnow = value;
    } else if (TypeActio == "DscroptionToCreateProdecd") {
      descriptionProdectAtr = value;
    } else if (TypeActio == "FirstPriceToCreateProdecd") {
      priceProdect = value;
    } else if (TypeActio == "TotalStorageToCreateProdecd") {
      TotalStorageProdect = value;
    } else if (TypeActio == "LastPriceToCreateProdecd") {
      descProdect = value;
    }
  } //=== End Skek Eny Action To Do Semthing Now ===//

  // Start To Get Id Prodect And Send Request To Show Data Prodect
  const PageMyProdectID = useParams().prodectID;
  React.useEffect(() => {
    if (PageMyProdectID) {
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartProdectShowAllsDataProd(PageMyProdectID));
    } else {
      ObiDatTiUpdateProd = {};
    }
    ObiDatTiUpdateProd = {};
  }, [PageMyProdectID]); //== End To Get Id Prodect And Send Request To Show Data Prodect ==//

  // Start Send Request Data For Create Nou Prodect User
  const HandleToCreateMyProdect = async (e) => {
    e.preventDefault();
    if (selectedProdects.length == 0) {
      console.log(selectedProdects);
      OpenDialogForActionFound(
        "من اجل اكمال الخطوات التالية من ضروري ادخال علل الاقل تصنيف واحد لهذه المنتج"
      );
    } else if (titelProdectnow == undefined || titelProdectnow == "") {
      OpenDialogForActionFound("من ضروري ادخال اسم للمنتج ");
    } else if (titelProdectnow.length > 100) {
      OpenDialogForActionFound(
        "من ضروري ان لا يتجاوز اسم المنتج اكثر من 120 حرف  "
      );
    } else if (descriptionProdectAtr.length > 150) {
      OpenDialogForActionFound(
        "من ضروري ان لا يتجاوز اسم المنتج اكثر من 120 حرف  "
      );
    } else if (priceProdect === 0) {
      OpenDialogForActionFound(
        "من ضروري ادخال قيمة الرقمية حقيقية للسعر المنتج او اعتماد عللى سعر الحالي  "
      );
    } else if (descProdect === 0) {
      OpenDialogForActionFound(
        "من ضروري ادخال قيمة الرقمية حقيقية للسعر المنتج الثاني او تركه خاوي  "
      );
    } else if (TotalStorageProdect == 0) {
      OpenDialogForActionFound(
        "من ضروري ادخال قيمة الرقمية حقيقية مقياسا لما هو متوفر حاليا من المنتج  "
      );
    } else if (
      TotalStorageProdect == undefined ||
      TotalStorageProdect == undefined ||
      TotalStorageProdect == ""
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
        id: PageMyProdectID,
        name: titelProdectnow,
        descprice: descProdect,
        priceprodect: priceProdect,
        discreption: descriptionProdectAtr,
        image: ImgMyProdect,
        categoryID: errayDateIDCoop,
        totaleinstorage: TotalStorageProdect,
      };
      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartProdectBssUpdateProdect(DateProdect));
    }
  }; //=== End Send Data For Create Nou Prodect User ===//

  // Start Send Request For Delete Category Prodect User
  function handelClickToDeletedCategoryMyProdect(CategoryID) {
    const CopSheckCategoruProd = [...SheckCategoruProd];
    const newdateDelrt = CopSheckCategoruProd.filter((category) => {
      return category.id != CategoryID;
    });
    setSheckCategoruProd(newdateDelrt);
  } //=== End Send Request For Delete Category Prodect User ===//

  // Start JSX For Show All Category User Sheck And Click For This
  React.useEffect(() => {
    datCate = SheckCategoruProd.map((cate) => {
      return cate != "" ? (
        <div className="CardSheckCategory" key={cate.id}>
          <h4>{cate.name}</h4>
          <h4
            class="btnDeleteCategory"
            style={{ position: "absolute", top: "10px" }}
            onClick={() => handelClickToDeletedCategoryMyProdect(cate.id)}
          >
            X
          </h4>
        </div>
      ) : (
        ""
      );
    });
  }, [SheckCategoruProd]); //=== End JSX For Show All Category User Sheck And Click For This ===//

  // Start JSX For Show All Inpute In From To Handle Data
  React.useEffect(() => {
    datSho = [
      {
        id: 1,
        titepInpt: `صورة المنتج`,
        TypeInput: "file",
        TypAction: "ImgToCreateProdecd",
      },
      {
        id: 2,
        titepInpt: `الاسم المنتج ${ObiDatTiUpdateProd.name}`,
        TypeInput: "text",
        TypAction: "TitelToCreateProdecd",
      },
      {
        id: 3,
        titepInpt: `تفاصيل المنتج`,
        TypeInput: "text",
        TypAction: "DscroptionToCreateProdecd",
      },
      {
        id: 4,
        titepInpt: `سعر المنتج الاول ${ObiDatTiUpdateProd.price}`,
        TypeInput: "number",
        TypAction: "FirstPriceToCreateProdecd",
      },
      {
        id: 5,
        titepInpt: `كمية المخزون من المنتج ${ObiDatTiUpdateProd.totaleinstorage}`,
        TypeInput: "number",
        TypAction: "TotalStorageToCreateProdecd",
      },
      {
        id: 6,
        titepInpt: `سعر المنتج الثاني ${ObiDatTiUpdateProd.descprice} `,
        TypeInput: "number",
        TypAction: "LastPriceToCreateProdecd",
      },
    ];

    DatShowFromD = datSho.map((ShowDat) => {
      return ShowDat != "" ? (
        <div
          style={{
            marginBlock: "16px",
          }}
          key={ShowDat.id}
        >
          <SelectInputeAndDate
            TitlInp={ShowDat.titepInpt}
            typeMyInput={ShowDat.TypeInput}
            ValueInpuNowAndThisShange={HandleSheckActionDoNow}
            TypObj={ShowDat.TypAction}
          />
        </div>
      ) : (
        ""
      );
    });
  }, [ObiDatTiUpdateProd]); //== End JSX For Show All Inpute In From To Handle Data ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf === "bss" && !lodingtorspactProd) {
    return (
      <>
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
              <TitelPage TitelPage={"تحديث المنتجات"} />

              {ObiDatTiUpdateProd.img ? (
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f000",
                  }}
                >
                  <h1>صورة لمنتج</h1>
                  <img
                    src={`http://localhost:8000/${ObiDatTiUpdateProd.img}`}
                  />
                </div>
              ) : (
                <h1>لم يتم تحميل صورة لمنتج بعد</h1>
              )}

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
      </>
    );
  }
}
