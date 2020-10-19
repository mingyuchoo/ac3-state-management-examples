import React from "react";
import { render } from "react-dom";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

import App from "./components/App";

import "todomvc-app-css/index.css";

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
