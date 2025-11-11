import { configureStore } from "@reduxjs/toolkit";
import controolerdataprodfilenow from "../allsliceproj/Controller Data Profile Now/controolerdataprodfilenowSlice";
import Categories_Management_Bss_Slice from "../allsliceproj/Categories_Management_Bss/Categories_Management_Bss_Slice";
import Products_Management_Bss_Slice from "../allsliceproj/Products_Management_Bss/Products_Management_Bss_Slice";
import Sales_Management_Bss_Slice from "../allsliceproj/Sales_Management_Bss/Sales_Management_Bss_Slice";
import Order_Management_Bss_Slice from "../allsliceproj/Order_Management_Bss/Order_Management_Bss_Slice";
import Order_Management_User_Slice from "../allsliceproj/Order_Management_User/Order_Management_User_Slice";
import Employees_Management_Bss_Slice from "../allsliceproj/Employees_Management_Bss/Employees_Management_Bss_Slice";
import Customers_Management_Bss_Slice from "../allsliceproj/Customers_Management_Bss/Customers_Management_Bss_Slice";
import Payment_Settings_Management_Bss_Slice from "../allsliceproj/Payment_Settings_Management_Bss/Payment_Settings_Management_Bss_Slice";
import Financial_Management_Bss_Slice from "../allsliceproj/Financial_Management_Bss/Financial_Management_Bss_Slice";
import MessageAllsUserSlice from "../allsliceproj/Message Alls User/MessageAllsUserSlice";

export const store = configureStore({
  reducer: {
    datauser: controolerdataprodfilenow,
    Categories_Management: Categories_Management_Bss_Slice,
    Products_Management_Bss: Products_Management_Bss_Slice,
    Sales_Management_Bss: Sales_Management_Bss_Slice,
    Order_Management_Bss: Order_Management_Bss_Slice,
    Order_Management_User: Order_Management_User_Slice,
    Employees_Management_Bss: Employees_Management_Bss_Slice,
    Customers_Management_Bss: Customers_Management_Bss_Slice,
    Payment_Settings_Management_Bss: Payment_Settings_Management_Bss_Slice,
    Financial_Management_Bss: Financial_Management_Bss_Slice,
    MessageAllsUser: MessageAllsUserSlice,
  },

});
