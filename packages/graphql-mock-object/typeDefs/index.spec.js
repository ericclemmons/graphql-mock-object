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
      const date = new Date("Mon, 01 Jan 2018 08:00:00 GMT")

      global.Date = class extends Date {
        constructor() {
          super()

          return date
        }
      }

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

          date {
            between(
              from: "Mon, 01 Jan 2018 08:00:00 GMT"
              to: "Tues, 01 Jan 2019 08:00:00 GMT"
            )
            future
            month
            past
            recent
            weekday
          }

          finance {
            account
            accountName
            amount
            bic
            bitcoinAddress
            currencyCode
            currencyName
            currencySymbol
            iban
            mask
            transactionType
          }

          hacker {
            abbreviation
            adjective
            ingverb
            noun
            phrase
            verb
          }

          image {
            abstract
            animals
            avatar
            business
            cats
            city
            dataUri
            fashion
            food
            image
            imageUrl
            nature
            nightlife
            people
            sports
            technics
            transport
          }

          internet {
            avatar
            color
            domainName
            domainSuffix
            domainWord
            email
            exampleEmail
            ip
            ipv6
            mac
            password
            protocol
            url
            # ! Does not respect seed: https://github.com/Marak/faker.js/issues/521
            # userAgent
            userName
          }

          lorem {
            lines
            paragraph
            paragraphs
            sentence
            sentences
            slug
            text
            word
            words
          }
        }
      }`

      const { data, errors } = await runQuery({ query, schema })

      expect(errors).toBeUndefined()
      expect(data).toMatchSnapshot()
    })
  })
})
