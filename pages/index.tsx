import * as React from 'react';
import * as  withRedux from 'next-redux-wrapper'
import configureStore from '../store'
export interface AppProps {
}

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        各種好物的ＤＥＭＯ
      </div>
    );
  }
}
export default withRedux(configureStore, null, null)(App)