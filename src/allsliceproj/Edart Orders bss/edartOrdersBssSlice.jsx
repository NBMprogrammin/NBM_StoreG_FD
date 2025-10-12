import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

// Start Send Request To Show Alls Data In Edart Oders
export const edartOrdersBssIndeexShow = createAsyncThunk(
  "edartordersbss/show",
  async (page) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Order-Show?page=${page}`,
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
); // End Send Request To To Show Alls Data In Edart Oders

// Start Send Request To Sereach Alld Orders Zeboune For My Bss In Edart Oders
export const edartOrdersBssSearchdatzebounedata = createAsyncThunk(
  "edartordersbss/sereach-data-zeboune",
  async (QuaryData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Order-For-zeboune/${QuaryData.name}?page=${QuaryData.page}`,
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
); // End Send Request To Sereach Alld Orders Zeboune For My Bss In Edart Oders

// Start Send Request To Confirmed Payment Prodect From Edart Oders
export const edartordersbssconfirmedpaymentOrder = createAsyncThunk(
  "edartordersbss/confirmed-payment",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Order-confirmed-payment/${QuatyData.id}`,
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
      console.log(datAls);
      console.log(AllDataNow);
      console.log(resultaction);

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
); //=== End Send Request To Confirmed Payment Prodect From Edart Oders ===//

// Start Send Request To Dsc Confirmed Payment Prodect From Edart Oders
export const edartordersbssdscconfirmedpaymentOrder = createAsyncThunk(
  "edartordersbss/dscconfirmed-payment",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Order-Dscconfirmed-payment/${QuatyData.id}`,
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
); //=== End Send Request To Dsc Confirmed Payment Prodect From Edart Oders ===//

