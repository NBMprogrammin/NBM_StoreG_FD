import { Container } from "@mui/joy";
import * as React from "react";
// Icon For MaterUi
import { useDialogActionContext } from "../Context/DialogActionContext";
import { SearchSelectForDateToClickAndBtn } from "../Commponent/SearchSelectForDateToClickAndBtn";
import TitelPage from "../Commponent/TitelPage";
import CardShowDateTableNextPrevMor from "../Commponent/Commponet Table Alls Page/CardShowDateTableNextPrevMor";
import AllTabletOShowMoreData from "../Commponent/Commponet Table Alls Page/AllTabletOShowMoreData";
import CartAllBtnClickToGoNextAndPrevShowDataTable from "../Commponent/Commponet Table Alls Page/CartAllBtnClickToGoNextAndPrevShowDataTable";
import { TableCell, TableRow } from "@mui/material";
import DropdownMoreActions from "../Commponent/Commponet Table Alls Page/DropdownMoreActions";
import CartLoader from "../Commponent/Commponet Table Alls Page/CartLoader";
import { useSelector, useDispatch } from "react-redux";
import {
  edartOrdersBsshowallsdatformOrderzeboune,
  edartOrdersBssIndeexShow,
  edartOrdersBssSearchdatzebounedata,
} from "../../allsliceproj/Edart Orders bss/edartOrdersBssSlice";
import Cookies from "js-cookie";
const token = Cookies.get("user_token");
let dateX = "";
let ModelShowDate = "show";
let MessageForUser = "";
let typRequest = "Show";
let sangePageDat = 1;

let dateClickToSerch = {};
let DataMyZebounses = [];
let AllsTrAndTdForMyTable = [];
let datUserClickAct = "";
let typActionrespNoew = "";

// Her Place Alls Colums To Start Do Semthing Action
let datToShowTablec = [
  {
    id: 1,
    titel: "المتغير",
  },
  {
    id: 2,
    titel: "الاسم زبون",
  },
  {
    id: 3,
    titel: "الرقم الزبون",
  },
  {
    id: 4,
    titel: "حالت طلبية",
  },
  {
    id: 5,
    titel: "عدد المنتجات",
  },
  {
    id: 6,
    titel: "حالت الدفع",
  },
  {
    id: 7,
    titel: "تكلفة الاجمالبة",
  },
  {
    id: 8,
    titel: "طريقة الدفع",
  },
  {
    id: 9,
    titel: "الرقم الدفع",
  },
  {
    id: 10,
    titel: "تفاعل",
  },
]; //== Her Place Alls Colums To Start Do Semthing Action ==//

