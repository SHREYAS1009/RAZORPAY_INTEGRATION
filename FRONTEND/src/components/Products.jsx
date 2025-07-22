import React from "react";
import axios from "axios";
import "../styles/Products.css";

function Products({ products }) {

  const checkoutHandler = async (amount) => {
    const { data: keyData } = await axios.get("http://localhost:8000/api/v1/getKey");
    const { key } = keyData;
    console.log(key);

    const { data: orderData } = await axios.post("http://localhost:8000/api/v1/payment/process", { amount });
    const { order } = orderData;
    console.log(order);

    const options = {
      key,
      amount,
      currency: 'INR',
      name: "SAAJNA",
      description: 'RAZORPAY INTEGRATION',
      order_id: order.id,
      callback_url: '/api/v1/paymentVerification',
      prefill: {
        name: 'jINIT',
        email: 'JINITBHAT@GMAIL.COM',
        contact: '9421101104'
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt="Product" className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">
            Price <strong>{product.price}</strong>/-
          </p>
          <button className="pay-button" onClick={() => checkoutHandler(product.price)}>Pay</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
