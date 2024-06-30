import React from "react";
import AddCart from "./AddCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCtard = ({ item, id }) => {
  return (
    <ProductCardContainer key={id}>
      <Link to={`/product/${id}`}>
        <div>
          <img
            style={{ width: "100%", minHeight: "300px" }}
            src={item.image}
            alt={item.name}
          />
        </div>
      </Link>
      <div style={{ marginTop: "-50px", textAlign: "center" }}>
        <AddCart id={id} data={item} />
      </div>
      <div className="flexStyling">
        <div className="nameStyling">
          <Link to={`/product/${id}`}>
            <div>{item.producttitle}</div>
          </Link>
        </div>
        <div className="priceS">{item.price}</div>
      </div>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  max-width: 354px;

  .nameStyling {
    display: flex;
    overflow: hidden;
    height: 13px;
    width: 70%;
  }
  .nameStyling a {
    text-decoration: none;
    color: black;
  }
  .nameStyling a:hover {
    text-decoration: underline;
  }
  .flexStyling {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 11px;
    text-align: left;
  }
  .priceS {
    width: 60px;
    text-align: right;
  }
`;

export default ProductCtard;
