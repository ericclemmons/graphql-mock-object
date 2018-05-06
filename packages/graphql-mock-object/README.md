# graphql-mock-object

> Prototype your UI with GraphQL `mock { ... }` objects before defining complex types & resolvers.

GraphQL works best as a _backend for the frontend (BFF)_ that matches the structure of your UI. `graphql-mock-object` makes it simple for your UI to request data however you'd like. Once you're done prototyping, you can replace mocks with _real_ resolvers and return _real_ data.

### Installation

I recommend saving into `devDependencies`, as prototyping is typically done in `development`, not `production`.

```
yarn add --dev graphql-mock-object
# ...or...
npm install --save-dev graphql-mock-object
```

Then add it to your application:

```js
import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import express from "express"
import { makeExecutableSchema } from "graphql-tools"

// 👇 All the dependencies we need
import { mock, MockObject, typeDefs } from "graphql-mock-object"

const schema = makeExecutableSchema({
  typeDefs: [
    ...typeDefs, // 👈 All the mock types we're dependent on
    `type Query { version: String }`, // 👈 Your existing `Query`
    `extend type Query { mock: MockObject! }`, // 👈 Add `mock` to `Query`
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

// The rest of your app...
export const app = express()
  .get("/", (req, res) => res.redirect("/graphiql"))
  .use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
  .use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))
  .listen(3000, function(err) {
    if (err) {
      console.error(err)
      return
    }

    console.log("Listening at http://localhost:3000")
  })
```

### Author

[Eric Clemmons](https://github.com/ericclemmons/)
([@ericclemmons](https://twitter.com/ericclemmons))
