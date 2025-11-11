import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";

// Start Send Request To Show Alls Data In Edart Meweves Bss
export const edartmewevesBssIndeexShow = createAsyncThunk(
  "edartmewvesbss/show",
  async (page, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve?page=${page}`,
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
); // End Send Request To To Show Alls Data In Edart Meweves Bss

// Start Send Request To Add Now User In Teweve Trave For Bss
export const edarttewevesbsstoadduserinteweves = createAsyncThunk(
  "edartmewvesbss/add-teweve",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Add/${QuatyData.id}`,
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
); //=== End Send Request To Add Now User In Teweve Trave For Bss ===//

// Start Send Request Message For User To Trave For Bss
export const edarttewevesbsstoSendMessageAddUserTeweve = createAsyncThunk(
  "edartmewvesbss/send-message-to-teweve",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Bss/Message-send-mewve/${QuatyData.user_id}`,
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
      return rejectWithValue(error);
    }
  }
); //=== End Send Request Message For User To Trave For Bss ===//

// Start Send Request To Sereach Name And Data User To Do Action
export const edarttewevesbsstosereachusertoaddteweve = createAsyncThunk(
  "edartmewvesbss/sereach-to-add-teweve",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/sereach-user/${QuatyData}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );

      const resultaction = response.data.typAction;
      const dataShowPayProd = response.data.data;
      return {
        resultaction,
        dataShowPayProd,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Sereach Name And Data User To Do Action ===//

// Start Send Request To Stop Teweve Semthing User With Bss
export const edartmewwvestostoptewevesemthinguserintrave = createAsyncThunk(
  "edartmewvesbss/stop-teweve",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Stop/${QuatyData.id}`,
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
); //=== End Send Request To Stop Teweve Semthing User With Bss ===//

// Start Send Request To Active Selahiyet Edart Payment Prodect
export const edarttewevebsstoactiveslahiyetedartpayprodect = createAsyncThunk(
  "edartmewvesbss/active-edartpayprodect",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-PayProdects/${QuatyData.id}`,
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
); //=== End Send Request To Active Selahiyet Edart Payment Prodect ===//

// Start Send Request To Dsc Active Selahiyet Edart Payment Prodect
export const edarttewevebsstodscactiveslahiyetedartpayprodect =
  createAsyncThunk(
    "edartmewvesbss/dscactive-edartpayprodect",
    async (QuatyData, { rejectWithValue }) => {
      const tokenFoul = Cookies.get("token");
      try {
        const response = await axios.post(
          `${GeneralUrlGetDatabase}/bss/EdartMeweve-Stop-PayProdects/${QuatyData.id}`,
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
  ); //=== End Send Request To Dsc Active Selahiyet Edart Payment Prodect ===//

// Start Send Request To Active Selahiyet Edart Orders
export const edarttewevebsstoactiveslahiyetedartorders = createAsyncThunk(
  "edartmewvesbss/active-edartorders",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Orders/${QuatyData.id}`,
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
); //=== End Send Request To Active Selahiyet Edart Orders ===//

// Start Send Request To Dsc Active Selahiyet Edart Orders
export const edarttewevebsstoadscctiveslahiyetedartorders = createAsyncThunk(
  "edartmewvesbss/dscactive-edartorders",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Stop-Orders/${QuatyData.id}`,
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
); //=== End Send Request To Dsc Active Selahiyet Edart Orders ===//

// Start Send Request To Active Selahiyet Payment Electonect
export const edarttewevebsstoactiveselahiyetpaymentelectronect =
  createAsyncThunk(
    "edartmewvesbss/active-paymentectorinect",
    async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
      try {
        const response = await axios.post(
          `${GeneralUrlGetDatabase}/bss/EdartMeweve-PaymentEcteronect/${QuatyData.id}`,
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
  ); //=== End Send Request To Active Selahiyet Payment Electonect ===//

// Start Send Request To Dsc Active Selahiyet Payment Electonect
export const edarttewevebsstoadscctiveselahiyetpaymentelectronect =
  createAsyncThunk(
    "edartmewvesbss/dscactive-paymentectorinect",
    async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
      try {
        const response = await axios.post(
          `${GeneralUrlGetDatabase}/bss/EdartMeweve-Stop-PaymentEcteronect/${QuatyData.id}`,
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
  ); //=== End Send Request To Dsc Active Selahiyet Payment Electonect ===//

// Start Send Request To Dsc Active Selahiyet Edart Maney
export const edarttewevebsstoactiveselahiyetedartmaney = createAsyncThunk(
  "edartmewvesbss/active-edartmaney",
  async (QuatyData, { rejectWithValue }) => {
  const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-EdartMany/${QuatyData.id}`,
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
); //=== End Send Request To Dsc Active Payment Prodect ===//

// Start Send Request To Dsc Active Selahiyet Edart Maney
export const edarttewevebsstodscactiveselahiyetedartmaney = createAsyncThunk(
  "edartmewvesbss/dscactive-edartmaney",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Stop-EdartMany/${QuatyData.id}`,
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
); //=== End Send Request To Dsc Active Selahiyet Edart Maney ===//

// Start Send Request To Update Ratibe Meweve Whith Semthing Bss
export const edarttewevebsstoupdateratibemeweve = createAsyncThunk(
  "edartmewvesbss/update-ratibe",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Update-Ratibe/${QuatyData.data.id}`,
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
); //=== End Send Request To Update Ratibe Meweve Whith Semthing Bss ===//

// Start Send Request To Get Ratibe Meweve
export const edarttewevebsstogetratibeformeweve = createAsyncThunk(
  "edartmewvesbss/get-ratibe",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Get-Ratibe/${QuatyData.id}`,
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
); //=== End Send Request To Get Ratibe Meweve ===//

// Start Send Request To Show Alls Data Meweve With Bss
export const edartmewevestoShowAllsDataMyMeweve = createAsyncThunk(
  "edartmewvesbss/Show-AllData-meweve",
  async (QuatyData, { rejectWithValue }) => {
  const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/EdartMeweve-Show/${QuatyData}`,
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
          titel: "الاسم الموضف",
          parg: response.data.data.nameMewve,
        },
        {
          id: 2,
          titel: "الرقم الموضف",
          parg: response.data.data.numberMewve,
        },
        {
          id: 3,
          titel: "حال توضيفية",
          parg:
            response.data.data.typerelation == 0
              ? "فلانتظار"
              : "" || response.data.data.typerelation == 1
              ? "قيد توضيف"
              : "" || response.data.data.typerelation == 2
              ? "الغاء توضيف"
              : "",
        },
        {
          id: 4,
          titel: "صلاحية المبيعات",
          parg:
            response.data.data.edartPaymentProdects == 1
              ? "تم سماح "
              : "" || response.data.data.edartPaymentProdects == 2
              ? "تم رفض"
              : "",
        },
        {
          id: 5,
          titel: "صلاحية طبيات",
          parg:
            response.data.data.edartOreders == 1
              ? "تم سماح "
              : "" || response.data.data.edartOreders == 2
              ? "تم رفض"
              : "",
        },
        {
          id: 6,
          titel: "صلاحية الادارة المالية",
          parg:
            response.data.data.edartemaney == 1
              ? "تم سماح "
              : "" || response.data.data.edartemaney == 2
              ? "تم رفض"
              : "",
        },
        {
          id: 7,
          titel: "صلاحية الدفع الاكتروني",
          parg:
            response.data.data.PaymentEcteronect == 1
              ? "تم سماح "
              : "" || response.data.data.PaymentEcteronect == 2
              ? "تم رفض"
              : "",
        },
        {
          id: 8,
          titel: "حالت الدفع الراب الشهري",
          parg:
            response.data.data.typRatibe == 0
              ? "فلانتظار نهايت الشهر"
              : "" || response.data.data.typRatibe == 3
              ? "فلانتظار رد الموضف"
              : "" || response.data.data.typRatibe == 2
              ? "رفض الموضف تاكيد استلام لراتب"
              : "" || response.data.data.typRatibe == 2
              ? "تم تاكيد استلام لراتب"
              : "",
        },
      ];
      const datTou = [
        {
          id: 1,
          titel: " عدد الاشهر العمل",
          parg: response.data.data.totalMenths,
        },
        {
          id: 2,
          titel: "الراتب الشهري",
          parg: `${response.data.data.Ratibe} ${response.data.data.curent}`,
        },
        {
          id: 3,
          titel: "مرات ادارة المبيعات",
          parg: response.data.data.totaledartPayProds,
        },
        {
          id: 4,
          titel: "مرات ادارة طلبيات",
          parg: response.data.data.totalorders,
        },
        {
          id: 5,
          titel: "مرات ادارة المالية",
          parg: response.data.data.totaledartmaney,
        },
        {
          id: 6,
          titel: "مرات ادارة الدفع الاكتروني",
          parg: response.data.data.totaledartPayEct,
        },
      ];
      const dataShowPayProd = {
        datone: DatNone,
        datou: datTou,
        datthere: response.data.eseleRewateb,
        nameMewve: response.data.data.nameMewve,
        img: response.data.data.img,
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
); //=== End Send Request To Show Alls Data Meweve With Bss ===//

