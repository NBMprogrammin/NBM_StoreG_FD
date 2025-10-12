import { Button, Container } from "@mui/joy";
import * as React from "react";
import { FormInInputAndBtnToDoAction } from "../Commponent/inpute and from/FormInInputAndBtnToDoAction";
import { useDialogActionContext } from "../Context/DialogActionContext";
import { useSelector, useDispatch } from "react-redux";
import AvatarImgForAllType from "../Commponent/AvatarImgForAllType";
import TitelPage from "../Commponent/TitelPage";
import { edarttewevesbsstosereachusertoaddteweve } from "../../allsliceproj/Edart teweves/edartTewevesBssSlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

let dataShowSoluteSerech = "";
let msessageErr = "";
let dattosereach = "";
let DagtDoAct = "";
export default function AddMyMowawev() {
  const {
    OpenDialogForActionSuccess,
    OpenDialogForActionFound,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
  } = useDialogActionContext();

  const [modeleSereach, setModeleSereach] = React.useState([]);

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartmewevesbss.resultrquestaction;
  });
  const typeRequestRsp = useSelector((state) => {
    return state.edartmewevesbss.typRequestNow;
  });

  const dataShowProd = useSelector((state) => {
    return state.edartmewevesbss.dataShowPayProd;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartmewevesbss.lodingtorspact;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Handle Result Sereach For Data User To Do Semthing Action
  React.useMemo(() => {
    if (typeRequestRsp === "SereachToUserToSeckSemthingAction") {
      HandleCloseOrOpenReadinPage(false);
      if (dataShowProd == 0) {
        msessageErr = (
          <div>
            <h1 style={{ color: "#fff" }}>
              No Date For This Name Now
              <span style={{ color: "#f00" }}> {dattosereach}</span>
            </h1>
          </div>
        );
      }
    } else if (typeRequestRsp === "edartmewevesbsstosendmessageforaddteweve") {
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `تم ارسال طلبية اضافت  المستخدم  ${DagtDoAct.name} ليكون موضف عنكم فلانتظار موافقت او رد المستخدم سيتم تحميل صفح`,
          "active"
        );
        setTimeout(() => {
          window.location.href = "/my-mewve";
        }, 3000);
      } else if (resultrquestaction === 2) {
        OpenDialogForActionFound("فشلت لعملية سيتم تحميل صفحة و محاول لاحقا");
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          `رجاءانتظار رد من لمستخدم حيث لم برد بعد على طلبيتك لاولى يمكنك تواصل معه و تذكيره`
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "الكلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبو بانك لا تمتلك الكلمة السر الاعدادات و لتي يمكنك انشائها و توجد فلااعدادات الحساب"
        );
      }
    }
  }, [
    resultrquestaction,
    typeRequestRsp === "SereachToUserToSeckSemthingAction",
    typeRequestRsp === "edartmewevesbsstosendmessageforaddteweve",
  ]); //== End Handle Result Sereach For Data User To Do Semthing Action ==//

  // Start To Displaye Data Befor
  React.useEffect(() => {
    setModeleSereach("");
  }, []); //== End To Displaye Data Befor ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start To Sereach Name User Or Number To Send Demande Add Zeboune
  const StartSereashForNameUser = async (NameUser) => {
    if (NameUser == "") {
      console.log(NameUser);
      OpenDialogForActionFound("رجاء ادخال الاسم المستخدم المستهدف البحث عليه");
    } else {
      dattosereach = NameUser;

      HandleCloseOrOpenReadinPage(true);
      dispatsh(edarttewevesbsstosereachusertoaddteweve(NameUser));
    }
  }; //== End To Sereach Name User Or Number To Send Demande Add Zeboune ==//

  // Start Open Aleart To Confirmed Send Demande For Add User In Zebayen Bss
  const handelIdUserToSendRelationZeboune = async (dataUser) => {
    DagtDoAct = dataUser;
    TypeAlearVipNow(
      dataUser,
      "SendDemendAddUserToTrave",
      "ادخال الراتب الشهري اللموضل",
      "number",
      "كلمة السر الاعدادات",
      "password",
      `تاكيد ارسال طلب لاضافة المستخدم   ${dataUser.name} كموضف`,
      "ارسال",
      "",
      "",
      "من اجل ارسال طلبية للمستخدم ولاضافته كموضف سيتيح له لهذ القرار بعض صلاحيات لتي يمكنك تحكم بها و تعديلها  و من اجل ارسالها ادخل كلمة السر الاعدادات",
      dataUser.id
    );
  }; //== End Open Aleart To Confirmed Send Demande For Add User In Zebayen Bss ==//

  // Start JSX To Show All Date For User To Do Semthing Action
  React.useMemo(() => {
    if (dataShowProd) {
      setModeleSereach("active");
      dataShowSoluteSerech = dataShowProd.map((user) => {
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
                    disabled={user.TypTewevBss == 1 || user.SheckTravForMy == 1}
                    onClick={() => handelIdUserToSendRelationZeboune(user)}
                  >
                    {user.SheckTravForMy == true ? "تم توضيف" : "توضيف"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }, [dataShowProd]); //== End JSX To Show All Date For User To Do Semthing Action ==//

  // Start To Stop Type Sereach  For Data User To Add Zeboune
  function handleStartStopSereachUserName() {
    setModeleSereach("");
  } //== Start To Stop Type Sereach  For Data User To Add Zeboune ==//

  if (token) {
    if (AllsDataUserNow && AllsDataUserNow.TypProf === "bss") {
      return (
        <div className="stlefirstdivcontrolinpage">
          <Header typeactive={"edartmewevs"} />
          <Container>
            <div className="stlcartfroalldatapagaddmeweve">
              <TitelPage TitelPage="المركز توضيف الموضفين" />

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
                  ادخال الاسم المستخدم
                </div>
                <FormInInputAndBtnToDoAction
                  HandelSendDateAllsInThisForm={StartSereashForNameUser}
                  typeMyInput={"text"}
                  placeholder={""}
                  ActionBtn="البحث"
                />
              </div>

              {modeleSereach == "active" ? (
                <>
                  <TitelPage TitelPage="نتائج البحث عن المستخدمين حقيقيين" />
                  {msessageErr}
                </>
              ) : (
                ""
              )}

              <div
                className={
                  modeleSereach === "active"
                    ? "boxForAllCardUserProfile"
                    : "dispboxnone"
                }
              >
                {dataShowSoluteSerech}
              </div>
            </div>
          </Container>
        </div>
      );
    } else {
      HandleCloseOrOpenReadinPage(true);
      Cookies.remove("user_token");
      window.location.href = "home";
    }
  } else {
    HandleCloseOrOpenReadinPage(true);
    Cookies.remove("user_token");
    window.location.href = "home";
  }
}
