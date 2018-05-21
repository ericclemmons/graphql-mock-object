import faker from "faker"

const { version } = require("../package.json")

// Seed is based on current version number. The intent is that any major
// version change will yield different resultsl
const seed = parseInt(version.match(/\d+/g).shift(), 10) || 0

console.log({ seed })

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

    return faker.fake(value)
  },
  Int() {
    return 1
  },
  List(parent, args) {
    const { length } = args
    return Array.from({ length }).map(() => ({}))
  },
  Mock() {
    // Ensure repeatable results with each Mock
    faker.seed(seed)

    return {}
  },
  String(parent, args) {
    const { value } = args

    return faker.fake(value)
  },
}

export const resolvers = {
  MockObject,
}
