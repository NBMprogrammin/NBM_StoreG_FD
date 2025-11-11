import React, { useState, useRef, useEffect } from "react";
import "./ForgotPassword.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDialogActionContext } from "../Context/DialogActionContext";
import {
  StartConfirmedCodePhoneToSangePasswordAccounteUser,
  StartConfirmedCodMessagetohangepassword,
  StartSendMessageforsmsnumberusertoshangepasswd,
  starttosendmessageincodetoshangepassword,
} from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenowSlice";
import Cookies from "js-cookie";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {
  InputAdornment,
  TextField
} from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';

let TypActionDoNow = "";

const ForgotPassword = () => {
  const step = useRef(1);
  const contactMethod = useRef('email');
  const email = useRef('');
  const phone = useRef('');
  const verificationCode = useRef('');
  const [cooldown, setCooldown] = useState(0);
  const isLoading = useRef(false);
  const dispatsh = useDispatch();
  const { OpenDialogForActionSuccess, OpenDialogForActionFound } =
    useDialogActionContext();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.datauser.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.datauser.typRequestNow;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//
  const navigate = useNavigate();

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    TypActionDoNow = resultrquestaction;
  }, [resultrquestaction]); // End Her To Sheck loding Response

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
      step.current = 1;
    };
    checkAuthentication();
  }, [navigate === "/user-ForgotPassword", ProfileSnageNow]);
  // Start Here To Get Sult For Semthing Request In Page

  React.useEffect(() => {
    if (typeRequestRsp === "starttosendmessageincodetosahngepasswd") {
      if (TypActionDoNow === 1) {
        isLoading. current = false;
        step.current = 2;
        setCooldown(60);
        OpenDialogForActionSuccess("تم إرسال رمز التأكيد إلى بريدك الإلكتروني");
      } else if (TypActionDoNow === 2) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound("البريد الإلكتروني غير صحيح أو غير مسجل");
      } else if (TypActionDoNow === 99) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      } else if(resultrquestaction === 7) {
        OpenDialogForActionFound(
          "فشل ارسال كود تاكد من ادخالك لبيانات صحيحة او قم بتفقد شبكة عندك و حاول مرة اخرى"
        );
        isLoading. current = false;
        step.current = 1;
      }
    } else if (
      typeRequestRsp === "startconfirmedcodemessageforemailtoshangepassswd"
    ) {
      if (TypActionDoNow === 1) {
        isLoading. current = false;
        step.current = 3;
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إعادة تعيين كلمة المرور بنجاح. تفقد بريدك الإلكتروني للحصول على كلمة المرور الجديدة كما تم تسجيل دخولك ",
        );
        navigate("/dashboard");
      } else if (TypActionDoNow === 2) {
        isLoading. current = false;
        step.current = 2;
        OpenDialogForActionFound("البريد الإلكتروني غير صحيح أو غير مسجل");
      } else if (TypActionDoNow === 3) {
        isLoading. current = false;
        step.current = 2;
        OpenDialogForActionFound("الرمز غير صحيح أو منتهي الصلاحية");
      } else if (TypActionDoNow === 99) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    } else if (
      typeRequestRsp === "StartSendMessageForPhoneUserToShngePassword"
    ) {
      if (resultrquestaction === 3) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound("رقم الهاتف غير مسجل");
      } else if (resultrquestaction === 5) {
        isLoading. current = false;
        step.current = 2;
        OpenDialogForActionFound(
          "تم إرسال رمز بالفعل، يرجى الانتظار قبل طلب رمز جديد"
        );
      } else if (resultrquestaction === 2) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 4) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 1) {
        isLoading. current = false;
        step.current = 2;
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إرسال رمز التأكيد إلى الرقم هاتفك بنجاح"
        );
      } else if (TypActionDoNow === 99) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    } else if (
      typeRequestRsp === "StartSendMessageForPhoneUserToShngePasswordAgn"
    ) {
      if (resultrquestaction === 3) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound("رقم الهاتف غير مسجل");
      } else if (resultrquestaction === 2) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 4) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 1) {
        isLoading. current = false;
        step.current = 2;
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إرسال رمز التأكيد إلى الرقم هاتفك بنجاح"
        );
      } else if (TypActionDoNow === 99) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    } else if (
      typeRequestRsp === "startconfirmedmessageohoneusertosangepasswd"
    ) {
      if (resultrquestaction === 2) {
        isLoading. current = false;
        step.current = 2;
        OpenDialogForActionFound("رقم الهاتف غير مسجل");
      } else if (resultrquestaction === 3) {
        isLoading. current = false;
        step.current = 2;
        OpenDialogForActionFound("الرمز غير صحيح أو منتهي الصلاحية");
      } else if (resultrquestaction === 4) {
        isLoading. current = false;
        step.current = 2;
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 1) {
        isLoading. current = false;
        step.current = 3;
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إعادة تعيين كلمة المرور بنجاح. تفقد الرقم هاتفك للحصول على كلمة المرور الجديدة"
        );
      } else if (TypActionDoNow === 99) {
        isLoading. current = false;
        step.current = 1;
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "starttosendmessageincodetosahngepasswd",
    typeRequestRsp === "startconfirmedcodemessageforemailtoshangepassswd",
    typeRequestRsp === "StartSendMessageForPhoneUserToShngePassword",
    typeRequestRsp === "StartSendMessageForPhoneUserToShngePasswordAgn",
    typeRequestRsp === "startconfirmedmessageohoneusertosangepasswd",
  ]); //== End Here To Get Sult For Semthing Request In Page ==//

  // إرسال الرمز
  const handleSendCode = async (e) => {
    e.preventDefault();
      isLoading. current = true;

    // محاكاة الإرسال
    if (contactMethod.current === "email") {
      const data = {
        email: email.current,
      };
      dispatsh(starttosendmessageincodetoshangepassword(data));
    } else if (contactMethod.current === "phone") {
      const data = {
        phone: phone.current,
      };
      dispatsh(StartSendMessageforsmsnumberusertoshangepasswd(data));
    }
  };

  // تأكيد الرمز
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (verificationCode.current.length !== 6) return;

    isLoading. current = true;

    // محاكاة التحقق
    if (contactMethod.current === "email") {
      const data = {
        email: email.current,
        code: verificationCode.current,
      };
      dispatsh(StartConfirmedCodMessagetohangepassword(data));
    } else if (contactMethod.current === "phone") {
      const data = {
        phone: phone.current,
        code: verificationCode.current,
      };
      dispatsh(StartConfirmedCodePhoneToSangePasswordAccounteUser(data));
    }
  };

  // إعادة إرسال الرمز
  const handleResendCode = async () => {
    if (cooldown > 0) return;

    if (contactMethod.current === "email") {
      const data = {
        email: email.current,
      };
      setCooldown(60);
      dispatsh(starttosendmessageincodetoshangepassword(data));
    }
  };

  // تأثير العد التنازلي
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  return (
    <div className="forgot-password-container">
      {/* الخلفية المتحركة */}
      <div className="animated-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      <div className="forgot-password-card">
        <div className="card-header">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link
                      to="/home"
                      style={{ textDecoration: "none", width: "fit-content" }}
                    >
                      <div className="logo-main">
                        <div className="logo-icon-main">
                          <span>nbm</span>
                        </div>
                        <h1>NBMstoreG</h1>
                      </div>
                    </Link>
                  </div>
                </div>
        {/* الخطوة 1: إدخال البريد أو الهاتف */}
        {step.current === 1 && (
          <div>
            <div className="step-header">
              <div className="step-numberFg">1</div>
              <h2>استرداد حسابك</h2>
            </div>

            <p className="step-description">
              أدخل بريدك الإلكتروني لإرسال رمز التحقق
            </p>

            <form onSubmit={handleSendCode} className="forgot-form">
              <div className="method-toggle" style={{ marginBlock: "12px" }}>
                <button
                  type="button"
                  className={`toggle-btn ${
                    contactMethod.current === "email" ? "active" : ""
                  }`}
                  onClick={() => contactMethod.current = 'email'}
                >
                  @ البريد الإلكتروني
                </button>
                <button
                  // style={{ display: "none" }}
                  type="button"
                  disabled
                  className={`toggle-btn ${
                    contactMethod.current === "phone" ? "active" : ""
                  }`}
                  onClick={() => contactMethod.current = 'phone'}
                >
                  📞 رقم الهاتف
                </button>
              </div>

              <div className="input-group">
                {contactMethod.current === "email" ? (
                  <div className="floating-input">
                    <label style={{ transform: "0", textAlign: 'right' }}>البريد الإلكتروني</label>
                    <TextField
                      fullWidth
                      name="email"
                      className={"form-input"}
                      // value={email}
                      type="email"
                      style={{ fontSize: "25px", direction: 'rtl' }}
                      onChange={(e) => email.current = e.target.value}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AlternateEmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                    />
                  </div>
                ) : (
                  <div className="floating-input">
                    <input
                      type="tel"
                      value={phone.current}
                      onChange={(e) => phone.current = e.target.value}
                      className="form-input"
                      placeholder=" "
                      required
                    />
                    <label>رقم الهاتف</label>
                  </div>
                )}
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading.current}>
                {isLoading.current ? (
                  <div className="loading-spinner"></div>
                ) : (
                  "🚀 إرسال رمز التحقق"
                )}
              </button>
            </form>
          </div>
        )}

        {/* الخطوة 2: إدخال الرمز */}
        {step.current === 2 && (
          <div>
            <div className="step-header">
              <div className="step-numberFg">2</div>
              <h2>تحقق من الرمز</h2>
            </div>

            <p className="step-description">
              تم إرسال رمز التحقق إلى
              <strong> {contactMethod.current === "email" ? email.current : phone.current}</strong>
            </p>
            <p className="step-description">
              رمز التحقق المكون من 6 أرقام
            </p>

            <form onSubmit={handleVerifyCode} className="forgot-form">
              <div className="code-input-container">
                <TextField
                  fullWidth
                  className={"form-input"}
                  type="text"
                  style={{ fontSize: "25px", direction: 'rtl' }}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    if (value.length <= 6) verificationCode.current = value;
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
              </div>

              <div className="resend-container">
                <button
                  type="button"
                  className="resend-btn"
                  onClick={handleResendCode}
                  disabled={cooldown > 0}
                >
                  {cooldown > 0
                    ? `إعادة الإرسال بعد ${cooldown} ثانية`
                    : "🔄 إعادة إرسال الرمز"}
                </button>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={verificationCode.current.length !== 6 || isLoading.current}
              >
                {isLoading.current ? (
                  <div className="loading-spinner"></div>
                ) : (
                  "✅ تأكيد الرمز"
                )}
              </button>
            </form>
          </div>
        )}

        {/* تقدم الخطوات */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: step.current === 1 ? "33%" : step.current === 2 ? "66%" : "100%" }}
          ></div>
          <div className="progress-steps">
            <span className={step.current >= 1 ? "active" : ""}>1</span>
            <span className={step.current >= 2 ? "active" : ""}>2</span>
            <span className={step.current >= 3 ? "active" : ""}>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
