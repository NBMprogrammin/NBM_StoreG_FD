import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Register.css";
import dayjs from "dayjs";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Alert,
  Box,
  Typography,
  Avatar,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person,
  Phone,
  LocationOn,
  Home,
  Lock,
  Flag,
  CameraAlt,
  Close,
} from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { useDialogActionContext } from "../Context/DialogActionContext";
import {
  starttocreatenewaccounteforuser,
  stratesendtoconfiremdemailaftercreateacounte,
} from "../../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
import Cookies from "js-cookie";
import InputeForDataAndTime from "../Commponent/inpute and from/InputeForDataAndTime";

let typRequest = "";

const arabCountries = [
  {
    code: "SA",
    name: "المملكة العربية السعودية",
    dialCode: "+966",
    flag: "🇸🇦",
  },
  {
    code: "AE",
    name: "الإمارات العربية المتحدة",
    dialCode: "+971",
    flag: "🇦🇪",
  },
  { code: "BH", name: "البحرين", dialCode: "+973", flag: "🇧🇭" },
  { code: "DZ", name: "الجزائر", dialCode: "+213", flag: "🇩🇿" },
  { code: "EG", name: "مصر", dialCode: "+20", flag: "🇪🇬" },
  { code: "IQ", name: "العراق", dialCode: "+964", flag: "🇮🇶" },
  { code: "JO", name: "الأردن", dialCode: "+962", flag: "🇯🇴" },
  { code: "KW", name: "الكويت", dialCode: "+965", flag: "🇰🇼" },
  { code: "LB", name: "لبنان", dialCode: "+961", flag: "🇱🇧" },
  { code: "LY", name: "ليبيا", dialCode: "+218", flag: "🇱🇾" },
  { code: "MA", name: "المغرب", dialCode: "+212", flag: "🇲🇦" },
  { code: "MR", name: "موريتانيا", dialCode: "+222", flag: "🇲🇷" },
  { code: "OM", name: "عمان", dialCode: "+968", flag: "🇴🇲" },
  { code: "PS", name: "فلسطين", dialCode: "+970", flag: "🇵🇸" },
  { code: "QA", name: "قطر", dialCode: "+974", flag: "🇶🇦" },
  { code: "SY", name: "سوريا", dialCode: "+963", flag: "🇸🇾" },
  { code: "TN", name: "تونس", dialCode: "+216", flag: "🇹🇳" },
  { code: "YE", name: "اليمن", dialCode: "+967", flag: "🇾🇪" },
];

const typeGenderUserNow = [
  {
    code: "MN",
    name: "الذكر",
    dialCode: "1",
  },
  {
    code: "WN",
    name: "امرة",
    dialCode: "2",
  },
];

