// The resolvers
export const resolvers = {
  MockObject: {
    Boolean() {
      return true
    },
    Float() {
      return 0.1
    },
    ID() {
      return "ABC123"
    },
    Int() {
      return 1
    },
    List() {
      return Array.from({ length: 3 }).map(() => ({}))
    },
    Object() {
      return {}
    },
    String() {
      return "hi"
    },
  },
  Query: {
    mock() {
      return {}
    },
    version() {
      return require("../../package.json").version
    },
    // MockBoolean() {
    //   return true
    // },
  },
}
