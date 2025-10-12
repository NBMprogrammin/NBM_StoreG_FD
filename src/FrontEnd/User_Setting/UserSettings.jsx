import React, { useEffect, useState } from "react";
import "./StoreSettings.css";
import Header from "../layoute/Hedaer";
import {
  starttoconfirmedshangeemailprofile,
  starttoshangdataprofilesettingsuserandbss,
  starttoshangemyemailprofile,
  StartToUpdateOrdCreatePasswordSettingForBss,
} from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
import { useDialogActionContext } from "../Context/DialogActionContext";
import { useSelector, useDispatch } from "react-redux";
import TitelPage from "../Commponent/TitelPage";
let typRequest = "";

// فئات المتجر
const storeCategories = [
  "برشلونة",
  "ريال مدريد",
  "تلاتيكو مدريد",
  "مان سيتي",
  "مان يونايتد",
  "لفربول",
  "ارسنال",
  "تشلسي",
  "باريس",
  "مارسيليا",
];

const allgamingsToPlaye = [
  "efootal",
  "pubg mobile",
  "free fire",
  "EFC Mobile",
  "golf Dot",
  "Dls",
  "Boxing",
];

const UserSettings = () => {
  const [dataProfileBssNow, setDataProfileBssNow] = useState({
    storeName: "",
    storeCountry: "",
    storeCity: "",
    storeEmail: "",
    storePhone: "",
    typgender: "",
    mycalb: "",
    mygame: "",
    data_of_birth: "",
  });

  const [dataProfileBssNowErrors, setDataProfileBssNowErrors] = useState({
    storeName: "",
    storeCountry: "",
    storeCity: "",
    storeEmail: "",
    storePhone: "",
    typgender: "",
    mycalb: "",
    mygame: "",
    data_of_birth: "",
  });

  const [ereeremailandphone, setEreereMailandPhone] = useState({
    email: "",
    phone: "",
  });

  // حالة التعديل
  const [isEditing, setIsEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const [phoneEditing, setPhoneEditing] = useState(false);
  const [datPasswordSettings, setDatPasswordSettings] = useState({
    passwordF: "",
    passwordC: "",
  });

  const [datPasswordSettingsErrer, setDatPasswordSettingsErrer] = useState({
    passwordF: "",
    passwordC: "",
  });

  const [verificationType, setVerificationType] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [cooldown, setCooldown] = useState(0);

  const dispatsh = useDispatch();
  const {
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
    OpenDialogForActionSuccess,
    NowProfilShanfe,
    TypeAlearVipNow,
  } = useDialogActionContext();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
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

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    if (typRequest === "starttocreateorupdpasswordsettings") {
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          "تم تحديث كلمة السر السر لحسابك شخصي بنجاح يمكنك استعمالها الان"
        );
      } else if (resultrquestaction === 3 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا غير معروف اثناء لعملية سيتم تحميل صفحة و اضهار تحديث",
          "active"
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } else if (typRequest === "startshangeprofilesettingsforuser") {
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          "تم تحديث بيانات لحسابك شخصي بنجاح سيتم تحميل صفحو و اضهار تحديث",
          "active"
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } else if (resultrquestaction === 2 || resultrquestaction === 5) {
        OpenDialogForActionFound(
          "حدث خطا غير معروف اثناء لعملية سيتم تحميل صفحة و اضهار تحديث",
          "active"
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } else if (typRequest === "startshangenumberphonemyprofile") {
      if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `تم رصد رقم لهاتف ${dataProfileBssNow.storePhone} حاليا قيد لاستخدام من طرف لمستخدم اخر يمكنك تغيير لبيانات و لمحاولة`
        );
      } else if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          "تم تحديث رقم لهاتف للحسابك شخصي بنجاح سيتم تحميل صفحة و اضهار تحديث",
          "active"
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء محاولتك سيتم تحميل صفحة و اعادت لمحاولة لاحقا"
        );
      }
    } else if (typRequest === "shartshangeemailprofile") {
      if (resultrquestaction === 1) {
        setCooldown(60);
        setEmailEditing(false);
        openVerificationModal("email");
        OpenDialogForActionSuccess("تم إرسال رمز التأكيد إلى بريدك الإلكتروني");
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "االبريد الإلكتروني مستخدم بلفعل حاول بانوان اخر"
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          "حدث خطا فشل ارسال كود او هناك مشكلة فلشبة حاول مرة اخرى"
        );
      }
    } else if (typeRequestRsp === "startconfirmedshangeemailprofile") {
      if (resultrquestaction === 1) {
        setVerificationType(null);
        setVerificationCode("");
        OpenDialogForActionSuccess(
          "تم تغيير البريدك الاكتروني للحسابك شخصي بنجاح سيتم تحميل صفحة و اضهار تحديث",
          "active"
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound("البريد الإلكتروني مستخدم بلفعل ");
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound("الرمز غير صحيح أو منتهي الصلاحية ");
      } else if (resultrquestaction === 9) {
        setVerificationType(null);
        setVerificationCode("");
        OpenDialogForActionSuccess(
          "تم تغيير البريدك الاكتروني للحسابك تجاري بنجاح  و تعذر ارسال تاكيد للبريد سيتم تحميل صفحو و اضهار تحديث",
          "active"
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "starttocreateorupdpasswordsettings",
    typeRequestRsp === "shartshangeemailprofile",
    typeRequestRsp === "startshangenumberphonemyprofile",
    typeRequestRsp === "startshangeprofilesettingsforuser",
    typeRequestRsp === "startconfirmedshangeemailprofile",
  ]); //== End Here To Get Sult For Semthing Request In Page ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      HandleCloseOrOpenReadinPage(true);
      typRequest = typeRequestRsp;
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response == //

  // Start Shange Defaoult Value In Data Profile Bss
  React.useMemo(() => {
    typRequest = "";
    if (NowProfilShanfe) {
      setDataProfileBssNow({
        ...dataProfileBssNow,
        storeName: NowProfilShanfe.name,
        storeCity: NowProfilShanfe.city,
        storeCountry: NowProfilShanfe.cantry,
        typgender: NowProfilShanfe.Gender,
        storeEmail: NowProfilShanfe.email,
        storePhone: NowProfilShanfe.NumberPhone,
        data_of_birth: NowProfilShanfe.data_of_birth,
        mycalb: NowProfilShanfe.mycalb,
        mygame: NowProfilShanfe.mygame,
      });
    }
  }, [NowProfilShanfe]); //== End Shange Defaoult Value In Data Profile Bss ==//

  // معالجة تغيير البيانات
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataProfileBssNow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Start Her To Validate Alls Values For Correct Data To Do Action
  const validateFormseetingsprofbss = () => {
    const newErrors = {};

    if (!dataProfileBssNow.storeName) {
      newErrors.storeName = "الاسم المستخدم مطلوب";
    } else if (dataProfileBssNow.storeName.length < 3) {
      newErrors.storeName = "الاسم المستخدم يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.storeName.length > 110) {
      newErrors.storeName = "الاسم المستخدم يجب أن يكون 110 أحرف بلكثير";
    }

    if (!dataProfileBssNow.storeCity) {
      newErrors.storeCity = "تحديد المدينة مطلوب";
    } else if (dataProfileBssNow.storeCity.length < 3) {
      newErrors.storeCity = "تحديد المدينة يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.storeCity.length > 90) {
      newErrors.storeCity = "تحديد المدينة يجب أن يكون 90 أحرف بلكثير";
    }

    if (!dataProfileBssNow.mycalb) {
      newErrors.mycalb = "اختيار نادي لمفضل مطلوب";
    } else if (dataProfileBssNow.mycalb.length < 3) {
      newErrors.mycalb = "اختيار نادي لمفضل يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.mycalb.length > 50) {
      newErrors.mycalb = "اختيار نادي لمفضل يجب أن يكون 50 أحرف بلكثير";
    }

    if (!dataProfileBssNow.mygame) {
      newErrors.mygame = "اختيار لعبة لمفضل مطلوب";
    } else if (dataProfileBssNow.mygame.length < 3) {
      newErrors.mygame = "اختيار لعبة لمفضل يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.mygame.length > 110) {
      newErrors.mygame = "اختيار لعبة لمفضل يجب أن يكون 110 أحرف بلكثير";
    }

    if (
      dataProfileBssNow.storeName == NowProfilShanfe.name &&
      dataProfileBssNow.storeCity == NowProfilShanfe.city &&
      dataProfileBssNow.mycalb == NowProfilShanfe.mycalb &&
      dataProfileBssNow.mygame == NowProfilShanfe.mygame
    ) {
      newErrors.data_of_birth =
        "كل لبيانات متشابه لقديم بلجديد يمكنك تغييرها للخكوة التالية";
    }

    if (!dataProfileBssNow.storeCountry) {
      newErrors.storeCountry = " اختيار البلد مطلوب";
    } else if (dataProfileBssNow.storeCountry.length < 3) {
      newErrors.storeCountry = " اختيار البلد يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.storeCountry.length > 90) {
      newErrors.storeCountry = " اختيار البلد يجب أن يكون 90 أحرف بلكثير";
    }

    if (!dataProfileBssNow.typgender) {
      newErrors.typgender = "اختيار الجنس مطلوب";
    } else if (dataProfileBssNow.typgender.length < 3) {
      newErrors.typgender = "اختيار الجنس يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.typgender.length > 10) {
      newErrors.typgender = "اختيار الجنس يجب أن يكون 10 أحرف بلكثير";
    }

    if (!dataProfileBssNow.data_of_birth) {
      newErrors.data_of_birth = "تاريخ لميلاد مطلوب";
    } else if (dataProfileBssNow.data_of_birth.length < 3) {
      newErrors.data_of_birth = "تاريخ لميلاد يجب أن يكون 3 أحرف على الأقل";
    } else if (dataProfileBssNow.data_of_birth.length > 45) {
      newErrors.data_of_birth = "تاريخ لميلاد يجب أن يكون 45 أحرف بلكثير";
    }

    setDataProfileBssNowErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }; //== End Her To Validate Alls Values For Correct Data To Do Action ==//

  // Start Her To Send Request To Update Data Profile
  const handleSave = (e) => {
    e.preventDefault();
    if (!validateFormseetingsprofbss()) return;
    setIsEditing(false);

    const datUpd = {
      name: dataProfileBssNow.storeName,
      city: dataProfileBssNow.storeCity,
      bastclab: dataProfileBssNow.mycalb,
      bastgame: dataProfileBssNow.mygame,
    };
    dispatsh(starttoshangdataprofilesettingsuserandbss(datUpd));
  }; //== End Her To Send Request To Update Data Profile ==//

  // بدء تعديل البريد
  const startEmailEdit = (e) => {
    e.preventDefault();
    if (dataProfileBssNow.storeEmail.length > 5) {
      setEmailEditing(true);
    }
  };

  // بدء تعديل الهاتف
  const startPhoneEdit = (e) => {
    e.preventDefault();
    setPhoneEditing(true);
  };

  const validtypeemail = () => {
    const newErrors = {};
    if (!dataProfileBssNow.storeEmail) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (dataProfileBssNow.storeEmail == NowProfilShanfe.email) {
      newErrors.email = "لم تقم باي تعديلات كل شيء متشابه لقديم بلجديد";
    } else if (!/\S+@\S+\.\S+/.test(dataProfileBssNow.storeEmail)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }

    setEreereMailandPhone(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // تأكيد البريد
  const confirmEmail = () => {
    if (!validtypeemail()) return;

    const data = {
      email: dataProfileBssNow.storeEmail,
    };
    dispatsh(starttoshangemyemailprofile(data));
  };

  const validtypephonenmb = () => {
    const newErrors = {};
    if (!dataProfileBssNow.storePhone) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (dataProfileBssNow.storePhone == NowProfilShanfe.NumberPhone) {
      newErrors.phone = "لم تقم باي تعديلات كل شيء متشابه لقديم بلجديد";
    } else if (!/^[0-9]+$/.test(dataProfileBssNow.storePhone)) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي على أرقام فقط";
    } else if (dataProfileBssNow.storePhone.length < 8) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي عللاقل 8 ارقام";
    } else if (dataProfileBssNow.storePhone.length >= 15) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي بلكثير على 15 رقم";
    }

    setEreereMailandPhone(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // تأكيد الهاتف
  const confirmPhone = () => {
    if (!validtypephonenmb()) return;
    const data = {
      id: 12987567898,
      numberphone: dataProfileBssNow.storePhone,
    };

    TypeAlearVipNow(
      data,
      "StartToShangeMyNumberPhone",
      "",
      "",
      "كلمة السر الاعدادات",
      "password",
      `تاكيد تغيير رقم الهاتف الحالي ${NowProfilShanfe.NumberPhone}`,
      "تاكيد",
      "",
      "user",
      `هل انت متاكد من رقبتك في تغيير رقم الهاتف الى ${dataProfileBssNow.storePhone} سيتم فلمستقبل ارسال كود له فمن لمهم تجنب لمشاكل فلمستقبل`,
      data.id + 234567
    );
  };

  // إلغاء التعديل
  const cancelEdit = (type) => {
    if (type === "email") {
      setDataProfileBssNow((prev) => ({
        ...prev,
        storeEmail: NowProfilShanfe.email,
      }));
      setEreereMailandPhone({
        ...ereeremailandphone,
        email: "",
      });
      setEmailEditing(false);
    } else {
      setDataProfileBssNow((prev) => ({
        ...prev,
        storePhone: NowProfilShanfe.NumberPhone,
      }));
      setEreereMailandPhone({
        ...ereeremailandphone,
        phone: "",
      });
      setPhoneEditing(false);
    }
  };

  // فتح نافذة التحقق
  const openVerificationModal = (type) => {
    setVerificationType(type);
    setVerificationCode("");
    setCooldown(60);

    // بدء timer
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // إعادة إرسال الرمز
  const resendCode = () => {
    if (cooldown > 0) return;

    setCooldown(60);
    const data = {
      email: dataProfileBssNow.storeEmail,
    };
    dispatsh(starttoshangemyemailprofile(data));
  };

  // تأكيد الرمز
  const confirmCode = () => {
    if (verificationCode.length !== 6) return;
    const data = {
      email: dataProfileBssNow.storeEmail,
      code: verificationCode,
    };
    dispatsh(starttoconfirmedshangeemailprofile(data));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!datPasswordSettings.passwordF) {
      newErrors.passwordF = "كلمة السر هنا مطلوب";
    } else if (datPasswordSettings.passwordF.length < 6) {
      newErrors.passwordF = "كلمة السر يجب أن تكون 6 أحرف على الأقل";
    } else if (datPasswordSettings.passwordF.length > 99) {
      newErrors.passwordF = "كلمة السر يجب أن تكون 99 أحرف بلكثير";
    }
    if (!datPasswordSettings.passwordC)
      newErrors.passwordC = "تاكيد كلمة السر مطلوب";

    if (datPasswordSettings.passwordF != datPasswordSettings.passwordC)
      newErrors.passwordC = "كلمة السر غير متطابقة";

    setDatPasswordSettingsErrer(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // تأثير العد التنازلي
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const HandleToConfirmedPasswordSettings = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setDatPasswordSettingsErrer({
      ...datPasswordSettingsErrer,
      passwordF: "",
      passwordC: "",
    });

    if (datPasswordSettings.passwordF) {
      const data = {
        passwordUpd: datPasswordSettings.passwordF,
      };
      dispatsh(StartToUpdateOrdCreatePasswordSettingForBss(data));
    }
  };

  return (
    <div
      style={{ marginTop: "110px", maxWidth: "1200px", marginInline: "auto" }}
    >
      <Header typeactive={"profilesettings"} />
      <div style={{ paddingInline: "30px" }}>
        <TitelPage TitelPage="⚙️ إعدادات الحساب شخصي" />
      </div>
      <div className="store-settings">
        {/* المعلومات الأساسية في form واحد */}
        <div className="settings-form">
          <div className="settings-card">
            <h3>📋 المعلومات الأساسية</h3>

            <div className="form-row">
              <div className="form-group">
                <label>الاسم التجاري *</label>
                <input
                  type="text"
                  name="storeName"
                  value={dataProfileBssNow.storeName}
                  onChange={handleInputChange}
                  className="form-input"
                  disabled={!isEditing}
                  required
                />
                <h6 className="titelerrorform">
                  {dataProfileBssNowErrors.storeName}
                </h6>
              </div>

              <div className="form-group">
                <label>تحديد المدينة</label>
                <input
                  type="text"
                  name="storeCity"
                  value={dataProfileBssNow.storeCity}
                  onChange={handleInputChange}
                  className="form-input"
                  disabled={!isEditing}
                />
                <h6 className="titelerrorform">
                  {dataProfileBssNowErrors.storeCity}
                </h6>
              </div>
            </div>

            <div className="form-group">
              <label>نادي لمفضل *</label>
              <select
                name="mycalb"
                value={dataProfileBssNow.mycalb}
                onChange={handleInputChange}
                className="form-input"
                disabled={!isEditing}
                required
              >
                {storeCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <h6 className="titelerrorform">
                {dataProfileBssNowErrors.mycalb}
              </h6>
            </div>

            <div className="form-group">
              <label>لعبة لمفضلة *</label>
              <select
                name="mygame"
                value={dataProfileBssNow.mygame}
                onChange={handleInputChange}
                className="form-input"
                disabled={!isEditing}
                required
              >
                {allgamingsToPlaye.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <h6 className="titelerrorform">
                {dataProfileBssNowErrors.mygame}
              </h6>
            </div>

            <div className="form-group">
              <label>البلد</label>
              <input
                type="text"
                value={dataProfileBssNow.storeCountry}
                className="form-input"
                disabled
                style={{ background: "#f7fafc", color: "#718096" }}
              />
            </div>

            <div className="form-group">
              <label>نوع لجنس</label>
              <input
                type="text"
                value={dataProfileBssNow.typgender == 1 ? "ذكر" : "انثاء"}
                className="form-input"
                disabled
                style={{ background: "#f7fafc", color: "#718096" }}
              />
              <h6 className="titelerrorform">
                {dataProfileBssNowErrors.typgender}
              </h6>
            </div>

            <div className="form-group">
              <label>تاريخ الميلاد</label>
              <input
                type="text"
                value={dataProfileBssNow.data_of_birth}
                className="form-input"
                disabled
                style={{ background: "#f7fafc", color: "#718096" }}
              />
              <h6 className="titelerrorform">
                {dataProfileBssNowErrors.data_of_birth}
              </h6>
            </div>

            <div className="form-actions">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleSave}
                  >
                    💾 حفظ المعلومات
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setDataProfileBssNowErrors({
                        ...dataProfileBssNowErrors,
                        storeName: "",
                        storeCountry: "",
                        storeCity: "",
                        storeEmail: "",
                        storePhone: "",
                        typgender: "",
                        mycalb: "",
                        mygame: "",
                        data_of_birth: "",
                      });
                      setIsEditing(false);
                    }}
                  >
                    ❌ إلغاء
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  ✏️ تعديل المعلومات الأساسية
                </button>
              )}
            </div>
          </div>
        </div>

        {/* معلومات التواصل */}
        <div className="settings-section">
          <div className="settings-card">
            <h3>📞 معلومات التواصل</h3>

            {/* البريد الإلكتروني */}
            <form onSubmit={startEmailEdit} className="contact-item">
              <div className="contact-info">
                <span className="contact-label">البريد الإلكتروني:</span>
                {emailEditing ? (
                  <>
                    <input
                      type="email"
                      value={dataProfileBssNow.storeEmail}
                      onChange={(e) =>
                        setDataProfileBssNow((prev) => ({
                          ...prev,
                          storeEmail: e.target.value,
                        }))
                      }
                      className="contact-input"
                      placeholder="البريد الإلكتروني الجديد"
                    />
                    <h6 className="titelerrorform">
                      {ereeremailandphone.email}
                    </h6>
                  </>
                ) : (
                  <span className="contact-value">
                    {dataProfileBssNow.storeEmail}
                  </span>
                )}
              </div>

              {emailEditing ? (
                <div className="edit-actions">
                  <button className="confirm-btn" onClick={confirmEmail}>
                    ✅ تأكيد
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => cancelEdit("email")}
                  >
                    ❌ إلغاء
                  </button>
                </div>
              ) : (
                <button className="verify-btn" type="submit">
                  ✏️ تعديل
                </button>
              )}
            </form>

            {/* رقم الهاتف */}
            <form onSubmit={startPhoneEdit} className="contact-item">
              <div className="contact-info">
                <span className="contact-label">رقم الهاتف:</span>
                {phoneEditing ? (
                  <input
                    type="tel"
                    value={dataProfileBssNow.storePhone}
                    onChange={(e) =>
                      setDataProfileBssNow((prev) => ({
                        ...prev,
                        storePhone: e.target.value,
                      }))
                    }
                    className="contact-input"
                    placeholder="رقم الهاتف الجديد"
                  />
                ) : (
                  <span className="contact-value">
                    {dataProfileBssNow.storePhone}
                  </span>
                )}
                <h6 className="titelerrorform">{ereeremailandphone.phone}</h6>
              </div>

              {phoneEditing ? (
                <div className="edit-actions">
                  <button className="confirm-btn" onClick={confirmPhone}>
                    ✅ تأكيد
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => cancelEdit("phone")}
                  >
                    ❌ إلغاء
                  </button>
                </div>
              ) : (
                <button className="verify-btn" type="submit">
                  ✏️ تعديل
                </button>
              )}
            </form>
          </div>
        </div>

        {/* الأمان */}
        <div className="settings-section">
          <div className="settings-card">
            <h3>🔒 الأمان</h3>

            <form onSubmit={HandleToConfirmedPasswordSettings}>
              <div className="form-group">
                <label>كلمة السر </label>
                <input
                  type="password"
                  className="form-input"
                  value={datPasswordSettings.passwordF}
                  onChange={(val) => {
                    setDatPasswordSettings({
                      ...datPasswordSettings,
                      passwordF: val.target.value,
                    });
                  }}
                  placeholder="أدخل كلمة السر الجديدة"
                />
                <h6 className="titelerrorform">
                  {datPasswordSettingsErrer.passwordF}
                </h6>
              </div>

              <div className="form-group">
                <label>تأكيد كلمة السر</label>
                <input
                  type="password"
                  className="form-input"
                  value={datPasswordSettings.passwordC}
                  onChange={(val) => {
                    setDatPasswordSettings({
                      ...datPasswordSettings,
                      passwordC: val.target.value,
                    });
                  }}
                  placeholder="أعد إدخال كلمة السر"
                />
                <h6 className="titelerrorform">
                  {datPasswordSettingsErrer.passwordC}
                </h6>
              </div>

              <button className="btn-primary" type="submit">
                🔄 تحديث كلمة السر
              </button>
            </form>
          </div>
        </div>

        {/* نافذة التحقق */}
        {verificationType && (
          <div className="modal-overlay">
            <div className="verification-modal">
              <div className="modal-header">
                <h3>تحقق من {"البريد الإلكتروني"}</h3>
                <button
                  className="close-btn"
                  onClick={() => {
                    setDataProfileBssNow({
                      ...dataProfileBssNow,
                      storeName: NowProfilShanfe.name,
                      storeCity: NowProfilShanfe.city,
                      storeCountry: NowProfilShanfe.cantry,
                      typgender: NowProfilShanfe.Gender,
                      storeEmail: NowProfilShanfe.email,
                      storePhone: NowProfilShanfe.NumberPhone,
                      data_of_birth: NowProfilShanfe.data_of_birth,
                      mycalb: NowProfilShanfe.mycalb,
                      mygame: NowProfilShanfe.mygame,
                    });
                    setVerificationType(null);
                  }}
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <p className="verification-message">
                  تم إرسال رمز التحقق إلى
                  <strong> {dataProfileBssNow.storeEmail}</strong>
                </p>

                <div className="code-input-container">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      if (value.length <= 6) {
                        setVerificationCode(value);
                        if (value.length === 6) {
                          confirmCode();
                        }
                      }
                    }}
                    className="code-input"
                    placeholder="أدخل الرمز المكون من 6 أرقام"
                    maxLength={6}
                    autoFocus
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={resendCode}
                    disabled={cooldown > 0}
                  >
                    {cooldown > 0
                      ? `إعادة الإرسال (${cooldown})`
                      : "إعادة إرسال الرمز"}
                  </button>

                  <button
                    type="button"
                    className="confirm-btn"
                    onClick={confirmCode}
                    disabled={verificationCode.length !== 6}
                  >
                    ✅ تأكيد
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSettings;
