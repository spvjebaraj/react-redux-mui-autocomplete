import { categoriesList } from "../../data/product-dummy";

export const GET_MAJOR_CATEGORIES = "GET_MAJOR_CATEGORIES";

const fetchCategories = () => {
  return dispatch => {
    try {
      // TODO: need to call async
      dispatch({ type: GET_MAJOR_CATEGORIES, categories: categoriesList });
    } catch (err) {
      throw err;
    }
  };
};

export { fetchCategories };
