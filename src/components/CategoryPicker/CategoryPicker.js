import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import * as categoriesActions from "../../store/actions/categories";

const CategoryPicker = () => {
  const [majorCategory, setMajorCategory] = useState(null);
  const [category, setCategory] = useState(null);

  const dispatch = useDispatch();
  const majorCategoriesList = useSelector(
    state => state.categories.majorCategoriesList
  );
  const subcategories = majorCategory ? majorCategory.categories : [];

  const loadCategories = useCallback(() => {
    try {
      dispatch(categoriesActions.fetchCategories());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadCategories();
  }, [dispatch, loadCategories]);

  const handleMajorCategoryChange = (_, value) => {
    setMajorCategory(value);
    if (category?.name !== value?.name) {
      setCategory(null);
    }
  };

  const handleCategoryChange = (_, value) => {
    setCategory(value);
  };

  return (
    <>
      <Autocomplete
        id="majorCategory"
        style={{ marginBottom: 20 }}
        options={majorCategoriesList ? majorCategoriesList : []}
        getOptionLabel={category => category.name}
        getOptionSelected={(option, value) => option.name === value.name}
        onChange={handleMajorCategoryChange}
        renderInput={params => (
          <TextField {...params} label="Major Category" variant="outlined" />
        )}
      />
      <Autocomplete
        id="subcategory"
        options={subcategories}
        getOptionLabel={subCategory => subCategory.name}
        getOptionSelected={(option, value) => option.name === value.name}
        value={category}
        onChange={handleCategoryChange}
        renderInput={params => (
          <TextField {...params} label="Category" variant="outlined" />
        )}
      />
    </>
  );
};

export default CategoryPicker;
