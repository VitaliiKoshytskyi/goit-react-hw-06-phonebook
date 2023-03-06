import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filter/filter-slice";
import contactsReducer from "./contacts/contacts-slice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter:filterReducer
    }
})

export default store;