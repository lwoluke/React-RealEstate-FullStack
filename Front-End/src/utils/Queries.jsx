import { gql } from "@apollo/client";
const BUY_CARDS = gql`
query GET_BUY_CARDS {
    houses(filters: { categories: { Category: { contains: "Buy" } } }) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighborhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Address
          Price
        }
      }
    }
  }
`;

export { BUY_CARDS };