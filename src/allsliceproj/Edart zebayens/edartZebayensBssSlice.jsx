import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";
const tokenFoul = Cookies.get("user_token");

// Start Send Request To Show Alls Data In Edart Zebayen
export const edartZebayensBssIndeexShow = createAsyncThunk(
  "edartZebayenssbss/show",
  async (page) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/My-Zebouneys?page=${page}`,
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
); // End Send Request To To Show Alls Data In Edart Zebayen

// Start Send Request To Sereach Name Zebayen In Edart Zebayen
export const edartZebayensBssSearchzeboune = createAsyncThunk(
  "edartZebayenssbss/sereach-data-zeboune",
  async (QuaryData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Bss/Zebouneys-Sereach/${QuaryData}`,
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
); // End Send Request To Sereach Name Zebayen In Edart Zebayen

// Start Send Request To Add Now User For Zeboune Online With Semthing Bss
export const edartZebouneBssToAddNewZebouneOnlineWithBss = createAsyncThunk(
  "edartZebayenssbss/add-Zeboune-Online",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Add-Zeboune`,
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
); //=== End Send Request To Add Now User For Zeboune Online With Semthing Bss ===//

// Start Send Request To Add Now Zeboune Offline With Semthing Bss
export const edartZebouneBssToAddNewZebouneWithBss = createAsyncThunk(
  "edartZebayenssbss/add-Zeboune",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Add-Zeboune`,
        QuatyData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
); //=== End Send Request To Add Now Zeboune Offline With Semthing Bss ===//

// Start Send Request To Sereach Name User To Do Semthing Action
export const edartZebouneBssToSereachDataUseForDoSemthingAction =
  createAsyncThunk("edartZebayenssbss/Sereach-User-Dat", async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Zeboun/sereach-user/${QuatyData}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + tokenFoul,
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      console.log(response.data);
      console.log(response.data.data);

      const dataShowPayProdt = response.data.data;
      const resultaction = response.data.typAction;
      return {
        dataShowPayProdt,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }); //=== End Send Request To Sereach Name User To Do Semthing Action ===//

// Start Send Request To Active Selaheyt Deyne For Semthing Zeboune
export const edartzebayensbssactivedeyneforzeboune = createAsyncThunk(
  "edartZebayenssbss/active-deyne",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Zebouneys-Deyn/${QuatyData.id}`,
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
); //=== End Send Request To Active Selaheyt Deyne For Semthing Zeboune ===//

// Start Send Request To Dsc Active Selaheyt Deyne For Semthing Zeboune
export const edartzebayensbssdscactivedeyneforzeboune = createAsyncThunk(
  "edartZebayenssbss/dscactive-dayene",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Zebouneys-StopDeyn/${QuatyData.id}`,
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
); //=== End Send Request To Dsc Active Selaheyt Deyne For Semthing Zeboune ===//

// Start Send Request To Update Deyne For Semthing Zeboune
export const edartzebayensbsstoupdatedeynezeboune = createAsyncThunk(
  "edartZebayenssbss/update-dayene",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Zebouneys-UpdateDeyn/${QuatyData.id}`,
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
); //=== End Send Request To Update Deyne For Semthing Zeboune ===//

// Start Send Request To Show Alls Data Semthing Zeboune Bss
export const edartzebayensBsshowallsdataMyZeboune = createAsyncThunk(
  "edartZebayenssbss/Show-AllData-zeboune",
  async (QuatyData) => {
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Zebouneys/data/${QuatyData}`,
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
          parg: response.data.data.username,
        },
        {
          id: 2,
          titel: "الرقم زبون",
          parg:
            response.data.data.numberPhone != ""
              ? response.data.data.numberPhone
              : "لم يتم تعباته",
        },
        {
          id: 3,
          titel: "حالت الحساب",
          parg:
            response.data.data.TypeAccounte == "create_Use"
              ? "تم انشائه يدويا"
              : "حقيقي",
        },
        {
          id: 4,
          titel: "حالت الدين",
          parg:
            response.data.data.HaletDeyn === 0
              ? "فلانتظار"
              : "" || response.data.data.HaletDeyn == 1
              ? "تم تفعيل"
              : "" || response.data.data.HaletDeyn == 2
              ? "تم تعطيل"
              : "",
        },
      ];
      const datTou = [
        {
          id: 1,
          titel: " مرات الشراء",
          parg: response.data.data.TotelBayMent,
        },
        {
          id: 2,
          titel: "نسبت رضا",
          parg: "Later",
        },
        {
          id: 3,
          titel: "اجمالي الدين",
          parg:
            response.data.data.TotelDeyn +
            response.data.TotelPaymentForZeboune.currentCantry,
        },
      ];
      const dataShowPayProd = {
        datone: DatNone,
        datou: datTou,
        datthere: "",
        username: response.data.data.username,
        image: response.data.data.image,
        created_at: response.data.data.created_at,
        id: response.data.data.id,
      };
      const resultaction = response.data.typAction;
      return {
        dataShowPayProd,
        resultaction,
      };
    } catch (error) {
      console.log(error);
    }
  }
); //=== End Send Request To Show Alls Data Semthing Zeboune Bss ===//

