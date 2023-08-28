import React from 'react';
import "./Featuredproduct.css";
import Card from '../Card/Card';
import productcover from './assets/image/product-cover-5.png'
import productcover2 from './assets/image/product-cover-6.png'
import productcover3 from './assets/image/product-cover-7.png'
import productcover4 from './assets/image/product-cover-8.png'
import productcover5 from './assets/image/product-cover-9.png'
import productcover6 from './assets/image/product-cover-10.png'
import productcover7 from './assets/image/product-cover-11.png'
import productcover8 from './assets/image/product-cover-12.png'

function Featuredproduct() {
  const data = [
    {
      id: 1,
      productname: "Classic White Shirt",
      productDescription: "white shirt for any occasion.",
      ProductPriceAfterdiscount: "49.99",
      ProductPriceBefourdiscount: "59.99",
      productImage: productcover
    },
    {
      id: 2,
      productname: "Sporty Sneakers",
      productDescription: "Comfortable sneakers for your active lifestyle.",
      ProductPriceAfterdiscount: "69.99",
      ProductPriceBefourdiscount: "89.99",
      productImage: productcover2
    },
    {
      id: 3,
      productname: "Elegant Dress",
      productDescription: "A stunning dress for special occasions.",
      ProductPriceAfterdiscount: "129.99",
      ProductPriceBefourdiscount: "149.99",
      productImage: productcover3
    },
    {
      id: 4,
      productname: "Vintage Watch",
      productDescription: "A timeless watch with a vintage charm.",
      ProductPriceAfterdiscount: "199.99",
      ProductPriceBefourdiscount: "229.99",
      productImage: productcover4
    },
    {
      id: 5,
      productname: "Leather Handbag",
      productDescription: "A stylish leather handbag for everyday use.",
      ProductPriceAfterdiscount: "89.99",
      ProductPriceBefourdiscount: "109.99",
      productImage: productcover5
    },
    {
      id: 6,
      productname: "Casual Jeans",
      productDescription: "Comfortable jeans for a casual look.",
      ProductPriceAfterdiscount: "39.99",
      ProductPriceBefourdiscount: "49.99",
      productImage: productcover6
    },
    {
      id: 7,
      productname: "Cozy Blanket",
      productDescription: "Stay warm with this soft and cozy blanket.",
      ProductPriceAfterdiscount: "24.99",
      ProductPriceBefourdiscount: "29.99",
      productImage: productcover7
    },
    {
      id: 8,
      productname: "Designer Sunglasses",
      productDescription: "Protect your eyes with these stylish sunglasses.",
      ProductPriceAfterdiscount: "79.99",
      ProductPriceBefourdiscount: "99.99",
      productImage: productcover8
    },
    // ... (add more products here)
  ];

  return (
    <div className='mainSection'>
      <div className='textContainerSecondSection'>
        <h2>Featured Products</h2>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="cartContiner">
        {data.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Featuredproduct;
