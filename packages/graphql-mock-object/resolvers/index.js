import faker from "faker"

import { version } from "../package.json"

// Seed is based on current version number. The intent is that any major
// version change will yield different resultsl
const majorVersion = parseInt(version.match(/\d+/g).shift(), 10) || 1

const fakerResolver = template => (parent, args) => {
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

export const MockObject = {
  address(parent, args) {
    return {}
  },
  commerce(parent, args) {
    return {}
  },
  Boolean: fakerResolver("{{random.boolean}}"),
  Float: fakerResolver("0.{{random.number}}"),
  ID: fakerResolver("{{random.number}}"),
  Int: fakerResolver("{{random.number}}"),
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
  MockObject,
  Query,
}
