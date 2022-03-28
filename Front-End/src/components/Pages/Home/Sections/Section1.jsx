import Navbar from "../../../navbar/Navbar";
import styles from "./Section1.module.scss";

import { Link } from "react-router-dom";
import { useState } from "react";
import building1 from "assets/interiorTwo.jpg";

const Section1 = () => {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");

  return (
    <section className={styles.section_1}>
      {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"} />
      </div>

      {/* BACKGROUND IMAGES */}
      <div className={styles.img}></div>
      

      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>Explore Upstate NY's Most Beautiful Homes</h1>
          <p>
            Find your dream house today! Only available at UPST8 EMPIRE.
          </p>

          {/* SearchBox */}
          <div className={styles.search_container}>
            {/* LOCATION */}
            <div className={styles.location_container}>
              <span STYLE="font-weight:bold">Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* Price Range */}
            <div className={styles.price_container}>
              <span STYLE="font-weight:bold">Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value="500k-1M">500k-1M</option>
                <option value=">1M">{`>1M`}</option>
              </select>
            </div>

            {/* Search Button */}
            <button className={styles.btn_search}>
              <Link to="search">Search</Link>
            </button>
          </div>
        </div>

        {/* Building Image */}
        <div className={styles.slogan_image}>
          <img src={building1} alt="building" />
        </div>
        {/* <Hero slides={ SliderData }/> */}
      </div>
    </section>
  );
};

export default Section1;