// الامتدادات المسموح بها
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const Register = ({ onSwitchToLogin, onSignup }) => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    phone: "",
    country: "",
    typegender: "",
    city: "",
    datatime: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
    email: "", // إضافة حقل البريد الإلكتروني
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // حالات جديدة للتحقق عبر البريد
  const [verificationStep, setVerificationStep] = useState("signup"); // signup, verification
  const [verificationCode, setVerificationCode] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const [selectedDate, setSelectedDate] = React.useState(dayjs(""));

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    if (newValue) {
      const age = dayjs().diff(newValue, "year");
      const newErrors = {};
      if (age < 15) {
        // تنبيه الكونسول عندما يكون العمر أقل من 15
        newErrors.datatime = `🚨 تنبيه! العمر أقل من 15 سنة: ${age} + سنة`;
      } else {
        newErrors.datatime = "";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  };

  // دالة للتحقق من امتداد الملف
  function isValidFileExtension(filename) {
    const extension = filename
      .toLowerCase()
      .substring(filename.lastIndexOf("."));
    return ALLOWED_EXTENSIONS.includes(extension);
  }

  const dispatsh = useDispatch();
  const {
    OpenDialogForActionFound,
    OpenDialogForActionSuccess,
    HandleCloseOrOpenReadinPage,
  } = useDialogActionContext();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const lodingtorspact = useSelector((state) => {
    return state.datauser.lodingtorspact;
  });

  const resultrquestaction = useSelector((state) => {
    return state.datauser.resultrquestaction;
  });

  const typlogoutaccount = useSelector((state) => {
    return state.datauser.typlogoutaccount;
  });

  const typeRequestRsp = useSelector((state) => {
    return state.datauser.typRequestNow;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//
  const navigate = useNavigate();

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typeRequestRsp;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); // End Her To Sheck loding Response

  React.useMemo(() => {
    typRequest = "";
  }, []);

  // Start Here To Get Sult For Semthing Request In Page
  React.useEffect(() => {
    if (typRequest === "starttosendconfirmedemailaftercreateacounte") {
      if (resultrquestaction === 1) {
        setVerificationStep("verification");
        setIsLoading(false);
        startResendTimer();
      } else if (resultrquestaction === 2) {
        setIsLoading(false);
        OpenDialogForActionFound(
          "يبدو بان البريد الاكتروني مسجل بلفعل من قبل يمكنك تسجيل لدخول"
        );
      } else if (resultrquestaction === 3) {
        setIsLoading(false);
        OpenDialogForActionFound(
          "يبدو بان الرقم الهاتف مسجل بلفعل من قبل يمكنك تسجيل لدخول"
        );
      } else if (resultrquestaction === 3) {
        setIsLoading(false);
        OpenDialogForActionFound(
          "حدث خطا فشل ارسال لكود للبريدك الاكتروني رجا تاكد من لبيانات و حاول مرة اخرى"
        );
      } else if (resultrquestaction === 99) {
        setIsLoading(false);
        setVerificationStep("");
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    } else if (typRequest === "starttocreatenewaccounteforuser") {
      if (resultrquestaction === 2) {
        setIsLoading(false);
        setVerificationStep("signup");
        OpenDialogForActionFound(
          "يبدو بان البريد الاكتروني مسجل بلفعل من قبل يمكنك تسجيل لدخول"
        );
      } else if (resultrquestaction === 3) {
        setIsLoading(false);
        OpenDialogForActionFound(
          "يبدو بان الرقم الهاتف مسجل بلفعل من قبل يمكنك تسجيل لدخول"
        );
      } else if (resultrquestaction === 4) {
        setIsLoading(false);
        OpenDialogForActionFound("الرمز غير صحيح أو منتهي الصلاحية");
      } else if (resultrquestaction === 1) {
        Cookies.set("user_token", typlogoutaccount, { expires: 7 });
        navigate("/dashboard");
      } else if (resultrquestaction === 6) {
        setIsLoading(false);
        setVerificationStep("signup");
        OpenDialogForActionFound(
          "حدث خطا فلشبكة اثناء انشاء حسابك قم بتحميل صفحة و حاول مرة اخرى"
        );
      } else if (resultrquestaction === 99) {
        setIsLoading(false);
        setVerificationStep("");
        setIsLoading(false);
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق"
        );
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "starttosendconfirmedemailaftercreateacounte",
    typeRequestRsp === "starttocreatenewaccounteforuser",
  ]); //== End Here To Get Sult For Semthing Request In Page ==//

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "حجم الصورة يجب أن يكون أقل من 5MB",
        }));
        return;
      }

      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "الملف يجب أن يكون صورة",
        }));
        return;
      }

      // تحقق إضافي قبل الرفع
      if (!isValidFileExtension(file.name)) {
        setErrors((prev) => ({
          ...prev,
          profileImage:
            "❌ يجب ان تكون صورة من احد انواع تالية jpeg او webp او png او jpg",
        }));
        return;
      }

      setSignupData((prev) => ({ ...prev, profileImage: file }));

      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);

      if (errors.profileImage) {
        setErrors((prev) => ({ ...prev, profileImage: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (signupData.firstName.length >= 100)
      newErrors.firstName = "الاسم الأول مطلوب اقل من 100 حرف ";
    if (!signupData.firstName) newErrors.firstName = "الاسم الأول مطلوب";

    if (!signupData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }

    if (!signupData.phone) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^[0-9]+$/.test(signupData.phone)) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي على أرقام فقط";
    } else if (signupData.phone.length >= 15) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي بلكثير على 15 رقم";
    } else if (signupData.phone.length < 8) {
      newErrors.phone = "رقم الهاتف يجب ان يحتوي على الاقل 8 ارقام";
    }

    if (!signupData.typegender) newErrors.typegender = "نوع الجنس مطلوب";

    if (!signupData.country) newErrors.country = "البلد مطلوب";
    if (signupData.city.length >= 100)
      newErrors.city = "المدينة مطلوبة اقل من 100 حرف";
    if (!signupData.city) newErrors.city = "المدينة مطلوبة";

    if (!selectedDate) newErrors.datatime = "اختيار تاريخ الميلاد مطلوب";

    const age = dayjs().diff(selectedDate, "year");
    if (age < 15) {
      newErrors.datatime = `🚨 تنبيه! العمر أقل من 15 سنة: ${age} + سنة`;
    }

    if (!signupData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (signupData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (!signupData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
    } else if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    const data = {
      email: signupData.email,
      phone: signupData.phone,
    };
    dispatsh(stratesendtoconfiremdemailaftercreateacounte(data));
  };

  const startResendTimer = () => {
    setResendTimer(60); // 60 ثانية
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendCode = () => {
    // إعادة إرسال الرمز
    startResendTimer();
    const data = {
      email: signupData.email,
      phone: signupData.phone,
    };
    setVerificationCode("");
    dispatsh(stratesendtoconfiremdemailaftercreateacounte(data));
  };

  const handleVerifyCode = () => {
    // التحقق من الرمز
    if (verificationCode.length === 6) {
      const data = {
        email: signupData.email,
        phone: signupData.phone,
        profileImage: signupData.profileImage,
        firstName: signupData.firstName,
        country: selectedCountry.name,
        typeGender: signupData.typegender === "MN" ? "1" : "2",
        city: signupData.city,
        confirmPassword: signupData.confirmPassword,
        dialCode: selectedCountry.dialCode,
        code: verificationCode,
        datatime: selectedDate,
      };
      setIsLoading(true);
      HandleCloseOrOpenReadinPage(true);
      dispatsh(starttocreatenewaccounteforuser(data));
    } else {
      setErrors({ verification: "الرجاء إدخال رمز التحقق المكون من 6 أرقام" });
    }
  };

  const selectedCountry = arabCountries.find(
    (c) => c.code === signupData.country
  );

  // تصميم خطوة التسجيل
  const renderSignupStep = () => (
    <Card
      sx={{
        maxWidth: 500,
        width: "100%",
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <div className="card-header">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to="/home"
              style={{ textDecoration: "none", width: "fit-content" }}
            >
              <div className="logo-main">
                <div className="logo-icon-main">
                  <span>NBM</span>
                </div>
                <h1>NBMstoreG</h1>
              </div>
            </Link>
          </div>

          <h2>إنشاء حساب جديد</h2>
          <p>املأ المعلومات لإنشاء حسابك</p>
        </div>

        {/* رفع الصورة */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <div>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="profile-image-upload"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="profile-image-upload">
              <IconButton component="span">
                <Avatar src={imagePreview} sx={{ width: 100, height: 100 }}>
                  <CameraAlt />
                </Avatar>
              </IconButton>
            </label>
          </div>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {imagePreview ? "تغيير الصورة" : "رفع صورة الملف الشخصي"}
          </Typography>
          {errors.profileImage && (
            <Typography color="error" variant="caption">
              {errors.profileImage}
            </Typography>
          )}
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          {/* الاسم الأول */}
          <TextField
            fullWidth
            label="الاسم الأول"
            name="firstName"
            className={"fontsize25"}
            value={signupData.firstName}
            style={{ fontSize: "25px" }}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* البريد الإلكتروني */}
          <TextField
            fullWidth
            label="البريد الإلكتروني"
            name="email"
            className={"fontsize25"}
            type="email"
            value={signupData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            style={{ fontSize: "25px" }}
            sx={{ mb: 2 }}
          />

          {/* البلد */}
          <FormControl fullWidth error={!!errors.country} sx={{ mb: 2 }}>
            <InputLabel>البلد</InputLabel>
            <Select
              name="country"
              value={signupData.country}
              onChange={handleInputChange}
              className={"fontsize25"}
              startAdornment={
                <InputAdornment position="start">
                  <Flag />
                </InputAdornment>
              }
            >
              {arabCountries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginLeft: 8 }}>{country.flag}</span>
                    {country.name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
            {errors.country && (
              <Typography variant="caption" color="error">
                {errors.country}
              </Typography>
            )}
          </FormControl>

          {/* رقم الهاتف */}
          <TextField
            fullWidth
            label="رقم الهاتف"
            name="phone"
            value={signupData.phone}
            className={"fontsize25"}
            onChange={handleInputChange}
            style={{ fontSize: "25px" }}
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {selectedCountry ? selectedCountry.dialCode : "+222"}
                  </Typography>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* نوع الجنس */}
          <FormControl fullWidth error={!!errors.country} sx={{ mb: 2 }}>
            <InputLabel>نوع الجنس</InputLabel>
            <Select
              name="typegender"
              value={signupData.typegender}
              onChange={handleInputChange}
              className={"fontsize25"}
            >
              {typeGenderUserNow.map((country) => (
                <MenuItem key={country.code} value={country.dialCode}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {country.name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
            {errors.country && (
              <Typography variant="caption" color="error">
                {errors.typegender}
              </Typography>
            )}
          </FormControl>

          {/* المدينة */}
          <TextField
            fullWidth
            label="المدينة"
            name="city"
            className={"fontsize25"}
            style={{ fontSize: "25px" }}
            value={signupData.city}
            onChange={handleInputChange}
            error={!!errors.city}
            helperText={errors.city}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* اختيار تاريخ لميلاد */}
          <div style={{ marginBottom: "25px" }}>
            <InputeForDataAndTime
              handleDateChange={handleDateChange}
              selectedDate={selectedDate}
            />
            {errors.datatime && (
              <Typography variant="caption" color="error">
                {errors.datatime}
              </Typography>
            )}
          </div>

          {/* كلمة المرور */}
          <TextField
            fullWidth
            label="كلمة المرور"
            name="password"
            className={"fontsize25"}
            type={showPassword ? "text" : "password"}
            style={{ fontSize: "25px" }}
            value={signupData.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* تأكيد كلمة المرور */}
          <TextField
            fullWidth
            label="تأكيد كلمة المرور"
            className={"fontsize25"}
            style={{ fontSize: "25px" }}
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={signupData.confirmPassword}
            onChange={handleInputChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          {/* زر الإنشاء */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={isLoading}
            sx={{ py: 1.5 }}
          >
            {isLoading ? <CircularProgress size={24} /> : "إنشاء حساب"}
          </Button>
        </Box>

        {/* رابط تسجيل الدخول */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2">
            هل لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button variant="text" size="small" onClick={onSwitchToLogin}>
                تسجيل الدخول
              </Button>
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  // تصميم خطوة التحقق
  const renderVerificationStep = () => (
    <Dialog
      className={"Dialogcontentregister"}
      open={verificationStep === "verification"}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Typography variant="h6" align="center">
          التحقق من البريد الإلكتروني
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            تم إرسال رمز التحقق إلى بريدك الإلكتروني: {signupData.email}
          </Alert>

          <TextField
            fullWidth
            label="رمز التحقق"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            error={!!errors.verification}
            helperText={errors.verification}
            inputProps={{ maxLength: 6 }}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              onClick={handleResendCode}
              disabled={resendTimer > 0}
              variant="outlined"
            >
              إعادة الإرسال {resendTimer > 0 ? `(${resendTimer})` : ""}
            </Button>

            <Button
              onClick={handleVerifyCode}
              variant="contained"
              className={isLoading ? "dispbtn" : ""}
              disabled={verificationCode.length !== 6}
            >
              تأكيد
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="signup-container">
      {/* خلفية متحركة */}
      <div className="animated-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>
      </div>
      <Container component="main" maxWidth="sm">
        {renderSignupStep()}
        {renderVerificationStep()}
      </Container>
    </div>
  );
};

export default Register;
