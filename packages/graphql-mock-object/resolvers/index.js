import faker from "faker"

import { version } from "../package.json"

// Seed is based on current version number. The intent is that any major
// version change will yield different resultsl
const majorVersion = parseInt(version.match(/\d+/g).shift(), 10) || 1

// The resolvers
export const MockAddress = {
  city: () => faker.address.city(),
  cityPrefix: () => faker.address.cityPrefix(),
  country: () => faker.address.country(),
  countryCode: () => faker.address.countryCode(),
  county: () => faker.address.county(),
  latitude: () => faker.address.latitude(),
  longitude: () => faker.address.longitude(),
  secondaryAddress: () => faker.address.secondaryAddress(),
  state: () => faker.address.state(),
  stateAbbr: () => faker.address.stateAbbr(),
  streetAddress: () => faker.address.streetAddress(),
  streetName: () => faker.address.streetName(),
  streetPrefix: () => faker.address.streetPrefix(),
  streetSuffix: () => faker.address.streetSuffix(),
  zipCode: () => faker.address.zipCode(),
}

export const MockCommerce = {
  color: () => faker.commerce.color(),
  department: () => faker.commerce.department(),
  price: () => faker.commerce.price(),
  product: () => faker.commerce.product(),
  productAdjective: () => faker.commerce.productAdjective(),
  productName: () => faker.commerce.productName(),
  productMaterial: () => faker.commerce.productMaterial(),
}

export const MockCompany = {
  bs: () => faker.company.bs(),
  bsAdjective: () => faker.company.bsAdjective(),
  bsBuzz: () => faker.company.bsBuzz(),
  bsNoun: () => faker.company.bsNoun(),
  catchPhraseAdjective: () => faker.company.catchPhraseAdjective(),
  catchPhraseDescriptor: () => faker.company.catchPhraseDescriptor(),
  catchPhrase: () => faker.company.catchPhrase(),
  catchPhraseNoun: () => faker.company.catchPhraseNoun(),
  companyName: () => faker.company.companyName(),
  companySuffix: () => faker.company.companySuffix(),
  suffixes(parent, args) {
    return faker.company.suffixes()
  },
}

export const MockDatabase = {
  collation: () => faker.database.collation(),
  column: () => faker.database.column(),
  engine: () => faker.database.engine(),
  type: () => faker.database.type(),
}

export const MockDate = {
  between(parent, args) {
    return faker.date.between(args.from, args.to)
  },
  future(parent, args) {
    return faker.date.future(args.years, args.refDate)
  },
  month: () => faker.date.month(),
  past(parent, args) {
    return faker.date.past(args.years, args.refDate)
  },
  recent(parent, args) {
    return faker.date.recent(args.days)
  },
  weekday: () => faker.date.weekday(),
}

export const MockFinance = {
  account: () => faker.finance.account(),
  accountName: () => faker.finance.accountName(),
  amount: () => faker.finance.amount(),
  bic: () => faker.finance.bic(),
  bitcoinAddress: () => faker.finance.bitcoinAddress(),
  currencyCode: () => faker.finance.currencyCode(),
  currencyName: () => faker.finance.currencyName(),
  currencySymbol: () => faker.finance.currencySymbol(),
  iban: () => faker.finance.iban(),
  mask: () => faker.finance.mask(),
  transactionType: () => faker.finance.transactionType(),
}

