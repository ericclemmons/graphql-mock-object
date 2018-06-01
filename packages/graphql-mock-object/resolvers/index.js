import faker from "faker"

import { version } from "../package.json"

// Seed is based on current version number. The intent is that any major
// version change will yield different resultsl
const majorVersion = parseInt(version.match(/\d+/g).shift(), 10) || 1

const fakerResolver = (template) => (parent, args) => {
  const { value = template } = args

  return faker.fake(value)
}

// The resolvers
export const MockAddress = {
  city: fakerResolver("{{address.city}}"),
  cityPrefix: fakerResolver("{{address.cityPrefix}}"),
  country: fakerResolver("{{address.country}}"),
  countryCode: fakerResolver("{{address.countryCode}}"),
  county: fakerResolver("{{address.county}}"),
  latitude: fakerResolver("{{address.latitude}}"),
  longitude: fakerResolver("{{address.longitude}}"),
  secondaryAddress: fakerResolver("{{address.secondaryAddress}}"),
  state: fakerResolver("{{address.state}}"),
  stateAbbr: fakerResolver("{{address.stateAbbr}}"),
  streetAddress: fakerResolver("{{address.streetAddress}}"),
  streetName: fakerResolver("{{address.streetName}}"),
  streetPrefix: fakerResolver("{{address.streetPrefix}}"),
  streetSuffix: fakerResolver("{{address.streetSuffix}}"),
  zipCode: fakerResolver("{{address.zipCode}}"),
}

export const MockCommerce = {
  color: fakerResolver("{{commerce.color}}"),
  department: fakerResolver("{{commerce.department}}"),
  price: fakerResolver("{{commerce.price}}"),
  product: fakerResolver("{{commerce.product}}"),
  productAdjective: fakerResolver("{{commerce.productAdjective}}"),
  productName: fakerResolver("{{commerce.productName}}"),
  productMaterial: fakerResolver("{{commerce.productMaterial}}"),
}

export const MockCompany = {
  bs: fakerResolver("{{company.bs}}"),
  bsAdjective: fakerResolver("{{company.bsAdjective}}"),
  bsBuzz: fakerResolver("{{company.bsBuzz}}"),
  bsNoun: fakerResolver("{{company.bsNoun}}"),
  catchPhraseAdjective: fakerResolver("{{company.catchPhraseAdjective}}"),
  catchPhraseDescriptor: fakerResolver("{{company.catchPhraseDescriptor}}"),
  catchPhrase: fakerResolver("{{company.catchPhrase}}"),
  catchPhraseNoun: fakerResolver("{{company.catchPhraseNoun}}"),
  companyName: fakerResolver("{{company.companyName}}"),
  companySuffix: fakerResolver("{{company.companySuffix}}"),
  suffixes(parent, args) {
    return faker.company.suffixes()
  },
}

export const MockDatabase = {
  collation: fakerResolver("{{database.collation}}"),
  column: fakerResolver("{{database.column}}"),
  engine: fakerResolver("{{database.engine}}"),
  type: fakerResolver("{{database.type}}"),
}

export const MockDate = {
  between(parent, args) {
    return faker.date.between(args.from, args.to)
  },
  future(parent, args) {
    return faker.date.future(args.years, args.refDate)
  },
  month: fakerResolver("{{date.month}}"),
  past(parent, args) {
    return faker.date.past(args.years, args.refDate)
  },
  recent(parent, args) {
    return faker.date.recent(args.days)
  },
  weekday: fakerResolver("{{date.weekday}}"),
}

export const MockFinance = {
  account: fakerResolver("{{finance.account}}"),
  accountName: fakerResolver("{{finance.accountName}}"),
  amount: fakerResolver("{{finance.amount}}"),
  bic: fakerResolver("{{finance.bic}}"),
  bitcoinAddress: fakerResolver("{{finance.bitcoinAddress}}"),
  currencyCode: fakerResolver("{{finance.currencyCode}}"),
  currencyName: fakerResolver("{{finance.currencyName}}"),
  currencySymbol: fakerResolver("{{finance.currencySymbol}}"),
  iban: fakerResolver("{{finance.iban}}"),
  mask: fakerResolver("{{finance.mask}}"),
  transactionType: fakerResolver("{{finance.transactionType}}"),
}

