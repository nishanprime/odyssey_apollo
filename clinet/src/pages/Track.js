import React from "react"
import {
  gql,
  useQuery,
} from "@apollo/client"
const TracksQuery = gql`
  query TracksForHome {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      author {
        id
        name
      }
    }
  }
`
const Tracks = () => {
  const { data, loading, error } =
    useQuery(TracksQuery)
  if (loading)
    return <div>Loading...</div>
  if (error)
    return (
      <div>Error fetching tracks</div>
    )
  return (
    <div className="grid grid-cols-4 gap-2 w-2/3">
      {
        // generate cards with information from the query
        data.tracksForHome.map(
          (track) => (
            <div
              key={track.id}
              className="col-span-1 mb-2"
            >
              <img
                src={track.thumbnail}
                alt={track.title}
              />
              <h3>{track.title}</h3>
              <p>{track.author.name}</p>
              <p>
                {track.numberOfViews}{" "}
                Views
              </p>
            </div>
          )
        )
      }
    </div>
  )
}

export default Tracks