export const MockHacker = {
  abbreviation: () => faker.hacker.abbreviation(),
  adjective: () => faker.hacker.adjective(),
  ingverb: () => faker.hacker.ingverb(),
  noun: () => faker.hacker.noun(),
  phrase: () => faker.hacker.phrase(),
  verb: () => faker.hacker.verb(),
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
  avatar: () => faker.internet.avatar(),
  color: () => faker.internet.color(),
  domainName: () => faker.internet.domainName(),
  domainSuffix: () => faker.internet.domainSuffix(),
  domainWord: () => faker.internet.domainWord(),
  email: () => faker.internet.email(),
  exampleEmail: () => faker.internet.exampleEmail(),
  ip: () => faker.internet.ip(),
  ipv6: () => faker.internet.ipv6(),
  mac: () => faker.internet.mac(),
  password: () => faker.internet.password(),
  protocol: () => faker.internet.protocol(),
  url: () => faker.internet.url(),
  userAgent: () => faker.internet.userAgent(),
  userName: () => faker.internet.userName(),
}

export const MockLorem = {
  lines: () => faker.lorem.lines(),
  paragraph: () => faker.lorem.paragraph(),
  paragraphs: () => faker.lorem.paragraphs(),
  sentence: () => faker.lorem.sentence(),
  sentences: () => faker.lorem.sentences(),
  slug: () => faker.lorem.slug(),
  text: () => faker.lorem.text(),
  word: () => faker.lorem.word(),
  words: () => faker.lorem.words(),
}

export const MockName = {
  findName: () => faker.name.findName(),
  firstName: () => faker.name.firstName(),
  jobArea: () => faker.name.jobArea(),
  jobDescriptor: () => faker.name.jobDescriptor(),
  jobTitle: () => faker.name.jobTitle(),
  jobType: () => faker.name.jobType(),
  lastName: () => faker.name.lastName(),
  prefix: () => faker.name.prefix(),
  suffix: () => faker.name.suffix(),
  title: () => faker.name.title(),
}

export const MockObject = {
  address: () => ({}),
  Boolean: () => faker.random.boolean(),
  commerce: () => ({}),
  company: () => ({}),
  database: () => ({}),
  date: () => ({}),
  finance: () => ({}),
  Float(parent, args) {
    const { template = "0.{{random.number}}" } = args

    return faker.fake(template)
  },
  hacker: () => ({}),
  ID(parent, args) {
    const { template = "{{random.number}}" } = args

    return faker.fake(template)
  },
  image: () => ({}),
  Int(parent, args) {
    const { template = "{{random.number}}" } = args

    return faker.fake(template)
  },
  internet: () => ({}),
  List(parent, args) {
    const { length } = args

    return Array.from({ length }).map(() => ({}))
  },
  lorem: () => ({}),
  Mock(parent, args) {
    const { seed = majorVersion } = args

    faker.seed(seed)

    return {}
  },
  name: () => ({}),
  phone: () => ({}),
  String(parent, args) {
    const { template = "{{lorem.sentence}}" } = args

    return faker.fake(template)
  },
  random: () => ({}),
  system: () => ({}),
}

export const MockPhone = {
  phoneFormats: () => faker.phone.phoneFormats(),
  phoneNumber: () => faker.phone.phoneNumber(),
  phoneNumberFormat: () => faker.phone.phoneNumberFormat(),
}

export const MockRandom = {
  alphaNumeric: () => faker.random.alphaNumeric(),
  arrayElement: () => faker.random.arrayElement(),
  boolean: () => faker.random.boolean(),
  image: () => faker.random.image(),
  locale: () => faker.random.locale(),
  number: () => faker.random.number(),
  objectElement: () => faker.random.objectElement(),
  uuid: () => faker.random.uuid(),
  word: () => faker.random.word(),
  words: () => faker.random.words(),
}

export const MockSystem = {
  commonFileExt: () => faker.system.commonFileExt(),
  commonFileName: () => faker.system.commonFileName(),
  commonFileType: () => faker.system.commonFileType(),
  fileExt: () => faker.system.fileExt(),
  fileName: () => faker.system.fileName(),
  fileType: () => faker.system.fileType(),
  mimeType: () => faker.system.mimeType(),
  semver: () => faker.system.semver(),
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
  MockLorem,
  MockName,
  MockObject,
  MockPhone,
  MockRandom,
  MockSystem,
  Query,
}
