import { Category } from "./category.types";

import {
  fetchCategoriesSuccess,
  fetchCategoriesStart,
  fetchCategoriesFailure,
} from "./category.action";
import { AnyAction } from "redux";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }
  if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return { ...state, categories: action.payload, isLoading: false };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
  //     return { ...state, error: action.payload, isLoading: false };
  //   default:
  //     return state;
  // }
};
