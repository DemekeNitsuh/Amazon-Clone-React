
import React from "react";
import "./Home.css";
import Product from "./Product";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
function Home() {
  return (
    <div className="home">
      <div className="home__container">

      <Carousel
        className="home__image"
        showIndicators={false}
        showThumbs={false}
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows = {false}>
          <div>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Z0Z8dGwWL._SX3000_.jpg"
          alt=""
        /></div>
        <div>
         <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71KChS6ZVdL._SX3000_.jpg"
          alt=""
        /></div>
        <div>
         <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61ow+u84QEL._SX1500_.jpg"
          alt=""
        /></div>
        </Carousel>
       
          
  
        <div className="home__row">
          <Product
            id="12321341"
            title="2019 Apple iMac with Retina 4K/3.6GHz Intel Core i3 (21.5 inches, 256GB SSD)(Renewed)"
            price={1079.96}
            rating={5}
            image=    "https://m.media-amazon.com/images/I/91Doy9NaHJL._AC_SY200_.jpg"
          />
          <Product
            id="49538094"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
            <Product
            id="49538088"
            title="Hydralyte Electrolyte Hydration Powder Packets - Immunity Boost: 1,000mg Vitamin C, Zinc, with Antioxidants | Rapid Rehydration| Lightly Sparkling | Instant Dissolve | All Natural Citrus Burst, 20 ct "
            price={19.99}
            rating={6}
            image="	https://m.media-amazon.com/images/I/61iWuRU8xDL._AC_SY195_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Apple iPhone 11 Pro, US Version, 64GB, Silver - Unlocked (Renewed)"
            price={239.0}
            rating={4}
        
            image="https://m.media-amazon.com/images/I/81Jf4uu-xzL._AC_SY741_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
              <Product
            id="90829332"
            title="Apple iMac MF883LL/A 21.5-Inch 500GB Desktop (Renewed) "
            price={1089.88}
            rating={7}
            image="	https://m.media-amazon.com/images/I/51z6lrtOUSL._AC_SY200_.jpg"
          />
        
        </div>
      </div>
    </div>
  );
}

export default Home
