// Start Send Request To Confirmed Order Foe Semthing Zeboune
export const edartordersbssconfirmedOrder = createAsyncThunk(
  "edartordersbss/confirmed-order",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Order-confirmed-order/${QuatyData.id}`,
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
); //=== End Send Request To Confirmed Order Foe Semthing Zeboune ===//

// Start Send Request To Active Pay Prodect
export const edartOrdersBsshowallsdatformOrderzeboune = createAsyncThunk(
  "edartordersbss/Show-AllData-order",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Order-Show/${QuatyData}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const DatNone = [
        {
          id: 1,
          titel: "الاسم زبون",
          parg: response.data.data.namezeboune,
        },
        {
          id: 2,
          titel: "الرقم زبون",
          parg:
            response.data.data.numberzeboune != ""
              ? response.data.data.numberzeboune
              : "لم يتم تعباته",
        },
        {
          id: 3,
          titel: "حالت طلبية",
          parg:
            response.data.data.TypeOrder == 0
              ? "فلانتظار"
              : "" || response.data.data.TypeOrder == 3
              ? "قيد المعالجة"
              : "" || response.data.data.TypeOrder == 4
              ? "تم الغاء طلبية"
              : "" || response.data.data.TypeOrder == 1
              ? "تم اتمام طلبية"
              : "" || response.data.data.TypeOrder == 2
              ? "تم رفض طلبية"
              : "",
        },
        {
          id: 4,
          titel: "حالت الدفع",
          parg:
            response.data.data.typepayment === 0
              ? "فلانتظار"
              : "" || response.data.data.typepayment == 1
              ? "تم القبول"
              : "" || response.data.data.typepayment == 2
              ? "تم رفض"
              : "" || response.data.data.typepayment == 3
              ? "تم الغاء"
              : "",
        },
        {
          id: 5,
          titel: "مسؤولية القرار الدفع",
          parg:
            response.data.data.typMeshole == 0 ||
            response.data.data.typMeshole == null
              ? "فلنتظار القرار"
              : "" || response.data.data.typMeshole == 1
              ? "المالك"
              : "" || response.data.data.typMeshole == 2
              ? `الموضف ${response.data.data.nameMeshol}`
              : "",
        },
        {
          id: 6,
          titel: "طريقة الدفع",
          parg:
            response.data.data.paymentmethod != ""
              ? response.data.data.paymentmethod
              : "لم يتم تعباته",
        },

        {
          id: 7,
          titel: "الرقم الدفع",
          parg:
            response.data.data.paymentmethod === "CASH" ||
            response.data.data.paymentmethod === "Selefe"
              ? "غير مطلوب"
              : response.data.data.numberpaymentmethod,
        },
      ];
      const datTou = [
        {
          id: 1,
          titel: " عدد المنتجات",
          parg: response.data.data.totalprodectspay,
        },
        {
          id: 2,
          titel: "كمية المنتجات",
          parg: response.data.data.allquantitelprodect,
        },
        {
          id: 3,
          titel: "تكلفة الاجمالية",
          parg:
            response.data.data.totalpriceprodectspay +
            response.data.data.currentPay,
        },
      ];
      const dataShowPayProd = {
        datone: DatNone,
        datou: datTou,
        datthere: response.data.dataForEftProd,
        namezeboune: response.data.data.namezeboune,
        imgconfirmedpay: response.data.data.imgconfirmedpay,
        created_at: response.data.data.created_at,
        id: response.data.data.id,
      };
      const resultaction = response.data.typAction;
      const last_Page = response.data.data.last_page;
      const datAls = response.data.data.total;
      const startPageNow = response.data.data.from;

      const startPageTo = response.data.data.to;

      const AllDataNow = response.data.data.data;
      return {
        dataShowPayProd,
        resultaction,
        AllDataNow,
        datAls,
        startPageNow,
        startPageTo,
        last_Page,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Active Pay Prodect ===//

const edartOrdersBssSlice = createSlice({
  name: "edartordersbss",
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
    dataShowPayProd: "",
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
      .addCase(edartOrdersBssIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartOrdersBssIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartOrdersBssIndeexShow.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartOrdersBssSearchdatzebounedata.pending, (state, action) => {
        state.isLinding = true;
        state.resultrquestaction = "";
        state.typRequestNow = "Sereach";
      })
      .addCase(
        edartOrdersBssSearchdatzebounedata.fulfilled,
        (state, action) => {
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.isLinding =
            action.payload.startPageNow == null ? "active" : false;
          state.last_page = action.payload.last_Page;
          state.typRequestNow = action.payload.typRequestNow;
          state.typRequestNow = "Sereach";
        }
      )
      .addCase(edartOrdersBssSearchdatzebounedata.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartordersbssconfirmedpaymentOrder.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartordersconfirmedpayment";
        state.resultrquestaction = "";
      })
      .addCase(
        edartordersbssconfirmedpaymentOrder.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 4 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 12 ||
            action.payload.resultaction === 5
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartordersconfirmedpayment";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartordersconfirmedpayment";
          }
        }
      )
      .addCase(
        edartordersbssconfirmedpaymentOrder.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartordersbssdscconfirmedpaymentOrder.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartpayprodectdscconfirmedpaymentprod";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartordersbssdscconfirmedpaymentOrder.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 4 ||
            action.payload.resultaction === 5 ||
            action.payload.resultaction === 9
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartpayprodectdscconfirmedpaymentprod";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartpayprodectdscconfirmedpaymentprod";
          }
        }
      )
      .addCase(
        edartordersbssdscconfirmedpaymentOrder.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(edartordersbssconfirmedOrder.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartordersbssconfirmedorderzeboune";
        state.resultrquestaction = "";
      })
      .addCase(edartordersbssconfirmedOrder.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 3 ||
          action.payload.resultaction === 6 ||
          action.payload.resultaction === 10 ||
          action.payload.resultaction === 12 ||
          action.payload.resultaction === 11 ||
          action.payload.resultaction === 9
        ) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.last_page = action.payload.last_Page;
          state.typRequestNow = "edartordersbssconfirmedorderzeboune";
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "edartordersbssconfirmedorderzeboune";
        }
      })
      .addCase(edartordersbssconfirmedOrder.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(
        edartOrdersBsshowallsdatformOrderzeboune.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartOrdersBsshowallsdatformOrderzeboune.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.dataShowPayProd = action.payload.dataShowPayProd;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          } else if (action.payload.resultaction === 2) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          } else {
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          }
        }
      )
      .addCase(
        edartOrdersBsshowallsdatformOrderzeboune.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      );
  },
});

export const { testreducer } = edartOrdersBssSlice.actions;
export default edartOrdersBssSlice.reducer;
