import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

// My Custom Middleware
// import {loggerMiddleware} from "./middleware/logger"

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [loggerMiddleware];
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

const composeEnhancers = compose(applyMiddleware(...middleWares));

// With using redux-persist approach
export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);

// Without using redux-persist approach
// export const store = createStore(rootReducer, undefined, composeEnhancers);

// export const store = createStore(rootReducer, undefined);
