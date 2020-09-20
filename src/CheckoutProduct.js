import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  // console.log({ id, title, image, price, rating });

  const [isToggled, setToggle] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  // console.log("dispatch:", dispatch);
  // console.log("basket:", basket);

  const removeFromBasket = () => {
    // Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    // do transition
    setToggle(!isToggled);
  };

  // const removeAnimation = useSpring({
  //   opacity: !isToggled ? 1 : 0,
  //   transform: !isToggled ? "translateY(0%)" : "translateY(-100%)",
  //   // display: !isToggled ? "block" : "none",
  // });

  return (
    // <animated.div className="checkoutProduct" style={removeAnimation}>
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
      {/* </animated.div> */}
    </div>
  );
}

export default CheckoutProduct;