export default function BssShowAllMyOrderZeboune() {
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
        titel: "",
      },
      {
        id: 4,
        titel: "",
      },
      {
        id: 5,
        titel: <CartLoader />,
        meesage: MessageForUser,
      },
      {
        id: 6,
        titel: "",
      },
      {
        id: 7,
        titel: "",
      },
      {
        id: 8,
        titel: "",
      },
      {
        id: 9,
        titel: "",
      },
      {
        id: 10,
        titel: "",
      },
    ];
  }, [MessageForUser]); //== He To Sow Reloding In Table ==//

  const dispatsh = useDispatch();

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    dispatsh(edartOrdersBssIndeexShow(sangePageDat));
  }, []);

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.edartOrdersBss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.edartOrdersBss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.edartOrdersBss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.edartOrdersBss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.edartOrdersBss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.edartOrdersBss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.edartOrdersBss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.edartOrdersBss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.edartOrdersBss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.edartOrdersBss.dataShowPayProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  // Start Get Value Varyale Generale To Semthing Action
  React.useMemo(() => {
    if (AllsDataUserNow) {
      DataMyZebounses = AllsDataUserNow.MayZeboune;
    } else {
      DataMyZebounses = [];
    }
  }, [AllsDataUserNow]); //== End Get Value Varyale Generale To Semthing Action ==//

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    if (typRequest === "edartordersconfirmedpayment") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد نمت موافق  و تاكيد  على استلام الاموال من زبون ${datUserClickAct.namezeboune} و تم اطهار تحديث لبيانات`
        );
        typRequest = "Show";
        sangePageDat = 1;
        ModelShowDate = "";
      } else if (resultrquestaction === 10) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية تاكيد الاستلام الاموال  و هي تنتمي للادارة المالية"
        );
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `لقد تم الغاء طلبية من زبون ${datUserClickAct.namezeboune} و تم اطهار تحديث لبيانات`
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          "لقد حدث خطا اثناء تاكيد استام ااموال  ربما حذف زبون طلبية و لقد تم اطهار تحديث لبيانات"
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `سبق و ان رفضت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات   `
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          `سبق و ان وافقت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات كما تم اطهار تحديث لبيانات   `
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          "يبدو بان تاجر اوقف صلاحية الدين للمزبون بشكل مفاجا لذا تم استرجاء كل كمية  لموجود فلطلبية لكل منتج و الغاء طلبية سيتم تحمبل صفحة و اضعار تحديث"
        );
      } else if (resultrquestaction === 17) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية الدفع الاكتروني لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
        );
      } else if (resultrquestaction === 11) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية الادارة طلبيات او ان تاجر اوقفها لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
        );
      } else if (resultrquestaction === 13) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية الدفع الاكتروني لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك كلمة السر الاعدادات قم بانشائها و توجد مع لاعدادات الحساب"
        );
      }
    } else if (typRequest === "edartpayprodectdscconfirmedpaymentprod") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد تمت رفض و تاكيد على عدم الاستلام الاموال من زبون ${datUserClickAct.namezeboune} بنجاح و تم اطهار تحديث لبيانات`
        );
        typRequest = "Show";
        sangePageDat = 1;
        ModelShowDate = "";
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `لقد قام زبون  ${datUserClickAct.namezeboune} بلاغاء طبية من طرفه و لذا لا يتاح تعديل عليها`
        );
      } else if (resultrquestaction === 9) {
        OpenDialogForActionFound(
          "لقد حدث خطا اثناء تاكيد استام ااموال  ربما حذف زبون طلبية و تم اطهار تحديث لبيانات"
        );
      } else if (resultrquestaction === 4) {
        OpenDialogForActionFound(
          `سبق و ان رفضت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات   `
        );
      } else if (resultrquestaction === 5) {
        OpenDialogForActionFound(
          `سبق و ان وافقت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات   `
        );
      } else if (resultrquestaction === 11) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية الادارة طلبيات او ان تاجر اوقفها لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
        );
      } else if (resultrquestaction === 13) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية الدفع الاكتروني لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك كلمة السر الاعدادات قم بانشائها و توجد مع لاعدادات الحساب"
        );
      }
    } else if (typRequest === "edartordersbssconfirmedorderzeboune") {
      typRequest = typActionrespNoew;
      HandleCloseOrOpenReadinPage(false);
      if (resultrquestaction === 1) {
        OpenDialogForActionSuccess(
          `لقد نمت اكمال طلبية المقدم من طرف زبون ${datUserClickAct.namezeboune} بنجاح و تم اطهار تحديث لبيانات`
        );
        typRequest = "Show";
        sangePageDat = 1;
        ModelShowDate = "";
      } else if (resultrquestaction === 3) {
        OpenDialogForActionFound(
          `لقد قام زبون  ${datUserClickAct.namezeboune} بلاغاء طبية من طرفه و لذا لا يتاح تعديل عليها`
        );
      } else if (resultrquestaction === 6) {
        OpenDialogForActionFound(
          `سبق و ان وافقت على اكمال طلبية المقدم من طرف زبون ${datUserClickAct.namezeboune}  و لا يتاح تكرار القرار كمل تم اطهار تحديث لبيانات`
        );
      } else if (resultrquestaction === 18) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك صلاحية الادارة طلبيات او ان تاجر اوقفها لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
        );
      } else if (resultrquestaction === 11) {
        OpenDialogForActionFound(
          "رجاء تحديد القرار الدفع من اجل اكمال اجراء القرار تاكيد استلام طلبية او من عدمه"
        );
      } else if (resultrquestaction === 12) {
        OpenDialogForActionFound(
          "لقد قمت بلافاء استلام الاموال مرتبط بطلبية مما لا يتيح لك صلاحية تاكيد طلبية بعد فقدانها احد اهم عناصرها"
        );
      } else if (resultrquestaction === 10) {
        OpenDialogForActionFound(
          `سبق و ان تم رفض طريقة الدفع من طرف زبون ${datUserClickAct.namezeboune} و تم اطهار تحديث لبيانات  `
        );
      } else if (resultrquestaction === 7) {
        OpenDialogForActionFound(
          "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
        );
      } else if (resultrquestaction === 8) {
        OpenDialogForActionFound(
          "يبدو بانك لا تمتلك كلمة السر الاعدادات قم بانشائها و توجد مع لاعدادات الحساب"
        );
      }
    } else if (typRequest === "ShowAllsDataOrderZebouneFromEdartOrdersBss") {
      HandleCloseOrOpenReadinPage(false);
      typRequest = typActionrespNoew;
      if (resultrquestaction === 2) {
        OpenDialogForActionFound(
          "حدث خطا يبدو بان طلبية تم حذفها او مشكلة اخرى لذا تم تحديث لبيانات رجاء حاول مرة اخرى"
        );
        typRequest = "Show";
      } else {
        typRequest = typActionrespNoew;
        StartShowMoreDatImClick(
          ShowAllsProdData.datone,
          "prodect",
          ShowAllsProdData.datthere,
          ShowAllsProdData.datou,
          `تفاصيل طلبية من زبون  ${ShowAllsProdData.namezeboune}`,
          "صورة تحويل  الاموال  ",
          ShowAllsProdData.imgconfirmedpay,
          `تفاصيل المنتجات المختار في طلبية زبون ${ShowAllsProdData.namezeboune}`,
          `المزيد من المعلومات طلبية زبون ${ShowAllsProdData.namezeboune}`,
          ShowAllsProdData.created_at,
          ShowAllsProdData.id
        );
      }
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

  // Start Her To Sheck loding Response
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
    } else if (typRequest === "Sereach") {
      ModelShowDate = "Sereach";
      if (leadingtable === true) {
        MessageForUser = `يبدو بان زبون لم يتم تسجيل عليه اي بيانات بعد و هو زبون يمتلك رقم ${dateClickToSerch.nameTou} او تاكد من زبون المعني و حاول مر اخرى`;
        ModelShowDate = "GoToAllMyCategory";
      } else if (leadingtable === "active") {
        MessageForUser = "ينم الان البحث عن البيانات";
      } else if (returndata.length < 0) {
        MessageForUser = `يبدو بان زبون لم يتم تسجيل عليه اي بيانات بعد و هو زبون يمتلك رقم ${dateClickToSerch.nameTou} او تاكد من زبون المعني و حاول مر اخرى`;
      } else {
        ModelShowDate = "";
        MessageForUser = "ينم الان البحث عن البيانات";
      }
    } else {
      ModelShowDate = "";
    }
  }, [leadingtable]); //== End Her To Sheck loding Response ==//

  // Start To Send Request Semthibg Action Now To Return Show Prev Data
  function HandleSowPrevMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        typRequest = "Show";
        dispatsh(edartOrdersBssIndeexShow(sangePageDat));
      }
    } else if (typRequest === "Sereach") {
      if (sangePageDat > 1) {
        sangePageDat = sangePageDat - 1;
        const data = {
          page: sangePageDat,
          name: dateClickToSerch.id,
        };
        typRequest = "Sereach";
        dispatsh(edartOrdersBssSearchdatzebounedata(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  function HandleSowNextMyCategory() {
    if (typRequest === "Show") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Show";
        dispatsh(edartOrdersBssIndeexShow(sangePageDat));
      }
    } else if (typRequest === "Sereach") {
      if (sangePageDat < last_page) {
        sangePageDat = sangePageDat + 1;
        typRequest = "Sereach";
        const data = {
          page: sangePageDat,
          name: dateClickToSerch.id,
        };
        dispatsh(edartOrdersBssSearchdatzebounedata(data));
      }
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Sereach All Orders For Semthinge Zeboune
  function HandleShowSAllProdectsUser() {
    typRequest = "Show";
    typActionrespNoew = "Show";
    sangePageDat = 1;
    dispatsh(edartOrdersBssIndeexShow(sangePageDat));
  } //== End Sereach All Orders For Semthinge Zeboune ==//

  // Start To Do Open Or Close Aleart For Confirmed Payment Prodect
  const HandleToDoActionsNow = (data, TypeAction) => {
    datUserClickAct = data;
    if (typRequest === "Sereach") {
      ModelShowDate = "GoToAllMyCategory";
      typRequest = typActionrespNoew;
    }
    if (TypeAction === "ConfirmedPaymentOrder") {
      TypeAlearVipNow(
        data,
        TypeAction + "FromEdartOrdersBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد بلاستلام الاموال من الزبون ${data.namezeboune}`,
        "تاكيد",
        "",
        ProfileSnageNow.TypProf == "teweve" ? "user" : "bss",
        ProfileSnageNow.TypProf == "teweve"
          ? "هل انت متاكد من تحملت لمسؤولية تاكيد استلام الاموال من زبون نظرا لعدم قدرة على تراجع عن القرار رجاء تاكد من اتخاذ لقرار صحيح"
          : "من اجل تاكيد الاستلام الاموال رجاء ادخال كلمة السر الاعدادات مع لعلم بعدم قدرتك في تغيير القرار بعد تاكيده تاكد من اختيار القرار صحيح",
        data.id
      );
    } else if (TypeAction === "ConfirmedOrder") {
      TypeAlearVipNow(
        data,
        TypeAction + "FromEdartOrdersBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد اتمام طلبية من الزبون ${data.namezeboune}`,
        "تاكيد",
        "",
        ProfileSnageNow.TypProf == "teweve" ? "user" : "bss",
        ProfileSnageNow.TypProf == "teweve"
          ? "هل انت متاكد اتمام طلبية و لتي تعني بان زبون استلم طلبية او تم ارسالها لها للزبون نظرا لعدم قدرة على تراجع عن القرار رجاء تاكد من اتخاذ لقرار صحيح"
          : "هل انت متاكد اتمام طلبية و لتي تعني بان زبون استلم طلبية او تم ارسالها لها للزبون نظرا لعدم قدرة على تراجع عن القرار رجاء تاكد من اتخاذ لقرار صحيح و ادخال كلمة السر لاعدادات",
        data.id
      );
    } else if (TypeAction === "DscConfirmedPaymentOrder") {
      TypeAlearVipNow(
        data,
        TypeAction + "FromEdartOrdersBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد بعدم لاستلام الاموال من الزبون ${data.namezeboune}`,
        "تاكيد",
        "",
        ProfileSnageNow.TypProf == "teweve" ? "user" : "bss",
        ProfileSnageNow.TypProf == "teweve"
          ? "هل انت متاكد من تحملت لمسؤولية تاكيد بعدم استلام الاموال من زبون نظرا لعدم قدرة على تراجع عن القرار رجاء تاكد من اتخاذ لقرار صحيح"
          : "من اجل تاكيد بعدم الاستلام الاموال رجاء ادخال كلمة السر الاعدادات مع لعلم بعدم قدرتك في تغيير القرار بعد تاكيده تاكد من اختيار القرار صحيح",
        data.id
      );
    } else if (TypeAction === "DscConfirmedOrder") {
      TypeAlearVipNow(
        data,
        TypeAction + "FromEdartOrdersBss",
        "",
        "",
        "كلمة السر الاعدادات",
        "password",
        `تاكيد رفض طلبية من الزبون ${data.namezeboune}`,
        "تاكيد",
        "",
        ProfileSnageNow.TypProf == "teweve" ? "user" : "bss",
        ProfileSnageNow.TypProf == "teweve"
          ? "هل انت متاكد رفض طلبية و لتي تعني بان زبون لم سرسل اموال او استلامها و عليه لاحاج للاتمام طلبية رجاء اتخاذ القرار صحيح و دقيق نظرا لعدم قدرة على تراجع عن القرار "
          : " هل انت متاكد رفض طلبية و لتي تعني بان زبون لم سرسل اموال او استلامها و عليه لاحاج للاتمام طلبية رجاء اتخاذ القرار صحيح و دقيق نظرا لعدم قدرة على تراجع عن القرار و ادخال كلمة السر لاعدادات",
        data.id
      );
    } else if (TypeAction === "ShowMyOrder") {
      dispatsh(edartOrdersBsshowallsdatformOrderzeboune(data.id));
    }
  }; //=== End Send To Do Open Or Close Aleart For Confirmed Payment Prodect ===//

  // Start To Sereach Data For Semthing Zeboune Bss Clcik
  const HandelSendDateAllsInThisForm = async (MyZebouneID) => {
    if (MyZebouneID != null) {
      dateClickToSerch = MyZebouneID;
      typRequest = "Sereach";
      typActionrespNoew = "Sereach";
      sangePageDat = 1;
      const data = {
        page: sangePageDat,
        name: MyZebouneID.id,
      };

      ModelShowDate = "";
      dispatsh(edartOrdersBssSearchdatzebounedata(data));
    }
  }; //== End To Sereach Data For Semthing Zeboune Bss Clcik ==//

  // Start JSX To Show All Date For My Orders
  React.useMemo(() => {
    if (returndata) {
      dateX = returndata.map((dat) => {
        return dat.Zeboune == "" ? (
          ""
        ) : (
          <TableRow
            key={dat.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              height: "70px",
            }}
          >
            <TableCell className="stletrintableforpageedar">{dat.id}</TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.namezeboune}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.numberzeboune}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.TypeOrder == 0
                ? "فلانتظار"
                : "" || dat.TypeOrder == 3
                ? "قيد المعالجة"
                : "" || dat.TypeOrder == 4
                ? "تم الغاء طلبية"
                : "" || dat.TypeOrder == 1
                ? "تم اتمام طلبية"
                : "" || dat.TypeOrder == 2
                ? "تم رفض طلبية"
                : ""}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.totalprodectspay}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.typepayment == 1
                ? "تم القبول"
                : "" || dat.typepayment == 2
                ? "تم رفض"
                : "" || dat.typepayment == 0
                ? "فلانتطار"
                : ""}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.totalpriceprodectspay + `${dat.currentPay}`}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.paymentmethod}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.paymentmethod == "CASH" || dat.paymentmethod == "Selefe"
                ? "غير مطلوب"
                : dat.numberpaymentmethod}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              <div className="styldsiflexandjuscenterandalcemore">
                <DropdownMoreActions
                  dataZebouneClick={dat}
                  TypeShow={"EdartOrdersBss"}
                  NowProfilShanfe={ProfileSnageNow}
                  HandleToDoActionsNow={HandleToDoActionsNow}
                />
              </div>
            </TableCell>
          </TableRow>
        );
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For My Orders ===//

  if (token) {
    if (
      (AllsDataUserNow &&
        ProfileSnageNow &&
        ProfileSnageNow.TypProf === "bss") ||
      ProfileSnageNow.TypProf === "teweve"
    ) {
      return (
        <Container>
          <div className="stylallsectinpage">
            <TitelPage TitelPage="ادارة طلبيات تجاري" />

            {leadingtable || typRequest === "Sereach" ? (
              ""
            ) : totalalldate > 3 ? (
              <div className="styleinptandbtntodoorshowdataaction">
                <h3>بحث من خلال طلبيات الزباين</h3>
                <SearchSelectForDateToClickAndBtn
                  dataFeth={DataMyZebounses}
                  HandelSendDateAllsInThisForm={HandelSendDateAllsInThisForm}
                  TypeShowData="Sereash"
                  ActionBtn="لبحث"
                />
              </div>
            ) : (
              <></>
            )}
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
                ModelShowDate={leadingtable != true ? ModelShowDate : ""}
                HandleShowSAllProdectsUser={HandleShowSAllProdectsUser}
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
