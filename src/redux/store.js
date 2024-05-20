import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/slice";
import filtersReducer from "./filters/slice";
import libraryReducer from "./library/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const moviesPersistConfig = {
  key: "movies",
  storage,
  whitelist: ["items"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const persistedMoviesReducer = persistReducer(
  moviesPersistConfig,
  moviesReducer
);

const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    movies: persistedMoviesReducer,
    filters: persistedFiltersReducer,
    library: libraryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
