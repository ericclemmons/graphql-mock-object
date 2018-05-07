import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import express from "express"
import { makeExecutableSchema } from "graphql-tools"

// 👇 All the dependencies we need
import { mock, MockObject, typeDefs } from "graphql-mock-object"

const schema = makeExecutableSchema({
  typeDefs: [
    ...typeDefs, // 👈 All the mock types we're dependent on
    `type Query { version: String }`,
    `extend type Query { mock: MockObject! }`, // 👈 Add `mock` to Query
  ],
  resolvers: {
    MockObject, // 👈 This resolves all mock properties
    Query: {
      mock, // 👈 This is needed to query `mock`
      version() {
        return require("../../../package.json").version
      },
    },
  },
})

export const app = express()
  .get("/", (req, res) => res.redirect("/graphiql"))
  .use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
  .use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))
