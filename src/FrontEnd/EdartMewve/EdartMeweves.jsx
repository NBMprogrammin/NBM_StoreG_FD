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
import {
  edartmewevesBssIndeexShow,
  edartmewevestoShowAllsDataMyMeweve,
} from "../../allsliceproj/Edart teweves/edartTewevesBssSlice";
import Header from "../layoute/Hedaer";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");

// Her Place Alls Colums To Start Do Semthing Action
let datToShowTablec = [
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

let dateX = "";
let ModelShowDate = "show";
let MessageForUser = "";
let typeGoToDoThisAction = "";

let AllsTrAndTdForMyTable = [];

let datUserClickAct = "";
let typRequest = "Show";
let sangePageDat = 1;

export default function EdartMeweves() {
  const {
    OpenDialogForActionSuccess,
    StartShowMoreDatImClick,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  // He To Sow Reloding In Table
  React.useMemo(() => {
    AllsTrAndTdForMyTable = [
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

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    ModelShowDate = "";
    dispatsh(edartmewevesBssIndeexShow(sangePageDat));
  }, []);

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.edartmewevesbss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.edartmewevesbss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.edartmewevesbss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.edartmewevesbss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.edartmewevesbss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.edartmewevesbss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartmewevesbss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartmewevesbss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartmewevesbss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartmewevesbss.dataShowPayProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    // Start To Send Demande To Add Aygen Meweve For Trave with Bss
    if (typRequest === "edartmewevesbsstoaddusertrwve") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = "show";
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم اعادة توضيف المستخم ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 16) {
        OpenDialogForActionSuccess(
          `لقد تم اعادة ارسال طلبية توضيف للمستخدم ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان وضفت المستخدم بلفعل و لا يزال قيد العمل معك ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== Start To Send Demande To Add Aygen Meweve For Trave with Bss ==//

    // Start To Stop Meweve For Trave with Bss
    else if (typRequest === "edarttewevstostopadduserintrave") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = "show";
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ايقاف توضيف المستخم ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان اوقفت توضيفت المستخدم بلفعل و لا يزال لا يعمل معك ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Stop Meweve For Trave with Bss ==//

    // Start Alls Action For Edart Pay Prodects Bss
    // Start To Active Slehiyet Edart Pay Prodects For Bss
    else if (typRequest === "edarttewevestoactiveedartpayprodectformeweve") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تفعيل صلاحية المبيعات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان فعلت طلاحية المبيعات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Active Slehiyet Edart Pay Prodects For Bss ==//

    // Start To Dsc Active Slehiyet Edart Pay Prodects For Bss
    else if (typRequest === "edarttewevestoDscactiveedartpayprodectformeweve") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تعطيل صلاحية المبيعات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان فعلت طلاحية المبيعات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } // End To Dsc Active Slehiyet Edart Pay Prodects For Bss ==//
    //== End Alls Action For Edart Pay Prodects Bss ==//

    // Start Alls Action For Edart Oders Bss
    // Start To Active Slehiyet Edart Oders For Bss
    else if (typRequest === "edartmewevestoactiveedartordersformeweve") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تفعيل صلاحية طلبيات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان فعلت طلاحية طلبيات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Active Slehiyet Edart Oders For Bss ==//

    // Start To Dsc Active Slehiyet Edart Oders For Bss
    else if (typRequest === "edartmewevestoadscctiveedartordersformeweve") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ايقاف صلاحية طلبيات للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان اوقفت طلاحية طلبيات للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Dsc Active Slehiyet Edart Oders For Bss ==//
    // End Alls Action For Edart Oders Bss

    // Start Alls Action For Edart Payment Ecetronect Bss
    // Start To Active Slehiyet Edart Payment Electronect For Bss
    else if (typRequest === "edartmewevestoactiveselahiyeltpaymentelectrec") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تفعيل صلاحية الدفع الاكتروني للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان تم تفعيل طلاحية الدفع الاكتروني للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Active Slehiyet Edart Payment Electronect For Bss ==//

    // Start To Dsc Active Slehiyet Edart Payment Electronect For Bss
    else if (
      typRequest === "edartmewevestodescactiveselahiyetpaypentelectronec"
    ) {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ايقاف صلاحية الدفع الاكتروني للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان ايقاف طلاحية الدفع الاكتروني للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Dsc Active Slehiyet Edart Payment Electronect For Bss ==//
    // Start Alls Action For Edart Payment Ecetronect Bss

    // Start Alls Action For Edart Maney Bss
    // Start To Active Slehiyet Edart Maney For Bss
    else if (typRequest === "edartmewevestoativeedartmaney") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تفعيل صلاحية المالية للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان فعلت طلاحية المالية للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } // End To Active Slehiyet Edart Maney For Bss ==//

    // Start To Dsc Active Slehiyet Edart Maney For Bss
    else if (typRequest === "edartmewevestodscativeedartmaney") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ايقاف صلاحية المالية للموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          "يبدو بان المستخدم لم يرد على طلبية توضيفه بعد رجاء انتظار او تواصل معه و تذكيره "
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          `يبدو بان سبق لك و ان اوقفت طلاحية المالية للموضف بلفعل و لا يزال قيد العمل بها ${datUserClickAct.nameMewve} كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث حالت الموضف سيتم تحميل صفح"
        );
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Dsc Active Slehiyet Edart Maney For Bss ==//
    //== End Alls Action For Edart Maney Bss ==//

    // Start To Handle Response For Update Ratibe Meweve Bss
    else if (typRequest === "edartmewevestoupdateratibemeweve") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم تحديث الراتب الموضف ${datUserClickAct.nameMewve} بنجاح كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بان المستخدم ${datUserClickAct.nameMewve} رفض طلبية توضيفهي و لذا لا حاج للتحديث الراتب او قم بارسال له طلبية اخرى`
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث الراتب الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } // End To Handle Response For Update Ratibe Meweve Bss

    // Start To Handle Response For Get Ratibe Meweve Bss
    else if (typRequest === "edartmewevestogetratibeformeweve") {
      typRequest = "show";
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تم ارسال تاكيد الدفع الراتب الموضف ${datUserClickAct.nameMewve} بنجاح فلانتظار الرد الموضف كما تم تحديث لبيانات`
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `يبدو بان المستخدم ${datUserClickAct.nameMewve} رفض طلبية توضيفهي و لذا لا حاج للتحديث الراتب او قم بارسال له طلبية اخرى`
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          `يبدو بانك اوقفت توضيف الموصف سابق ${datUserClickAct.nameMewve} و لذا قم بتوضيقه للاتاحت له صلاحيات المراد`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          " نعتذر يبدو بان المستخدم لا يرغب في طلبية توضيفه فلقد رفضها رجاء تواصل معه و اععادت المحاولة "
        );
      } else if (resultrquestaction === 13 || resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا اثناء عملية  تحديث الراتب الموضف سيتم تحميل صفح"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          " يبدو بانك لا تمتلك كلمة السر الاعدادات من اجل انشائها ادخل فلاعدادات الحساب و  حاول مرة اخرى"
        );
      }
    } //== End To Handle Response For Get Ratibe Meweve Bss ==//

    // Start To Show Alls Data For Meweve Trave Meweve
    else if (typRequest === "SowAllsDataMyMeveFormEdartMeweves") {
      HandleCloseOrOpenReadinPage(false);
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

      // StartShowMoreDatImClick(
      //     DatNone,
      //     "ratibe",
      //     response.data.eseleRewateb,
      //     datTou,
      //     `تفاصيل المعاملة توظيف مع ${response.data.data.nameMewve}`,
      //     "صورة الحساب",
      //     response.data.data.img,
      //     `سجل دفوعات الرواتب للموصف ${response.data.data.nameMewve}`,
      //     "المزيد من المعلومات الموضف",
      //     response.data.data.created_at
      //   );
    } //== End To Show Alls Data For Meweve Trave Meweve ==//
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
  function HandleSowPrevMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartmewevesBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  function HandleSowNextMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartmewevesBssIndeexShow(sangePageDat));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Open Aleart For Semthing Action
  function HandleToDoSemthingAction(datauserClick, TypeAction) {
    typeGoToDoThisAction = TypeAction;
    datUserClickAct = datauserClick;
    if (TypeAction === "addUserTewive") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "SlaheyetEdartPaymentProdects") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "SlaheyetEdartOrders") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "SlaheyetPaymentMethodEct") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "StopSlaheyetPaymentMethodEctEct") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "SlaheyetEdartMany") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "StopSlaheyetEdartMany") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "StopSlaheyetOrders") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "StopToweve") {
      TypeAlearVipNow(
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
    } else if (TypeAction === "StopSlaheyetEdartPaymentProdects") {
      TypeAlearVipNow(
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
    } else if (typeGoToDoThisAction === "UpdateRatibeMeweve") {
      TypeAlearVipNow(
        datauserClick,
        "UpdateRatibeMeweve",
        `الراب السهري الجديد ${datauserClick.Ratibe}`,
        "number",
        "كلمة السر الاعدادات",
        "password",
        `تعديل الراتب الموضف ${datauserClick.nameMewve}`,
        "تاكيد",
        "",
        "importtouinputepayment",
        "",
        datauserClick.id
      );
    } else if (typeGoToDoThisAction === "GetRatibeMeweve") {
      TypeAlearVipNow(
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
    } else if (typeGoToDoThisAction === "ShowAllDataMeweve") {
      dispatsh(edartmewevestoShowAllsDataMyMeweve(datauserClick.id));
    }
  } //== End Open Aleart For Semthing Action ==//

  // Start JSX To Show All Date For Meweweves
  React.useMemo(() => {
    if (returndata) {
      dateX = returndata.map((dat) => {
        return dat.idbss == "" ? (
          <></>
        ) : (
          <TableRow
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
              {dat.typerelation == 0
                ? "فلانتضار"
                : "" || dat.typerelation == 1
                ? "تم لقبول"
                : "" || dat.typerelation == 2
                ? "تم الغاء"
                : "" || dat.typerelation == 3
                ? "تم رفض"
                : ""}
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
          </TableRow>
        );
      });
    }
  }, [returndata]); //== End JSX To Show All Date For Meweweves ==//

  if (token) {
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
                dateX={dateX}
              />
            </div>
          </Container>

          <BtnToGoToDoActionForNextPage
            linck={"add-mewve"}
            disabled={leadingtable && leadingtable != "active"}
            pargrafe={"اضافة الموضف"}
          />
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
