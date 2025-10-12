import React, { useState, useEffect } from "react";
import "./ForgotPassword.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDialogActionContext } from "../Context/DialogActionContext";
import {
  StartConfirmedCodePhoneToSangePasswordAccounteUser,
  StartConfirmedCodMessagetohangepassword,
  StartSendMessageforsmsnumberusertoshangepasswd,
  starttosendmessageincodetoshangepassword,
} from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
import Cookies from "js-cookie";

let TypActionDoNow = "";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [contactMethod, setContactMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/user-ForgotPassword", ProfileSnageNow]);
  // Start Here To Get Sult For Semthing Request In Page

  React.useEffect(() => {
    if (typeRequestRsp === "starttosendmessageincodetosahngepasswd") {
      if (TypActionDoNow === 1) {
        setIsLoading(false);
        setStep(2);
        setCooldown(60);
        OpenDialogForActionSuccess("تم إرسال رمز التأكيد إلى بريدك الإلكتروني");
      } else if (TypActionDoNow === 2) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound("البريد الإلكتروني غير صحيح أو غير مسجل");
      } else if (TypActionDoNow === 99) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    } else if (
      typeRequestRsp === "startconfirmedcodemessageforemailtoshangepassswd"
    ) {
      if (TypActionDoNow === 1) {
        setIsLoading(false);
        setStep(3);
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إعادة تعيين كلمة المرور بنجاح. تفقد بريدك الإلكتروني للحصول على كلمة المرور الجديدة كما سيتم تسجيل دخولك بعد قليل",
          "active"
        );
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      } else if (TypActionDoNow === 2) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound("البريد الإلكتروني غير صحيح أو غير مسجل");
      } else if (TypActionDoNow === 3) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound("الرمز غير صحيح أو منتهي الصلاحية");
      } else if (TypActionDoNow === 99) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    } else if (
      typeRequestRsp === "StartSendMessageForPhoneUserToShngePassword"
    ) {
      if (resultrquestaction === 3) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound("رقم الهاتف غير مسجل");
      } else if (resultrquestaction === 5) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound(
          "تم إرسال رمز بالفعل، يرجى الانتظار قبل طلب رمز جديد"
        );
      } else if (resultrquestaction === 2) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 4) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 1) {
        setIsLoading(false);
        setStep(2);
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إرسال رمز التأكيد إلى الرقم هاتفك بنجاح"
        );
      }
    } else if (
      typeRequestRsp === "StartSendMessageForPhoneUserToShngePasswordAgn"
    ) {
      if (resultrquestaction === 3) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound("رقم الهاتف غير مسجل");
      } else if (resultrquestaction === 2) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 4) {
        setIsLoading(false);
        setStep(1);
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 1) {
        setIsLoading(false);
        setStep(2);
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إرسال رمز التأكيد إلى الرقم هاتفك بنجاح"
        );
      }
    } else if (
      typeRequestRsp === "startconfirmedmessageohoneusertosangepasswd"
    ) {
      if (resultrquestaction === 2) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound("رقم الهاتف غير مسجل");
      } else if (resultrquestaction === 3) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound("الرمز غير صحيح أو منتهي الصلاحية");
      } else if (resultrquestaction === 4) {
        setIsLoading(false);
        setStep(2);
        OpenDialogForActionFound(
          "فشل ارسال رسال للرقم الهاتف مراد رجاء تغييره او اعادت المحاولة"
        );
      } else if (resultrquestaction === 1) {
        setIsLoading(false);
        setStep(3);
        setCooldown(60);
        OpenDialogForActionSuccess(
          "تم إعادة تعيين كلمة المرور بنجاح. تفقد الرقم هاتفك للحصول على كلمة المرور الجديدة"
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

  React.useEffect(() => {
    setStep(1);
  }, []);

  // إرسال الرمز
  const handleSendCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // محاكاة الإرسال
    if (contactMethod === "email") {
      const data = {
        email: email,
      };
      dispatsh(starttosendmessageincodetoshangepassword(data));
    } else if (contactMethod === "phone") {
      const data = {
        phone: phone,
      };
      dispatsh(StartSendMessageforsmsnumberusertoshangepasswd(data));
    }
    // setTimeout(() => {

    //   alert(
    //     `تم إرسال رمز التحقق إلى ${contactMethod === "email" ? email : phone}`
    //   );

    // }, 1500);
  };

  // تأكيد الرمز
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (verificationCode.length !== 6) return;

    setIsLoading(true);

    // محاكاة التحقق
    if (contactMethod === "email") {
      const data = {
        email: email,
        code: verificationCode,
      };
      dispatsh(StartConfirmedCodMessagetohangepassword(data));
    } else if (contactMethod === "phone") {
      const data = {
        phone: phone,
        code: verificationCode,
      };
      dispatsh(StartConfirmedCodePhoneToSangePasswordAccounteUser(data));
    }
  };

  // إعادة إرسال الرمز
  const handleResendCode = () => {
    if (cooldown > 0) return;

    if (contactMethod === "email") {
      const data = {
        email: email,
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
        {/* الخطوة 1: إدخال البريد أو الهاتف */}
        {step === 1 && (
          <div className="step-content">
            <div className="step-header">
              <div className="step-number">1</div>
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
                    contactMethod === "email" ? "active" : ""
                  }`}
                  onClick={() => setContactMethod("email")}
                >
                  @ البريد الإلكتروني
                </button>
                <button
                  style={{ display: "none" }}
                  type="button"
                  className={`toggle-btn ${
                    contactMethod === "phone" ? "active" : ""
                  }`}
                  onClick={() => setContactMethod("phone")}
                >
                  📞 رقم الهاتف
                </button>
              </div>

              <div className="input-group">
                {contactMethod === "email" ? (
                  <div className="floating-input">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      placeholder=" "
                      required
                    />
                    <label style={{ transform: "0" }}>البريد الإلكتروني</label>
                  </div>
                ) : (
                  <div className="floating-input">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input"
                      placeholder=" "
                      required
                    />
                    <label>رقم الهاتف</label>
                  </div>
                )}
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  "🚀 إرسال رمز التحقق"
                )}
              </button>
            </form>
          </div>
        )}

        {/* الخطوة 2: إدخال الرمز */}
        {step === 2 && (
          <div className="step-content">
            <div className="step-header">
              <div className="step-number">2</div>
              <h2>تحقق من الرمز</h2>
            </div>

            <p className="step-description">
              تم إرسال رمز التحقق إلى
              <strong> {contactMethod === "email" ? email : phone}</strong>
            </p>

            <form onSubmit={handleVerifyCode} className="forgot-form">
              <div className="code-input-container">
                <div className="floating-input code-input">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      if (value.length <= 6) setVerificationCode(value);
                    }}
                    className="form-input"
                    placeholder=" "
                    maxLength={6}
                    required
                  />
                  <label style={{ transform: "translateY(50%)" }}>
                    رمز التحقق المكون من 6 أرقام
                  </label>
                </div>
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
                disabled={verificationCode.length !== 6 || isLoading}
              >
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  "✅ تأكيد الرمز"
                )}
              </button>
            </form>
          </div>
        )}

        {/* الخطوة 3: النجاح */}
        {step === 3 && (
          <div className="step-content success-step">
            <div className="continuous-success">🎉</div>
            <div className="step-header">
              <h2>تم التحقق بنجاح!</h2>
            </div>

            <p className="step-description">
              'تم إعادة تعيين كلمة المرور بنجاح. تفقد بريدك الإلكتروني للحصول
              على كلمة المرور الجديدة'
            </p>

            <div className="success-actions">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <button className="submit-btn success-btn">
                  ← العودة إلى الصفحة رئيسية
                </button>
              </Link>
              <Link to="/logint" style={{ textDecoration: "none" }}>
                <button className="back-to-login">
                  ← انقال إلى تسجيل الدخول
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* تقدم الخطوات */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
          ></div>
          <div className="progress-steps">
            <span className={step >= 1 ? "active" : ""}>1</span>
            <span className={step >= 2 ? "active" : ""}>2</span>
            <span className={step >= 3 ? "active" : ""}>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
