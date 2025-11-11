import React, { useEffect } from "react";
import EdartOrdersUser from "./Order_Management_User";
import EdartOrdersBss from "./Order_Management_Bss";
import Header from "../layoute/Header";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const token = Cookies.get("token");

const Order_Management = () => {
  const navigate = useNavigate();
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "Order-Management", ProfileSnageNow]);
    
  if(ProfileSnageNow && ProfileSnageNow.TypProf) {
    return (
      <div className="stlefirstdivcontrolinpage">
        <Header typeactive={"Edartorders"} />
        {ProfileSnageNow.TypProf == "user"
          ? <EdartOrdersUser />
          : "" ||
            ProfileSnageNow.TypProf == "bss" ||
            ProfileSnageNow.TypProf == "teweve"
          ? <EdartOrdersBss />
          : ""}
      </div>
    );
  }
}

export default Order_Management;