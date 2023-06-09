import gql from "graphql-tag"
const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
  }
  "A Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`

export default typeDefs
