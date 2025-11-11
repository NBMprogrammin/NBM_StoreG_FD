import React, { useState, useRef, useEffect } from "react";
import "./StoreProfile.css";
import Header from "../layoute/Header";
import Button from "@mui/joy/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TitelPage from "../Commponent/TitelPage";
import { useDialogActionContext } from "../Context/DialogActionContext";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import { starttoshangebigimageinprofilebss } from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenowSlice";
import VerifiedIcon from "@mui/icons-material/Verified";
import Cookies from "js-cookie";

// Start Import Alls Icons 
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FaBoxes } from "react-icons/fa";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

const tokenFoul = Cookies.get("token");

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

let jsxshowmoredata = "";

// الامتدادات المسموح بها
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const StoreProfile = () => {
  const [igimgprofilebss, setBigImgProfileBss] = useState(null);
  const [imgprofshangebss, setImgProfShangebss] = useState(null);

  const dispatsh = useDispatch();
  const {
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
    OpenDialogForActionSuccess,
  } = useDialogActionContext();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.datauser.resultrquestaction;
  });

  const lodingtorspact = useSelector((state) => {
    return state.datauser.lodingtorspact;
  });

  const typeRequestRsp = useSelector((state) => {
    return state.datauser.typRequestNow;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  const [valueBigImgeProfilUpdate, setvalueBigImgeProfilUpdate] =
    React.useState("");
  const [valueImgeProfilUpdate, setvalueImgeProfilUpdate] = React.useState("");
  // أضف هذه الـ refs في بداية المكون
  const numbersAnimated = React.useRef(false);
  const sectionRef = React.useRef(null);

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    if (typeRequestRsp === "startshangebigimgprofile") {
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          "تم تحديث صورة الغلاف الحساب تجاري بنجاح كما تم تحديث لبيانات",
        );
        setvalueBigImgeProfilUpdate("");
        setBigImgProfileBss(valueBigImgeProfilUpdate);
      } else if (resultrquestaction === 3) {
        OpenDialogForActionSuccess(
          "تم تحديث صورة الحسابك تجاري بنجاح كما تم تحديث لبيانات",
        );
        setvalueImgeProfilUpdate("");
        setImgProfShangebss(ProfileSnageNow.image);
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا غير معروف رجاء حاول فلوقت لاحق او قم بتحميل صفحة"
        );
      }
    }
  }, [resultrquestaction, typeRequestRsp === "startshangebigimgprofile"]); //== End Here To Get Sult For Semthing Request In Page ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response == //

  // Start Her To Shange Value Big Image Profile Bss
  React.useEffect(() => {
    if (ProfileSnageNow.bigImg) {
      setBigImgProfileBss(`http://localhost:8000/${ProfileSnageNow.bigImg}`);
    }
  }, [ProfileSnageNow.bigImg]); //== End Her To Shange Value Big Img mage Profile Bss //

  // Start Her To Shange Value Image Profile Bss
  React.useEffect(() => {
    if (ProfileSnageNow.image) {
      setImgProfShangebss(ProfileSnageNow.image);
    }
  }, [ProfileSnageNow.image]); //== End Her To Shange Value Image Profile Bss == //

  // البطاقات الإحصائية الرئيسية
