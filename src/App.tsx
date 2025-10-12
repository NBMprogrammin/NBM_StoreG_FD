import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexHome from "./FrontEnd/IndexHome";
import Login from "./FrontEnd/layoute/Login";
import Register from "./FrontEnd/layoute/Register";
import Dashboard from "./FrontEnd/Dashboard/Dashboard";
import ForgotPassword from "./FrontEnd/layoute/ForgotPassword";

import { DialogActionContextProvider } from "./FrontEnd/Context/DialogActionContext";
import Messages from "./FrontEnd/Message/Messages";
import AddMyOrdersForProdectsPay from "./FrontEnd/Edart_Orders/AddMyOrdersForProdectsPay";
import ShowAllMyOrdersIndex from "./FrontEnd/Edart_Orders/ShowAllMyOrdersIndex";
import AddMyMowawev from "./FrontEnd/EdartMewve/AddMyMowawev";
import EdartManey from "./FrontEnd/edarrt Maney/EdartManey";
import EdartPaymentMethods from "./FrontEnd/Edarrt Payment Methods/EdartPaymentMethods";
import EdartZebayen from "./FrontEnd/EdaretZebayne/EdartZebayen";
import EdartPayProdects from "./FrontEnd/Edart_Payment_Prodect/EdartPayProdects";
import EdartPaymentMethodsSetting from "./FrontEnd/Edarrt Payment Methods/EdartPaymentMethodsSetting";
import EdartMeweves from "./FrontEnd/EdartMewve/EdartMeweves";
import UpdateProdectsBss from "./FrontEnd/EdartProdects/UpdateProdectsBss";
import EdartProdects from "./FrontEnd/EdartProdects/EdartProdects";
import AddPordect from "./FrontEnd/EdartProdects/addPordect";
import MyPayMenteUser from "./FrontEnd/Edart_Payment_Prodect/MyPayMenteUser";
import EdartCategoreis from "./FrontEnd/Edart Categorys/EdartCategoreis";
import AddCelyaneForMehale from "./FrontEnd/EdaretZebayne/AddCelyaneForMehale";
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
          <Route path="/My-Payment-Prodect" element={<EdartPayProdects />} />
          <Route path="/My-Payment-Prodect/Add" element={<MyPayMenteUser />} />
          <Route
            path="/My-PeymentMethod/Setting/edit"
            element={<EdartPaymentMethodsSetting />}
          />
          <Route
            path="/My-PeymentMethod/Setting"
            element={<EdartPaymentMethods />}
          />
          <Route path={"/Pordect/add"} element={<AddPordect />} />
          <Route path="/category" element={<EdartCategoreis />} />
          <Route path="/Add-Zebayen" element={<AddCelyaneForMehale />} />
          <Route path="/All-Message" element={<Messages />} />
          <Route
            path="/My-Prodect-update/:prodectID"
            element={<UpdateProdectsBss />}
          />
          <Route path="/My-Prodect" element={<EdartProdects />} />
          <Route path="/My-Zebayn" element={<EdartZebayen />} />
          <Route path="/My-mewve" element={<EdartMeweves />} />
          <Route path="/add-mewve" element={<AddMyMowawev />} />
          <Route path="/My-Orders" element={<ShowAllMyOrdersIndex />} />
          <Route path="/Edart-maney" element={<EdartManey />} />
          <Route
            path="/My-Orders/add"
            element={<AddMyOrdersForProdectsPay />}
          />
          <Route path="*" element={<IndexHome />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/user-ForgotPassword" element={<ForgotPassword />} />
          <Route path="/User-Settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </DialogActionContextProvider>
  );
}

export default App;
