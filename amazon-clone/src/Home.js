import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Psychology of Money By Morgan Housel"
            price={799}
            image="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, 5 Litre Glass Bowl"
            price={2999}
            image="https://m.media-amazon.com/images/I/61QxcZzLZ4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung (49 Inches) 4K Ultra HD Smart TV"
            price={54999}
            image="https://m.media-amazon.com/images/I/91pOh121-5L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Gen) – Powered by Dolby (Black)"
            price={9749}
            image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="MuscleBlaze Whey Protein (Rich Milk Chocolate, 4lb)"
            price={3219}
            image="https://m.media-amazon.com/images/I/61YRzGcsleL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver) (2019 Model)"
            price={52998}
            image="https://m.media-amazon.com/images/I/71xMxbdxrsL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829333"
            title="LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver) (2019 Model)"
            price={52998}
            image="https://m.media-amazon.com/images/I/71xMxbdxrsL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
