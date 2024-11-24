import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache(),
});
export const Provider = ({ children }: { children: any }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
