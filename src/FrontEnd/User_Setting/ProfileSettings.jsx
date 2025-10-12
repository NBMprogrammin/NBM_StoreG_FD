import { useDialogActionContext } from "../Context/DialogActionContext";
import UserSettings from "./UserSettings";
import StoreSettings from "./StoreSettings";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const token = Cookies.get("token");

export default function ProfileSettings() {
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
  }, [navigate === "User-Settings", ProfileSnageNow]);

  if (ProfileSnageNow && ProfileSnageNow.Profilenow) {
    return (
      <>
        {ProfileSnageNow.Profilenow.TypProf === "user" ? (
          <UserSettings />
        ) : "" || ProfileSnageNow.Profilenow.TypProf === "bss" ? (
          <StoreSettings />
        ) : (
          ""
        )}
      </>
    );
    // }
  }
}
