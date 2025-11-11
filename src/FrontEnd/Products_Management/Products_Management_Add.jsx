import { Button, Container } from "@mui/joy";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { useDialogActionContext } from "../Context/DialogActionContext";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormLabel, Avatar } from "@mui/material";
import CountryInput from "../Commponent/CantryInput";
import CartQuantiteProdect from "../Commponent/CartQuantiteProdect";
import TitelPage from "../Commponent/TitelPage";
import { edartProdectBssCreateProdect } from "../../allsliceproj/Products_Management_Bss/Products_Management_Bss_Slice";
import Header from "../layoute/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import { FaBoxes } from "react-icons/fa";

let ImgMyProdect = "";
let descProdect = "";
let priceProdect = "";
let descriptionProdectAtr = "";
let titelProdectnow = "";
let TotalStorageProdect = "";
let datimgtoshownow = '';
let typstypimgnow = 'icone';
let typeReustNow = '';

const ALLOWED_EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg"];

const Products_Management_Add = () => {
  const navigate = useNavigate();
  const [selectedProdects, setSelectedProdects] = React.useState([]);
  const [imgprodectVip, setImgprodectVip] = React.useState('');
  const dispatsh = useDispatch();

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();
  
  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Products_Management_Bss.resultrquestactionProd;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.Products_Management_Bss.typRequestNowProd;
  });

  const AllDatdsDasb = useSelector((state) => {
    return state.datauser.datauser;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Products_Management_Bss.lodingtorspactProd;
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

  // دالة للتحقق من امتداد الملف
  const isValidFileExtension = (filename) => {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

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
    setImgprodectVip(loadEvent.target.result);
    typstypimgnow = 'src';
    }
    typstypimgnow = 'src';
  }; //== End Change Value Image Profile User ==//

  // Start Skek Eny Action To Do Semthing Now
const HandleSheckActionDoNow = (value, TypeActio, nooto, valud) => {
  switch (TypeActio) {
    case "ImgToCreateProdecd":
      handleImageChange(value);
      setImgprodectVip(valud);
      typstypimgnow = 'src';
      return ImgMyProdect = value;
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

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typeReustNow = typeRequestRsp;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//
  
  // Start Here To Get Sult For Semthing Request In Page
  React.useMemo(() => {
    switch (typeReustNow) {
      case 'edartprodectsbsstocreatemoreprodect':
      switch (typeReustNow) {
        case 1:
          OpenDialogForActionSuccess(
            `تم انشاء المنتج ${titelProdectnow} بنجاح كما تم توجيهك الى صفحت الادارة المنتجاتك`
          );
          typeReustNow = '';
          navigate("/Products-Management");
        return;
        case 6:
          OpenDialogForActionFound(
            `سبق و قمت بتخزين منتج باسم ${titelProdectnow} و لا حاج فتعدد اسماء نفس لمنتج رجاء تغييره`
          );
          typeReustNow='';
        return;
        case 9:
          OpenDialogForActionFound(
            "حدث خطا اثناء انشاء المنتجك نعتذر و حاول في وقت لاحق"
          );
          typeReustNow='';
          return;
        case 99:
          OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          typeReustNow='';
        return;
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "edartprodectsbsstocreatemoreprodect",
  ]); //== End Here To Get Sult For Semthing Request In Page ==//

  // Start Get Category Prodect For Content Create Prodect
  const HandleCategoryProdectIDUserClick = (value, bn) => {
    if (value != null) {
      const prod = selectedProdects.some((prodect) => prodect.id === value.id);
      if (prod) {
        return;
      }
      setSelectedProdects([...selectedProdects, {
        id: value.id,
        name: value.nameOne,
      }]);
    }
  } //=== End Get Category Prodect For Content Create Prodect ===//

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

      HandleCloseOrOpenReadinPage(true);
      dispatsh(edartProdectBssCreateProdect({
        name: titelProdectnow,
        descprice: descProdect,
        priceprodect: priceProdect,
        discreption: descriptionProdectAtr,
        image: ImgMyProdect,
        categoryID: errayDateIDCoop,
        totaleinstorage: TotalStorageProdect,
      }));
    }
  }; //=== End Send Data For Create Nou Prodect User ===//

  // Start Here Get Alls Data Inpute To Do Semthing Action In Page From
  const DatShowFromD = React.useMemo(() => {
    return [
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
    ].map((ShowDat) => {
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
              className="DivContentPagAddSalse"
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
                    className="styLablToDoAc"
                  >
                    الاختيار تصنيف
                  </FormLabel>
                  <div style={{ textAlign: "right", marginBottom: "12px" }}>
                    <CountryInput
                      TypeShowData="AddProdectBss"
                      ValueUserSeckeClick={HandleCategoryProdectIDUserClick}
                      dataFeth={AllDatdsDasb.MayCategory}
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
                
                <div
                  className="stimggprod"
                >
                  <AvatarImgForAllType style={{width: '100%', height: '100%'}} typShowImg={typstypimgnow} MyAvatar={imgprodectVip ? imgprodectVip : <FaBoxes style={{ width: '70%', height: '70%' }} />} />
                </div>
                {DatShowFromD}

                <Button
                  style={{
                    marginTop: "12px",
                    padding: "12px 22px",
                    fontSize: "27px",
                  }}
                  type="submit"
                >
                  اضافة
                </Button>
              </form>
            </div>
        </Container>
      </div>
    );
  }
}

export default Products_Management_Add;