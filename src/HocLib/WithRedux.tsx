import * as  withRedux from 'next-redux-wrapper'
import configureStore from '../../store'
import * as React from 'react'

export default (InComponent) => {

  class WrapComponent extends React.Component {
    render() {
      return <InComponent {...this.props} />
    }
  }
  return withRedux(configureStore, null, null)(WrapComponent)
}

