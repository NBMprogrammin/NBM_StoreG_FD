import { configureStore } from "@reduxjs/toolkit";
import controolerdataprodfilenow from "../allsliceproj/Controller Data Profile Now/controolerdataprodfilenow";
import edartcategorySlice from "../allsliceproj/edartcategoryuserBss/edartcategorySlice";
import EdartProdectSlice from "../allsliceproj/edartProdectsBss/EdartProdectSlice";
import edartPayProdectdsSlice from "../allsliceproj/Edart Pay Prodects/edartPayProdectdsSlice";
import edartOrdersBssSlice from "../allsliceproj/Edart Orders bss/edartOrdersBssSlice";
import edartOrdersUserSlice from "../allsliceproj/Edart Orders user/edartOrdersUserSlice";
import edartTewevesBssSlice from "../allsliceproj/Edart teweves/edartTewevesBssSlice";
import edartZebayensBssSlice from "../allsliceproj/Edart zebayens/edartZebayensBssSlice";
import edartPaymentsMethodsBssSlice from "../allsliceproj/Edart Peyments Methods/edartPaymentsMethodsBssSlice";
import edartManeyBssSlice from "../allsliceproj/Edart Maney/edartManeyBssSlice";
import MessageAllsUserSlice from "../allsliceproj/Message Alls User/MessageAllsUserSlice";

export const store = configureStore({
  reducer: {
    datauser: controolerdataprodfilenow,
    edartcategory: edartcategorySlice,
    edartprodectsbss: EdartProdectSlice,
    edartpayprodects: edartPayProdectdsSlice,
    edartOrdersBss: edartOrdersBssSlice,
    edartOrdersUser: edartOrdersUserSlice,
    edartmewevesbss: edartTewevesBssSlice,
    edartzebayensbss: edartZebayensBssSlice,
    edartpaymentsmethodsbss: edartPaymentsMethodsBssSlice,
    edartmaneybss: edartManeyBssSlice,
    MessageAllsUser: MessageAllsUserSlice,
  },
});
