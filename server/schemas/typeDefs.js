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
        token: ID
        customer: Customer
    }

    type Query {
        
    }

    type Mutation {
        addCustomer(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateCustomer(firstName: String, lastName: String, email: String, password: String): Customer
        updateProduct(_id: ID!, count: Int!): Product
        login(email: String!, password: String!): Auth
    }


`;

module.exports = typeDefs;