import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/New_Color/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600_C3._CB412973269_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123213414"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="43215789"
            title="Kenwood KMix Stand Mixer for baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk,5 Litre Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="43215789"
            title="Usha Colt Mixer Grinder (MG-3053) 500-Watt 3 Jars with Copper Motor (White/Blue)"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71sW%2BDlkIyL._SL1500_.jpg"
            rating={4}
          />

          <Product
            id="432156798"
            title="Amazon Brand - Solimo 500W Mixer Grinder (ISI certified) with 3 Jars"
            price={239.99}
            image="https://m.media-amazon.com/images/I/71wvRzsAhWL._AC_UL320_.jpg"
            rating={4}
          />

          <Product
            id="4329874561"
            title="AmazonBasics Foldable Storage Cubes (6 Pack), Grey"
            price={239.99}
            image="https://m.media-amazon.com/images/I/912YEBwnRRL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4329885647"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
            price={25.0}
            image="https://m.media-amazon.com/images/I/51WzcEP+TVL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
