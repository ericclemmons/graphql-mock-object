// The GraphQL schema in string form
export const typeDefs = [
  `
    type Query {
      version: String
    }

    type MockObject {
      Boolean: Boolean!
      Float: Float!
      ID: ID!
      Int: Int!
      List: [MockObject]!
      Object: MockObject!
      String: String!
    }

    extend type Query {
      mock: MockObject!
    }
  `,
]
