import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GeneralUrlGetDatabase } from "../../FrontEnd/Commponent/GeneralUrlGetDatabase";
import Cookies from "js-cookie";

// Start Send Request To Show Alls Data In Edart Category
export const edartcategoryIndeexShow = createAsyncThunk(
  "edartcategorybss/show",
  async (page, { rejectWithValue }) => {
      const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/category-all?page=${page}`,
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
); // End Send Request To To Show Alls Data In Edart Category

// Start Send Request To Sereach Name Category In Edart Category
export const edartcategorySearchCategoryname = createAsyncThunk(
  "edartcategorybss/sereach",
  async (QuaryData, { rejectWithValue }) => {
      const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `http://localhost:8000/api/bss/category-sereach/${QuaryData.name}?page=${QuaryData.page}`,
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
); // End Send Request To Sereach Name Category In Edart Category

// Start Send Request To Updat Semthing Category In Edart Category
export const edartcategoryUpdate = createAsyncThunk(
  "edartcategorybss/Update",
  async (QuatyData, { rejectWithValue }) => {
      const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/category-update/${QuatyData.id}`,
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
); //=== End Send Request To Updat Semthing Category In Edart Category ===//

// Start Send Request To Create Now Category In Edart Category
export const edartcategoryBssCreate = createAsyncThunk(
  "edartcategorybss/Create",
  async (QuatyData, { rejectWithValue }) => {
      const tokenFoul = Cookies.get("token");
    try {
      const response = await axios.post(
        `${GeneralUrlGetDatabase}/bss/category`,
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
); //=== End Send Request To Create Now Category In Edart Category ===//

const Categories_Management_Bss_Slice = createSlice({
  name: "edartcategorybss",
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
      // Later
  },

  extraReducers(builder) {
    builder
      .addCase(edartcategoryIndeexShow.pending, (state, action) => {
        state.isLinding = true;
        state.typRequestNow = "Show";
      })
      .addCase(edartcategoryIndeexShow.fulfilled, (state, action) => {
        state.data = action.payload.AllDataNow;
        state.totaldat = action.payload.datAls;
        state.pagenow = action.payload.startPageNow;
        state.pagetogo = action.payload.startPageTo;
        state.isLinding = state.data ? false : "active";
        state.last_page = action.payload.last_Page;
        state.typRequestNow = "Show";
      })
      .addCase(edartcategoryIndeexShow.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "Show";
        state.resultrquestaction = 99;
      })
      .addCase(edartcategorySearchCategoryname.pending, (state, action) => {
        state.isLinding = true;
        state.resultrquestaction = "";
        state.typRequestNow = "Sereach";
      })
      .addCase(edartcategorySearchCategoryname.fulfilled, (state, action) => {
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
      .addCase(edartcategorySearchCategoryname.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "Sereach";
        state.resultrquestaction = 99;
      })
      .addCase(edartcategoryBssCreate.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartcategorybssToCreateNoewCategory";
        state.resultrquestaction = "";
      })
      .addCase(edartcategoryBssCreate.fulfilled, (state, action) => {
        if (
          action.payload.resultaction === 1 ||
          action.payload.resultaction === 4 ||
          action.payload.resultaction === 9
        ) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.typRequestNow = "edartcategorybssToCreateNoewCategory";
          state.last_page = action.payload.last_Page;
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "edartcategorybssToCreateNoewCategory";
        }
      })
      .addCase(edartcategoryBssCreate.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "edartcategorybssToCreateNoewCategory";
        state.resultrquestaction = 99;
      })
      .addCase(edartcategoryUpdate.pending, (state, action) => {
        state.lodingtorspact = true;
        state.typRequestNow = "edartcategorybssToUpdateCategory";
        state.resultrquestaction = "";
      })
      .addCase(edartcategoryUpdate.fulfilled, (state, action) => {
        if (action.payload.resultaction === 1) {
          state.resultrquestaction = action.payload.resultaction;
          state.data = action.payload.AllDataNow;
          state.totaldat = action.payload.datAls;
          state.pagenow = action.payload.startPageNow;
          state.pagetogo = action.payload.startPageTo;
          state.lodingtorspact = false;
          state.typRequestNow = "edartcategorybssToUpdateCategory";
          state.last_page = action.payload.last_Page;
        } else {
          state.resultrquestaction = action.payload.resultaction;
          state.lodingtorspact = false;
          state.typRequestNow = "edartcategorybssToUpdateCategory";
        }
      })
      .addCase(edartcategoryUpdate.rejected, (state, action) => {
        state.isLinding = false;
        state.typRequestNow = "edartcategorybssToUpdateCategory";
        state.resultrquestaction = 99;
      });
  },
});

export default Categories_Management_Bss_Slice.reducer;
