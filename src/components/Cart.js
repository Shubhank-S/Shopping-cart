import React from "react";
import { useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "colomn",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <div style={{ marginLeft: 100, fontSize: 30 }}>
        Cart <br />
        Subtotal: ${total} <br />
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ width: 70, objectFit: "cover" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
              </div>
            </div>
          ))
        ) : (
          <span>Cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
