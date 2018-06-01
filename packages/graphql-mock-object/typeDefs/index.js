export const MockObject = `
  type MockAddress {
    city: String!
    cityPrefix: String!
    country: String!
    countryCode: String!
    county: String!
    latitude: Float!
    longitude: Float!
    secondaryAddress: String!
    state: String!
    stateAbbr: String!
    streetAddress: String!
    streetName: String!
    streetPrefix: String!
    streetSuffix: String!
    zipCode: String!
  }

  type MockObject {
    address: MockAddress!
    Boolean: Boolean!
    Float: Float!
    ID(value: String): ID!
    Int: Int!
    List(length: Int = 0): [MockObject]!
    Mock(seed: Int): MockObject!
    Null: String
    String(value: String): String!
  }
`

export const Query = `
  type Query {
    Mock(seed: Int): MockObject
  }
`

export const typeDefs = [MockObject, Query]
