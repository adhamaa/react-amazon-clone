import React from "react";
// import { useTransition, animated } from "react-spring";
// import FlipMove from "react-flip-move";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
// import { useTransition, animated } from "react-spring";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  // const transitions = useTransition(basket, (item) => item.id, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });

  // const AnimatedProduct = animated(CheckoutProduct);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
          alt="ads"
        />
        <h3>Hello, {user ? user.email : "Guest"}!</h3>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* List out all of the Checkout Products */}
            {basket?.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {/* {transitions.map(
              ({ item, key, props }, index) =>
                item && (
                  <AnimatedProduct
                    key={key}
                    style={props}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                )
            )} */}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
