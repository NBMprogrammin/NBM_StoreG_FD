import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

// Start Send Request To Show Alls Data In Edart Maney Bss
export const edartManyBssIndexShowData = createAsyncThunk(
  "edartmaneybss/show",
  async (page) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Edart-Maney-Show?page=${page}`,
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
      const startPageNow = response.data.data.from;

      const startPageTo = response.data.data.to;
      const totalmeth = response.data.totalformothe;

      const AllDataNow = response.data.data.data;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        totalmeth,
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
); // End Send Request To To Show Alls Data In Edart Maney Bss

// Start Send Request To Create Now Edart Maney Bss
export const edartmaneybsstoAddsemthingforedartmaney = createAsyncThunk(
  "edartmaneybss/add-edartmaney",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Edart-Maney/add`,
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
      const startPageNow = response.data.data.from;
      const startPageTo = response.data.data.to;
      const totalmeth = response.data.totalformothe;
      const AllDataNow = response.data.data.data;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
        totalmeth,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Create Now Edart Maney Bss ===//

// Start Send Request To Update Now Edart Maney Bss
export const edartmaneybsstoUpdatesemthingforedartmany = createAsyncThunk(
  "edartmaneybss/updat-edartmaney",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Edart-Maney-update/${QuatyData.id}`,
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
      const startPageNow = response.data.data.from;
      const startPageTo = response.data.data.to;
      const AllDataNow = response.data.data.data;
      const totalmeth = response.data.totalformothe;
      const resultaction = response.data.typAction;

      return {
        datAls,
        startPageNow,
        startPageTo,
        AllDataNow,
        last_Page,
        resultaction,
        totalmeth,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Update Now Edart Maney Bss ===//

const edartManeyBssSlice = createSlice({
  name: "edartzebayensbss",
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
    totaleformonthe: 0,
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
      .addCase(edartManyBssIndexShowData.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartManyBssIndexShowData.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
        state.totaleformonthe = action.payload.totalmeth;
      })
      .addCase(edartManyBssIndexShowData.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(
        edartmaneybsstoUpdatesemthingforedartmany.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartmaneybsstoUpdatesemthingforedartmany";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartmaneybsstoUpdatesemthingforedartmany.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 9
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.totaleformonthe = action.payload.totalmeth;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmaneybsstoUpdatesemthingforedartmany";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmaneybsstoUpdatesemthingforedartmany";
          }
        }
      )
      .addCase(
        edartmaneybsstoUpdatesemthingforedartmany.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartmaneybsstoAddsemthingforedartmaney.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartmaneybsstoaddsemthingedartmaney";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartmaneybsstoAddsemthingforedartmaney.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 3
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.totaleformonthe = action.payload.totalmeth;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmaneybsstoaddsemthingedartmaney";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmaneybsstoaddsemthingedartmaney";
          }
        }
      )
      .addCase(
        edartmaneybsstoAddsemthingforedartmaney.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      );
  },
});

export const { testreducer } = edartManeyBssSlice.actions;
export default edartManeyBssSlice.reducer;
