import UserProfile from "./UserProfile";
import StoreProfile from "./StoreProfile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
const token = Cookies.get("user_token");

export default function MyProfile() {
  const navigate = useNavigate();
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("user_token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home", { replace: true });
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/MyProfile", ProfileSnageNow]);

  if (token) {
    if (ProfileSnageNow && ProfileSnageNow.TypProf) {
      return (
        <>
          {ProfileSnageNow.TypProf === "user" ? (
            <UserProfile />
          ) : "" || ProfileSnageNow.TypProf === "bss" ? (
            <StoreProfile />
          ) : (
            ""
          )}
        </>
      );
      // }
    }
  }
}
