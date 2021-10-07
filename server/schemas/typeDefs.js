const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Customer {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Category {
        _id: ID
        title: String
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Product {
        _id: ID
        productName: String
        description: String
        price: Float
        count: Int
        image: String
        category: Category
    }

    type Auth {

    }

    type Query {

    }

    type Mutation {

    }


`;

module.exports = typeDefs;