const Employees_Management_Bss_Slice = createSlice({
  name: "edartmewvesbss",
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
    // Later
  },

  extraReducers(builder) {
    builder
      .addCase(edartmewevesBssIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartmewevesBssIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartmewevesBssIndeexShow.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "Show";
          state.resultrquestaction = 99;
      })
      .addCase(
        edarttewevesbsstosereachusertoaddteweve.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "SereachToUserToSeckSemthingAction";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevesbsstosereachusertoaddteweve.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.dataShowPayProd = action.payload.dataShowPayProd;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "SereachToUserToSeckSemthingAction";
          } else {
            state.lodingtorspact = false;
            state.typRequestNow = "SereachToUserToSeckSemthingAction";
          }
        }
      )
      .addCase(
        edarttewevesbsstosereachusertoaddteweve.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "SereachToUserToSeckSemthingAction";
          state.resultrquestaction = 99;
        }
      )
      .addCase(edarttewevesbsstoadduserinteweves.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartmewevesbsstoaddusertrwve";
        state.resultrquestaction = "";
      })
      .addCase(edarttewevesbsstoadduserinteweves.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 3 ||
          action.payload.resultaction === 6 ||
          action.payload.resultaction === 16 ||
          action.payload.resultaction === 12
        ) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.last_page = action.payload.last_Page;
          state.typRequestNow = "edartmewevesbsstoaddusertrwve";
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevesbsstoaddusertrwve";
        }
      })
      .addCase(edarttewevesbsstoadduserinteweves.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "edartmewevesbsstoaddusertrwve";
        state.resultrquestaction = 99;
      })
      .addCase(
        edarttewevesbsstoSendMessageAddUserTeweve.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "edartmewevesbsstosendmessageforaddteweve";
        }
      )
      .addCase(
        edarttewevesbsstoSendMessageAddUserTeweve.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 2 ||
            action.payload.resultaction === 7 ||
            action.payload.resultaction === 8
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevesbsstosendmessageforaddteweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevesbsstosendmessageforaddteweve";
          }
        }
      )
      .addCase(
        edarttewevesbsstoSendMessageAddUserTeweve.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevesbsstosendmessageforaddteweve";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edartmewwvestostoptewevesemthinguserintrave.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edarttewevstostopadduserintrave";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartmewwvestostoptewevesemthinguserintrave.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 16 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edarttewevstostopadduserintrave";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edarttewevstostopadduserintrave";
          }
        }
      )
      .addCase(
        edartmewwvestostoptewevesemthinguserintrave.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edarttewevstostopadduserintrave";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstoactiveslahiyetedartpayprodect.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edarttewevestoactiveedartpayprodectformeweve";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstoactiveslahiyetedartpayprodect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow =
              "edarttewevestoactiveedartpayprodectformeweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edarttewevestoactiveedartpayprodectformeweve";
          }
        }
      )
      .addCase(
        edarttewevebsstoactiveslahiyetedartpayprodect.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edarttewevestoactiveedartpayprodectformeweve";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstodscactiveslahiyetedartpayprodect.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow =
            "edarttewevestoDscactiveedartpayprodectformeweve";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstodscactiveslahiyetedartpayprodect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow =
              "edarttewevestoDscactiveedartpayprodectformeweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edarttewevestoDscactiveedartpayprodectformeweve";
          }
        }
      )
      .addCase(
        edarttewevebsstodscactiveslahiyetedartpayprodect.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edarttewevestoDscactiveedartpayprodectformeweve";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstoactiveslahiyetedartorders.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartmewevestoactiveedartordersformeweve";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstoactiveslahiyetedartorders.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmewevestoactiveedartordersformeweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevestoactiveedartordersformeweve";
          }
        }
      )
      .addCase(
        edarttewevebsstoactiveslahiyetedartorders.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevestoactiveedartordersformeweve";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstoadscctiveslahiyetedartorders.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.resultrquestaction = "";
          state.typRequestNow = "edartmewevestoadscctiveedartordersformeweve";
        }
      )
      .addCase(
        edarttewevebsstoadscctiveslahiyetedartorders.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmewevestoadscctiveedartordersformeweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevestoadscctiveedartordersformeweve";
          }
        }
      )
      .addCase(
        edarttewevebsstoadscctiveslahiyetedartorders.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevestoadscctiveedartordersformeweve";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstoactiveselahiyetpaymentelectronect.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartmewevestoactiveselahiyeltpaymentelectrec";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstoactiveselahiyetpaymentelectronect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow =
              "edartmewevestoactiveselahiyeltpaymentelectrec";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartmewevestoactiveselahiyeltpaymentelectrec";
          }
        }
      )
      .addCase(
        edarttewevebsstoactiveselahiyetpaymentelectronect.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevestoactiveselahiyeltpaymentelectrec";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstoadscctiveselahiyetpaymentelectronect.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow =
            "edartmewevestodescactiveselahiyetpaypentelectronec";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstoadscctiveselahiyetpaymentelectronect.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow =
              "edartmewevestodescactiveselahiyetpaypentelectronec";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartmewevestodescactiveselahiyetpaypentelectronec";
          }
        }
      )
      .addCase(
        edarttewevebsstoadscctiveselahiyetpaymentelectronect.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevestodescactiveselahiyetpaypentelectronec";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstoactiveselahiyetedartmaney.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartmewevestoativeedartmaney";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstoactiveselahiyetedartmaney.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmewevestoativeedartmaney";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevestoativeedartmaney";
          }
        }
      )
      .addCase(
        edarttewevebsstoactiveselahiyetedartmaney.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevestoativeedartmaney";
          state.resultrquestaction = 99;
        }
      )
      .addCase(
        edarttewevebsstodscactiveselahiyetedartmaney.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartmewevestodscativeedartmaney";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edarttewevebsstodscactiveselahiyetedartmaney.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6 ||
            action.payload.resultaction === 12
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmewevestodscativeedartmaney";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevestodscativeedartmaney";
          }
        }
      )
      .addCase(
        edarttewevebsstodscactiveselahiyetedartmaney.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "edartmewevestodscativeedartmaney";
          state.resultrquestaction = 99;
        }
      )
      .addCase(edarttewevebsstoupdateratibemeweve.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartmewevestoupdateratibemeweve";
        state.resultrquestaction = "";
      })
      .addCase(
        edarttewevebsstoupdateratibemeweve.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmewevestoupdateratibemeweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevestoupdateratibemeweve";
          }
        }
      )
      .addCase(edarttewevebsstoupdateratibemeweve.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "edartmewevestoupdateratibemeweve";
        state.resultrquestaction = 99;
      })
      .addCase(edarttewevebsstogetratibeformeweve.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartmewevestogetratibeformeweve";
        state.resultrquestaction = "";
      })
      .addCase(
        edarttewevebsstogetratibeformeweve.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 3 ||
            action.payload.resultaction === 9 ||
            action.payload.resultaction === 6
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartmewevestogetratibeformeweve";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartmewevestogetratibeformeweve";
          }
        }
      )
      .addCase(edarttewevebsstogetratibeformeweve.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "edartmewevestogetratibeformeweve";
        state.resultrquestaction = 99;
      })
      .addCase(edartmewevestoShowAllsDataMyMeweve.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "SowAllsDataMyMeveFormEdartMeweves";
        state.resultrquestaction = "";
      })
      .addCase(
        edartmewevestoShowAllsDataMyMeweve.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.dataShowPayProd = action.payload.dataShowPayProd;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "SowAllsDataMyMeveFormEdartMeweves";
          } else {
            state.lodingtorspact = false;
            state.typRequestNow = "SowAllsDataMyMeveFormEdartMeweves";
          }
        }
      )
      .addCase(edartmewevestoShowAllsDataMyMeweve.rejected, (state, action) => {
        state.lodingtorspact = false;
        state.typRequestNow = "SowAllsDataMyMeveFormEdartMeweves";
        state.resultrquestaction = 99;
      });
  },
});

export default Employees_Management_Bss_Slice.reducer;
