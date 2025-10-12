import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

// Start Send Request To Show Alls Data In Edart Category
export const ShowAllsMyMessage = createAsyncThunk(
  "messageuser/show",
  async (page) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message?page=${page}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;

      const startPageTo = response.data.data.to;

      const AllDataNow = response.data.data.data;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
      };
    } catch (error) {
      if (error.message == "Network Error") {
        setTimeout(() => {
          localStorage.removeItem("token");
          window.location.href = "/home";
        }, 5000);
      }
    }
  }
); // End Send Request To To Show Alls Data In Edart Category

// Start Send Request To Updat Semthing Category In Edart Category
export const StartToConfirmedAddMyZebouneForBss = createAsyncThunk(
  "messageuser/add-zeboun",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message-confirmed-zeboune/${QuatyData.id}`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

// Start Send Request To Updat Semthing Category In Edart Category
export const StartToStopAddMyZebouneForBss = createAsyncThunk(
  "messageuser/stop-zeboun",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message-Close-zeboune/${QuatyData.id}`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

// Start Send Request To Updat Semthing Category In Edart Category
export const StartToConfirmedMyDemandToTraveForBss = createAsyncThunk(
  "messageuser/Confirmed-trave",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message-confirmed-Tewve/${QuatyData.id}`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

// Start Send Request To Updat Semthing Category In Edart Category
export const StartToDscConfirmedMyDemandToTraveForBss = createAsyncThunk(
  "messageuser/stop-trave",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message-Close-Tewve/${QuatyData.id}`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

// Start Send Request To Updat Semthing Category In Edart Category
export const StartToConfirmedMyRatibeForTraveBss = createAsyncThunk(
  "messageuser/confirmed-get-ratibe",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message-ConfRatibe-Tewve/${QuatyData.id}`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

// Start Send Request To Updat Semthing Category In Edart Category
export const StartToDscConfirmedMyRatibeForTraveBss = createAsyncThunk(
  "messageuser/stop-get-ratibe",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Message-DscconfRatibe-Tewve/${QuatyData.id}`,
        QuatyData,
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.current_page;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

const MessageAllsUserSlice = createSlice({
  name: "messageuser",
  initialState: {
    data: [],
    isLinding: false,
    totaldat: 0,
    pagenow: 0,
    pagetogo: 0,
    last_page: 0,
    typRequestNow: "Show",
    resultrquestaction: "",
    lodingtorspact: false,
  },

  reducers: {
    testreducer: (state, action) => {
      console.log("=====================*********==============");
      console.log(state, action);
      console.log("=====================*********==============");
    },
  },

  extraReducers(builder) {
    builder
      .addCase(ShowAllsMyMessage.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(ShowAllsMyMessage.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload.AllDataNow];
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(ShowAllsMyMessage.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
        state.typRequestNow = "Show";
      })
      .addCase(StartToConfirmedAddMyZebouneForBss.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "StartConfirmedaddMyZeboun";
        state.resultrquestaction = "";
      })
      .addCase(
        StartToConfirmedAddMyZebouneForBss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 2 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 4
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.typRequestNow = "StartConfirmedaddMyZeboun";
            state.last_page = action.payload.last_Page;
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "StartConfirmedaddMyZeboun";
          }
        }
      )
      .addCase(StartToConfirmedAddMyZebouneForBss.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(
        StartToConfirmedMyDemandToTraveForBss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "StartConfirmedDemandTraveForBss";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartToConfirmedMyDemandToTraveForBss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 2 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 4 ||
            action.payload.resultaction === 8
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.typRequestNow = "StartConfirmedDemandTraveForBss";
            state.last_page = action.payload.last_Page;
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "StartConfirmedDemandTraveForBss";
          }
        }
      )
      .addCase(
        StartToConfirmedMyDemandToTraveForBss.rejected,
        (state, action) => {
          state.isLinding = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        StartToDscConfirmedMyDemandToTraveForBss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "StartDscConfirmedDemandTraveForBss";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartToDscConfirmedMyDemandToTraveForBss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 2 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 4 ||
            action.payload.resultaction === 8
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.typRequestNow = "StartDscConfirmedDemandTraveForBss";
            state.last_page = action.payload.last_Page;
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "StartDscConfirmedDemandTraveForBss";
          }
        }
      )
      .addCase(
        StartToDscConfirmedMyDemandToTraveForBss.rejected,
        (state, action) => {
          state.isLinding = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(StartToStopAddMyZebouneForBss.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "StartDscConfirmedaddMyZeboun";
        state.resultrquestaction = "";
      })
      .addCase(StartToStopAddMyZebouneForBss.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 2 ||
          action.payload.resultaction === 3 ||
          action.payload.resultaction === 4
        ) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.typRequestNow = "StartDscConfirmedaddMyZeboun";
          state.last_page = action.payload.last_Page;
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "StartDscConfirmedaddMyZeboun";
        }
      })
      .addCase(StartToStopAddMyZebouneForBss.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(
        StartToDscConfirmedMyRatibeForTraveBss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "StartToDscConfirmedGetMyRatibe";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        StartToDscConfirmedMyRatibeForTraveBss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 12 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 2
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.typRequestNow = "StartToDscConfirmedGetMyRatibe";
            state.last_page = action.payload.last_Page;
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "StartToDscConfirmedGetMyRatibe";
          }
        }
      )
      .addCase(
        StartToDscConfirmedMyRatibeForTraveBss.rejected,
        (state, action) => {
          state.isLinding = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(StartToConfirmedMyRatibeForTraveBss.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "StartToConfirmedGetMyRatibe";
        state.resultrquestaction = "";
      })
      .addCase(
        StartToConfirmedMyRatibeForTraveBss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 12 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 2
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.typRequestNow = "StartToConfirmedGetMyRatibe";
            state.last_page = action.payload.last_Page;
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "StartToConfirmedGetMyRatibe";
          }
        }
      )
      .addCase(
        StartToConfirmedMyRatibeForTraveBss.rejected,
        (state, action) => {
          state.isLinding = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      );
  },
});

export const { testreducer } = MessageAllsUserSlice.actions;
export default MessageAllsUserSlice.reducer;
