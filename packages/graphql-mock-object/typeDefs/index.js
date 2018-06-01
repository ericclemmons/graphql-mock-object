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

export const MockDatabase = `
  type MockDatabase {
    collation: String!
    column: String!
    engine: String!
    type: String!
  }
`

export const MockDate = `
  type MockDate {
    between(from: String!, to: String!): String!
    future(refDate: String, years: Int): String!
    month: String!
    past(refDate: String, years: Int): String!
    recent(days: Int): String!
    weekday: String!
  }
`

export const MockFinance = `
  type MockFinance {
    account: Int!
    accountName: String!
    amount: Float!
    bic: String!
    bitcoinAddress: String!
    currencyCode: String!
    currencyName: String!
    currencySymbol: String!
    iban: String!
    mask: String!
    transactionType: String!
  }
`

export const MockHacker = `
  type MockHacker {
    abbreviation: String!
    adjective: String!
    ingverb: String!
    noun: String!
    phrase: String!
    verb: String!
  }
`

export const MockImage = `
  type MockImage {
    abstract(width: Int, height: Int, random: Boolean): String!
    animals(width: Int, height: Int, random: Boolean): String!
    avatar: String!
    business(width: Int, height: Int, random: Boolean): String!
    cats(width: Int, height: Int, random: Boolean): String!
    city(width: Int, height: Int, random: Boolean): String!
    dataUri(width: Int, height: Int): String!
    fashion(width: Int, height: Int, random: Boolean): String!
    food(width: Int, height: Int, random: Boolean): String!
    image(width: Int, height: Int, random: Boolean): String!
    imageUrl(width: Int, height: Int, random: Boolean): String!
    nature(width: Int, height: Int, random: Boolean): String!
    nightlife(width: Int, height: Int, random: Boolean): String!
    people(width: Int, height: Int, random: Boolean): String!
    sports(width: Int, height: Int, random: Boolean): String!
    technics(width: Int, height: Int, random: Boolean): String!
    transport(width: Int, height: Int, random: Boolean): String!
  }
`

export const MockInternet = `
  type MockInternet {
    avatar: String!
    color: String!
    domainName: String!
    domainSuffix: String!
    domainWord: String!
    email: String!
    exampleEmail: String!
    ip: String!
    ipv6: String!
    mac: String!
    password: String!
    protocol: String!
    url: String!
    userAgent: String!
    userName: String!
  }
`

export const MockLorem = `
  type MockLorem {
    lines: String!
    paragraph: String!
    paragraphs: String!
    sentence: String!
    sentences: String!
    slug: String!
    text: String!
    word: String!
    words: String!
  }
`

export const MockName = `
  type MockName {
    findName: String!
    firstName: String!
    jobArea: String!
    jobDescriptor: String!
    jobTitle: String!
    jobType: String!
    lastName: String!
    prefix: String!
    suffix: String!
    title: String!
  }
`

export const MockObject = `
  type MockObject {
    address: MockAddress!
    Boolean: Boolean!
    commerce: MockCommerce!
    company: MockCompany!
    database: MockDatabase!
    date: MockDate!
    finance: MockFinance!
    Float: Float!
    hacker: MockHacker!
    ID(value: String): ID!
    image: MockImage!
    Int: Int!
    internet: MockInternet!
    List(length: Int = 0): [MockObject]!
    lorem: MockLorem!
    Mock(seed: Int): MockObject!
    name: MockName!
    Null: String
    phone: MockPhone!
    random: MockRandom!
    String(value: String): String!
  }
`

export const MockPhone = `
  type MockPhone {
    phoneFormats: String!
    phoneNumber: String!
    phoneNumberFormat: String!
  }
`

export const MockRandom = `
  type MockRandom {
    alphaNumeric: String!
    arrayElement: String!
    boolean: Boolean!
    image: String!
    locale: String!
    number: Int!
    objectElement: String!
    uuid: String!
    word: String!
    words: String!
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
  MockDatabase,
  MockDate,
  MockFinance,
  MockHacker,
  MockImage,
  MockInternet,
  MockLorem,
  MockName,
  MockObject,
  MockPhone,
  MockRandom,
  Query,
]
