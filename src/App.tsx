import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexHome from "./FrontEnd/IndexHome";
import Login from "./FrontEnd/layoute/Login";
import Register from "./FrontEnd/layoute/Register";
import Dashboard from "./FrontEnd/Dashboard/Dashboard";
import ForgotPassword from "./FrontEnd/layoute/ForgotPassword";

import { DialogActionContextProvider } from "./FrontEnd/Context/DialogActionContext";
import Messages from "./FrontEnd/Message/Messages";
import Order_Management_Add from "./FrontEnd/Order_Management/Order_Management_Add";
import Order_Management from "./FrontEnd/Order_Management/Order_Management";
import Employees_Management_Add from "./FrontEnd/Employees_Management/Employees_Management_Add";
import Financial_Management from "./FrontEnd/Financial_Management/Financial_Management";
import Payment_Settings_Management from "./FrontEnd/Payment_Settings_Management/Payment_Settings_Management";
import Customers_Management from "./FrontEnd/Customers_Management/Customers_Management";
import Sales_Management from "./FrontEnd/Sales _Management/Sales_Management";
import Payment_Settings_Management_Add from "./FrontEnd/Payment_Settings_Management/Payment_Settings_Management_Add";
import Employees_Management from "./FrontEnd/Employees_Management/Employees_Management";

// Start All Inport For Products Management
import Products_Management_Update from "./FrontEnd/Products_Management/Products_Management_Update";
import Products_Management from "./FrontEnd/Products_Management/Products_Management";
import Products_Management_Add from "./FrontEnd/Products_Management/Products_Management_Add";
//== End  All Inport For Products Management ==//

import Sales_Management_Add from "./FrontEnd/Sales _Management/Sales_Management_Add";
import Categories_Management from "./FrontEnd/Categories_Management/Categories_Management";
import Customers_Management_Add from "./FrontEnd/Customers_Management/Customers_Management_Add";
import MyProfile from "./FrontEnd/Profile/MyProfile";
import ProfileSettings from "./FrontEnd/User_Setting/ProfileSettings";

function App() {
  return (
    <DialogActionContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/home" element={<IndexHome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Sales-Management" element={<Sales_Management />} />
          <Route
            path="/Sales-Management/Add"
            element={<Sales_Management_Add />}
          />
          <Route
            path="/Payment-Settings-Management/Add"
            element={<Payment_Settings_Management_Add />}
          />
          <Route
            path="/Payment-Settings-Management"
            element={<Payment_Settings_Management />}
          />
          <Route
            path={"/Products-Management/add"}
            element={<Products_Management_Add />}
          />
          <Route
            path="/Categories-Management"
            element={<Categories_Management />}
          />
          <Route
            path="/Customers-Management/Add"
            element={<Customers_Management_Add />}
          />
          <Route path="/All-Message" element={<Messages />} />
          <Route
            path="/Products-Management-update/:prodectID"
            element={<Products_Management_Update />}
          />
          <Route
            path="/Products-Management"
            element={<Products_Management />}
          />
          <Route
            path="/Customers-Management"
            element={<Customers_Management />}
          />
          <Route
            path="/Employees-Management"
            element={<Employees_Management />}
          />
          <Route
            path="/Employees_Management/Add"
            element={<Employees_Management_Add />}
          />
          <Route path="/Order-Management" element={<Order_Management />} />
          <Route
            path="/Financial-Management"
            element={<Financial_Management />}
          />
          <Route
            path="/Order-Management/add"
            element={<Order_Management_Add />}
          />
          <Route path="*" element={<IndexHome />} />
          <Route path="/user-profile" element={<MyProfile />} />
          <Route path="/user-ForgotPassword" element={<ForgotPassword />} />
          <Route path="/User-Settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </DialogActionContextProvider>
  );
}

export default App;
