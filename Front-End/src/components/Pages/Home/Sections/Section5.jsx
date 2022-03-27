import styles from "./Section5.module.scss";
import { ArrowButton } from "components/buttons/Buttons";
import outside2 from "assets/outside2.jpg";
import interiorOne from "assets/interiorOne.jpg";
const Section5 = () => {
  return (
    <section className={styles.section_5}>
      <div className={styles.action}>
        <h1>Your Best Partner To find New House</h1>
        <ArrowButton text="Get Started" path="search" />
      </div>
      <div className={styles.image_container_1}>
        <img src={outside2} alt="building" />
      </div>
      <div className={styles.image_container_2}>
        <img src={interiorOne} alt="building" />
      </div>
    </section>
  );
};

export default Section5;
