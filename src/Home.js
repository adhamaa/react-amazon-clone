import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
        alt=""
      />

      {/* Product Id, title, price. rating. image */}
      <div className="home__row">
        <Product
          id="12314234124"
          title="WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark"
          price={7.49}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71fw5Z2CBHL._AC_SX522_.jpg"
        />
        <Product
          id="12314234125"
          title="BEZGAR 1 Hobbyist Grade 1:12 Scale Remote Control Truck, 4WD High Speed 42 Km/h All Terrains Electric Toy Off Road RC Monster Vehicle Car Crawler with Rechargeable Batteries for Boys Kids and Adults"
          price={82.4}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81CTSgMSznL._AC_SX425_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12314234126"
          title="10 in 1 Dog Multivitamin with Glucosamine - Essential Dog Vitamins with Glucosamine Chondroitin, Probiotics and Omega Fish Oil for Dogs Overall Health - glucosamine for dogs joint supplement heart"
          price={22.09}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/814-1AmVebL._AC_SL1500_.jpg"
        />
        <Product
          id="12314234127"
          title="Under Armour Boys' Baseball Pant"
          price={9.6}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81fWjwfro8L._AC_UY550_.jpg"
        />
        <Product
          id="12314234128"
          title="Rage"
          price={14.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/41KNwwXH+CL._SY346_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12314234143"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          price={109.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY550_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
