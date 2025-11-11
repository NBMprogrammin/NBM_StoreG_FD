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
import {
  edartProdectBssUpdateProdect,
  edartProdectShowAllsDataProd,
} from "../../allsliceproj/Products_Management_Bss/Products_Management_Bss_Slice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../layoute/Header";
import { FaBoxes } from "react-icons/fa";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
const token = Cookies.get("token");
let typstypimgnow = 'icone';
let ImgMyProdect = "";
let descProdect = "";
let priceProdect = "";
let descriptionProdectAtr = "";
let titelProdectnow = "";
let TotalStorageProdect = "";
let DatShowFromD = "";
let ObiDatTiUpdateProd = {};
let typeReustNow = '';
const ALLOWED_EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg"];

export default function Products_Management_Update() {
  const [SheckCategoruProd, setSheckCategoruProd] = useState([]);
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const [ImgProdNow, setImgProdNow] = React.useState('');

  const dispatsh = useDispatch();
  const navigate = useNavigate();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Products_Management_Bss.resultrquestactionProd;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.Products_Management_Bss.typRequestNowProd;
  });

  const dataShowProd = useSelector((state) => {
    return state.Products_Management_Bss.dataShowProd;
  });
  
  const lodingtorspact = useSelector((state) => {
    return state.Products_Management_Bss.lodingtorspactProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

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
  }, [ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

  // دالة للتحقق من امتداد الملف
  const isValidFileExtension = (filename) => {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

   // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typeReustNow = typeRequestRsp;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typeReustNow) {
      case "ShowAllsDataProdectForId":
        HandleCloseOrOpenReadinPage(false);
        switch (resultrquestaction) {
          case 1:
          ObiDatTiUpdateProd = dataShowProd.allData;
          typstypimgnow = dataShowProd.allData.img ? '' : 'icone';
          setImgProdNow(dataShowProd.allData.img)
          setSelectedProdects(dataShowProd.datthere);
          typeReustNow = '';
          return;
          case 3:
          navigate("/dashboard");
          typeReustNow = '';
          return;
          case 99:
            OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
            );
            typeReustNow = '';
          return;
        }
      return;
      case "edartprodectsbsstoUpdateprodect":
        HandleCloseOrOpenReadinPage(false);
        switch (resultrquestaction) {
          case 1:
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
          navigate("/Products-Management");
          typeReustNow = '';
        return;
          case 3:
          navigate("/home");
          typeReustNow = '';
        return;
          case 4:
          navigate("/Products-Management");
          typeReustNow = '';
        return;
          case 6:
          OpenDialogForActionFound(
            `يبدو بانكن سبق و استخدمت نفس الاسم لمنتج ${titelProdectnow} و لا يتاح تكراره`
          );
          typeReustNow = '';
        return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          typeReustNow = '';
          return;
        }
      return;
    }
  }, [resultrquestaction, typeRequestRsp]); //== End Sheck Type Request To Show Result For User ==//

  // Start Get Category Prodect For Content Create Prodect
  const HandleCategoryProdectIDUserClick = (value, bn) => {
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

  // Start Change Value Image Profile User
  const handleImageChange = (file) => {
    const newErrors = {};
    if (file.size > 5 * 1024 * 1024) {
      if (input) {
        OpenDialogForActionFound("حجم الصورة يجب أن يكون أقل من 5MB");
      setImgprodectVip('');
      typstypimgnow = 'icone';
      }
      return;
    }

    if (!file.type.startsWith("image/")) {
      if (input) {
        OpenDialogForActionFound("الملف يجب أن يكون صورة");
        setImgprodectVip('');
        typstypimgnow = 'icone';
      }
      return;
    }

    // تحقق إضافي قبل الرفع
    if (!isValidFileExtension(file.name)) {
      OpenDialogForActionFound("❌ يجب ان تكون صورة من احد انواع تالية jpeg او webp او png او jpg");
      setImgprodectVip('');
      typstypimgnow = 'icone';
      return;
    }
    const reader = new FileReader();
    
    reader.onload = (loadEvent) => {
    setImgProdNow(loadEvent.target.result);
    typstypimgnow = 'src';
    }
    typstypimgnow = 'src';
  }; //== End Change Value Image Profile User ==//

  // Start Skek Eny Action To Do Semthing Now
  const HandleSheckActionDoNow = (value, TypeActio, ont1, valud) => {
    switch (TypeActio) {
      case "ImgToCreateProdecd":
        handleImageChange(value);
        if(valud) {
          setImgProdNow(valud);
          typstypimgnow = 'src';
        } else {
          typstypimgnow = dataShowProd.allData.img ? '' : 'icone';
          setImgProdNow(dataShowProd.allData.img)
        }
        ImgMyProdect = value;
        return;
      case "TitelToCreateProdecd":
        return titelProdectnow = value;
      case "DscroptionToCreateProdecd":
        return descriptionProdectAtr = value;
      case "FirstPriceToCreateProdecd":
        return priceProdect = value;
      case "TotalStorageToCreateProdecd":
        return TotalStorageProdect = value;
      case "LastPriceToCreateProdecd":
        return descProdect = value;
    }
  } //=== End Skek Eny Action To Do Semthing Now ===//

  // Start To Get Id Prodect And Send Request To Show Data Prodect
  const PageMyProdectID = useParams().prodectID;
  React.useEffect(() => {
    if (PageMyProdectID) {
      const token = Cookies.get("token");
      if(token) {
        if(ProfileSnageNow && ProfileSnageNow.TypProf === "bss") {
          HandleCloseOrOpenReadinPage(true);
          dispatsh(edartProdectShowAllsDataProd(PageMyProdectID));
        }
      }
    }
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
  const handelClickToDeletedCategoryMyProdect = (CategoryID) => {
    const CopSheckCategoruProd = [...SheckCategoruProd];
    const newdateDelrt = CopSheckCategoruProd.filter((category) => {
      return category.id != CategoryID;
    });
    setSheckCategoruProd(newdateDelrt);
  } //=== End Send Request For Delete Category Prodect User ===//

  // Start JSX For Show All Inpute In From To Handle Data
  React.useEffect(() => {;
    DatShowFromD = [
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
    ].map((ShowDat) => {
      return (
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
      );
    });
  }, [ObiDatTiUpdateProd]); //== End JSX For Show All Inpute In From To Handle Data ==//

  if (!lodingtorspact && ProfileSnageNow && ProfileSnageNow.TypProf == "bss") {
    return (
      <div style={{ marginTop: "110px", marginBottom: '35px' }}>
        <Header typeactive={"EdartProdects"} />
          <Container>
              <div
                className="DivContentPagAddSalse"
              >
                <TitelPage TitelPage={"تحديث المنتجات"} />

                <div
                  className="stimggprod"
                >
                  <h1>صورة لمنتج</h1>
                  <AvatarImgForAllType style={{width: '100%', height: '100%'}} typShowImg={typstypimgnow} MyAvatar={ImgProdNow ? ImgProdNow : <FaBoxes style={{ width: '70%', height: '70%' }} />} />
                </div>

                <form
                  className="FromDateAddProdect"
                  style={{ width: "90%", direction: "rtl" }}
                  onSubmit={(e) => HandleToCreateMyProdect(e)}
                >
                  {/*  Start User Prodect Sheck For Select And Shange Quantite Prodect */}
                  <div style={{ textAlign: "right", marginTop: "25px" }}>
                    <FormLabel
                      className="styLablToDoAc"
                    >
                      الاختيار تصنيف
                    </FormLabel>
                    <div style={{ textAlign: "right", marginBottom: "12px" }}>
                      <CountryInput
                        TypeShowData="AddProdectBss"
                        ValueUserSeckeClick={HandleCategoryProdectIDUserClick}
                        dataFeth={AllsDataUserNow.MayCategory}
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
                    تحديث لبيانات
                  </Button>
                </form>
              </div>
          </Container>
      </div>
    );
  } 
}