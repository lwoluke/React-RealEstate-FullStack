import Navbar from "components/navbar/Navbar";
import styles from "./Buy.module.scss";
import Card from "../../Card/Card";
import { useQuery } from "@apollo/client";
import { BUY_CARDS } from "utils/Queries";

const Buy = () => {

    const { loading, data, error } = useQuery(BUY_CARDS);

  return (
    <main>
        <Navbar />
        <div className={styles.content}>
            <h1>Houses For Sale</h1>
            {/* CARDS */}
            <div className={styles.card}>
                {loading || error ? (
                    <h1 style={{color:"#333"}}>Loading...</h1>
                ) : (
                    <div className={styles.cards}>
                    {data.houses.data.map((house, index) => (
                        <Card
                            info={{
                                id: house.id,
                                imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                                category:"Buy",
                                city: `${house.attributes.location.data.attributes.City}`,
                                street: `${house.attributes.Street}`,
                                rooms: `${house.attributes.Rooms}`,
                                bedrooms: `${house.attributes.Bedrooms}`,
                                bathrooms: `${house.attributes.Bathrooms}`,
                                shortAddress: `${house.attributes.Short_Address}`,
                                price: `${house.attributes.Price}`,
                            }}
                        />
                    ))} </div>)}
            </div>
        </div>
    </main>
  );
};

export default Buy;