const edartZebayensBssSlice = createSlice({
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
      .addCase(edartZebayensBssIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartZebayensBssIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartZebayensBssIndeexShow.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(edartZebayensBssSearchzeboune.pending, (state, action) => {
        state.isLinding = true;
        state.resultrquestaction = "";
        state.typRequestNow = "Sereach";
      })
      .addCase(edartZebayensBssSearchzeboune.fulfilled, (state, action) => {
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
      .addCase(edartZebayensBssSearchzeboune.rejected, (state, action) => {
        state.isLinding = false;
        localStorage.removeItem("token");
        window.location.href = "home";
      })
      .addCase(
        edartZebouneBssToAddNewZebouneWithBss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartZebouneBssToAddNewZebouneWithBss.fulfilled,
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
            state.typRequestNow = "edartzebayenstoaddzebouneyedewiyanwithbss";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartzebayenstoaddzebouneyedewiyanwithbss";
          }
        }
      )
      .addCase(
        edartZebouneBssToAddNewZebouneWithBss.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartZebouneBssToAddNewZebouneOnlineWithBss.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartZebouneBssToAddNewZebouneOnlineWithBss.fulfilled,
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
            state.typRequestNow = "edartzebayenstoaddzebouneonlinewithbss";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartzebayenstoaddzebouneonlinewithbss";
          }
        }
      )
      .addCase(
        edartZebouneBssToAddNewZebouneOnlineWithBss.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartZebouneBssToSereachDataUseForDoSemthingAction.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartZebouneBssToSereachDataUseForDoSemthingAction.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.resultrquestaction = action.payload.resultaction;
            state.dataShowPayProd = action.payload.dataShowPayProdt;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartzebayenstosereachdatausetodosemthingaction";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.dataShowPayProd = action.payload.dataShowPayProdt;
            state.lodingtorspact = false;
            state.typRequestNow =
              "edartzebayenstosereachdatausetodosemthingaction";
          }
        }
      )
      .addCase(
        edartZebouneBssToSereachDataUseForDoSemthingAction.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartzebayensbssactivedeyneforzeboune.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartzebaynesbsstoactivedeyneforzeboune";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartzebayensbssactivedeyneforzeboune.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 8
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartzebaynesbsstoactivedeyneforzeboune";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartzebaynesbsstoactivedeyneforzeboune";
          }
        }
      )
      .addCase(
        edartzebayensbssactivedeyneforzeboune.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartzebayensbssdscactivedeyneforzeboune.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartzebounestodecativedeyneforzeboune";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartzebayensbssdscactivedeyneforzeboune.fulfilled,
        (state, action) => {
          if (
            action.payload.resultaction === 1 ||
            action.payload.resultaction === 8
          ) {
            state.resultrquestaction = action.payload.resultaction;
            state.data = action.payload.AllDataNow;
            state.totaldat = action.payload.datAls;
            state.pagenow = action.payload.startPageNow;
            state.pagetogo = action.payload.startPageTo;
            state.lodingtorspact = false;
            state.last_page = action.payload.last_Page;
            state.typRequestNow = "edartzebounestodecativedeyneforzeboune";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartzebounestodecativedeyneforzeboune";
          }
        }
      )
      .addCase(
        edartzebayensbssdscactivedeyneforzeboune.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartzebayensbsstoupdatedeynezeboune.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "edartzebaynetoupdatedeynezeboune";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartzebayensbsstoupdatedeynezeboune.fulfilled,
        (state, action) => {
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
            state.typRequestNow = "edartzebaynetoupdatedeynezeboune";
          } else {
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "edartzebaynetoupdatedeynezeboune";
          }
        }
      )
      .addCase(
        edartzebayensbsstoupdatedeynezeboune.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      )
      .addCase(
        edartzebayensBsshowallsdataMyZeboune.pending,
        (state, action) => {
          state.lodingtorspact = true;
          state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          state.resultrquestaction = "";
        }
      )
      .addCase(
        edartzebayensBsshowallsdataMyZeboune.fulfilled,
        (state, action) => {
          if (action.payload.resultaction === 1) {
            state.dataShowPayProd = action.payload.dataShowPayProd;
            state.resultrquestaction = action.payload.resultaction;
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          } else {
            state.lodingtorspact = false;
            state.typRequestNow = "ShowAllsDataOrderZebouneFromEdartOrdersBss";
          }
        }
      )
      .addCase(
        edartzebayensBsshowallsdataMyZeboune.rejected,
        (state, action) => {
          state.lodingtorspact = false;
          state.typRequestNow = "Show";
          localStorage.removeItem("token");
          window.location.href = "home";
        }
      );
  },
});

export const { testreducer } = edartZebayensBssSlice.actions;
export default edartZebayensBssSlice.reducer;
