import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"

export const mockSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
