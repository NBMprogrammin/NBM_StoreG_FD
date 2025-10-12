import DashboardBss from "./DashboardBss";
import DashboardUser from "./DashboardUser";
import DasboardTraver from "./DasboardTraver";
import Header from "../layoute/Hedaer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
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
  }, [navigate === "dashboard", ProfileSnageNow]);

  if (ProfileSnageNow && ProfileSnageNow.TypProf) {
    return (
      <div>
        <Header typeactive={"Dashboardt"} />
        {ProfileSnageNow.TypProf === "user" ? (
          <DashboardUser />
        ) : "" || ProfileSnageNow.TypProf === "teweve" ? (
          <DasboardTraver />
        ) : "" || ProfileSnageNow.TypProf === "bss" ? (
          <DashboardBss />
        ) : (
          ""
        )}
      </div>
    );
  }
}
