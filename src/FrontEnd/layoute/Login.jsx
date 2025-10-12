import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { startloginformyaccountenow } from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
import { useSelector, useDispatch } from "react-redux";
import { useDialogActionContext } from "../Context/DialogActionContext";
import Cookies from "js-cookie";
import { useNavigation } from "../hooks/useNavigation";
import { useNavigate } from "react-router-dom";

let TypActionDoNow = "";

const Login = ({ onSwitchToSignup, onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatsh = useDispatch();
  const { OpenDialogForActionFound } = useDialogActionContext();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const resultrquestaction = useSelector((state) => {
    return state.datauser.resultrquestaction;
  });

  const lodingtorspact = useSelector((state) => {
    return state.datauser.lodingtorspact;
  });

  const TokenUser = useSelector((state) => {
    return state.datauser.Token;
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

  React.useEffect(() => {
    const checkAuthentication = () => {
      const tokenFoul = Cookies.get("token");
      TypActionDoNow = "";
      if (tokenFoul) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/home"]);

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    if (typeRequestRsp === "startactiontologinmyaccountenow") {
      if (TypActionDoNow === 1) {
        TypActionDoNow = "";
        navigate("/dashboard");
      } else if (TypActionDoNow === 2) {
        setIsLoading(false);
        TypActionDoNow = "";
        OpenDialogForActionFound(
          `الكلمة السر او لبريد لاكتروني او رقم هاتف غير صحيحة حارل مرة اخرى`
        );
      } else if (TypActionDoNow === 99) {
        TypActionDoNow = "";
        setIsLoading(false);
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "startactiontologinmyaccountenow",
  ]); //== End Here To Get Sult For Semthing Request In Page ==//

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!loginData.username) {
      newErrors.username = "البريد الإلكتروني أو رقم الهاتف مطلوب";
    }

    if (!loginData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (loginData.password.length < 5) {
      newErrors.password = "كلمة المرور يجب أن تكون 5 أحرف على الأقل";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    const data = {
      email: loginData.username,
      password: loginData.password,
    };
    dispatsh(startloginformyaccountenow(data));
  };

  return (
    <div className="login-container">
      {/* خلفية متحركة */}
      <div className="animated-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>
      </div>

      {/* البطاقة الرئيسية */}
      <div className="login-center-card">
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

          <h2>تسجيل الدخول</h2>
          <p>أدخل بياناتك للوصول إلى حسابك</p>
        </div>

        <form className="login-form-main" onSubmit={handleSubmit}>
          {errors.general && (
            <div className="error-message-general">{errors.general}</div>
          )}

          <div className="input-group-main">
            <label>البريد الإلكتروني أو رقم الهاتف</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              className={errors.username ? "input-error" : ""}
              placeholder="example@email.com أو 05XXXXXXXX"
            />
            {errors.username && (
              <span className="error-text-main">{errors.username}</span>
            )}
          </div>

          <div className="input-group-main">
            <label>كلمة المرور</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className={errors.password ? "input-error" : ""}
              placeholder="أدخل كلمة المرور"
            />
            {errors.password && (
              <span className="error-text-main">{errors.password}</span>
            )}
          </div>

          <div className="form-options-main">
            <label className="checkbox-main">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkmark-main"></span>
              تذكرني
            </label>

            <Link to="/user-ForgotPassword" style={{ textDecoration: "none" }}>
              <button type="button" className="forgot-link">
                نسيت كلمة المرور؟
              </button>
            </Link>
          </div>

          <button type="submit" className="login-btn-main" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="btn-spinner"></div>
                جاري تسجيل الدخول...
              </>
            ) : (
              "تسجيل الدخول"
            )}
          </button>
        </form>

        <div className="signup-link">
          <p>ليس لديك حساب؟</p>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button onClick={onSwitchToSignup} className="signup-btn-link">
              إنشاء حساب جديد
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
