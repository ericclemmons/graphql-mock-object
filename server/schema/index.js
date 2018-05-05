import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql"

import { makeExecutableSchema } from "graphql-tools"

import { typeDefs } from "./typeDefs"
import { resolvers } from "./resolvers"

// Put together a schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
