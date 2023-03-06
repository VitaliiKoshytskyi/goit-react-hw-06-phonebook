import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./filter/filter-slice";
import contactsSlice from "./contacts/contacts-slice";



const store = configureStore({
    reducer: {
        constacts: contactsSlice,
        filter:filterSlice
    }
})

export default store;