import * as React from 'react';
import * as  withRedux from 'next-redux-wrapper'
import configureStore from '../store'
import Link from 'next/link'
import Button from 'material-ui/Button'
export interface AppProps {
}

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        各種好物的ＤＥＭＯ
        <Link href="/form">
          <Button><a>CRUD with Apollo</a></Button>
        </Link>{' '}
        <Link href="/ReactIntlPage">
          <Button><a>ReactIntlPage</a></Button>
        </Link>{' '}
      </div>
    );
  }
}
export default withRedux(configureStore, null, null)(App)