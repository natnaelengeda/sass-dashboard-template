import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

// States
import userReducer from "./state/user";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
};

const userPersistReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: userPersistReducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;