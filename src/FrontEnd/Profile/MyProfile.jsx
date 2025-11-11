import UserProfile from "./UserProfile";
import StoreProfile from "./StoreProfile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
const token = Cookies.get("token");

const MyProfile = () => {
  const navigate = useNavigate();
  const ProfileSnageNow = useSelector((state) => {
    return state.datauser.ProfileSnageNow;
  });

  // Start Sheck User Login Now To Do Action
  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (!token) {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/home");
        return;
      }
      if(ProfileSnageNow && ProfileSnageNow.TypProf === "teweve") {
        // إعادة التوجيه بدون إعادة تحميل
        navigate("/dashboard");
        return;
      }
    };
    checkAuthentication();
  }, [navigate === "/user-profile", ProfileSnageNow]); //=== End Sheck User Login Now To Do Action ===//

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
  }
}

export default MyProfile;