// دالة الحركة الرقمية
  const animateNumber = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // بعد جلب البيانات من API، أضف هذا useEffect منفصل للحركة
  useEffect(() => {
    if (!AllsDataUserNow || numbersAnimated.current) return;

    // انتظر حتى يصبح DOM جاهزاً
    const timer = setTimeout(() => {
      const statNumbers = document.querySelectorAll('.main-stat-detail');
      statNumbers.forEach((element) => {
        const target = parseInt(element.getAttribute('data-count'));
        if (!isNaN(target) && target > 0) {
          animateNumber(element, 0, target, 2000);
        }
      });
      const statNumberstou = document.querySelectorAll('.main-stat-value');
      statNumberstou.forEach((element) => {
        const target = parseInt(element.getAttribute('data-count'));
        if (!isNaN(target) && target > 0) {
          animateNumber(element, 0, target, 2000);
        }
      });
      numbersAnimated.current = true;
    }, 500);

    return () => clearTimeout(timer);
  }, [AllsDataUserNow]);

  // useEffect للحركة
  React.useEffect(() => {
    if (!sectionRef.current) return;
      
      observer.observe(sectionRef.current);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
  
    observer.observe(sectionRef.current);
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  React.useMemo(() => {
    if (AllsDataUserNow && AllsDataUserNow.MayZeboune) {
      const ProdFinsh = AllsDataUserNow.MayProd.filter((prod) => {
        return prod.nameThere == 0;
      });

      const prodHasFish = AllsDataUserNow.MayProd.filter((prod) => {
        return prod.nameThere < 15;
      });

      const AllOdersIsConf = AllsDataUserNow.allOrderDontConfrmed;

      const ToTalDeyn = AllsDataUserNow.MayZeboune.reduce(
        (sum, item) => sum + item.nameThere,
        0
      );

      const gecketypshownow = (status) => {
        switch (status) {
          case "اجمالي الارباح":
            return "هذا الشهر";
          case "اجمالي ديوني":
            return "هذا الشهر";
          case "المنتجات":
            return "غير متوفر";
          case "الطلبات":
            return 'قيد الانتظار';
        }
      };

      const mainStatsCards = [
        {
          icon: <AssuredWorkloadIcon className="iconShwStyledas" />,
          title: "اجمالي الارباح",
          value: AllsDataUserNow.TotaleProfit,
          details: AllsDataUserNow.TotaleProfiteMonth,
          color: "#f59e0b",
        },
        {
          icon: <AssuredWorkloadIcon className="iconShwStyledas" />,
          title: "اجمالي ديوني",
          value: ToTalDeyn,
          details: ToTalDeyn,
          color: "#f59e0b",
        },
        {
          icon: <FaBoxes className="iconShwStyledas" />,
          title: "المنتجات",
          value: AllsDataUserNow.MayProd.length,
          details: prodHasFish.length,
          color: "#4a6cf7",
        },
        {
          icon: <AddShoppingCartIcon className="iconShwStyledas" />,
          title: "الطلبات",
          value: AllsDataUserNow.MyOrderPayment.length,
          details: AllOdersIsConf,
          color: "#10b981",
        },
      ];

      jsxshowmoredata = mainStatsCards.map((card, index) => {
        return (
          <div
            key={index}
            className="main-stat-card animate-slide-in"
            style={{ 
              borderTop: `4px solid ${card.color}`,
              animationDelay: `${index * 0.4}s` ,
            }}
          >
            <div className="main-stat-icon" style={{ color: card.color }}>
              {card.icon}
            </div>
            <div className="main-stat-content">
              <h3>{card.title}</h3>
              <div style={{ display: 'flex', gap: '7px', alignItems: 'center', justifyContent: 'center' }}>
              <span className="main-stat-value" data-count={card.value}>
          0</span>
              {card.title === 'اجمالي الارباح' || card.title === 'اجمالي ديوني' ? AllsDataUserNow.MyCurrentPaymentPay.currentCantry : ''}
              </div>

              <div style={{ display: 'flex', gap: '7px', alignItems: 'center', justifyContent: 'center' }}>
              <span className="main-stat-detail" data-count={card.details}>
          0</span>
          {gecketypshownow(card.title)}
              </div>
            </div>
          </div>
        );
      });
    }
  }, [AllsDataUserNow]);

  // دالة للتحقق من امتداد الملف
  const isValidFileExtension = (filename) => {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

  // Start Send Request To Update ImageProfile User
  const HandleUpdateImageProfileBss = async (typeAct) => {
    const sheckdatimg =
      typeAct === "imgprofilebss"
        ? valueImgeProfilUpdate != "" || valueImgeProfilUpdate != undefined
        : valueBigImgeProfilUpdate != "" ||
          valueBigImgeProfilUpdate != undefined;
    if (sheckdatimg) {
      // تحقق إضافي قبل الرفع
      if (
        !isValidFileExtension(
          typeAct === "imgprofilebss"
            ? valueImgeProfilUpdate.name
            : valueBigImgeProfilUpdate.name
        )
      ) {
        OpenDialogForActionFound(
          "❌ يجب ان تكون صورة من احد انواع تالية jpeg او webp او png او jpg"
        );
        return null;
      }

      let datImg = {};

      if (typeAct === "imgprofilebss") {
        datImg = {
          MyAvatarImgProfile: valueImgeProfilUpdate,
        };
      } else {
        datImg = {
          MyAvatarBigImgProfileBss: valueBigImgeProfilUpdate,
        };
      }

      HandleCloseOrOpenReadinPage(true);

      dispatsh(starttoshangebigimageinprofilebss(datImg));
    }
  }; //=== End Send Request To Update ImageProfile User ===//

  const handleImageChange = (e, typeact) => {
    const file = e.target.files[0];
    if (file) {
      // if (file.size > 5 * 1024 * 1024) {
      if (file.size > 1000010) {
        OpenDialogForActionFound("حجم الصورة يجب أن يكون أقل من 1");
        return;
      }

      if (!file.type.startsWith("image/")) {
        OpenDialogForActionFound("الملف يجب أن يكون صورة");
        return;
      }

      // التحقق من امتداد الملف (طبقة حماية إضافية)
      if (!isValidFileExtension(file.name)) {
        OpenDialogForActionFound(
          "❌ يجب ان تكون صورة من احد انواع تالية jpeg او webp او png او jpg"
        );
        return;
      }

      const reader = new FileReader();
      if (typeact === "BigImgprofile") {
        setvalueBigImgeProfilUpdate(file);
        reader.onload = (e) => setBigImgProfileBss(e.target.result);
      } else if (typeact === "imgprofbss") {
        setvalueImgeProfilUpdate(file);
        reader.onload = (e) => setImgProfShangebss(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  };

  const stopShangbigimgbss = (typeAct) => {
    if (typeAct === "imgprofilebss") {
      setvalueImgeProfilUpdate("");
      setImgProfShangebss(ProfileSnageNow.image);
    } else {
      setvalueBigImgeProfilUpdate("");
      setBigImgProfileBss(`http://localhost:8000/${ProfileSnageNow.bigImg}`);
    }
  };

  // Start Her To Shacke Shanging For Value Big Img Profile Bss
  React.useEffect(() => {
    if (igimgprofilebss) {
      setBigImgProfileBss(igimgprofilebss);
    } else {
      setBigImgProfileBss(`http://localhost:8000/${ProfileSnageNow.bigImg}`);
    }
  }, [igimgprofilebss]); //== End Her To Shacke Shanging For Value Big Img Profile Bss == //

  // Start Her Her To Shacke Shanging For Value Img Profile Bss
  React.useEffect(() => {
    if (imgprofshangebss) {
      setImgProfShangebss(imgprofshangebss);
    } else {
      setImgProfShangebss(ProfileSnageNow.image);
    }
  }, [imgprofshangebss]); //== End Her Her To Shacke Shanging For Value Img Profile Bss == //

  if (AllsDataUserNow.Profilenow) {
    return (
      <>
        <Header typeactive={"profile"} />
        <div className="store-profile">
          {/* صورة الغلاف - تم التصحيح */}
          <div className="cover-container">
            <div
              className="cover-image"
              style={{
                backgroundImage: `url(${igimgprofilebss})`,
              }}
            >
              <div className="cover-overlay"></div>
              <div
                className="boxMoreForUser"
                style={{
                  padding:
                    valueBigImgeProfilUpdate != "" &&
                    valueBigImgeProfilUpdate != undefined
                      ? "5px 22px"
                      : "12px 22px",
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  background="#9f9e9ebb"
                  dir="rtl"
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <CloudUploadIcon fontSize="26px" alignItems={"center"} />
                  <div
                    className="styleimgflexandfldcolal"
                    style={{
                      gap:
                        valueBigImgeProfilUpdate != "" &&
                        valueBigImgeProfilUpdate != undefined
                          ? "5px"
                          : "0px",
                    }}
                  >
                    تغيير الغلاف
                    <p>
                      {valueBigImgeProfilUpdate != "" &&
                      valueBigImgeProfilUpdate != undefined
                        ? valueBigImgeProfilUpdate.name
                        : ""}
                    </p>
                  </div>
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) =>
                      handleImageChange(event, "BigImgprofile")
                    }
                    multiple
                  />
                </Button>
                <div>
                  <Button
                    style={{
                      fontSize: "20px",
                      marginBottom: "3px",
                      display:
                        valueBigImgeProfilUpdate != "" &&
                        valueBigImgeProfilUpdate != undefined
                          ? "flex"
                          : "none",
                    }}
                    onClick={() => HandleUpdateImageProfileBss()}
                  >
                    تاكيد
                  </Button>

                  <Button
                    style={{
                      fontSize: "20px",
                      display:
                        valueBigImgeProfilUpdate != "" &&
                        valueBigImgeProfilUpdate != undefined
                          ? "flex"
                          : "none",
                    }}
                    onClick={() => stopShangbigimgbss()}
                  >
                    الغاء
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* معلومات المتجر الرئيسية */}
          <div style={{ direction: "rtl" }} className="profile-header">
            <div className="store-logo">
              <div className="logo-container">
                <AvatarImgForAllType
                  className={"logo-container logo-emoji"}
                  typShowImg={valueImgeProfilUpdate ? "src" : ""}
                  MyAvatar={imgprofshangebss}
                  style={{
                    width: '95%',
                    height: '95%'
                  }}
                />

                <button
                  className={
                    valueImgeProfilUpdate ? "edit-logo-btn" : "dispanone"
                  }
                  onClick={() => HandleUpdateImageProfileBss("imgprofilebss")}
                >
                  <CloudUploadIcon />
                </button>

                <button
                  className={
                    valueImgeProfilUpdate
                      ? "edit-logo-btn active"
                      : "dispanone"
                  }
                  onClick={() => stopShangbigimgbss("imgprofilebss")}
                >
                  ❌
                </button>

                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  background="#9f9e9ebb"
                  dir="rtl"
                  style={{
                    fontSize: "20px",
                    gap: "12px",
                    alignItems: "center",
                    display: valueImgeProfilUpdate ? "none" : "flex",
                  }}
                  className={
                    valueImgeProfilUpdate ? "dispanone" : "edit-logo-btn"
                  }
                >
                  <div className="styleimgflexandfldcolal">✏️</div>
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) =>
                      handleImageChange(event, "imgprofbss")
                    }
                    multiple
                  />
                </Button>
              </div>
            </div>

            <div className="store-info">
              <div className="store-name-section">
                <VerifiedIcon />
                <h1 className="store-name">{ProfileSnageNow.name} </h1>
                <VerifiedIcon className="stylevirfedsmpl" />
              </div>

              <p className="store-description">
                {ProfileSnageNow.discription}
              </p>

              <div className="store-meta">
                <span className="meta-item">
                  📦 {ProfileSnageNow.megaleBss}
                </span>
                <span className="meta-item">
                  📅 منذ {ProfileSnageNow.created_at}
                </span>
                <span className="meta-item">
                  👥 {AllsDataUserNow.MayZeboune.length} موظف
                </span>
              </div>
            </div>
          </div>

          {/* البطاقات الإحصائية الرئيسية */}
          <div className="main-stats-section">
            {/* <h2 className="section-title">نظرة عامة على المتجر</h2> */}
            <TitelPage TitelPage="نظرة عامة على المتجر" />
            <div className="main-stats-grid">{jsxshowmoredata}</div>
          </div>

          {/* معلومات المتجر الكاملة بدلاً من الإجراءات السريعة */}
          <div className="store-details-section">
            <div className="store-details-card">
              <h3>معلومات المتجر الكاملة</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">📧 البريد الإلكتروني:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.email}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📞 رقم الهاتف:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.Numberphone}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📍 العنوان:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.gbsbss}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📦 التصنيف:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.megaleBss}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📅 سنة التأسيس:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.created_at}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">👥 عدد الموظفين:</span>
                  <span className="detail-value">
                    {AllsDataUserNow.MayZeboune.length} موظف
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">✅ حالة المتجر:</span>
                  <span className="detail-value status-value">{"نشط"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default StoreProfile;
