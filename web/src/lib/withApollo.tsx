import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsContext, NextPage } from "next";

export type ApolloClientContext = GetServerSidePropsContext;

export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component />
      </ApolloProvider>
    )
  }
}

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/api',
    fetch,
  })
  
  const cache = new InMemoryCache().restore(ssrCache ?? {})
  
  return new ApolloClient({
    link: from([httpLink]),
    cache,
  })
}