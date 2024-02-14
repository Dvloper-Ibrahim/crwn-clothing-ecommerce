import { CATEGORIES_ACTION_TYPES } from "./category.types";
import createAction from "../../Utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);