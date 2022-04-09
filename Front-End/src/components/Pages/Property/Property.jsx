import Navbar from "components/navbar/Navbar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Card from "components/Card/Card";
import styles from "./Property.module.scss";
import { ID_CARD } from "utils/Queries";

const Property = () => {

    let params=useParams();
    const { loading, data, error } = useQuery(ID_CARD, {
        variables: { id: params.propertyId },
    });

    const queryHandler = () => {
        if (loading) return <h1>LOADING...</h1>
        if (error) return <h1>ERROR</h1>
        if (data) {
            if (data.houses.data.length) {
                let house = data.houses.data[0];
                return (
                    <div className={styles.house}>
                        <Card
                            info={{
                                id: house.id,
                                imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                                category:"Buy/Rent",
                                city: `${house.attributes.location.data.attributes.City}`,
                                street: `${house.attributes.Street}`,
                                rooms: `${house.attributes.Rooms}`,
                                bedrooms: `${house.attributes.Bedrooms}`,
                                bathrooms: `${house.attributes.Bathrooms}`,
                                shortAddress: `${house.attributes.Short_Address}`,
                                price: `${house.attributes.Price}`,
                                rent: `${house.attributes.Rent}`,
                            }}
                            showInfo={{
                                price: house.attributes.Price ? 1 : 0,
                                rent: house.attributes.Rent ? 1 : 0,
                            }}
                        />
                        <div style={{marginTop: "2rem", marginBottom:"2rem", color: "#333"}}>
                            <h3>Description:</h3>
                            <p>{house.attributes.Description}</p>
                        </div>
                    </div>
                )
            }
            return <h1>Property Not Found</h1>;
        }
    };

  return (
    <main className={styles.flex}>
        <Navbar BurgerColour={"whitesmoke"} />
        <div className={styles.center}>{queryHandler()}</div>
    </main>
  );
};

export default Property;