export const MockHacker = {
  abbreviation: fakerResolver("{{hacker.abbreviation}}"),
  adjective: fakerResolver("{{hacker.adjective}}"),
  ingverb: fakerResolver("{{hacker.ingverb}}"),
  noun: fakerResolver("{{hacker.noun}}"),
  phrase: fakerResolver("{{hacker.phrase}}"),
  verb: fakerResolver("{{hacker.verb}}"),
}

export const MockImage = {
  abstract(parent, { width, height, randomize }) {
    return faker.image.abstract(width, height, randomize)
  },
  animals(parent, { width, height, randomize }) {
    return faker.image.animals(width, height, randomize)
  },
  avatar() {
    return faker.image.avatar()
  },
  business(parent, { width, height, randomize }) {
    return faker.image.business(width, height, randomize)
  },
  cats(parent, { width, height, randomize }) {
    return faker.image.cats(width, height, randomize)
  },
  city(parent, { width, height, randomize }) {
    return faker.image.city(width, height, randomize)
  },
  dataUri(parent, { width, height }) {
    return faker.image.dataUri(width, height)
  },
  fashion(parent, { width, height, randomize }) {
    return faker.image.fashion(width, height, randomize)
  },
  food(parent, { width, height, randomize }) {
    return faker.image.food(width, height, randomize)
  },
  image(parent, { width, height, randomize }) {
    return faker.image.image(width, height, randomize)
  },
  imageUrl(parent, { width, height, randomize }) {
    return faker.image.imageUrl(width, height, randomize)
  },
  nature(parent, { width, height, randomize }) {
    return faker.image.nature(width, height, randomize)
  },
  nightlife(parent, { width, height, randomize }) {
    return faker.image.nightlife(width, height, randomize)
  },
  people(parent, { width, height, randomize }) {
    return faker.image.people(width, height, randomize)
  },
  sports(parent, { width, height, randomize }) {
    return faker.image.sports(width, height, randomize)
  },
  technics(parent, { width, height, randomize }) {
    return faker.image.technics(width, height, randomize)
  },
  transport(parent, { width, height, randomize }) {
    return faker.image.transport(width, height, randomize)
  },
}

export const MockInternet = {
  avatar: fakerResolver("{{internet.avatar}}"),
  color: fakerResolver("{{internet.color}}"),
  domainName: fakerResolver("{{internet.domainName}}"),
  domainSuffix: fakerResolver("{{internet.domainSuffix}}"),
  domainWord: fakerResolver("{{internet.domainWord}}"),
  email: fakerResolver("{{internet.email}}"),
  exampleEmail: fakerResolver("{{internet.exampleEmail}}"),
  ip: fakerResolver("{{internet.ip}}"),
  ipv6: fakerResolver("{{internet.ipv6}}"),
  mac: fakerResolver("{{internet.mac}}"),
  password: fakerResolver("{{internet.password}}"),
  protocol: fakerResolver("{{internet.protocol}}"),
  url: fakerResolver("{{internet.url}}"),
  userAgent: fakerResolver("{{internet.userAgent}}"),
  userName: fakerResolver("{{internet.userName}}"),
}

export const MockObject = {
  address: () => ({}),
  Boolean: fakerResolver("{{random.boolean}}"),
  commerce: () => ({}),
  company: () => ({}),
  database: () => ({}),
  date: () => ({}),
  finance: () => ({}),
  Float: fakerResolver("0.{{random.number}}"),
  hacker: () => ({}),
  ID: fakerResolver("{{random.number}}"),
  image: () => ({}),
  Int: fakerResolver("{{random.number}}"),
  internet: () => ({}),
  List(parent, args) {
    const { length } = args

    return Array.from({ length }).map(() => ({}))
  },
  Mock(parent, args) {
    const { seed = majorVersion } = args

    faker.seed(seed)

    return {}
  },
  String: fakerResolver("{{lorem.sentence}}"),
}

export const Query = {
  Mock: MockObject.Mock,
}

export const resolvers = {
  MockAddress,
  MockCommerce,
  MockCompany,
  MockDatabase,
  MockDate,
  MockFinance,
  MockHacker,
  MockImage,
  MockInternet,
  MockObject,
  Query,
}
