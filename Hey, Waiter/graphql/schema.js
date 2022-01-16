const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User{
        _id: ID!
        email: String!
        password: String!
        phoneNo: Int
        name: String!
        address: String
        products: [Product!]!
        createdAt: String!
        updatedAt: String!
    }

    type Product{
        _id: String!
        name: String!
        description: String
        price: Int!
        imageUrl: String!
        rating: Int
        type: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type QrGenerator{
        _id: String!
        hotelId: User!
        qr_type: String!
        createdAt: String!
        updatedAt: String!
    }

    type Order{
        _id: String!
        qrId: QrGenerator!
        productId: Product!
        amount: Int!
        quantity: Int!
        createdAt: String!
        updatedAt: String!
    }

    type RootQuery{
        login(email: String! password: String!): AuthData!
        user: User!
        product(id: ID!): Product!
        qrGenerator(id: ID!): QrGenerator!
        order(id: ID!): Order!
    }

    type RootMutation{
        
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`)