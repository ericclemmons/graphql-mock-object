import { makeExecutableSchema, mergeSchemas } from "graphql-tools"
import { GraphQLServer } from "graphql-yoga"

// 👇 The only dependency you need
import { mockSchema } from "graphql-mock-object"

// 👇 This is your existing schema
const defaultSchema = makeExecutableSchema({
  resolvers: {
    Query: {
      version() {
        return require("../../../package.json").version
      },
    },
  },
  typeDefs: `type Query { version: String! }`,
})

// In production, only use your existing schema.
// 👇 Otherwise, merge it with `mockSchema`
const schema =
  process.env.NODE_ENV === "production"
    ? defaultSchema
    : mergeSchemas({ schemas: [defaultSchema, mockSchema] })

export const app = new GraphQLServer({ schema })
