import { fake, seed } from "faker"

import { version } from "../package.json"

// Seed is based on current version number. The intent is that any major
// version change will yield different resultsl
const majorVersion = parseInt(version.match(/\d+/g).shift(), 10) || 1

// The resolvers
export const MockObject = {
  Boolean() {
    return true
  },
  Float() {
    return 0.1
  },
  ID(parent, args) {
    const { value } = args

    return fake(value)
  },
  Int() {
    return 1
  },
  List(parent, args) {
    const { length } = args

    return Array.from({ length }).map(() => ({}))
  },
  Mock() {
    seed(majorVersion)

    return {}
  },
  String(parent, args) {
    const { value } = args

    return fake(value)
  },
}

export const Query = {
  Mock() {
    return {}
  },
}

export const resolvers = {
  MockObject,
  Query,
}
