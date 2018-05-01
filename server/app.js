import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import express from "express"

import { schema } from "./schema"

export const app = express()
  .get("/", (req, res) => res.redirect("/graphiql"))
  .use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
  .use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))
