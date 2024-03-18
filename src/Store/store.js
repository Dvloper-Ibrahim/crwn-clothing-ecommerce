import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

// Use redux-thunk instead of redux-saga
// import { thunk } from "redux-thunk";

// Use redux-saga instead of redux-thunk
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

// My Custom Middleware
// import {loggerMiddleware} from "./middleware/logger"

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// When using redux-saga instead of redux-thunk
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [loggerMiddleware];

// When using redux-thunk instead of redux-saga
// const middleWares = [
//   process.env.NODE_ENV !== "production" && logger,
//   thunk,
// ].filter(Boolean);

// When using redux-saga instead of redux-thunk
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancers = compose(applyMiddleware(...middleWares));

// With using redux-persist approach
export const store = createStore(persistedReducer, undefined, composeEnhancers);

// When using redux-saga instead of redux-thunk
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Without using redux-persist approach
// export const store = createStore(rootReducer, undefined, composeEnhancers);

// export const store = createStore(rootReducer, undefined);
