import React, { useState, useRef, useEffect } from "react";
import "./UserProfile.css";
import Header from "../layoute/Header";
import Button from "@mui/joy/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material";
import { useDialogActionContext } from "../Context/DialogActionContext";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import { useSelector, useDispatch } from "react-redux";
import { starttoshangebigimageinprofilebss,
          lastedefaultdatastate
 } from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenowSlice";
import TitelPage from "../Commponent/TitelPage";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupIcon from "@mui/icons-material/Group";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Cookies from "js-cookie";
import { formatDate, formatRelativeDate } from "../../utils/dateUtils";

let NameFirstTrave = "";

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

let typRequest = '';

// الامتدادات المسموح بها
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const UserProfile = () => {
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

  const valueImgeProfilUpdate = React.useRef('');
  // أضف هذه الـ refs في بداية المكون
  const numbersAnimated = React.useRef(false);
  const sectionRef = React.useRef(null);

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    switch (typRequest) {
      case 'startshangebigimgprofile':
        typRequest = '';
        switch (typeRequestRsp) {
          case 1:
            OpenDialogForActionSuccess(
              "تم تحديث صورة الحسابك شخصي بنجاح كما تم تحديث البيانات"
            );
            setImgProfShangebss(ProfileSnageNow.image);
            valueImgeProfilUpdate.current = '';
            dispatsh(lastedefaultdatastate());
          return;
          case 2:
            dispatsh(lastedefaultdatastate());
            OpenDialogForActionFound(
              "حدث خطا غير معروف رجاء حاول فلوقت لاحق او قم بتحميل صفحة"
            );
          return;
        }
    }
  }, [resultrquestaction, typeRequestRsp === "startshangebigimgprofile"]); //== End Here To Get Sult For Semthing Request In Page ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      HandleCloseOrOpenReadinPage(true);
      typRequest = typeRequestRsp;
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response == //

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
      const statNumbers = document.querySelectorAll('.main-stat-value');
      statNumbers.forEach((element) => {
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

  // useMemo للبيانات فقط
  const jsxshowmoredata = React.useMemo(() => {
    if (!AllsDataUserNow || !AllsDataUserNow.DatBssICalyan) return null;
    const TotalMyDeyanForBss = AllsDataUserNow.DatBssICalyan.reduce(
      (sum, item) => sum + item.totaleMyDeyn,
      0
    );
    // هذا المتغير يحتاج إلى تعريف - إذا كان global أضف let أو const
    let NameFirstTrave;
    if (AllsDataUserNow.Profile_tweve.length > 0) {
      NameFirstTrave = "mewev";
    } else if (AllsDataUserNow.Profile_Bss.length > 0) {
      NameFirstTrave = "bss";
    } else {
      NameFirstTrave = "Not";
    }
    const allbbshasdeyforMy = AllsDataUserNow.DatBssICalyan.filter((prod) => {
      return prod.totaleMyDeyn > 0;
    });
    return [
      {
        id: 1,
        icon: <GroupIcon className="iconShwStyle" />,
        title: "تاجر أتعامل معهم",
        value: AllsDataUserNow.DatBssICalyan.length,
        color: "#4a6cf7",
      },
      {
        id: 2,
        icon: <GroupRemoveIcon className="iconShwStyle" />,
        title: "تاجر يدينون لي",
        value: allbbshasdeyforMy.length,
        color: "#10b981",
      },
      {
        id: 3,
        icon: <AssuredWorkloadIcon className="iconShwStyle" />,
        title: "اجمالي ديوني",
        value: TotalMyDeyanForBss,
        color: "#f59e0b",
      },
    ].map((card, index) => {
      return (
        <div
          key={card.id}
          className="main-stat-card animate-slide-in"
          style={{ 
            borderTop: `4px solid ${card.color}`, 
            animationDelay: `${index * 0.4}s` 
          }}
        >
          <div className="main-stat-icon" style={{ color: card.color }}>
            {card.icon}
          </div>
          <div className="main-stat-content">
            <h3>{card.title}</h3>
            <div 
              className="main-stat-value" 
              data-count={card.value}
            >
              0
            </div>
          </div>
        </div>
      );
    });
  }, [AllsDataUserNow]);

  // دالة للتحقق من امتداد الملف
  const isValidFileExtension = (filename) => {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

  // Start Send Request To Update ImageProfile User
  const HandleUpdateImageProfileBss = async () => {
    const sheckdatimg =
      valueImgeProfilUpdate.current != "" || valueImgeProfilUpdate.current != undefined;
    if (sheckdatimg) {
      // تحقق إضافي قبل الرفع
      if (!isValidFileExtension(valueImgeProfilUpdate.current.name)) {
        OpenDialogForActionFound(
          "❌ يجب ان تكون صورة من احد انواع تالية jpeg او webp او png او jpg"
        );
        return null;
      }

      const datImg = {
        MyAvatarImgProfile: valueImgeProfilUpdate.current,
      };

      HandleCloseOrOpenReadinPage(true);

      dispatsh(starttoshangebigimageinprofilebss(datImg));
    }
  }; //=== End Send Request To Update ImageProfile User ===//

  const handleImageChange = (e) => {
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
      valueImgeProfilUpdate.current = file;
      reader.onload = (e) => setImgProfShangebss(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const stopShangbigimgbss = () => {
    valueImgeProfilUpdate.current = '';
    setImgProfShangebss(ProfileSnageNow.image);
  };

  // Start Her Her To Shacke Shanging For Value Img Profile Bss
  React.useEffect(() => {
    if (imgprofshangebss) {
      setImgProfShangebss(imgprofshangebss);
    } else {
      setImgProfShangebss(ProfileSnageNow.image);
    }
  }, [imgprofshangebss]); //== End Her Her To Shacke Shanging For Value Img Profile Bss == //

  if (ProfileSnageNow.TypProf === "user") {
    return (
      <>
        <Header typeactive={"profile"} />
        <div className="store-profile">
          {/* معلومات الحساب شخصي */}
          <div style={{ direction: "rtl" }} className="profile-header">
            <div className="store-logo">
              <div className="logo-container">
                <AvatarImgForAllType
                  className={"logo-emoji"}
                  typShowImg={valueImgeProfilUpdate.current ? "src" : ""}
                  MyAvatar={imgprofshangebss}
                  style={{
                    width: '95%',
                    height: '95%'
                  }}
                />

                <button
                  className={
                    valueImgeProfilUpdate.current ? "edit-logo-btn" : "dispanone"
                  }
                  onClick={() => HandleUpdateImageProfileBss()}
                >
                  <CloudUploadIcon />
                </button>

                <button
                  className={
                    valueImgeProfilUpdate.current
                      ? "edit-logo-btn active"
                      : "dispanone"
                  }
                  onClick={() => stopShangbigimgbss()}
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
                    display: valueImgeProfilUpdate.current ? "none" : "flex",
                  }}
                  className={
                    valueImgeProfilUpdate.current ? "dispanone" : "edit-logo-btn"
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
                <VerifiedIcon style={{ color: "#4a6cf7" }} />
                <h1 className="store-name">{ProfileSnageNow.name} </h1>
                <VerifiedIcon className="stylevirfedsmpl" />{" "}
              </div>

              <p style={{ textAlign: "right" }} className="store-description">
                حالت لغمل:{" "}
                {NameFirstTrave === "bss"
                  ? "تاجر"
                  : "" || NameFirstTrave === "mewev"
                  ? "تاجر"
                  : "قبد لعمل حالبا"}
              </p>

              <div className="store-meta">
                <span className="meta-item">
                  📦 لبعة لمفضل:{" "}
                  {ProfileSnageNow.mycalb
                    ? ProfileSnageNow.mycalb
                    : "لم يتم تعبات لبيانات"}
                </span>
                <span className="meta-item">
                  📅 تادي لمفضل:{" "}
                  {ProfileSnageNow.mycalb
                    ? ProfileSnageNow.mygame
                    : "لم يتم تعبات لبيانات"}
                </span>
              </div>
            </div>
          </div>

          {/* البطاقات الإحصائية الرئيسية */}
          <div className="main-stats-section">
            <TitelPage TitelPage="نظرة عامة على المعاملات" />
            <div className="main-stats-grid">{jsxshowmoredata}</div>
          </div>

          {/* معلومات المتجر الكاملة بدلاً من الإجراءات السريعة */}
          <div className="store-details-section">
            <div className="store-details-card">
              <h3>معلومات حسابي الكاملة</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">📧 البريد الإلكتروني:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.email}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📞 رقم الهاتف: {`(${ProfileSnageNow.codcat})`}</span>
                  <span className="detail-value">
                    {ProfileSnageNow.NumberPhone}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📍 المدين:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.city
                      ? ProfileSnageNow.city
                      : "لم يتم تسجيل لبيانات"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📦 حال لوضيفية:</span>
                  <span className="detail-value">
                    {NameFirstTrave === "bss"
                      ? "تاجر"
                      : "" || NameFirstTrave === "mewev"
                      ? "تاجر"
                      : "قبد لعمل حالبا"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">📅 تاريخ انشاء لحساب:</span>
                  <span className="detail-value">
                    {formatDate(ProfileSnageNow.created_at, { type: 'short' })}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">👥 لبلد:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.cantry
                      ? ProfileSnageNow.cantry
                      : "لم يتم تسجيل لبيانات"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">👥 نوع لجنس:</span>
                  <span className="detail-value">
                    {ProfileSnageNow.Gender == 1 ? "ذكر" : "انثاء"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">✅ تاريخ لميلاد:</span>
                  <span className="detail-value status-value">
                    {ProfileSnageNow.data_of_birth}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserProfile;
