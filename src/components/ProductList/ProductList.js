import React from "react";
import { matchSorter } from "match-sorter";
import { Product } from "..";

const ProductList = ({ products, compare, nameSearch }) => {
  const renderProducts = () => {
    return matchSorter(products, nameSearch, { keys: ["name"] });
    // return products.filter((product) => product.name.includes(nameSearch));
  };

  return (
    <div className="row mt-3">
      {renderProducts().map((product) => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  );
};

export default ProductList;
