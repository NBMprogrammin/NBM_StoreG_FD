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
} from "../../allsliceproj/Order_Management_Bss/Order_Management_Bss_Slice";
let ModelShowDate = "show";
let MessageForUser = "";
let typRequest = "Show";
let sangePageDat = 1;

let dateClickToSerch = {};
let datUserClickAct = "";
let typActionrespNoew = "";

// Her Place Alls Colums To Start Do Semthing Action
const datToShowTablec = [
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

const Order_Management_Bss = () => {
  const {
    OpenDialogForActionSuccess,
    StartShowMoreDatImClick,
    HandleCloseOrOpenReadinPage,
    TypeAlearVipNow,
    OpenDialogForActionFound,
  } = useDialogActionContext();

  const dispatsh = useDispatch();

  // Start Get Alls Data To Do Semthong In The Page Form Slice Controller
  const AllsDataUserNow = useSelector((state) => {
    return state.datauser.datauser;
  });

  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  const returndata = useSelector((state) => {
    return state.Order_Management_Bss.data;
  });

  const leadingtable = useSelector((state) => {
    return state.Order_Management_Bss.isLinding;
  });

  const totalalldate = useSelector((state) => {
    return state.Order_Management_Bss.totaldat;
  });

  const currentpagenow = useSelector((state) => {
    return state.Order_Management_Bss.pagenow;
  });

  const currentpagetogo = useSelector((state) => {
    return state.Order_Management_Bss.pagetogo;
  });

  const last_page = useSelector((state) => {
    return state.Order_Management_Bss.last_page;
  });

  const resultrquestaction = useSelector((state) => {
    return state.Order_Management_Bss.resultrquestaction;
  });

  const typRequestNow = useSelector((state) => {
    return state.Order_Management_Bss.typRequestNow;
  });

  const lodingtorspact = useSelector((state) => {
    return state.Order_Management_Bss.lodingtorspact;
  });

  const ShowAllsProdData = useSelector((state) => {
    return state.Order_Management_Bss.dataShowPayProd;
  });
  //== End Get Alls Data To Do Semthong In The Page Form Slice Controller ==//

  React.useEffect(() => {
    sangePageDat = 1;
    typRequest = "Show";
    typActionrespNoew = "Show";
    ModelShowDate = "";
    if(ProfileSnageNow.TypProf === "bss" || ProfileSnageNow.TypProf === "teweve" && ProfileSnageNow.edartOrders == 1) {
      dispatsh(edartOrdersBssIndeexShow(sangePageDat));
    }
  }, [ProfileSnageNow]);

  // Start Sheck Type Request To Show Result For User
  React.useMemo(() => {
    switch (typRequest) {
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
      case "edartordersconfirmedpayment":
        HandleCloseOrOpenReadinPage(false);
        typRequest = typActionrespNoew;
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد نمت موافق  و تاكيد  على استلام الاموال من زبون ${datUserClickAct.namezeboune} و تم اطهار تحديث لبيانات`
            );
            typRequest = "Show";
            sangePageDat = 1;
            ModelShowDate = "";
          return;
          case 3:
            OpenDialogForActionFound(
              `لقد تم الغاء طلبية من زبون ${datUserClickAct.namezeboune} و تم اطهار تحديث لبيانات`
            );
          return;
          case 4:
            OpenDialogForActionFound(
              `سبق و ان رفضت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات   `
            );
          return;
          case 5:
            OpenDialogForActionFound(
              `سبق و ان وافقت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات كما تم اطهار تحديث لبيانات   `
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              "لقد حدث خطا اثناء تاكيد استام ااموال  ربما حذف زبون طلبية و لقد تم اطهار تحديث لبيانات"
            );
          return;
          case 10:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية تاكيد الاستلام الاموال  و هي تنتمي للادارة المالية"
            );
          return;
          case 11:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية الادارة طلبيات او ان تاجر اوقفها لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
            );
          return;
          case 12:
            OpenDialogForActionFound(
              "يبدو بان تاجر اوقف صلاحية الدين للمزبون بشكل مفاجا لذا تم استرجاء كل كمية  لموجود فلطلبية لكل منتج و الغاء طلبية سيتم تحمبل صفحة و اضعار تحديث"
            );
          return;
          case 13:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية الدفع الاكتروني لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
            );
          return;
          case 17:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية الدفع الاكتروني لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }  
      return;
      case "edartpayprodectdscconfirmedpaymentprod":
        HandleCloseOrOpenReadinPage(false);
        typRequest = typActionrespNoew;
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد تمت رفض و تاكيد على عدم الاستلام الاموال من زبون ${datUserClickAct.namezeboune} بنجاح و تم اطهار تحديث لبيانات`
            );
            typRequest = "Show";
            sangePageDat = 1;
            ModelShowDate = "";
          return;
          case 3:
            OpenDialogForActionFound(
              `لقد قام زبون  ${datUserClickAct.namezeboune} بلاغاء طبية من طرفه و لذا لا يتاح تعديل عليها`
            );
          return;
          case 4:
            OpenDialogForActionFound(
              `سبق و ان رفضت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات   `
            );
          return;
          case 5:
            OpenDialogForActionFound(
              `سبق و ان وافقت على اثبات الدفع من زبون ${datUserClickAct.namezeboune} من قبل بلفعل و لا يتاح تعدد تغييرات فلقرارات كما تم تحديث لبيانات   `
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك كلمة السر الاعدادات قم بانشائها و توجد مع لاعدادات الحساب"
            );
          return;
          case 9:
            OpenDialogForActionFound(
              "لقد حدث خطا اثناء تاكيد استام ااموال  ربما حذف زبون طلبية و تم اطهار تحديث لبيانات"
            );
          return;
          case 11:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية الادارة طلبيات او ان تاجر اوقفها لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
            );
          return;
          case 13:
            OpenDialogForActionFound(
            "يبدو بانك لا تمتلك صلاحية الدفع الاكتروني لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
          );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      case "edartordersbssconfirmedorderzeboune":
        HandleCloseOrOpenReadinPage(false);
        typRequest = typActionrespNoew;
        switch (resultrquestaction) {
          case 1:
            OpenDialogForActionSuccess(
              `لقد نمت اكمال طلبية المقدم من طرف زبون ${datUserClickAct.namezeboune} بنجاح و تم اطهار تحديث لبيانات`
            );
            typRequest = "Show";
            sangePageDat = 1;
            ModelShowDate = "";
          return;
          case 3:
            OpenDialogForActionFound(
              `لقد قام زبون  ${datUserClickAct.namezeboune} بلاغاء طبية من طرفه و لذا لا يتاح تعديل عليها`
            );
          return;
          case 6:
            OpenDialogForActionFound(
              `سبق و ان وافقت على اكمال طلبية المقدم من طرف زبون ${datUserClickAct.namezeboune}  و لا يتاح تكرار القرار كمل تم اطهار تحديث لبيانات`
            );
          return;
          case 7:
            OpenDialogForActionFound(
              "كلمة السر الاعدادات لتي ادخلتها غير صحيحة حاول مرة اخرى"
            );
          return;
          case 8:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك كلمة السر الاعدادات قم بانشائها و توجد مع لاعدادات الحساب"
            );
          return;
          case 10:
            OpenDialogForActionFound(
              `سبق و ان تم رفض طريقة الدفع من طرف زبون ${datUserClickAct.namezeboune} و تم اطهار تحديث لبيانات  `
            );
          return;
          case 11:
            OpenDialogForActionFound(
              "رجاء تحديد القرار الدفع من اجل اكمال اجراء القرار تاكيد استلام طلبية او من عدمه"
            );
          return;
          case 12:
            OpenDialogForActionFound(
              "لقد قمت بلافاء استلام الاموال مرتبط بطلبية مما لا يتيح لك صلاحية تاكيد طلبية بعد فقدانها احد اهم عناصرها"
            );
          return;
          case 18:
            OpenDialogForActionFound(
              "يبدو بانك لا تمتلك صلاحية الادارة طلبيات او ان تاجر اوقفها لذا يمكنك تواصل مع تاجر لتفعيلها و اعادت محاول"
            );
          return;
          case 99:
          OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
          );
          return;
        }
      return;
      case "ShowAllsDataOrderZebouneFromEdartOrdersBss":
        HandleCloseOrOpenReadinPage(false);
        typRequest = typActionrespNoew;
        switch (resultrquestaction) {
          case 2:
            OpenDialogForActionFound(
              "حدث خطا يبدو بان طلبية تم حذفها او مشكلة اخرى لذا تم تحديث لبيانات رجاء حاول مرة اخرى"
            );
            typRequest = "Show";
          return;
          case 99:
            OpenDialogForActionFound(
              "حدث خطا فشكة او لمزود لخدمة حاول في وقت لاحق او قم بتحميل صفحة"
            );
          return;
          default:
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
          return;
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
  const HandleSowPrevMyCategory = async () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat > 1) {
          sangePageDat = sangePageDat - 1;
          typRequest = "Show";
          dispatsh(edartOrdersBssIndeexShow(sangePageDat));
        }
      return;
      case "Sereach":
        if (sangePageDat > 1) {
          sangePageDat = sangePageDat - 1;
          const data = {
            page: sangePageDat,
            name: dateClickToSerch.id,
          };
          typRequest = "Sereach";
          dispatsh(edartOrdersBssSearchdatzebounedata(data));
        }
      return;
    }
  } //== End To Send Request Semthibg Action Now To Return Show Prev Data ==//

  // Start To Send Request Semthibg Action Now To Show More Data
  const HandleSowNextMyCategory = async () => {
    switch (typRequest) {
      case "Show":
        if (sangePageDat < last_page) {
          sangePageDat = sangePageDat + 1;
          typRequest = "Show";
          dispatsh(edartOrdersBssIndeexShow(sangePageDat));
        }
      return;
      case "Sereach":
        if (sangePageDat < last_page) {
          sangePageDat = sangePageDat + 1;
          typRequest = "Sereach";
          const data = {
            page: sangePageDat,
            name: dateClickToSerch.id,
          };
          dispatsh(edartOrdersBssSearchdatzebounedata(data));
        }
      return;
    }
  } //== End To Send Request Semthibg Action Now To Show More Data ==//

  // Start Sereach All Orders For Semthinge Zeboune
  const HandleShowSAllProdectsUser = async () => {
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
    switch (TypeAction) {
        case "ConfirmedPaymentOrder":
          return TypeAlearVipNow(
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
        case "ConfirmedOrder":
          return TypeAlearVipNow(
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
        case "DscConfirmedPaymentOrder":
          return TypeAlearVipNow(
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
        case "DscConfirmedOrder":
          return TypeAlearVipNow(
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
        case "ShowMyOrder":
          return dispatsh(edartOrdersBsshowallsdatformOrderzeboune(data.id));
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

  // Start JSX To Show All Date For My Orders
  const dataJSX = React.useMemo(() => {
    if (returndata) {
      return returndata.map((dat) => {
          return (<TableRow
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
            <span
              className='status-badge'
              style={{ backgroundColor: `${dat.TypeOrder == 0 ? '#fef3c7' : '' || 
                dat.TypeOrder == 2 || dat.TypeOrder == 4 ? '#fee2e2' : '' ||
                dat.TypeOrder == 3 ? '#dbeafe' : '' ||
                dat.TypeOrder == 1 ? '#d1fae5' : ''
              }`, color: `${dat.TypeOrder == 0 ? '#92400e' : '' || 
                dat.TypeOrder == 2 || dat.TypeOrder == 4 ? '#b91c1c' : '' ||
                dat.TypeOrder == 3 ? '#1e40af' : '' ||
                dat.TypeOrder == 1 ? '#065f46' : ''
              }` }}
            >
              {TitelTypOrder(dat.TypeOrder)}
            </span>
            </TableCell>

            <TableCell className="stletrintableforpageedar">
              {dat.totalprodectspay}
            </TableCell>

            <TableCell className="stletrintableforpageedar">
            <span
              className='status-badge'
              style={{ backgroundColor: `${dat.typepayment == 0 ? '#fef3c7' : '' || 
                dat.typepayment == 2 ||
                dat.typepayment == 1 ? '#d1fae5' : ''
              }`, color: `${dat.typepayment == 0 ? '#92400e' : '' || 
                dat.typepayment == 2 ||
                dat.typepayment == 1 ? '#065f46' : ''
              }` }}
            >
              {TypPaymentOrder(dat.typepayment)}
            </span>
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
          </TableRow>)
      });
    }
  }, [returndata]); //=== End JSX To Show All Date For My Orders ===//

  if (
    (AllsDataUserNow &&
      ProfileSnageNow &&
      ProfileSnageNow.TypProf === "bss") ||
    ProfileSnageNow.TypProf === "teweve" && ProfileSnageNow.edartOrders == 1
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
                dataFeth={AllsDataUserNow.MayZeboune}
                HandelSendDateAllsInThisForm={HandelSendDateAllsInThisForm}
                TypeShowData="Sereash"
                ActionBtn="لبحث"
                TypeAction="SereashUser"
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
            dateX={dataJSX}
          />
        </div>
      </Container>
    );
  }
}

const TitelTypOrder = (title) => {
  switch (title) {
    case 0:
    return 'فلانتظار';
    case 1:
    return 'تم اتمام طلبية';
    case 2:
    return 'تم رفض طلبية';
    case 3:
    return 'قيد المعالجة';
    case 4:
      return 'تم الغاء طلبية';
  }
}

const TypPaymentOrder = (title) => {
  switch (title) {
    case '0':
    return 'فلانتظار';
    case '1':
    return 'تم القبول';
    case '2':
    return 'تم رفض';
  }
}

export default Order_Management_Bss;