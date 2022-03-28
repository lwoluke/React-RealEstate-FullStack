import styles from "./Section4.module.scss";
import outside3 from "assets/outside3.jpg";

const Section4 = () => {
  return (
    <section className={styles.section_4}>
      {/* SECTION TITLE */}
      <div className={styles.section_4_title}>
        <h1> 
          Founded in 1915, our company delivers proven results
           for buyers, sellers, and developers.
          </h1>
      </div>

      {/* CONTENT */}
      <div className={styles.section_4_content}>
        {/* IMAGE CONTAINER */}
        <div className={styles.image_container}>
          <img src={outside3} alt="building" />
        </div>
        {/* INFO */}
        <div className={styles.info}>
          <p>
            Find your dream house today! Only available at UPST8 EMPIRE.
          </p>

          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>2,921</h2>
                <h3>Completed Homes</h3>
              </div>
              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>4,083</h2>
                <h3>Homes Rented</h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>1,527</h2>
                <h3>Homes Sold</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>3,451</h2>
                <h3>Satisfied Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
