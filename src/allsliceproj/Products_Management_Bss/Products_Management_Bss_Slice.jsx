import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";

// Start Send Request To Show Alls Data In Edart Prodects Bss
export const edartprodectsIndeexShow = createAsyncThunk(
  "edartprodectsbss/show",
  async (page, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Prodect-all?page=${page}`,
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
); //== End Send Request To To Show Alls Data In Edart Prodects Bss ==//

// Start Send Request To Sereach Name Peodect In Edart Peodects
export const edartprodectSearchprodectname = createAsyncThunk(
  "edartprodectsbss/sereach",
  async (QuaryData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Prodect-sereach/${QuaryData}`,
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
); // End Send Request To Sereach Name Peodect In Edart Peodects

// Start Send Request To Sereach Category Contect Peodects
export const edartprodectSearchprodectForCategory = createAsyncThunk(
  "edartprodectsbss/sereach-prod-cat",
  async (QuaryData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Prodect-sereach-category/${QuaryData.id}?page=${QuaryData.page}`,
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
); // End Send Request To Sereach Category Contect Peodects

// Start Send Request To Create Now Prodects
export const edartProdectBssCreateProdect = createAsyncThunk(
  "edartprodectsbss/create-prodect",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Prodect-Create`,
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
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Create Now Prodects ===//

// Start Send Request To Update Prodect From Edart Prodect
export const edartProdectBssUpdateProdect = createAsyncThunk(
  "edartprodectsbss/Update-prodect",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Prodect-update/${QuatyData.id}`,
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
); //=== End Send Request To Update Prodect From Edart Prodect ===//

// Start Send Request To Active Pay Prodect From Edart Prodect
export const edartProdectActivePayProd = createAsyncThunk(
  "edartprodectsbss/active-pay-prod",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Bss/Prodect-Active-Pay/${QuatyData.id}`,
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
); //=== End Send Request To Active Pay Prodect From Edart Prodect ===//

// Start Send Request To Dsc Active Pay Prodect From Edart Prodect
export const edartProdectDscActivePayProd = createAsyncThunk(
  "edartprodectsbss/dscactive-pay-prod",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Bss/Prodect-DscActive-Pay/${QuatyData.id}`,
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
); //=== End Send Request To Dsc Active Pay Prodect From Edart Prodect ===//

// Start Send Request To Update Storage Prodect For Id From Edart Prodect
export const edartProdectUpdateStorageProd = createAsyncThunk(
  "edartprodectsbss/Update-Storage-prod",
  async (QuatyData) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/Bss/Prodect-Update-Storage/${QuatyData.id}`,
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
); //=== End Send Request To Update Storage Prodect For Id From Edart Prodect ===//

// Start Send Request To Show Alls Data Prodect From Id From Edart Prodect
export const edartProdectShowAllsDataProd = createAsyncThunk(
  "edartprodectsbss/Show-AllData-prod",
  async (QuatyData, { rejectWithValue }) => {
    const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/Prodect-show/${QuatyData}`,
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
          titel: "الاسم المنتج",
          parg: response.data.data.name,
        },
        {
          id: 2,
          titel: "تفاصيل المنتج",
          parg: response.data.data.discreption
            ? response.data.data.discreption
            : "لم يتم تعباته",
        },
        {
          id: 3,
          titel: "حالت المنتج البيعية",
          parg:
            response.data.data.TypePayprd == 1
              ? "تم سماح للبيع"
              : "" || response.data.data.TypePayprd == 2
              ? "تم ايقاف للبيع"
              : "",
        },
      ];

      const datTou = [
        {
          id: 1,
          titel: " كمية المتبقية من المنتج",
          parg:
            response.data.data.totaleinstorage != 0
              ? response.data.data.totaleinstorage
              : "خاوي",
        },
        {
          id: 2,
          titel: "سعر المنتج الاولي",
          parg: response.data.data.price,
        },
        {
          id: 3,
          titel: "سعر المنتج ثاني",
          parg:
            response.data.data.descprice != ""
              ? response.data.data.descprice
              : "لم يتم تعباته",
        },
      ];

      // const dataShowProd = response.data.data;
      const dataShowProd = {
        datone: DatNone,
        datou: datTou,
        datthere: response.data.dataForEftProd,
        name: response.data.data.name,
        img: response.data.data.img,
        created_at: response.data.data.created_at,
        id: response.data.data.id,
        allData: response.data.data,
      };
      const resultaction = response.data.typAction;

      return {
        dataShowProd,
        resultaction,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); //=== End Send Request To Show Alls Data Prodect From Id From Edart Prodect ===//

const Products_Management_Bss_Slice = createSlice({
  name: "edartprodectsbss",
  initialState: {
    dataProd: [],
    isLindingProd: false,
    totaldatProd: 0,
    pagenowProd: 0,
    pagetogoProd: 0,
    last_pageProd: 0,
    typRequestNowProd: "Show",
    resultrquestactionProd: "",
    lodingtorspactProd: false,
    dataShowProd: "",
  },

  reducers: {
    edaaas: (state, action) => {
      console.log("=====================*********==============");
      console.log(state, action);
      console.log("=====================*********==============");
    },
  },

  extraReducers(builder) {
    builder
      .addCase(edartprodectsIndeexShow.pending, (state, action) => {
        state.isLindingProd = true;
        state.typRequestNowProd = "Show";
      })
      .addCase(edartprodectsIndeexShow.fulfilled, (state, action) => {
        state.dataProd = action.payload.AllDataNow;
        state.totaldatProd = action.payload.datAls;
        state.pagenowProd = action.payload.startPageNow;
        state.pagetogoProd = action.payload.startPageTo;
        state.isLindingProd = state.dataProd ? false : "active";
        state.last_pageProd = action.payload.last_Page;
        state.typRequestNowProd = "Show";
      })
      .addCase(edartprodectsIndeexShow.rejected, (state, action) => {
        state.isLindingProd = false;
        state.resultrquestactionProd = 99;
        state.typRequestNowProd = "Show";
      })
      .addCase(edartprodectSearchprodectname.pending, (state, action) => {
        state.isLindingProd = true;
        state.resultrquestactionProd = "";
        state.typRequestNowProd = "Sereach";
      })
      .addCase(edartprodectSearchprodectname.fulfilled, (state, action) => {
        state.dataProd = action.payload.AllDataNow;
        state.totaldatProd = action.payload.datAls;
        state.pagenowProd = action.payload.startPageNow;
        state.pagetogoProd = action.payload.startPageTo;
        state.isLindingProd =
          action.payload.startPageNow == null ? "active" : false;
        state.last_pageProd = action.payload.last_Page;
        state.typRequestNowProd = "Sereach";
      })
      .addCase(edartprodectSearchprodectname.rejected, (state, action) => {
        state.isLindingProd = false;
        state.typRequestNowProd = "Sereach";
        state.resultrquestactionProd = 99;
      })
      .addCase(
        edartprodectSearchprodectForCategory.pending,
        (state, action) => {
          state.isLindingProd = true;
          state.resultrquestactionProd = "";
          state.typRequestNowProd = "Sereachprodcateg";
        }
      )
      .addCase(
        edartprodectSearchprodectForCategory.fulfilled,
        (state, action) => {
          state.dataProd = action.payload.AllDataNow;
          state.totaldatProd = action.payload.datAls;
          state.pagenowProd = action.payload.startPageNow;
          state.pagetogoProd = action.payload.startPageTo;
          state.isLindingProd =
            action.payload.startPageNow == null ? "active" : false;
          state.last_pageProd = action.payload.last_Page;
          state.typRequestNowProd = "Sereachprodcateg";
        }
      )
      .addCase(
        edartprodectSearchprodectForCategory.rejected,
        (state, action) => {
          state.isLindingProd = false;
          state.typRequestNowProd = "Sereachprodcateg";
          state.resultrquestactionProd = 99;
        }
      )
      .addCase(edartProdectActivePayProd.pending, (state, action) => {
        state.lodingtorspactProd = true;
        state.typRequestNowProd = "ActivePayProdect";
        state.resultrquestactionProd = "";
      })
      .addCase(edartProdectActivePayProd.fulfilled, (state, action) => {
        if (action.payload.resultaction === 1) {
          state.resultrquestactionProd = action.payload.resultaction;
          state.dataProd = action.payload.AllDataNow;
          state.totaldatProd = action.payload.datAls;
          state.pagenowProd = action.payload.startPageNow;
          state.pagetogoProd = action.payload.startPageTo;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "ActivePayProdect";
          state.last_pageProd = action.payload.last_Page;
        } else {
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "ActivePayProdect";
        }
      })
      .addCase(edartProdectActivePayProd.rejected, (state, action) => {
        state.lodingtorspactProd = false;
        state.typRequestNowProd = "ActivePayProdect";
        state.resultrquestactionProd = 99;
      })
      .addCase(edartProdectBssCreateProdect.pending, (state, action) => {
        state.lodingtorspactProd = true;
        state.typRequestNowProd = "edartprodectsbsstocreatemoreprodect";
        state.resultrquestactionProd = "";
      })
      .addCase(edartProdectBssCreateProdect.fulfilled, (state, action) => {
        if (action.payload.resultaction === 10) {
          state.resultrquestactionProd = action.payload.resultaction;
          state.dataProd = action.payload.AllDataNow;
          state.totaldatProd = action.payload.datAls;
          state.pagenowProd = action.payload.startPageNow;
          state.pagetogoProd = action.payload.startPageTo;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "edartprodectsbsstocreatemoreprodect";
          state.last_page = action.payload.last_Page;
        } else {
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "edartprodectsbsstocreatemoreprodect";
        }
      })
      .addCase(edartProdectBssCreateProdect.rejected, (state, action) => {
        state.lodingtorspactProd = false;
        state.resultrquestactionProd = "edartprodectsbsstocreatemoreprodect";
        state.resultrquestactionProd = 99;
      })
      .addCase(edartProdectBssUpdateProdect.pending, (state, action) => {
        state.lodingtorspactProd = true;
        state.typRequestNowProd = "edartprodectsbsstoUpdateprodect";
        state.resultrquestactionProd = "";
      })
      .addCase(edartProdectBssUpdateProdect.fulfilled, (state, action) => {
        if (action.payload.resultaction === 1) {
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "edartprodectsbsstoUpdateprodect";
          state.last_page = action.payload.last_Page;
          state.dataShowProd = action.payload.AllDataNow;
        } else {
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "edartprodectsbsstoUpdateprodect";
        }
      })
      .addCase(edartProdectBssUpdateProdect.rejected, (state, action) => {
        state.lodingtorspactProd = false;
        state.resultrquestactionProd = "edartprodectsbsstoUpdateprodect";
        state.resultrquestactionProd = 99;
      })
      .addCase(edartProdectDscActivePayProd.pending, (state, action) => {
        state.lodingtorspactProd = true;
        state.typRequestNowProd = "DscActivePayProdect";
        state.resultrquestactionProd = "";
      })
      .addCase(edartProdectDscActivePayProd.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 2 ||
          action.payload.resultaction === 3 ||
          action.payload.resultaction === 15
        ) {
          state.resultrquestactionProd = action.payload.resultaction;
          state.dataProd = action.payload.AllDataNow;
          state.totaldatProd = action.payload.datAls;
          state.pagenowProd = action.payload.startPageNow;
          state.pagetogoProd = action.payload.startPageTo;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "DscActivePayProdect";
          state.last_page = action.payload.last_Page;
        } else {
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "DscActivePayProdect";
        }
      })
      .addCase(edartProdectDscActivePayProd.rejected, (state, action) => {
        state.lodingtorspactProd = false;
        state.resultrquestactionProd = "DscActivePayProdect";
        state.resultrquestactionProd = 99;
      })
      .addCase(edartProdectUpdateStorageProd.pending, (state, action) => {
        state.lodingtorspactProd = true;
        state.typRequestNowProd = "UpdateStorageProdect";
        state.resultrquestactionProd = "";
      })
      .addCase(edartProdectUpdateStorageProd.fulfilled, (state, action) => {
        if (action.payload.resultaction === 1) {
          state.resultrquestactionProd = action.payload.resultaction;
          state.dataProd = action.payload.AllDataNow;
          state.totaldatProd = action.payload.datAls;
          state.pagenowProd = action.payload.startPageNow;
          state.pagetogoProd = action.payload.startPageTo;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "UpdateStorageProdect";
          state.last_page = action.payload.last_Page;
        } else {
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "UpdateStorageProdect";
        }
      })
      .addCase(edartProdectUpdateStorageProd.rejected, (state, action) => {
        state.lodingtorspactProd = false;
        state.typRequestNowProd = "UpdateStorageProdect";
        state.resultrquestactionProd = 99;
      })
      .addCase(edartProdectShowAllsDataProd.pending, (state, action) => {
        state.lodingtorspactProd = true;
        state.typRequestNowProd = "ShowAllsDataProdectForId";
        state.resultrquestactionProd = "";
      })
      .addCase(edartProdectShowAllsDataProd.fulfilled, (state, action) => {
        if (action.payload.resultaction === 1) {
          state.dataShowProd = action.payload.dataShowProd;
          state.resultrquestactionProd = action.payload.resultaction;
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "ShowAllsDataProdectForId";
        } else {
          state.lodingtorspactProd = false;
          state.typRequestNowProd = "ShowAllsDataProdectForId";
        }
      })
      .addCase(edartProdectShowAllsDataProd.rejected, (state, action) => {
        state.lodingtorspactProd = false;
        state.typRequestNowProd = "ShowAllsDataProdectForId";
        state.resultrquestactionProd = 99;
      });
  },
});

export const { testreducer } = Products_Management_Bss_Slice.actions;
export default Products_Management_Bss_Slice.reducer;
