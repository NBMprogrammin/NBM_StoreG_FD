import { Button, Container } from "@mui/joy";
import * as React from "react";
import { FormInInputAndBtnToDoAction } from "../Commponent/inpute and from/FormInInputAndBtnToDoAction";
import { SelectInputeAndDate } from "../Commponent/inpute and from/SelectInputeAndDate";
import { useDialogActionContext } from "../Context/DialogActionContext";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import TitelPage from "../Commponent/TitelPage";
import { useSelector, useDispatch } from "react-redux";
import {
  edartZebouneBssToAddNewZebouneWithBss,
  edartZebouneBssToSereachDataUseForDoSemthingAction,
} from "../../allsliceproj/Customers_Management_Bss/Customers_Management_Bss_Slice";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

let ImageUserCreate = "";
let UserName = "";
let NumberUser = "";
let valToSereach = "";

let msessageErr = "";
let ModeleSereach = "";
let datUserClick = "";
export default function Customers_Management_Add() {
  const navigate = useNavigate();
  const dispatsh = useDispatch();
  const [modeleSereach, setModeleSereach] = React.useState([]);

  // Start Get Alls Data Now From Controller Semthing Slice
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Customers_Management_Bss.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.Customers_Management_Bss.typRequestNow;
  });

  const dataShowProd = useSelector((state) => {
    return state.Customers_Management_Bss.dataShowPayProd;
  });
  //== Start Get Alls Data Now From Controller Semthing Slice ==//

  // Start Sheck Type Login And Profile Noew To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if (ProfileSnageNow.TypProf !== "bss") {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Customers-Management/Add", ProfileSnageNow]); //== End Sheck Type Login And Profile Noew To Do Action ==//

  // Start To Displaye Data Befor
  React.useEffect(() => {
    setModeleSereach("");
  }, []); //== End To Displaye Data Befor ==//

  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
  } = useDialogActionContext();

  // Start Show Alls Response From Request Bss Do Now
  React.useMemo(() => {
    if (typeRequestRsp === "edartzebayenstoaddzebouneyedewiyanwithbss") {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          "تم انشاء زبون يدويا بنجاح كما تم توجيهك الى صفحت ادارة زباين",
        );
        navigate('/Customers-Management');
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "لقد سحلت هذه الرقم للزبون من قبل و لا يسمح بتكرار نفس الارقام للزباين"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "حدث خطا اثناء محاولتك انشاء زبون يدويا خطا غير معروف رجاء حاول في وقت لاحق"
        );
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    } else if (
      typeRequestRsp === "edartzebayenstosereachdatausetodosemthingaction"
    ) {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
        return;
      }
      if (dataShowProd == 0) {
        msessageErr = (
          <div>
            <h1 style={{ color: "#fff" }}>
              No Date For This Name Now
              <span style={{ color: "#f00" }}> {valToSereach}</span>
            </h1>
          </div>
        );
      } else {
        msessageErr = <></>;
      }
    } else if (typeRequestRsp === "edartzebayenstoaddzebouneonlinewithbss") {
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ارسال طلبك بنجاح يمكنك انتظار رد من المستخدم ${datUserClick.name} و لذي سيصله فلبريد الرسائل العام`,
        );
        navigate('/Customers-Management');
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك لا تملك كلمة السر الاعدادات تحتاج لتفغيلعا و توجد فلاعدادات الحساب`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بانك سبق و اضفت لمستخدم ${datUserClick.name} من قبل للقئمة زباىنك بلفعل`
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "رجاء انتظار رد من لمستخدم على طلبيتك لماضية حيث لم يرد عليها بعد لا بلقبول و لا غيره"
        );
      } else if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "edartzebayenstoaddzebouneyedewiyanwithbss",
    typeRequestRsp === "edartzebayenstosereachdatausetodosemthingaction",
  ]); //== End Show Alls Response From Request Bss Do ==//

  // Start Handle Alls Value Semthing Action From Inpute
  const HandleToAllsActionSemtime = (val, typeAction) => {
    if (typeAction === "GetVlueNameZeboune") {
      UserName = val;
    } else if (typeAction === "GetVlueNumberZeboune") {
      NumberUser = val;
    } else if (typeAction === "GetVlueFileImgZeboune") {
      ImageUserCreate = val;
    }
  }; //== End Handle Alls Value Semthing Action From Inpute ==//

  // Start To Send Request To Create Now Zeboune Data
  const HandleClickToSendDateProdect = async (e) => {
    e.preventDefault();
    if (UserName == "") {
      OpenDialogForActionFound("منضروري ادخال الاسم زبون");
    } else if (NumberUser == "") {
      OpenDialogForActionFound("منضروري ادخال الرقم الهاتف زبون");
    } else {
      HandleCloseOrOpenReadinPage(true);
      const dataCreateZeboune = {
        username: UserName,
        numberPhone: NumberUser,
        TypeAddZeboune: "create_Use",
        image: ImageUserCreate,
      };
      dispatsh(edartZebouneBssToAddNewZebouneWithBss(dataCreateZeboune));
    }
  }; //== End To Send Request To Create Now Zeboune Data ==//

  // Start Hanlde Send Request To Sereach  For Show Data User To Do Action
  const StartSereashForNameUser = async (val) => {
    if (val == "") {
      OpenDialogForActionFound("رجاء ادخال الاسم المستخدم المستهدف البحث عليه");
    } else {
      HandleCloseOrOpenReadinPage(true);
      valToSereach = val;
      dispatsh(edartZebouneBssToSereachDataUseForDoSemthingAction(val));
    }
  }; //== End Hanlde Send Request To Sereach  For Show Data User To Do Action ==//

  // Start Send Demande For Zeboune To Add In Zeboune
  const handelIdUserToSendRelationZeboune = async (data) => {
    datUserClick = data;
    TypeAlearVipNow(
      data,
      "addUserToMyZebounFromEdartZebayens",
      "",
      "",
      "كلمة السر الاعدادات",
      "password",
      `تاكيد ارسال طلبية اضافة المستخدم ${data.name} للقائمة زبائنية`,
      "تاكيد",
      "",
      "bss",
      "من اجل تاكيد لقرار ارسال طلبية اضافة المستخدم للقائمة زبائنية رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار"
    );
  }; // End Send Demande For Zeboune To Add In Zeboune ==//

  // Strart JSX Show Alls Data User Sereach
   const dataShowSoluteSerech = React.useMemo(() => {
    if (dataShowProd) {
      setModeleSereach("active");
      return dataShowProd.map((user) => {
        return (
          <div className={"CardShowDataUserProfile"} key={user.id}>
            <div className={"showImgAndNameUserAndType"} key={user.id}>
              <AvatarImgForAllType MyAvatar={user.image} />
              <div className={"boxNameAndTypeAction"} key={user.id}>
                <h3>{user.name}</h3>
                <div>
                  <p className="pragrafProgil" style={{ direction: "rtl" }}>
                    حال الوضيفية:{" "}
                    {user.SeckUserBss == 1
                      ? "حساب تجاري"
                      : "" || user.firstBssNow != ""
                      ? user.firstBssNow
                      : " عاطل عن العمل"}
                  </p>

                  <p className="pragrafProgil" style={{ direction: "rtl" }}>
                    الرقم الهاتف: {user.NumberPhone}
                  </p>

                  <Button
                    style={{ fontSize: "20px" }}
                    disabled={
                      user.TypZebouneBss == 1 || user.TypZebouneBss == 2
                    }
                    onClick={() => handelIdUserToSendRelationZeboune(user)}
                  >
                    {user.TypZebouneBss == 1
                      ? "تمت علاقة"
                      : "" || user.TypZebouneBss == 2
                      ? "فلنتظار لقرار"
                      : "تكوين علاقة"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }, [dataShowProd]); //== End JSX Show Alls Data User Sereach ==//

  // Start Foreatch For Alls Inpute In The Form Page
  const AllsInputToDoSemthingAction = React.useMemo(() => {
    const dataShowTable = [
      {
        id: 1,
        titepInpt: "الاسم زبون",
        TypeInput: "text",
        TypAction: "GetVlueNameZeboune",
      },
      {
        id: 2,
        titepInpt: "رقم هاتف زبون",
        TypeInput: "number",
        TypAction: "GetVlueNumberZeboune",
      },
      {
        id: 3,
        titepInpt: "اختيار صورة للحساب",
        TypeInput: "file",
        TypAction: "GetVlueFileImgZeboune",
      },
    ];

    return dataShowTable.map((ShowDat) => {
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
            ValueInpuNowAndThisShange={HandleToAllsActionSemtime}
            TypObj={ShowDat.TypAction}
          />
        </div>
      );
    });
  }, []); // End Foreatch For Alls Inpute In The Form Page ==//

  // Start To Stop Action Type Sereach In Page
  function handleStartStopSereachUserName() {
    setModeleSereach("");
  } //== Start To Stop Action Type Sereach In Page ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf === "bss") {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"Edartzebayn"} />
        <Container>
          <div className="stlcartfroalldatapagaddmeweve">
            <TitelPage TitelPage="انشاء و تكوين علاقة مع زبايت" />

            <div className="porcantengedivandtestcenter">
              <div className="styleformlabletosereachaddmeweve">
                {modeleSereach == "active" ? (
                  <button
                    className="stylebtnstopsereach"
                    onClick={() => handleStartStopSereachUserName()}
                  >
                    الغاء البحث
                  </button>
                ) : (
                  ""
                )}{" "}
                البحث من خلال المستخدمين حقيقيين
              </div>
              <FormInInputAndBtnToDoAction
                HandelSendDateAllsInThisForm={StartSereashForNameUser}
                typeMyInput={"text"}
                placeholder={""}
                ActionBtn="البحث"
              />
            </div>

            {modeleSereach === "active" ? (
              <div style={{ width: "100%" }}>
                <TitelPage TitelPage="نتائج البحث عن المستخدمين حقيقيين " />
                {msessageErr}
              </div>
            ) : (
              ""
            )}

            <div
              className={
                modeleSereach == "active"
                  ? "boxForAllCardUserProfile"
                  : "dispboxnone"
              }
            >
              {dataShowSoluteSerech}
            </div>
            {ModeleSereach !== "active" ? (
              <div style={{ width: "100%" }}>
                <TitelPage TitelPage="انشاء زبون يدويا" />
                <form
                  className="FromDateAddProdect"
                  style={{ width: "100%", direction: "rtl" }}
                  onSubmit={(e) => HandleClickToSendDateProdect(e)}
                >
                  {AllsInputToDoSemthingAction}
                  {/*  Start Style Btn To Send All Data User */}
                  <Button
                    type="submit"
                    style={{ padding: "12px 22px", fontSize: "27px" }}
                  >
                    اضافة
                  </Button>
                  {/* === End Style Btn To Send All Data User ===*/}
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </Container>
      </div>
    );
  }
}
