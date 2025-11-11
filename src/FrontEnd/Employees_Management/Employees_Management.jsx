import { Container } from "@mui/joy";
import * as React from "react";
// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import BtnToGoToDoActionForNextPage from "../Commponent/BtnToGoToDoActionForNextPage";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  edartmewevesBssIndeexShow,
  edartmewevestoShowAllsDataMyMeweve,
} from "../../allsliceproj/Employees_Management_Bss/Employees_Management_Bss_Slice";
import Header from "../layoute/Header";
import Cookies from "js-cookie";
const token = Cookies.get("token");

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "الاسم الموضف",
  },
  {
    id: 3,
    titel: "الرقم الموضف",
  },
  {
    id: 4,
    titel: "حالت توضيف",
  },
  {
    id: 6,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

let dateJSX = "";
let ModelShowDate = "show";
let MessageForUser = "";
let typeGoToDoThisAction = "";

let AllsTrAndTdForMyTable = [];

let datUserClickAct = "";
let typRequest = "Show";
let sangePageDat = 1;

const Employees_Management = () => {
  const navigate = useNavigate();
  const {
    OpenDialogForActionSuccess,
    StartShowMoreDatImClick,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  // He To Sow Reloding In Table
  const AllsTrAndTdForMyTable = React.useMemo(() => {
    return [
      {
        id: 1,
        titel: "",
      },
      {
        id: 2,
        titel: "",
      },
      {
        id: 3,
        titel: <CartLoader />,
        meesage: MessageForUser,
      },
      {
        id: 4,
        titel: "",
      },
      {
        id: 5,
        titel: "",
      },
    ];
  }, [MessageForUser]); //== He To Sow Reloding In Table ==//

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.Employees_Management_Bss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Employees_Management_Bss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Employees_Management_Bss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Employees_Management_Bss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Employees_Management_Bss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Employees_Management_Bss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Employees_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Employees_Management_Bss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Employees_Management_Bss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Employees_Management_Bss.dataShowPayProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck Type Login And Profile Noew To Do Action
  React.useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if (ProfileSnageNow.TypProf !== "bss" ) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/Employees_Management", ProfileSnageNow]); //== End Sheck Type Login And Profile Noew To Do Action ==//

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    ModelShowDate = "";
    dispatsh(edartmewevesBssIndeexShow(sangePageDat));
  }, []);

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
      // Start To Send Demande To Add Aygen Meweve For Trave with Bss
      case "Show":
        if (resultrquestaction === 99) {
          typRequest = "Show";
          ModelShowDate = "";
          sangePageDat = 1;
          OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
        }
      return;

      case "edartmewevesbsstoaddusertrwve":
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم اعادة توضيف المستخم ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان وضفت المستخدم بلفعل و لا يزال قيد العمل معك ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      //== Start To Send Demande To Add Aygen Meweve For Trave with Bss ==//

      // Start To Stop Meweve For Trave with Bss
      case 'edarttewevstostopadduserintrave':
        switch (TypeActionnow) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم ايقاف توضيف المستخم ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
            OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
            );
          return;
        }
      return;
      //== End To Stop Meweve For Trave with Bss ==//

      // Start Alls Action For Edart Pay Prodects Bss
    // Start To Active Slehiyet Edart Pay Prodects For Bss
    case 'edarttewevestoactiveedartpayprodectformeweve':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تفعيل صلاحية المبيعات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان فعلت طلاحية المبيعات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    //== End To Active Slehiyet Edart Pay Prodects For Bss ==//

    // Start To Dsc Active Slehiyet Edart Pay Prodects For Bss
    case 'edarttewevestoDscactiveedartpayprodectformeweve':
      switch (resultrquestaction) {
        case 1:
          OpenDialogForActionSuccess(
            `لقد تم تعطيل صلاحية المبيعات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
          );
        return;
        case 2:
          OpenDialogForActionFound(
            "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
          );
        return;
        case 3:
          OpenDialogForActionFound(
            "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
          );
        return;
        case 6:
          OpenDialogForActionFound(
            " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
          );
        return;
        case 7:
          OpenDialogForActionFound(
            "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
          );
        return;
        case 8:
          OpenDialogForActionFound(
            " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
          );
        return;
        case 12:
          OpenDialogForActionFound(
            `يبدو بان سبق لك و ان فعلت طلاحية المبيعات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
          );
        return;
        case 13:
          OpenDialogForActionFound(
            "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
          );
        return;
        case 99:
        OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
        return;
      }
    return;
    // End To Dsc Active Slehiyet Edart Pay Prodects For Bss ==//
    //== End Alls Action For Edart Pay Prodects Bss ==//

    // Start Alls Action For Edart Oders Bss
    // Start To Active Slehiyet Edart Oders For Bss
    case 'edartmewevestoactiveedartordersformeweve':
      switch (resultrquestaction) {
        case 1:
          OpenDialogForActionSuccess(
            `لقد تم تفعيل صلاحية طلبيات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
          );
        return;
        case 2:
          OpenDialogForActionFound(
            "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
          );
        return;
        case 3:
          OpenDialogForActionFound(
            "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
          );
        return;
        case 6:
          OpenDialogForActionFound(
            " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
          );
        return;
        case 7:
          OpenDialogForActionFound(
            " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
          );
        return;
        case 8:
          OpenDialogForActionFound(
            " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
          );
        return;
        case 9:
          OpenDialogForActionFound(
            `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
          );
        return;
        case 12:
          OpenDialogForActionFound(
          `يبدو بان سبق لك و ان فعلت طلاحية طلبيات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
        return;
        case 13:
          OpenDialogForActionFound(
            "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
          );
        return;
        case 99:
        OpenDialogForActionFound(
            "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
        return;
      }
    return;
    //== End To Active Slehiyet Edart Oders For Bss ==//
    
    // Start To Dsc Active Slehiyet Edart Oders For Bss
    case 'edartmewevestoadscctiveedartordersformeweve':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم ايقاف صلاحية طلبيات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان اوقفت طلاحية طلبيات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    //== End To Dsc Active Slehiyet Edart Oders For Bss ==//
    // End Alls Action For Edart Oders Bss

    // Start Alls Action For Edart Payment Ecetronect Bss
    // Start To Active Slehiyet Edart Payment Electronect For Bss
    case 'edartmewevestoactiveselahiyeltpaymentelectrec':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تفعيل صلاحية الدفع الاكتروني للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان تم تفعيل طلاحية الدفع الاكتروني للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    //== End To Active Slehiyet Edart Payment Electronect For Bss ==//
    
    // Start To Dsc Active Slehiyet Edart Payment Electronect For Bss
    case 'edartmewevestodescactiveselahiyetpaypentelectronec':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم ايقاف صلاحية الدفع الاكتروني للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان ايقاف طلاحية الدفع الاكتروني للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    //== End To Dsc Active Slehiyet Edart Payment Electronect For Bss ==//
    // Start Alls Action For Edart Payment Ecetronect Bss

    // Start Alls Action For Edart Maney Bss
    // Start To Active Slehiyet Edart Maney For Bss
    case 'edartmewevestoativeedartmaney':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تفعيل صلاحية المالية للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان فعلت طلاحية المالية للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    // End To Active Slehiyet Edart Maney For Bss ==//
    
    // Start To Dsc Active Slehiyet Edart Maney For Bss
    case 'edartmewevestodscativeedartmaney':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم ايقاف صلاحية المالية للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان اوقفت طلاحية المالية للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    //== End To Dsc Active Slehiyet Edart Maney For Bss ==//
    //== End Alls Action For Edart Maney Bss ==//

    // Start To Handle Response For Update Ratibe Meweve Bss
    case 'edartmewevestoupdateratibemeweve':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم تحديث الراتب الموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              `يبدو بان المستخدم ${datUserClickAct.nameMewve} رفض طلبية توضيفهي و لذا لا حاج للتحديث الراتب او قم بارسال له طلبية اخرى`
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 12:
            OpenDialogForActionFound(
              `يبدو بان سبق لك و ان فعلت طلاحية المالية للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    // End To Handle Response For Update Ratibe Meweve Bss

    // Start To Handle Response For Get Ratibe Meweve Bss
    case 'edartmewevestogetratibeformeweve':
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تم ارسال تاكيد الدفع الراتب الموضف ${datUserClickAct.nameMewve} بنجاح فلانتظار الرد الموضف كما تم تحديث لبيانات`
            );
          return;
          case 2:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 3:
            OpenDialogForActionFound(
              `يبدو بان المستخدم ${datUserClickAct.nameMewve} رفض طلبية توضيفهي و لذا لا حاج للتحديث الراتب او قم بارسال له طلبية اخرى`
            );
          return;
          case 6:
            OpenDialogForActionFound(
              " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
    //== End To Handle Response For Get Ratibe Meweve Bss ==//

    // Start To Show Alls Data For Meweve Trave Meweve
    case 'SowAllsDataMyMeveFormEdartMeweves':
      if (resultrquestaction === 99) {
        OpenDialogForActionFound(
          "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
        );
        return;
      }
      typRequest = "Show";
      StartShowMoreDatImClick(
        ShowAllsProdData.datone,
        "ratibe",
        ShowAllsProdData.datthere,
        ShowAllsProdData.datou,
        `تفاصيل المعاملة توظيف مع  ${ShowAllsProdData.nameMewve}`,
        "صورة الحساب",
        ShowAllsProdData.img,
        `المزيد من المعلومات الموضف ${ShowAllsProdData.nameMewve}`,
        `سجل دفوعات الرواتب للموصف ${ShowAllsProdData.nameMewve}`,
        ShowAllsProdData.created_at,
        ShowAllsProdData.id
      );
      return;
    //== End To Show Alls Data For Meweve Trave Meweve ==//


    }
  }, [resultrquestaction]); //== End Sheck Type Request To Show Result For User ==//

  // Start Her To Sheck loding Response
  React.useEffect(() => {
    if (lodingtorspact === true) {
      typRequest = typRequestNow;
      HandleCloseOrOpenReadinPage(true);
    } else {
      HandleCloseOrOpenReadinPage(false);
    }
  }, [lodingtorspact]); //== End Her To Sheck loding Response ==//

  // Start Sheck Loaading Now For Eny Request User
  React.useEffect(() => {
    if (typRequest === "Show") {
      ModelShowDate = "Show";
      if (leadingtable === true) {
        ModelShowDate = "";
        MessageForUser = "لا يوجد اي بيانات الان يمكنك بدا لغمل";
      } else if (leadingtable === "active") {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else {
      ModelShowDate = "";
    }
  }, [leadingtable]); //== End Sheck Loaading Now For Eny Request User ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  const HandleSowPrevMyCategory = async () => {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartmewevesBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  const HandleSowNextMyCategory = async () => {
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartmewevesBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Open Aleart For Semthing Action
  const HandleToDoSemthingAction = (datauserClick, TypeAction) => {
    typeGoToDoThisAction = TypeAction;
    datUserClickAct = datauserClick;
    switch (typRequest) {
      case "addUserTewive":
      return TypeAlearVipNow(
        datauserClick,
        TypeAction + "FormEdartTewevesBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد اعادت توضيف المستخدم ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار بععادت المستدم للعمل مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "SlaheyetEdartPaymentProdects":
      return TypeAlearVipNow(
        datauserClick,
        TypeAction + "SlaheyetEdartOrders",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تفعيل صلاحية ادارت المبيعات للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تفعيل صلاحية ادارت المبيعات للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "SlaheyetEdartOrders":
      return TypeAlearVipNow(
        datauserClick,
        TypeAction + "FormEdartTewevesBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تفعيل صلاحية ادارت طلبيات للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تفعيل صلاحية ادارت طلبيات للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "SlaheyetPaymentMethodEct":
      return TypeAlearVipNow(
        datauserClick,
        TypeAction + "FormEdartTewevesBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تفعيل صلاحية الدفع الاكتروني للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تفعيل صلاحية الدفع الاكتروني للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "StopSlaheyetPaymentMethodEctEct":
      return TypeAlearVipNow(
        datauserClick,
        "StopSlaheyetPaymentMethodEctEct",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل صلاحية الدفع الاكتروني للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تعطيل صلاحية الدفع الاكتروني للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "SlaheyetEdartMany":
      return TypeAlearVipNow(
        datauserClick,
        "SlaheyetEdartMany",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تفعيل صلاحية الادارة المالية للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تفعيل صلاحية الدفع الاكتروني للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "StopSlaheyetEdartMany":
      return TypeAlearVipNow(
        datauserClick,
        "StopSlaheyetEdartMany",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل صلاحية الادارة المالية للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تعطيل صلاحية الادارة المالية للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "StopSlaheyetOrders":
      return TypeAlearVipNow(
        datauserClick,
        "StopSlaheyetOrders",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل صلاحية ادارت طلبيات للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تعطيل صلاحية ادارت طلبيات للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "StopToweve":
      return TypeAlearVipNow(
        datauserClick,
        "StopToweve",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد ايقاف توضيف الموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار ايقاف الموضف عن العمل معك رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "StopSlaheyetEdartPaymentProdects":
      return TypeAlearVipNow(
        datauserClick,
        "StopSlaheyetEdartPaymentProdects",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل صلاحية المبيعات للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تعطيل صلاحية المبيعات للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "UpdateRatibeMeweve":
      return TypeAlearVipNow(
        datauserClick,
        "StopSlaheyetEdartPaymentProdects",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد تعطيل صلاحية المبيعات للموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "bss",
        "من اجل تاكيد لقرار تعطيل صلاحية المبيعات للموضف مرة اخرى رجاء ادخال كلمة السر الاعدادات لاتمام اجراء القرار",
        datauserClick.id
      );
      case "GetRatibeMeweve":
      return TypeAlearVipNow(
        datauserClick,
        "GetRatibeMeweve",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد الدفع الراتب الموضف ${datauserClick.nameMewve}`,
        "ارسال",
        "",
        "bss",
        "هل انت متاكد من رغبتك الان في ارسال  تاكيد للموضف على الدغع الراتب بعد موافقته سيبدا احتساب شهر جديد من العمل",
        datauserClick.id
      );
      case "ShowAllDataMeweve":
      return dispatsh(edartmewevestoShowAllsDataMyMeweve(datauserClick.id));
    }
  } //== End Open Aleart For Semthing Action ==//

  // Start JSX To Show All Date For Meweweves
  const dateJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
        return (<TableRow
          key={dat.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell className="stletrintableforpageedar">{dat.id}</TableCell>
          <TableCell className="stletrintableforpageedar">
            {dat.nameMewve}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            className="stletrintableforpageedar"
          >
            {dat.numberMewve}
          </TableCell>
          <TableCell className="stletrintableforpageedar">
            <span
              className='status-badge'
              style={{ backgroundColor: `${dat.typerelation == 0 ? '#fef3c7' : '' ||
                  dat.typerelation == 1 ? "#d1fae5" : '#fee2e2'
                }`, color: `${dat.typerelation == 0 ? '#92400e' : '' ||
                  dat.typerelation == 1 ? "#065f46" : '#b91c1c'
                }`
              }}
              // style={{ backgroundColor: `${getStatusClass(dat.typerelation)}`, color: `${getStatusClasscolor(dat.typerelation)}` }}
            >
              {dat.typerelation == 0
                ? "فلانتضار"
                : "" || dat.typerelation == 1
                ? "تم لقبول"
                : "" || dat.typerelation == 2
                ? "تم الغاء"
                : "" || dat.typerelation == 3
                ? "تم رفض"
                : ""}
            </span>
          </TableCell>

          <TableCell className="stletrintableforpageedar">
            <div className="styldsiflexandjuscenterandalcemore">
              <DropdownMoreActions
                dataZebouneClick={dat}
                TypeShow={"EdartMeweves"}
                NowProfilShanfe={ProfileSnageNow}
                HandleToDoActionsNow={HandleToDoSemthingAction}
              />
            </div>
          </TableCell>
        </TableRow>)
      });
    }
  }, [returndata]); //== End JSX To Show All Date For Meweweves ==//

  if (ProfileSnageNow && ProfileSnageNow.TypProf === "bss") {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"edartmewevs"} />
        <Container>
          <div className="stylallsectinpage">
            <TitelPage TitelPage="ادارة الموضفين" />

            <div className="headerTable">
              <CardShowDateTableNextPrevMor
                loadingTabelBody={leadingtable}
                TypShow="More"
                TitelFirst="الاجمالي"
                totelPageCategory={totalalldate}
                startPageNow={currentpagenow}
                startPageTo={currentpagetogo}
              />

              <CartAllBtnClickToGoNextAndPrevShowDataTable
                loadingTabelBody={leadingtable}
                currentPageAndTypeShow={sangePageDat}
                last_Page={last_page}
                HandleSowNextMyCategory={HandleSowNextMyCategory}
                HandleSowPrevMyCategory={HandleSowPrevMyCategory}
              />
            </div>
            <AllTabletOShowMoreData
              datToShowTablec={datToShowTablec}
              AllsTrAndTdForMyTable={AllsTrAndTdForMyTable}
              MessageForUser={MessageForUser}
              GlesStyleTabl={
                leadingtable == false
                  ? "styleBTbleBodyShowAlss"
                  : "styleBTbleBodyShow"
              }
              loadingTabelBody={leadingtable}
              dateX={dateJSX}
            />
          </div>
        </Container>

        <BtnToGoToDoActionForNextPage
          linck={"Employees_Management/Add"}
          disabled={leadingtable && leadingtable != "active"}
          pargrafe={"اضافة الموضف"}
        />
      </div>
    );
  }
}

// دالة مساعدة لتحديد كلاس الحالة
const getStatusClass = (status) => {
  switch (status) {
    case "0":
      return "#fef3c7";
    case "2":
      return "#fee2e2";
    case "3":
      return "#fee2e2";
    case "1":
      return "#d1fae5";
    default:
      return "info";
  }
}

// Start For Color
const getStatusClasscolor = (status) => {
  switch (status) {
    case "0":
      return "#92400e";
    case "2":
      return "#b91c1c";
    case "3":
      return "#b91c1c";
    case "1":
      return "#065f46";
    default:
      return "#b91c1c";
  }
}

export default Employees_Management;