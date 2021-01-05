import React from 'react';
import './Home.css';
import Product from './Product';

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
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Logitech MX Keys Advanced Wireless Illuminated Keyboard - Graphite"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61PIn5vGm2L._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Athletic Greens Ultimate Daily, Whole Food Sourced All in One Greens Supplement Powder, NSF Certified, GlutenFree, Vegan and Keto Friendly, 30 Day Supply, 360 Grams (Athletic Greens Ultimate Daily)"
            price={97.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71NJMKjZRVL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="
            Naglene Water Bottle - Tritan 32oz/1-Quart Narrow Mouth BPA-Free Water Bottle"
            price={24.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51cWUz6bIbL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
            price={26.99}
            image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456789"
            title="Acer EI491CR Pbmiiipx 49 Curved DFHD (3840 x 1080) VA Monitor with AMD Radeon FreeSync2 Technology ,144Hz, VESA Certified DisplayHDR400, DCI-P3,Black"
            price={749.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71IuwPZBKnL._AC_SL1500_.jpg"
          />
          <Product
            id="987654321"
            title="Lysol Disinfecting Wipes, Lemon & Lime Blossom, 80ct"
            price={6.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61HSAafL8AL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
