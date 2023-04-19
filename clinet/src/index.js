import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import Layout from "./Layout"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(
  document.getElementById("root")
)
root.render(
  <ApolloProvider client={client}>
    <Layout>
      <App />
    </Layout>
  </ApolloProvider>
)
