import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import express from "express"
import { makeExecutableSchema, SchemaDirectiveVisitor } from "graphql-tools"

// 👇 All the dependencies we need
import { Mock, MockObject, typeDefs } from "graphql-mock-object"

const schema = makeExecutableSchema({
  resolvers: {
    MockObject, // 👈 This resolves all mock properties
    Query: {
      Mock, // 👈 This is needed to query `Mock`
      version() {
        return require("../../../package.json").version
      },
    },
  },
  typeDefs: [
    ...typeDefs, // 👈 All the mock types we're dependent on
    `type Query { version: String }`,
    `extend type Query { Mock: MockObject! }`, // 👈 Add `mock` to Query
  ],
})

export const app = express()
  .get("/", (req, res) => res.redirect("/graphiql"))
  .use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
  .use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))
