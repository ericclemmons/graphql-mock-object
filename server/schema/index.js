import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql"

import { makeExecutableSchema } from "graphql-tools"

// The GraphQL schema in string form
const typeDefs = [
  `
    type Query {
      version: String
    }

    type MockObject {
      Boolean: Boolean
      Float: Float
      ID: ID
      Int: Int
      List: [MockObject]
      String: String
    }

    extend type Query {
      mock: MockObject
    }
  `,
]

// The resolvers
export const resolvers = {
  MockObject: {
    ID() {
      return Date.now()
    },
    List() {
      return Array.from({ length: 3 }).map(() => ({}))
    },
  },
  Query: {
    mock() {
      return {}
    },
    version() {
      return require("../../package.json").version
    },
    // MockBoolean() {
    //   return true
    // },
  },
}

// Put together a schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
