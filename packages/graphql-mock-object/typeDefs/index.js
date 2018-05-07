export const MockObject = `
  type MockObject {
    Boolean: Boolean!
    Float: Float!
    ID: ID!
    Int: Int!
    List: [MockObject]!
    Null: String
    Object: MockObject!
    String: String!
  }
`

export const typeDefs = [MockObject]
