import React, { useState } from "react";
import "./StoreProfile.css";
import Header from "../layoute/Hedaer";
import Button from "@mui/joy/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TitelPage from "../Commponent/TitelPage";
import { useDialogActionContext } from "../Context/DialogActionContext";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import { starttoshangebigimageinprofilebss } from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
import VerifiedIcon from "@mui/icons-material/Verified";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

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

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    if (typeRequestRsp === "startshangebigimgprofile") {
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          "تم تحديث صورة الغلاف الحساب تجاري بنجاح سيتم تحديث صفحة",
          "active"
        );
        setvalueBigImgeProfilUpdate("");
        setBigImgProfileBss(valueBigImgeProfilUpdate);
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } else if (resultrquestaction === 3) {
        OpenDialogForActionSuccess(
          "تم تحديث صورة الحسابك تجاري بنجاح سيتم تحديث صفحة",
          "active"
        );
        setvalueImgeProfilUpdate("");
        setImgProfShangebss(imgprofshangebss);
        setTimeout(() => {
          window.location.reload();
        }, 4000);
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

      const mainStatsCards = [
        {
          icon: "📦",
          title: "المنتجات",
          value: AllsDataUserNow.MayProd.length.toLocaleString(),
          details: `${prodHasFish.length.toLocaleString()} قريب افراغ • ${ProdFinsh.length.toLocaleString()} غير متوفر`,
          color: "#4a6cf7",
        },
        {
          icon: "🛒",
          title: "الطلبات",
          value: AllsDataUserNow.MyOrderPayment.length.toLocaleString(),
          details: `${AllOdersIsConf.toLocaleString()} مكتمل • ${
            AllsDataUserNow.MyOrderPayment.length.toLocaleString() -
            AllOdersIsConf.toLocaleString()
          } قيد الانتظار`,
          color: "#10b981",
        },
        {
          icon: "💰",
          title: "اجمالي الارباح",
          value: `${AllsDataUserNow.TotaleProfit.toLocaleString()} ${
            AllsDataUserNow.MyCurrentPaymentPay.currentCantry
          }`,
          details: `${AllsDataUserNow.TotaleProfiteMonth.toLocaleString()} ${
            AllsDataUserNow.MyCurrentPaymentPay.currentCantry
          } هذا الشهر`,
          color: "#f59e0b",
        },
        {
          icon: "💰",
          title: "اجمالي ديوني",
          value: `${ToTalDeyn.toLocaleString()} ${
            AllsDataUserNow.MyCurrentPaymentPay.currentCantry
          }`,
          details: `${ToTalDeyn.toLocaleString()} ${
            AllsDataUserNow.MyCurrentPaymentPay.currentCantry
          } هذا الشهر`,
          color: "#f59e0b",
        },
      ];

      jsxshowmoredata = mainStatsCards.map((card, index) => {
        return (
          <div
            key={index}
            className="main-stat-card"
            style={{ borderTop: `4px solid ${card.color}` }}
          >
            <div className="main-stat-icon" style={{ color: card.color }}>
              {card.icon}
            </div>
            <div className="main-stat-content">
              <h3>{card.title}</h3>
              <span className="main-stat-value">{card.value}</span>
              <span className="main-stat-detail">{card.details}</span>
            </div>
          </div>
        );
      });
    }
  }, [AllsDataUserNow]);

  // دالة للتحقق من امتداد الملف
  function isValidFileExtension(filename) {
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

  if (tokenFoul) {
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
                    typShowImg={valueImgeProfilUpdate ? "ShowAlls" : ""}
                    MyAvatar={imgprofshangebss}
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
  }
};

export default StoreProfile;
