export const MockObject = `
  type MockObject {
    Boolean: Boolean!
    Float: Float!
    ID(value: String): ID!
    Int: Int!
    List(length: Int = 0): [MockObject]!
    Mock(seed: Int): MockObject
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
