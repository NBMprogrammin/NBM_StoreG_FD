import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("token");

// Start Send Request To Show Alls Data In Edart Pay Prodect
export const edartpayprodectsIndeexShow = createAsyncThunk(
  "edartpayprodectsss/show",
  async (page, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Show-All-MyPayment/Prodect?page=${page}`,
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
      return rejectWithValue(error);
    }
  }
); // End Send Request To To Show Alls Data In Edart Pay Prodect

// Start Send Request To Sereach Name Zeoune In Edart Pay Prodect
export const edartpayprodectSearchdatzeboune = createAsyncThunk(
  "edartpayprodectsss/sereach-zeboune",
  async (QuaryData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/payment-prodect-Search/${QuaryData.name}?page=${QuaryData.page}`,
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
      return rejectWithValue(error);
    }
  }
); // End Send Request To Sereach Name Zeoune In Edart Pay Prodect

// Start Send Request To Create Now Payment Prodect From Edart Pay Prodect
export const edartpayprodectbssCreateNowProdect = createAsyncThunk(
  "edartpayprodectsss/Create-Pay-Prodect",
  async (QuatyData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/payment-prodect`,
        QuatyData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const AllDataNow = response.data.data;
      const resultaction = response.data.typAction;

      return {
        AllDataNow,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Create Now Payment Prodect From Edart Pay Prodect ===//

// Start Send Request To Confirmed Payment Prodect From Edart Pay Prodect
export const edartpayprodectconfirmedpaymentProdect = createAsyncThunk(
  "edartpayprodectsss/confirmed-payment",
  async (QuatyData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/payment-prodect-Confirmed/${QuatyData.id}`,
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
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Confirmed Payment Prodect From Edart Pay Prodect ===//

// Start Send Request To Dsc Confirmed Payment Prodect From Edart Pay Prodect
export const edartpayprodectdscconfirmedpaymentProdect = createAsyncThunk(
  "edartpayprodectsss/dscconfirmed-payment",
  async (QuatyData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/payment-prodect-DesConfirmed/${QuatyData.id}`,
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
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Dsc Confirmed Payment Prodect From Edart Pay Prodect ===//

// Start Send Request To Show Alls Data Payment Prodect For My Zeboune From Edart Pay Prodect
export const edartpayprodectshowallsdatapaymentprod = createAsyncThunk(
  "edartpayprodectsss/Show-AllData-paymentprod",
  async (QuatyData, {rejectWithValue}) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/payment-prodect-Show/${QuatyData}`,
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
          titel: "حالت الحساب",
          parg:
            response.data.data.typeaccountzeboune == "create_Use"
              ? "تم انشائه يدويا"
              : "" || response.data.data.typeaccountzeboune == "Online"
              ? "تم تكوين علاقة  زبائنية"
              : "",
        },
        {
          id: 4,
          titel: "مسؤولية القرار الدفع",
          parg:
            response.data.data.typMeshole == 0
              ? "فلنتظار القرار"
              : "" || response.data.data.typMeshole == 1
              ? "المالك"
              : "" || response.data.data.typMeshole == 2
              ? `الموضف ${response.data.data.datMeshole}`
              : "",
        },
        {
          id: 5,
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
            response.data.data.paymentmethod == "CASH" ||
            response.data.data.paymentmethod == "Selefe"
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
          parg: `${response.data.data.totalpriceprodectspay} ${response.data.data.currentPay}`,
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
      return {
        dataShowPayProd,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Show Alls Data Payment Prodect For My Zeboune From Edart Pay Prodect ===//

const Sales_Management_Bss_Slice = createSlice({
  name: "edartpayprodectsss",
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
  },

  extraReducers(builder) {
    builder
      .addCase(edartpayprodectsIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartpayprodectsIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartpayprodectsIndeexShow.rejected, (state, action) => {
        state.typRequestNow = "Show";
        state.isLinding = false;
        state.data = [];
        state.resultrquestaction = 99;
      })
      .addCase(edartpayprodectSearchdatzeboune.pending, (state, action) => {
        state.isLinding = true;
        state.resultrquestaction = "";
        state.typRequestNow = "Sereach";
      })
      .addCase(edartpayprodectSearchdatzeboune.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding =
          action.payload.startPageNow == null ? "active" : false;
        state.last_page = action.payload.last_Page;
        state.typRequestNow = action.payload.typRequestNow;
        state.typRequestNow = "Sereach";
      })
      .addCase(edartpayprodectSearchdatzeboune.rejected, (state, action) => {
        state.typRequestNow = "Sereach";
        state.isLinding = false;
        state.resultrquestaction = 99;
      })
      .addCase(edartpayprodectbssCreateNowProdect.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartpayprodectbssToCreactPayProd";
        state.resultrquestaction = "";
      })
      .addCase(
        edartpayprodectbssCreateNowProdect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 2 ||
            action.payload.resultaction === 14 ||
            action.payload.resultaction === 7 ||
            action.payload.resultaction === 16 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 13
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.dataShowPayProd = action.payload.AllDataNow;
            state.lodingtorspact = false;
            state.typRequestNow = "edartpayprodectbssToCreactPayProd";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartpayprodectbssToCreactPayProd";
          }
        }
      )
      .addCase(edartpayprodectbssCreateNowProdect.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "edartpayprodectbssToCreactPayProd";
        state.resultrquestaction = 99;
      })
      .addCase(
        edartpayprodectconfirmedpaymentProdect.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartpayprodectconfirmedpaymentprod";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpayprodectconfirmedpaymentProdect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 13 ||
            action.payload.resultaction === 14
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartpayprodectconfirmedpaymentprod";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartpayprodectconfirmedpaymentprod";
          }
        }
      )
      .addCase(
        edartpayprodectconfirmedpaymentProdect.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartpayprodectconfirmedpaymentprod";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edartpayprodectdscconfirmedpaymentProdect.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartpayprodectdscconfirmedpaymentprod";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpayprodectdscconfirmedpaymentProdect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 13 ||
            action.payload.resultaction === 14
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
        edartpayprodectdscconfirmedpaymentProdect.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartpayprodectdscconfirmedpaymentprod";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edartpayprodectshowallsdatapaymentprod.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "ShowAllsDataPayProdectForId";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartpayprodectshowallsdatapaymentprod.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.dataShowPayProd = action.payload.dataShowPayProd;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsDataPayProdectForId";
          } else {
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsDataPayProdectForId";
          }
        }
      )
      .addCase(
        edartpayprodectshowallsdatapaymentprod.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "ShowAllsDataPayProdectForId";
          state.resultrquestaction = 99;
        }
      );
  },
});

export default Sales_Management_Bss_Slice.reducer;
