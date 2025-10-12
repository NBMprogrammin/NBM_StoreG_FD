import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

// Start Send Request To Show Alls Data In Edart Payment Methods
export const edartPaymentsMethodsBssIndeexShow = createAsyncThunk(
  "edartpaymentsmethods/show",
  async (page) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/setting-payment/show?page=${page}`,
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
); // End Send Request To To Show Alls Data In Edart Payment Methods

// Start Send Request To Active Payment Method
export const edartpaymentsmethodsbsstoactivepayment = createAsyncThunk(
  "edartpaymentsmethods/active-payment",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/setting-payment-Active/${QuatyData.PaymentID}`,
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
); //=== End Send Request To Active Payment Method ===//

// Start Send Request To Create Now Payment Method For Bss
export const edartpaymentsmethodsbsstoaddnowpaymentmethodforbss =
  createAsyncThunk(
    "edartpaymentsmethods/add-payment-method",
    async (QuatyData) => {
      try {
        const response = await axios.post(
          `${GeneralUrlGetDatabase}/bss/setting-payment`,
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
        console.log(error);
      }
    }
  ); //=== End Send Request To Create Now Payment Method For Bss ===//

// Start Send Request To Create Now Current Payment For Bss
export const edartpaymentsmethodsbsstoaddcurrentpaymentforbss =
  createAsyncThunk(
    "edartpaymentsmethods/add-current-payment",
    async (QuatyData) => {
      try {
        const response = await axios.post(
          `${GeneralUrlGetDatabase}/bss/setting-payment/current-cantry`,
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
        console.log(error);
      }
    }
  ); //=== End Send Request To Create Now Current Payment For Bss ===//

// Start Send Request To Dsc Send Request To Active Selaheyt Deyne For Semthing Zeboune
export const edartpaymentsmethodsbsstodscactivepayment = createAsyncThunk(
  "edartpaymentsmethods/dscactive-payment",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/setting-payment-DscActive/${QuatyData.PaymentID}`,
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
); //=== End Send Request To Dsc Send Request To Active Selaheyt Deyne For Semthing Zeboune ===//

// Start Send Request To Update Payment Method Bss
export const edartpaymentsmethodsbsstoupdatepaymentmethod = createAsyncThunk(
  "edartpaymentsmethods/update-payment",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/setting-payment-Update/${QuatyData.id}`,
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
); //=== End Send Request To Update Payment Method Bss ===//

const edartPaymentsMethodsBssSlice = createSlice({
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
      .addCase(edartPaymentsMethodsBssIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartPaymentsMethodsBssIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartPaymentsMethodsBssIndeexShow.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(
        edartpaymentsmethodsbsstoactivepayment.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartpaymentsmethodsbsstoactivepayment";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoactivepayment.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartpaymentsmethodsbsstoactivepayment";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartpaymentsmethodsbsstoactivepayment";
          }
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoactivepayment.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstodscactivepayment.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartpaymentmathodsToDscactivePayment";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstodscactivepayment.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartpaymentmathodsToDscactivePayment";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartpaymentmathodsToDscactivePayment";
          }
        }
      )
      .addCase(
        edartpaymentsmethodsbsstodscactivepayment.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoupdatepaymentmethod.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartpaymentsmethodsbsstoupdatepaymentmethod";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoupdatepaymentmethod.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow =
              "edartpaymentsmethodsbsstoupdatepaymentmethod";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartpaymentsmethodsbsstoupdatepaymentmethod";
          }
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoupdatepaymentmethod.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoaddnowpaymentmethodforbss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoaddnowpaymentmethodforbss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartpaymentsmethodsbsstoaddnowpaymentmethodbss";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartpaymentsmethodsbsstoaddnowpaymentmethodbss";
          }
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoaddnowpaymentmethodforbss.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoaddcurrentpaymentforbss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoaddcurrentpaymentforbss.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartpaymentsmethodsbsstoaddcurectpaymentbss";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartpaymentsmethodsbsstoaddcurectpaymentbss";
          }
        }
      )
      .addCase(
        edartpaymentsmethodsbsstoaddcurrentpaymentforbss.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      );
  },
});

export const { testreducer } = edartPaymentsMethodsBssSlice.actions;
export default edartPaymentsMethodsBssSlice.reducer;
