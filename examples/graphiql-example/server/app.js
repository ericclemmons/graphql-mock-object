import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import express from "express"
import { makeExecutableSchema, SchemaDirectiveVisitor } from "graphql-tools"

// 👇 All the dependencies we need
import {
  directiveResolvers,
  mock,
  MockObject,
  typeDefs,
} from "graphql-mock-object"

class FakeDirective extends SchemaDirectiveVisitor {
  async visitFieldDefinition(field) {
    console.log({ field })

    return "fake"
  }

  async visitScalar(scalar) {
    console.log({ scalar })

    return "fake"
  }
}

const schema = makeExecutableSchema({
  schemaDirectives: {
    fake: FakeDirective,
  },
  directiveResolvers: {
    fake: FakeDirective,
  },
  resolvers: {
    MockObject, // 👈 This resolves all mock properties
    Query: {
      mock, // 👈 This is needed to query `mock`
      version() {
        return require("../../../package.json").version
      },
    },
  },
  typeDefs: [
    ...typeDefs, // 👈 All the mock types we're dependent on
    `type Query { version: String }`,
    `extend type Query { mock: MockObject! }`, // 👈 Add `mock` to Query
    `directive @fake on FIELD | SCALAR`,
  ],
})

// @TODO use attachDirectiveResolvers({
//  schema,
//  directiveResolvers,
//  });

export const app = express()
  .get("/", (req, res) => res.redirect("/graphiql"))
  .use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
  .use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))
