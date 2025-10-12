import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import IconButton from "@mui/joy/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import { useMemo } from "react";
import MenuItemShow from "./MenuItemShow";
let ShowDepDown = "";
let datShowDp = [];
export default function DropdownMoreActions({
  dataZebouneClick,
  TypeShow,
  HandleToDoActionsNow,
  NowProfilShanfe,
}) {
  useMemo(() => {
    if (TypeShow === "EdartProdects") {
      datShowDp = [
        {
          id: 1,
          titel: "تعديل",
          typActionToDo: "UpdateProdectFromEdartProdects",
          disabled: false,
        },
        {
          id: 2,
          titel: "تفعيل البيع",
          typActionToDo: "ActivePayProdFromEdartProdects",
          disabled: dataZebouneClick.TypePayprd == 1,
        },
        {
          id: 3,
          titel: "ايقاف البيع",
          typActionToDo: "DscActivePayProdFromEdartProdects",
          disabled: dataZebouneClick.TypePayprd == 2,
        },
        {
          id: 4,
          titel: "تعديل المخزون",
          typActionToDo: "UpdateStorageThisProdectFromEdartProdect",
          disabled: false,
        },
        {
          id: 5,
          titel: "تفاصيل المنتج",
          typActionToDo: "ShowMoreDataThisProdectFromEdartProdect",
          disabled: false,
        },
      ];
    } else if (TypeShow === "EdartPaymentProd") {
      datShowDp = [
        {
          id: 1,
          titel: "تاكيد الدفع",
          typActionToDo: "ConfirmedPaymentProd",
          disabled:
            dataZebouneClick.typepayment == 2 ||
            dataZebouneClick.typepayment == 1 ||
            dataZebouneClick.HaletDeyn == 1,
        },
        {
          id: 2,
          titel: "رفض الدفع",
          typActionToDo: "StopPaymentProd",
          disabled:
            dataZebouneClick.typepayment == 1 ||
            dataZebouneClick.typepayment == 2,
        },
        {
          id: 3,
          titel: "تفاصيل المبيعة",
          typActionToDo: "ShowDatePaymentProd",
          disabled: false,
        },
      ];
    } else if (TypeShow === "EdartOrdersBss") {
      datShowDp = [
        {
          id: 1,
          titel: "تاكيد الدفع",
          typActionToDo: "ConfirmedPaymentOrder",
          disabled:
            dataZebouneClick.TypeOrder == 3 ||
            dataZebouneClick.TypeOrder == 4 ||
            dataZebouneClick.TypeOrder == 2 ||
            dataZebouneClick.TypeOrder == 1,
        },
        {
          id: 3,
          titel: "تاكيد طلبية",
          typActionToDo: "ConfirmedOrder",
          disabled:
            dataZebouneClick.TypeOrder == 2 ||
            dataZebouneClick.TypeOrder == 4 ||
            dataZebouneClick.TypeOrder == 1 ||
            dataZebouneClick.typepayment == 0 ||
            dataZebouneClick.typepayment == 2,
        },
        {
          id: 4,
          titel: "رفض الدفع",
          typActionToDo: "DscConfirmedPaymentOrder",
          disabled:
            dataZebouneClick.TypeOrder == 3 ||
            dataZebouneClick.TypeOrder == 4 ||
            dataZebouneClick.TypeOrder == 2 ||
            dataZebouneClick.TypeOrder == 1,
        },
        {
          id: 5,
          titel: "رفض طلبية",
          typActionToDo: "DscConfirmedOrder",
          disabled:
            dataZebouneClick.TypeOrder == 4 ||
            dataZebouneClick.TypeOrder == 1 ||
            dataZebouneClick.typepayment == 0 ||
            dataZebouneClick.TypeOrder == 2 ||
            dataZebouneClick.typepayment == 1,
        },
        {
          id: 6,
          titel: "تفاصيل طلبية",
          typActionToDo: "ShowMyOrder",
          disabled: false,
        },
      ];
    } else if (TypeShow === "EdartOrdersUser") {
      datShowDp = [
        {
          id: 1,
          titel: "ايقاف طلبية",
          typActionToDo: "StopMyOrderFromEdartOrderUser",
          disabled: dataZebouneClick.TypeOrder != 0,
        },
        {
          id: 2,
          titel: "حذف طلبية",
          typActionToDo: "DeleteMyOrderFromEdartOrderUser",
          disabled:
            dataZebouneClick.TypeOrder == 1 || dataZebouneClick.TypeOrder == 3,
        },
        {
          id: 3,
          titel: "تفاصيل طلبية",
          typActionToDo: "ShowMoreDatMyOrderFromEdartOrderUser",
          disabled: false,
        },
      ];
    } else if (TypeShow === "EdartMeweves") {
      datShowDp = [
        {
          id: 1,
          titel: "توضيف",
          typActionToDo: "addUserTewive",
          disabled: dataZebouneClick.typerelation == 1,
        },
        {
          id: 2,
          titel: "صلاحية العدارة المبيعات",
          typActionToDo: "SlaheyetEdartPaymentProdects",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.edartPaymentProdects == 1,
        },
        {
          id: 3,
          titel: "صلاحية العدارة طلبيات",
          typActionToDo: "SlaheyetEdartOrders",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.edartOreders == 1,
        },
        {
          id: 4,
          titel: "صلاحية الدفع الاكتروني",
          typActionToDo: "SlaheyetPaymentMethodEct",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.PaymentEcteronect == 1,
        },
        {
          id: 5,
          titel: "صلاحية العدارة المالية",
          typActionToDo: "SlaheyetEdartMany",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.edartemaney == 1,
        },
        {
          id: 6,
          titel: "الغاء صلاحية العدارة المبيعات",
          typActionToDo: "StopSlaheyetEdartPaymentProdects",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.edartPaymentProdects == 2,
        },
        {
          id: 7,
          titel: "الغاء صلاحية العدارة طلبيات",
          typActionToDo: "StopSlaheyetOrders",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.edartOreders == 2,
        },
        {
          id: 8,
          titel: "الغاء صلاحية الدفع الاكتروني",
          typActionToDo: "StopSlaheyetPaymentMethodEctEct",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.PaymentEcteronect == 2,
        },
        {
          id: 9,
          titel: "الغاء صلاحية العدارة المالية",
          typActionToDo: "StopSlaheyetEdartMany",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.edartemaney == 2,
        },
        {
          id: 10,
          titel: "دفع الراتب",
          typActionToDo: "GetRatibeMeweve",
          disabled:
            dataZebouneClick.typerelation == 0 ||
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3 ||
            dataZebouneClick.typRatibe == 2,
        },
        {
          id: 11,
          titel: "تعديل الراتب",
          typActionToDo: "UpdateRatibeMeweve",
          disabled:
            dataZebouneClick.typerelation == 0 ||
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3,
        },
        {
          id: 12,
          titel: "الغاء توضيف",
          typActionToDo: "StopToweve",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3,
        },
        {
          id: 13,
          titel: "تفاصيل المعاملة",
          typActionToDo: "ShowAllDataMeweve",
          disabled:
            dataZebouneClick.typerelation == 2 ||
            dataZebouneClick.typerelation == 3,
        },
      ];
    } else if (TypeShow === "EdartZebayen") {
      datShowDp = [
        {
          id: 1,
          titel: "تفعيل دين",
          typActionToDo: "ActiveDeyn",
          disabled:
            dataZebouneClick.HaletDeyn == 1 ||
            dataZebouneClick.ConfirmedRelation != 1,
        },
        {
          id: 2,
          titel: "تعطيل دين",
          typActionToDo: "DscActiveDeyn",
          disabled:
            dataZebouneClick.HaletDeyn == 2 ||
            dataZebouneClick.ConfirmedRelation != 1,
        },
        {
          id: 3,
          titel: "تعديل دين",
          typActionToDo: "UpdateDeynMyZeboune",
          disabled:
            dataZebouneClick.TypePayprd == 2 ||
            dataZebouneClick.ConfirmedRelation != 1,
        },
        {
          id: 4,
          titel: "تفاصيل الحساب",
          typActionToDo: "ShowMyZeboune",
          disabled: dataZebouneClick.ConfirmedRelation != 1,
        },
      ];
    } else if (TypeShow === "EdartPaymentMethod") {
      datShowDp = [
        {
          id: 1,
          titel: "تعديل",
          typActionToDo: "UpdatePayment",
          disabled:
            dataZebouneClick.namepayment == "CASH" ||
            dataZebouneClick.namepayment == "Selefe",
        },
        {
          id: 2,
          titel: "تفعيل الدفع",
          typActionToDo: "ActivePayment",
          disabled: dataZebouneClick.TypePayment == 1,
        },
        {
          id: 3,
          titel: "تعطيل الدفع",
          typActionToDo: "StopPayment",
          disabled: dataZebouneClick.TypePayment == "2",
        },
      ];
    } else if (TypeShow === "edartManyBss") {
      datShowDp = [
        {
          id: 1,
          titel: "تعديل",
          typActionToDo: "UpdateEdartManeyBss",
          disabled: NowProfilShanfe.TypProf == "teweve",
        },
        {
          id: 2,
          titel: "تفاصيل اليوم",
          typActionToDo: "ShowMoreDataEdartManeybss",
          disabled: false,
        },
      ];
    }

    ShowDepDown = datShowDp.map((dat) => {
      return (
        <MenuItemShow
          key={dat.id + 3}
          keyId={dataZebouneClick.id + 5}
          Paragrafe={dat.titel}
          disabled={dat.disabled}
          dataToDoAction={dataZebouneClick}
          typActiionFunction={dat.typActionToDo}
          HandleToDoActionsNow={HandleToDoActionsNow}
        />
      );
    });
  }, [dataZebouneClick]);

  return (
    <Dropdown key={dataZebouneClick.id + 6}>
      <MenuButton
        key={dataZebouneClick.id + 7}
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
      >
        <MoreVert key={dataZebouneClick.id + 2} />
      </MenuButton>

      <Menu placement="bottom-end" key={dataZebouneClick.id + 1}>
        {ShowDepDown}
      </Menu>
    </Dropdown>
  );
}
