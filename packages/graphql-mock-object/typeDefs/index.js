export const MockObject = `
  type MockObject {
    Boolean: Boolean!
    Float: Float!
    ID(value: String): ID!
    Int: Int!
    List(length: Int = 0): [MockObject]!
    Mock: MockObject
    Null: String
    String(value: String): String!
  }
`

export const typeDefs = [MockObject]
