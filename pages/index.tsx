import * as React from 'react';
import withRedux from 'next-redux-wrapper'
import configureStore from '../store'
export interface AppProps {
}

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        123
      </div>
    );
  }
}
export default withRedux(configureStore, null, null)(App)