const resolvers = {
  Query: {
    // retunrs all tracks for home page
    tracksForHome: (
      parent,
      args,
      context,
      info
    ) => {
      return context.dataSources.trackAPI.getTracksForHome()
    },
  },

  Track: {
    // returns the author of a track
    author: async (
      parent,
      args,
      { dataSources }
    ) => {
      return dataSources.trackAPI.getAuthor(
        parent.authorId
      )
    },
  },
}

export default resolvers
