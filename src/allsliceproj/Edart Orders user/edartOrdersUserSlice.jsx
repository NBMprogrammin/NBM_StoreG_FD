import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

// Start Send Request To Show Alls Data In Edart Orders User
export const edartOrdersUserIndeexShow = createAsyncThunk(
  "edartordersuser/show",
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
); // End Send Request To To Show Alls Data In Edart Orders User

// Start Send Request To Sereach Alls My Orders For Bss
export const edartOrdersUserSearchdatzebounedata = createAsyncThunk(
  "edartordersuser/sereach-data-zeboune",
  async (QuaryData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Order-For-Bss/${QuaryData.name}?page=${QuaryData.page}`,
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
); // End Send Request To Sereach Alls My Orders For Bss

// Start Send Request To Create Now My Order For Semthing Bss Id
export const edartordersuserstoCreateNowMyOrder = createAsyncThunk(
  "edartordersuser/Create-order",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Order-add`,
        QuatyData,
        {
          headers: {
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
      console.log(error);
    }
  }
); //=== End Send Request To Create Now My Order For Semthing Bss Id ===//

// Start Send Request To Stop My Order For Bss
export const edartordersuserstopmyOrder = createAsyncThunk(
  "edartordersuser/stop-order",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Order-stop/${QuatyData.id}`,
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
); //=== End Send Request To Stop My Order For Bss ===//

// Start Send Request To Delete My Order For Id
export const edartordersuserdeletemyOrder = createAsyncThunk(
  "edartordersuser/delete-order",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/user/Order-delete/${QuatyData.id}`,
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
); //=== End Send Request To Delete My Order For Id ===//

// Start Send Request To Show Alls Data Semthing My Order
export const edartOrdersuserShowAllsDataMyOrder = createAsyncThunk(
  "edartordersuser/Show-AllData-order",
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
          titel: "الاسم تجاري",
          parg: response.data.data.namebss,
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
            response.data.data.typepayment == 0
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
          parg:
            response.data.data.totalpriceprodectspay +
            response.data.data.currentPay,
        },
      ];
      const dataShowPayProd = {
        datone: DatNone,
        datou: datTou,
        datthere: response.data.dataForEftProd,
        namebss: response.data.data.namebss,
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
); //=== End Send Request To Show Alls Data Semthing My Order ===//

const edartOrdersUserSlice = createSlice({
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
      .addCase(edartOrdersUserIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartOrdersUserIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding =
          action.payload.AllDataNow.length != 0 ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartOrdersUserIndeexShow.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartOrdersUserSearchdatzebounedata.pending, (state, action) => {
        state.isLinding = true;
        state.resultrquestaction = "";
        state.typRequestNow = "Sereach";
      })
      .addCase(
        edartOrdersUserSearchdatzebounedata.fulfilled,
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
      .addCase(
        edartOrdersUserSearchdatzebounedata.rejected,
        (state, action) => {
          state.isLinding = false;
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(edartordersuserstoCreateNowMyOrder.pending, (state, action) => {
        state.lodingtorspact = true;
        state.resultrquestaction = "";
        state.typRequestNow = "";
        state.resultrquestaction = "";
      })
      .addCase(
        edartordersuserstoCreateNowMyOrder.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 7) {
            state.dataShowPayProd = action.payload.AllDataNow;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartorderUserToCreateNowOrder";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartorderUserToCreateNowOrder";
          }
        }
      )
      .addCase(edartordersuserstoCreateNowMyOrder.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartordersuserstopmyOrder.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartordersuserstomyorder";
        state.resultrquestaction = "";
      })
      .addCase(edartordersuserstopmyOrder.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 3 ||
          action.payload.resultaction === 4 ||
          action.payload.resultaction === 6
        ) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.last_page = action.payload.last_Page;
          state.typRequestNow = "edartordersuserstomyorder";
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "edartordersuserstomyorder";
        }
      })
      .addCase(edartordersuserstopmyOrder.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartordersuserdeletemyOrder.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartordersuserdeletemyorder";
        state.resultrquestaction = "";
      })
      .addCase(edartordersuserdeletemyOrder.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 3 ||
          action.payload.resultaction === 4 ||
          action.payload.resultaction === 6
        ) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.last_page = action.payload.last_Page;
          state.typRequestNow = "edartordersuserdeletemyorder";
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "edartordersuserdeletemyorder";
        }
      })
      .addCase(edartordersuserdeletemyOrder.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartOrdersuserShowAllsDataMyOrder.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "ShowAllsMyOrderDataFromEdartOrdersUser";
        state.resultrquestaction = "";
      })
      .addCase(
        edartOrdersuserShowAllsDataMyOrder.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.dataShowPayProd = action.payload.dataShowPayProd;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsMyOrderDataFromEdartOrdersUser";
          } else if (action.payload.resultaction === 2) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "ShowAllsMyOrderDataFromEdartOrdersUser";
          } else {
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsMyOrderDataFromEdartOrdersUser";
          }
        }
      )
      .addCase(edartOrdersuserShowAllsDataMyOrder.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "Show";
        localStorage.removeItem("token");
        window.location.href = "home";
      });
  },
});

export const { testreducer } = edartOrdersUserSlice.actions;
export default edartOrdersUserSlice.reducer;
