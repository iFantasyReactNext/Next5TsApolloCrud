import * as React from 'react'
import initApollo from './initApollo';
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import configureStore from '../../store';
import 'isomorphic-unfetch'
import { Context } from 'next'

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

interface Props {
  [propName: string]: any;
}


interface PoloDataType {
  context: string;
}

export default function <P extends Props>(ComposedComponet: any): React.ComponentClass<P & Props> {
  return class WithData extends React.PureComponent<P & Props> {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponet)})`
    //這裡如果加async 就會噴錯
    public static getInitialProps(context: Context) {
      //希望有某西 await在後端跑又透過ＨＯＣ的方式的話 這邊會不能跑 先放著
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
