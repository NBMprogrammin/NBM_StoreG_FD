import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";

// Start Send Request To Login For My Accounte
export const startloginformyaccountenow = createAsyncThunk(
  "contrrolerdatauser/Login",
  async (QuatyData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/login`,
        QuatyData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

       // تشفير البيانات قبل إرجاعها للـ reducer
      const resultaction = response.data.typAction;
      const token = response.data.token;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        AllsDataProfNow,
        datprofNow,
        token,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
 //=== End Send Request To Create Now Category In Edart Category ===//

// Start Send Request To Show Alls Data User Login Now
export const showdatausernow = createAsyncThunk(
  "contrrolerdatauser/show",
  async (dat, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Date-Dasboard`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      const ProfileNow = response.data.Profilenow;
      const datauser = response.data;

      return {
        datauser,
        ProfileNow,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);// End Send Request To To Show Alls Data User Login Now

// Start Send Request To Shange For Profile User
export const startshngeprofileusernowtologin = createAsyncThunk(
  "contrrolerdatauser/Shange-profile",
  async (QuaryData, { rejectWithValue }) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/switech-profile`,
        QuaryData,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      const resultaction = response.data.typAction;
      const token = response.data.token;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        resultaction,
        token,
        datprofNow,
        AllsDataProfNow,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Shange For Profile User ==//

// Start Send Request To Send Message Code To Shange Password
export const starttosendmessageincodetoshangepassword = createAsyncThunk(
  "contrrolerdatauser/password/code-email",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/password/code`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const resultaction = response.data.typAction;
      const token = response.data.token;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        AllsDataProfNow,
        datprofNow,
        token,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Send Message Code To Shange Password ===//

// Start Send Request To Confirmed Code For Shange Password
export const StartConfirmedCodMessagetohangepassword = createAsyncThunk(
  "contrrolerdatauser/password-verify/code-email",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/password/verify`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      const resultaction = response.data.typAction;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      const token = response.data.token;
      return {
        token,
        AllsDataProfNow,
        datprofNow,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Confirmed Code For Shange Password ===//

// Start Send Request To Send Message Code To Shange Password In Sms
export const StartSendMessageforsmsnumberusertoshangepasswd = createAsyncThunk(
  "contrrolerdatauser/password-verify/code-phone",
  async (QuatyData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/sms-password/code`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const resultaction = response.data.typAction;
      return {
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Send Message Code To Shange Password In Sms ===//

// Start Send Request To Send Message Code To Confirmed Email After Create Accounte
export const stratesendtoconfiremdemailaftercreateacounte = createAsyncThunk(
  "contrrolerdatauser/cod-email-register",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/cod-email-register`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const resultaction = response.data.typAction;
      return {
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Send Message Code To Confirmed Email After Create Accounte ===//

// Start Send Request To Create Now Data Accounte User
export const starttocreatenewaccounteforuser = createAsyncThunk(
  "contrrolerdatauser/registerUser",
  async (QuatyData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/register`,
        QuatyData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );

      const resultaction = response.data.typAction;
      const token = response.data.token;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        AllsDataProfNow,
        datprofNow,
        token,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Create Now Data Accounte User ===//

// Start Send Request To Send Message Code To Shange Password In Sms
export const StartConfirmedCodePhoneToSangePasswordAccounteUser =
  createAsyncThunk(
    "contrrolerdatauser/password-verifyt/code-phone",
    async (QuatyData) => {
      const tokenFoul = Cookies.get("token");
      try {
        const response = await axios.post(
          `${GeneralUrlGetDatabase}/sms-password/verify`,
          QuatyData,
          {
            headers: {
              Authorization: "Bearer " + tokenFoul,
              Accept: "application/json",
            },
          }
        );

        const resultaction = response.data.typAction;
        return {
          resultaction,
        };
      } catch (error) {
      return rejectWithValue(error);
      }
    }
  ); //=== End Send Request To Send Message Code To Shange Password In Sms ===//

// Start Send Request To Action Legoute Profile User
export const startActionLogoutacountuser = createAsyncThunk(
  "contrrolerdatauser/logoute-user",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoult = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/logout`,
        {},
        {
          headers: {
            Authorization: "Bearer " + tokenFoult,
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      const typlogoutaccount = response.data.data;
      return {
        typlogoutaccount,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Action Legoute Profile User ==//

// Start Send Request To Update Password Data Profile Login Now Is User And Bss
export const StartToUpdateOrdCreatePasswordSettingForBss = createAsyncThunk(
  "contrrolerdatauser/Password-Settings",
  async (QuaryData) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/setting-passoword`,
        QuaryData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      const typeResponse = response.data.typAction;
      return {
        typeResponse,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Update Password Data Profile Login Now Is User And Bss ==//

// Start Send Request To Shange Alls Image For Profile Login Now Is User And Bss
export const starttoshangebigimageinprofilebss = createAsyncThunk(
  "contrrolerdatauser/bing-img",
  async (QuaryData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/My/profile/avatar`,
        QuaryData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      const typeResponse = response.data.typAction;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        AllsDataProfNow,
        datprofNow,
        typeResponse,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Shange Alls Image For Profile Login Now Is User And Bss ==//

// Start Send Request To Update Data Setting For Profile Login Now Is User And Bss
export const starttoshangdataprofilesettingsuserandbss = createAsyncThunk(
  "contrrolerdatauser/update-profile-settings",
  async (QuaryData) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/My/Profile/update`,
        QuaryData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      const typeResponse = response.data.typAction;
      const ProfileNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        ProfileNow,
        AllsDataProfNow,
        typeResponse,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Update Data Setting For Profile Login Now Is User And Bss  ==//

// Start Send Request To Update My Number Phone For Profile Login Now User And Bss
export const starttoshangMyPhoneNumberInProfile = createAsyncThunk(
  "contrrolerdatauser/update-number-phone",
  async (QuaryData) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/User/Update-Phone`,
        QuaryData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      const typeResponse = response.data.typAction;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        datprofNow,
        AllsDataProfNow,
        typeResponse,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Update My Number Phone For Profile Login Now User And Bss ==//

// Start Send Request To Send Code To Email For Prfile Login Now User And Bss
export const starttoshangemyemailprofile = createAsyncThunk(
  "contrrolerdatauser/shange-email",
  async (QuaryData) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/cod-shange-email`,
        QuaryData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      const typeResponse = response.data.typAction;
      return {
        typeResponse,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Send Code To Email For Prfile Login Now User And Bss ==//

// Start Send Request To Update My Email For Prfile Login Now User And Bss
export const starttoconfirmedshangeemailprofile = createAsyncThunk(
  "contrrolerdatauser/confirmed-shange-email",
  async (QuaryData) => {
      const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/cod-confirmed-shange-email`,
        QuaryData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      const typeResponse = response.data.typAction;
      const datprofNow = response.data.data.Profilenow;
      const AllsDataProfNow = response.data.data;
      return {
        datprofNow,
        AllsDataProfNow,
        typeResponse,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); // End Send Request To Update My Email For Prfile Login Now User And Bss ==//

const controolerdataprodfilenowSlice = createSlice({
  name: "contrrolerdatauser",
  initialState: {
    datauser: {},
    isLinding: false,
    totaldat: 0,
    ProfileSnageNow: {},
    typlogoutaccount: {},
    pagenow: 0,
    pagetogo: 0,
    last_page: 0,
    typRequestNow: "Show",
    resultrquestaction: "",
    Token: "",
    lodingtorspact: false,
  },

  reducers: {
    // latetr
    lastedefaultdatastate: (currentsatae, action) => {
      currentsatae.typRequestNow = '';
      currentsatae.resultrquestaction = '';
    }
  },

  extraReducers(builder) {
    builder
      .addCase(showdatausernow.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "";
        state.resultrquestaction = "";
      })
      .addCase(showdatausernow.fulfilled, (state, action) => {
        state.datauser = action.payload.datauser;
        state.ProfileSnageNow = action.payload.ProfileNow;
        state.lodingtorspact = false;
        state.typRequestNow = "ShowAllsDataUserLoginNow";
        state.resultrquestaction = 1;
      })
      .addCase(showdatausernow.rejected, (state, action) => {
        state.lodingtorspact = false;
        Cookies.remove("token");
        state.resultrquestaction = 99;
        state.typRequestNow = "ShowAllsDataUserLoginNow";
      })
      .addCase(startActionLogoutacountuser.pending, (state, action) => {
        state.lodingtorspact = true;
        state.resultrquestaction = "";
        state.typRequestNow = "startactionlogouteaccounteuser";
      })
      .addCase(startActionLogoutacountuser.fulfilled, (state, action) => {
        state.Token = "";
        state.ProfileSnageNow = {};
        state.datauser = [];
        Cookies.remove("token");
        state.resultrquestaction = action.payload.typlogoutaccount;
        state.lodingtorspact = false;
        state.typRequestNow = "startactionlogouteaccounteuser";
      })
      .addCase(startActionLogoutacountuser.rejected, (state, action) => {
        state.typRequestNow = "startactionlogouteaccounteuser";
        state.lodingtorspact = false;
        Cookies.remove("token");
        state.resultrquestaction = 99;
      })
      .addCase(startloginformyaccountenow.pending, (state, action) => {
        state.resultrquestaction = "";
        state.typRequestNow = "";
      })
      .addCase(startloginformyaccountenow.fulfilled, (state, action) => {
        if (action.payload.resultaction == 1) {
          Cookies.set("token", action.payload.token, { expires: 7 });
          state.ProfileSnageNow = action.payload.datprofNow;
          state.datauser = action.payload.AllsDataProfNow;
        }
        state.resultrquestaction = action.payload.resultaction;
        state.typRequestNow = "startactiontologinmyaccountenow";
      })
      .addCase(startloginformyaccountenow.rejected, (state, action) => {
        state.resultrquestaction = 99;
        state.typRequestNow = "startactiontologinmyaccountenow";
      })
      .addCase(
        starttosendmessageincodetoshangepassword.pending,
        (state, action) => {
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        starttosendmessageincodetoshangepassword.fulfilled,
        (state, action) => {
          state.resultrquestaction = action.payload.resultaction;
          state.typRequestNow = "starttosendmessageincodetosahngepasswd";
        }
      )
      .addCase(
        starttosendmessageincodetoshangepassword.rejected,
        (state, action) => {
          console.log('===============');
          console.log(action);
          console.log(action.data);
          console.log('===============');
          
          state.resultrquestaction = action.payload.response.data.typAction ? action.payload.response.data.typAction : 99;
          state.typRequestNow = "starttosendmessageincodetosahngepasswd";
        }
      )
      .addCase(
        StartConfirmedCodMessagetohangepassword.pending,
        (state, action) => {
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartConfirmedCodMessagetohangepassword.fulfilled,
        (state, action) => {
          if (action.payload.resultaction == 1) {
            Cookies.set("token", action.payload.token, { expires: 7 });
            state.ProfileSnageNow = action.payload.datprofNow;
            state.datauser = action.payload.AllsDataProfNow;
          }
          state.resultrquestaction = action.payload.resultaction;
          state.typRequestNow =
            "startconfirmedcodemessageforemailtoshangepassswd";
        }
      )
      .addCase(
        StartConfirmedCodMessagetohangepassword.rejected,
        (state, action) => {
          state.resultrquestaction = 99;
          state.typRequestNow =
            "startconfirmedcodemessageforemailtoshangepassswd";
        }
      )
      .addCase(
        StartSendMessageforsmsnumberusertoshangepasswd.pending,
        (state, action) => {
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartSendMessageforsmsnumberusertoshangepasswd.fulfilled,
        (state, action) => {
          if (action.payload.resultaction == 1) {
            state.ProfileSnageNow = action.payload.token;
          }
          state.resultrquestaction = action.payload.resultaction;
          state.typRequestNow = "StartSendMessageForPhoneUserToShngePassword";
        }
      )
      .addCase(
        StartSendMessageforsmsnumberusertoshangepasswd.rejected,
        (state, action) => {
          state.typRequestNow = "StartSendMessageForPhoneUserToShngePassword";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        stratesendtoconfiremdemailaftercreateacounte.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
          state.typRequestNow = "starttosendconfirmedemailaftercreateacounte";
        }
      )
      .addCase(
        stratesendtoconfiremdemailaftercreateacounte.fulfilled,
        (state, action) => {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "";
        }
      )
      .addCase(
        stratesendtoconfiremdemailaftercreateacounte.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.resultrquestaction = 99;
          state.typRequestNow = "starttosendconfirmedemailaftercreateacounte";
        }
      )
      .addCase(starttocreatenewaccounteforuser.pending, (state, action) => {
        state.lodingtorspact = true;
        state.resultrquestaction = "";
        state.typRequestNow = "starttocreatenewaccounteforuser";
      })
      .addCase(starttocreatenewaccounteforuser.fulfilled, (state, action) => {
        if (action.payload.resultaction == 1) {
          state.Token = action.payload.token;
          Cookies.set("token", action.payload.token, { expires: 7 });
          state.ProfileSnageNow = action.payload.datprofNow;
          state.datauser = action.payload.AllsDataProfNow;
        }
        state.resultrquestaction = action.payload.resultaction;
        state.lodingtorspact = false;
        state.typRequestNow = "starttocreatenewaccounteforuser";
      })
      .addCase(starttocreatenewaccounteforuser.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.resultrquestaction = 99;
        state.typRequestNow = "starttocreatenewaccounteforuser";
      })
      .addCase(
        StartConfirmedCodePhoneToSangePasswordAccounteUser.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartConfirmedCodePhoneToSangePasswordAccounteUser.fulfilled,
        (state, action) => {
          if (action.payload.resultaction == 1) {
            state.ProfileSnageNow = action.payload.token;
          }
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "startconfirmedmessageohoneusertosangepasswd";
        }
      )
      .addCase(
        StartConfirmedCodePhoneToSangePasswordAccounteUser.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "startconfirmedmessageohoneusertosangepasswd";
          state.resultrquestaction = 99;
        }
      )
      .addCase(startshngeprofileusernowtologin.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "";
        state.resultrquestaction = "";
      })
      .addCase(startshngeprofileusernowtologin.fulfilled, (state, action) => {
        state.resultrquestaction = 1;
        if(action.payload.resultaction === 1) {
          Cookies.set("token", action.payload.token, { expires: 7 });
          state.ProfileSnageNow = action.payload.datprofNow;
          state.datauser = action.payload.AllsDataProfNow;
        }
        state.lodingtorspact = false;
        state.typRequestNow = "StartShangeForNoterProfile";
      })
      .addCase(startshngeprofileusernowtologin.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.resultrquestaction = 99;
        Cookies.remove("token");
        state.typRequestNow = "StartShangeForNoterProfile";
      })
      .addCase(starttoshangebigimageinprofilebss.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "startshangebigimgprofile";
        state.resultrquestaction = "";
      })
      .addCase(starttoshangebigimageinprofilebss.fulfilled, (state, action) => {
        if (action.payload.typeResponse === 1 || 
          action.payload.typeResponse === 3
        ) {
          state.datauser = action.payload.AllsDataProfNow;
          state.ProfileSnageNow = action.payload.datprofNow;
          }
        state.resultrquestaction = action.payload.typeResponse;
        state.lodingtorspact = false;
        state.typRequestNow = "startshangebigimgprofile";
      })
      .addCase(starttoshangebigimageinprofilebss.rejected, (state, action) => {
        state.resultrquestaction = 99;
        state.lodingtorspact = false;
        state.typRequestNow = "startshangebigimgprofile";
      })
      .addCase(starttoshangemyemailprofile.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "shartshangeemailprofile";
        state.resultrquestaction = "";
      })
      .addCase(starttoshangemyemailprofile.fulfilled, (state, action) => {
        state.resultrquestaction = action.payload.typeResponse;
        state.lodingtorspact = false;
        state.typRequestNow = "shartshangeemailprofile";
      })
      .addCase(starttoshangemyemailprofile.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "shartshangeemailprofile";
        state.resultrquestaction = 99;
      })
      .addCase(starttoconfirmedshangeemailprofile.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "startconfirmedshangeemailprofile";
        state.resultrquestaction = "";
      })
      .addCase(
        starttoconfirmedshangeemailprofile.fulfilled,
        (state, action) => {
          if(action.payload.typeResponse === 1) {
            state.ProfileSnageNow = action.payload.datprofNow;
            state.datauser = action.payload.AllsDataProfNow;
          }
          state.resultrquestaction = action.payload.typeResponse;
          state.lodingtorspact = false;
          state.typRequestNow = "startconfirmedshangeemailprofile";
        }
      )
      .addCase(starttoconfirmedshangeemailprofile.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "startconfirmedshangeemailprofile";
        state.resultrquestaction = 99;
      })
      .addCase(starttoshangMyPhoneNumberInProfile.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "startshangenumberphonemyprofile";
        state.resultrquestaction = "";
      })
      .addCase(
        starttoshangMyPhoneNumberInProfile.fulfilled,
        (state, action) => {
          if(action.payload.typeResponse === 1) {
            state.ProfileSnageNow = action.payload.datprofNow;
            state.datauser = action.payload.AllsDataProfNow;
          }
          state.resultrquestaction = action.payload.typeResponse;
          state.lodingtorspact = false;
          state.typRequestNow = "startshangenumberphonemyprofile";
        }
      )
      .addCase(starttoshangMyPhoneNumberInProfile.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "startshangenumberphonemyprofile";
        state.resultrquestaction = 99;
      })
      .addCase(
        starttoshangdataprofilesettingsuserandbss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "startshangeprofilesettingsforuser";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        starttoshangdataprofilesettingsuserandbss.fulfilled,
        (state, action) => {
          if(action.payload.typeResponse === 1) {
            state.datauser = action.payload.AllsDataProfNow;
            state.ProfileSnageNow = action.payload.ProfileNow;
          }
          state.resultrquestaction = action.payload.typeResponse;
          state.lodingtorspact = false;
          state.typRequestNow = "startshangeprofilesettingsforuser";
        }
      )
      .addCase(
        starttoshangdataprofilesettingsuserandbss.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "startshangeprofilesettingsforuser";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        StartToUpdateOrdCreatePasswordSettingForBss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "starttocreateorupdpasswordsettings";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartToUpdateOrdCreatePasswordSettingForBss.fulfilled,
        (state, action) => {
          state.resultrquestaction = action.payload.typeResponse;
          state.lodingtorspact = false;
          state.typRequestNow = "starttocreateorupdpasswordsettings";
        }
      )
      .addCase(
        StartToUpdateOrdCreatePasswordSettingForBss.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "starttocreateorupdpasswordsettings";
          state.resultrquestaction = 99;
        }
      );
  },
});

export const { lastedefaultdatastate } = controolerdataprodfilenowSlice.actions;
export default controolerdataprodfilenowSlice.reducer;
