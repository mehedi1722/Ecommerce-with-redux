import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  document.title = "Products";

  const products = useSelector((state) => state.allProducts.products);
  const productList = products.map((product) => {
    const { id, image, title, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/productdetails/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{productList}</>;
};

export default ProductComponent;
