export const typeDefs = gql`
  type User {
    id: ID!
    name: String
    username: String!
    email: String!
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo
  }

  type Geo {
    lat: String!
    lng: String!
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type Query {
    usersCount: Int!
    allUsers: [User]!
  }
`