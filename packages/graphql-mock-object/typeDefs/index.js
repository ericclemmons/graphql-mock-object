export const MockAddress = `
  type MockAddress {
    city: String!
    cityPrefix: String!
    country: String!
    countryCode: String!
    county: String!
    latitude: Float!
    longitude: Float!
    secondaryAddress: String!
    state: String!
    stateAbbr: String!
    streetAddress: String!
    streetName: String!
    streetPrefix: String!
    streetSuffix: String!
    zipCode: String!
  }
`

export const MockCommerce = `
  type MockCommerce {
    color: String!
    department: String!
    price: Float!
    product: String!
    productAdjective: String!
    productName: String!
    productMaterial: String!
  }
`

export const MockCompany = `
  type MockCompany {
    bs: String!
    bsAdjective: String!
    bsBuzz: String!
    bsNoun: String!
    catchPhraseAdjective: String!
    catchPhraseDescriptor: String!
    catchPhrase: String!
    catchPhraseNoun: String!
    companyName: String!
    companySuffix: String!
    suffixes: [String!]!
  }
`

export const MockObject = `
  type MockObject {
    address: MockAddress!
    commerce: MockCommerce!
    company: MockCompany!
    Boolean: Boolean!
    Float: Float!
    ID(value: String): ID!
    Int: Int!
    List(length: Int = 0): [MockObject]!
    Mock(seed: Int): MockObject!
    Null: String
    String(value: String): String!
  }
`

export const Query = `
  type Query {
    Mock(seed: Int): MockObject
  }
`

export const typeDefs = [
  MockAddress,
  MockCommerce,
  MockCompany,
  MockObject,
  Query,
]
