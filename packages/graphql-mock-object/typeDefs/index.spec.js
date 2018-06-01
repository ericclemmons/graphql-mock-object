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

      expect(errors).toBeUndefined()
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

      expect(errors).toBeUndefined()
      expect(data).toMatchSnapshot()
    })

    it("should return consistent, random values", async () => {
      const query = `{
        Mock {
          Boolean
          Float
          ID
          Int
          List(length: 2) {
            ID
          }
          Mock {
            ID
          }
          Null
          String
        }
      }`

      const { data, errors } = await runQuery({ query, schema })

      expect(errors).toBeUndefined()
      expect(data).toMatchSnapshot()

      const duplicate = await runQuery({ query, schema })

      expect(duplicate.data).toEqual(data)
    })

    it("should support faker.js", async () => {
      const query = `{
        Mock {
          address {
            city
            cityPrefix
            country
            countryCode
            county
            latitude
            longitude
            secondaryAddress
            state
            stateAbbr
            streetAddress
            streetName
            streetPrefix
            streetSuffix
            zipCode
          }

          commerce {
            color
            department
            price
            product
            productAdjective
            productMaterial
            productName
          }

          company {
            bs
            bsAdjective
            bsBuzz
            bsNoun
            catchPhraseAdjective
            catchPhraseDescriptor
            catchPhrase
            catchPhraseNoun
            companyName
            companySuffix
            suffixes
          }

          database {
            collation
            column
            engine
            type
          }
        }
      }`

      const { data, errors } = await runQuery({ query, schema })

      expect(errors).toBeUndefined()
      expect(data).toMatchSnapshot()
    })
  })
})
