import * as React from 'react'
import initApollo from './initApollo';
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import configureStore from '../../store';
import 'isomorphic-unfetch'

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}


interface PoloDataType {
  context: string;
}

export default <P extends Props>(ComposedComponet: any): React.ComponentClass<P & Props> => {
  return class WithData extends React.Component<P & Props, States> {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponet)})`

    //這裡如果加async 就會噴錯
    public static getInitialProps(context) {
      return {}
    }
    render() {
      return (
        <div>
          <ComposedComponet {...this.props} />
        </div>
      )
    }
  }
}
