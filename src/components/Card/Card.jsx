import React from 'react';
import "./Card.css"
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate(`/products/${props.product.id}`, { state: props.product });
    
  };
  return (
    <div className="cartItem">
      <img src={props.product.productImage} alt="" onClick={HandleNavigate}/>
      <div className="cartItemInfo">
        <h5>{props.product.productname}</h5>
        <h6>{props.product.productDescription}</h6>
        <h4>
          <div className='pricAfterDiscount'>
            ${props.product.ProductPriceAfterdiscount}
          </div>
          <div className='pricebeforDiscount'>
            ${props.product.ProductPriceBefourdiscount}
          </div>
        </h4>
        <div className='color'>

<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<circle cx="8.38461" cy="8" r="8" fill="#23A6F0"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<circle cx="8.46154" cy="8" r="8" fill="#23856D"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<circle cx="8.53846" cy="8" r="8" fill="#E77C40"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<circle cx="8.61538" cy="8" r="8" fill="#252B42"/>
</svg>
</div>
      </div>
    </div>
  );
}

export default Card;
