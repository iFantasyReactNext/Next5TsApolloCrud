import * as React from 'react'
import initApollo from './initApollo';
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import configureStore from '../../store';
import { ApolloClient } from 'apollo-client';



function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export default (ComposedComponet) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponet)})`
    static async getInitialProps(ctx) {
      let serverState = { apollo: { data: {} } }
      let composedInitialProps = {}
      if (ComposedComponet.getInitialProps) {
        composedInitialProps = await ComposedComponet.getInitialProps(ctx)
      }
      console.log('apollo')

      if (!process.browser) {
        const apollo = initApollo();
        const url = { query: ctx.query, pathname: ctx.pathname };
        try {
          console.log(ApolloProvider)
          //const data = 
          //  <ApolloProvider  client={ apollo }>
          //    <ComposedComponent url={ url } { ...composedInitialProps } />
          //      < /ApolloProvider>

          //await getDataFromTree(          )
        } catch (err) {
          console.log(err)
        }
      }



    }


  }
}
