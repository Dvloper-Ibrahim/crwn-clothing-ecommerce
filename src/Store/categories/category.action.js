import { CATEGORIES_ACTION_TYPES } from "./category.types";

import createAction from "../../Utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../Utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);

// Our thunk function
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
