import { ArrowButton } from "../../../buttons/Buttons";
import styles from "./Section2.module.scss";
import lakesideOne from "assets/lakesideOne.jpg";
const Section2 = () => {
  return (
    <section className={styles.section_2}>
      {/* IMAGE */}
      <div className={styles.section_2_image_container}>
        <img src={lakesideOne} alt="lakesideOne" />
      </div>

      {/* SLOGAN */}
      <div className={styles.section_2_slogan}>
        <h1>
          Buying? Selling? Renting? We Can Help You Move
          Forward!
        </h1>
      </div>

      {/* SELECTION */}
      <div className={styles.selection}>
        {/* BUY */}
        <div className={styles.buy}>
          <h3>Buy a home</h3>
            <p>
              Find the most beautiful homes, all of which feature 
              an immersive photographic experience. You'll see 
              properties that are impossible to find anywhere else.
            </p>
          <ArrowButton text={"Search Houses"} path="buy" />
        </div>

        {/* Rent */}
        <div className={styles.rent}>
          <h3>Rent a home</h3>
          <p>
            Discover a selection of rentals that are perfect for everyone. 
            Access to the best amenities for hanging out with the people that matter most.
          </p>
          <ArrowButton text={"View Options"} path="rent" />
        </div>

        {/* Sell */}
        <div className={styles.sell}>
          <h3>Sell a home</h3>
            <p>
              We offer the new way to sell your home. 
              Skip the hassle of listing, showings and months of stress, and close on your own timeline.
            </p>
          <ArrowButton text={"Use Filters"} path="search" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
