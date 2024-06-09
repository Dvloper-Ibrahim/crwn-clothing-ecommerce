import { AnyAction, Middleware } from "redux";

import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!(action as AnyAction).type) {
      return next(action);
    }

    console.log("type: ", (action as AnyAction).type);
    console.log("payload: ", (action as AnyAction).payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
  };
