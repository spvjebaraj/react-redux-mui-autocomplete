import { GET_MAJOR_CATEGORIES } from "../actions/categories";

const initialState = {
  majorCategoriesList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MAJOR_CATEGORIES:
      return {
        majorCategoriesList: action.categories
      };
    default:
      return state;
  }
};
