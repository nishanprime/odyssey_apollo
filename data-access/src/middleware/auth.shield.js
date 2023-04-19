import {
  shield,
  rule,
} from "graphql-shield"
const isAuthenticated = rule({
  cache: "contextual",
})(async (parent, args, { user }) => {
  if (!user) {
    return new Error(
      "Not authenticated"
    )
  }
  return true
})

// create permissions that takes in a schema and returns a schema with isAuthenticated check
const permission = (schema) => {
  return shield({
    Query: {
      tracksForHome: isAuthenticated,
    },
  })(schema)
}

export default permission
