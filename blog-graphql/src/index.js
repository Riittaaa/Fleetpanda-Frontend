import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import GetBlogs from "./components/GetBlogs";
// import Form from "./components/Form";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "https://rickandmortyapi.com/graphql",
  uri: "https://42d8-110-44-126-21.ngrok-free.app/graphql",
  // uri: "https://6de3-113-199-229-11.ngrok-free.app/graphiql",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      {/* <GetBlogs /> */}
      {/* <Form /> */}
    </ApolloProvider>
  </React.StrictMode>
);
