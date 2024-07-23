import { createSelector } from 'reselect';

const getProducts = (state: any) => state.productReducer.products;
const getSearchTerm = (state: any) => state.productReducer.searchTerm;

export const getFilteredProducts = createSelector(
  [getProducts, getSearchTerm],
  (products, searchTerm) => {
    console.log("SearchTerm:", searchTerm);
    if (!searchTerm) {
      return products;
    }
    return products.filter((product: any) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
