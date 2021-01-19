import { matchSorter } from "match-sorter";

export const getProducts = () => (dispatch) =>
  fetch(`products.json`)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: response.products,
      });
    });

export const compare = (product) => ({
  type: "COMPARE_PRODUCT",
  product,
});

export const filterProducts = (searchTerm, products) => (dispatch) => {
  const filteredProducts = matchSorter(products, searchTerm, {
    keys: ["name", "price"],
  });
  dispatch({
    type: "FILTER_PRODUCTS",
    payload: filteredProducts,
  });
};
