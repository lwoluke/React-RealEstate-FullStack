import Navbar from "components/navbar/Navbar";
import styles from "./Rent.module.scss";
import Card from "components/Card/Card";
import { useQuery } from "@apollo/client";
import { RENT_CARDS } from "utils/Queries";

const Rent = () => {

    const { loading, data, error } = useQuery(RENT_CARDS);

  return (
    <main>
        <Navbar BurgerColour={"whitesmoke"} />
        <div className={styles.content}>
            <h1>Houses For Renting</h1>
            
            {/* CARDS */}
            <div className={styles.card}>
                {loading || error ? (
                    <h1 style={{color:"#333"}}>Loading...</h1>
                ) : (
                <div className={styles.cards}>
                    {data.houses.data.map((house, index) => (
                        <Card
                            key={index}
                            secondClass={styles.card}
                            info={{
                                id: house.id,
                                imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                                category:"Rent",
                                city: `${house.attributes.location.data.attributes.City}`,
                                street: `${house.attributes.Street}`,
                                rooms: `${house.attributes.Rooms}`,
                                bedrooms: `${house.attributes.Bedrooms}`,
                                bathrooms: `${house.attributes.Bathrooms}`,
                                shortAddress: `${house.attributes.Short_Address}`,
                                rent: `${house.attributes.Rent}`,
                            }}
                            showInfo={{
                                price: false,
                                rent: true,
                            }}
                        />
                    ))} 
                </div>)}
            </div>
        </div>
    </main>
  );
};

export default Rent;