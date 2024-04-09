import React from "react";
import Navbar from "../features/Navbar";
import ProductDetail from "../features/product/Components/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <div>
        <Navbar>
          <ProductDetail />
        </Navbar>
      </div>
    </div>
  );
}

export default ProductDetailPage;
