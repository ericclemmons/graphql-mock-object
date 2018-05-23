import { runQuery } from "graphql-server-core"
import { inspect } from "util"

import { mockSchema as schema } from "../../graphql-mock-object"

describe("typeDefs", () => {
  describe("Query", () => {
    it("__type should match snapshot", async () => {
      const { data, errors } = await runQuery({
        query: `{
          Query: __type(name: "Query") {
            fields {
              name
              description
              args { name description defaultValue }
              type { name }
            }
          }
        }`,
        schema,
      })

      expect(errors).toBe(undefined)
      expect(data).toMatchSnapshot()
    })
  })

  describe("MockObject", () => {
    it("__type should match snapshot", async () => {
      const { data, errors } = await runQuery({
        query: `{
          MockObject: __type(name: "MockObject") {
            inputFields { name description defaultValue }
            fields {
              name
              description
              args { name description defaultValue }
              type { name }
            }
          }
        }`,
        schema,
      })

      expect(errors).toBe(undefined)
      expect(data).toMatchSnapshot()
    })
  })
})
