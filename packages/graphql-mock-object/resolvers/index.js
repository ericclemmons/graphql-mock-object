import faker from "faker"

import { version } from "../package.json"

// Seed is based on current version number. The intent is that any major
// version change will yield different resultsl
const majorVersion = parseInt(version.match(/\d+/g).shift(), 10) || 1

// The resolvers
export const MockObject = {
  Boolean(parent, args) {
    const { value = "{{random.boolean}}" } = args

    return faker.fake(value)
  },
  Float(parent, args) {
    const { value = "0.{{random.number}}" } = args

    return faker.fake(value)
  },
  ID(parent, args) {
    const { value = "{{random.number}}" } = args

    return faker.fake(value)
  },
  Int(parent, args) {
    const { value = "{{random.number}}" } = args

    return faker.fake(value)
  },
  List(parent, args) {
    const { length } = args

    return Array.from({ length }).map(() => ({}))
  },
  Mock(parent, args) {
    const { seed = majorVersion } = args

    faker.seed(seed)

    return {}
  },
  String(parent, args) {
    const { value = "{{lorem.sentence}}" } = args

    return faker.fake(value)
  },
}

export const Query = {
  Mock: MockObject.Mock,
}

export const resolvers = {
  MockObject,
  Query,
}
