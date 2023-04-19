import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import typeDefs from "./schema.js"
import resolvers from "../src/resolvers.js"
import TrackAPI from "./data-sources/track-api.js"
const mocksObject = {
  Query: () => ({
    tracksForHome: () => [
      ...new Array(6),
    ],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astrology 101",
    author: () => ({
      name: "John Doe",
      photo: () =>
        "https://i.pravatar.cc/300",
    }),
    thumbnail: () =>
      "https://i.pravatar.cc/300",
    length: () => 63,
    modulesCount: () => 6,
    description: () =>
      "Learn all about astrology in this fun and exciting course",
    numberOfViews: () => 10000,
  }),
}

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  const { url } =
    await startStandaloneServer(
      server,
      {
        context: async () => {
          return {
            dataSources: {
              trackAPI: new TrackAPI(),
            },
          }
        },
      }
    )
  console.log(
    `🚀 Server ready at ${url}`
  )
}
startApolloServer()
