import * as React from 'react';
import * as  withRedux from 'next-redux-wrapper'
import configureStore from '../store'
import Link from 'next/link'
import Button from 'material-ui/Button'
import WithMaterial from '../src/HocLib/WithMaterial'
import Layout from '../src/components/Layout'
export interface AppProps {
}
@WithMaterial
class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        <Layout>
          <Link href="/form">
            <Button><a>
              Apollo with Material Ui CRUD

            </a></Button>
          </Link>{' '}
          <Link href="/ReactIntlPage">
            <Button><a>多國語系</a></Button>
          </Link>{' '}

          <Link href="/fileUpload">
            <Button><a>
              Apollo Upload

            </a></Button>
          </Link>{' '}
        </Layout>
      </div>

    );
  }
}
export default withRedux(configureStore, null, null)(App)