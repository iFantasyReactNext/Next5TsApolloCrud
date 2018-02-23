import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import WithData from '../src/config/WithData'
import WithRedux from '../src/config/WithRedux'
import configureStore from '../store'
import * as  withRedux from 'next-redux-wrapper'

export interface AppProps {
  [propName: string]: any
}



class App extends React.Component<AppProps, any> {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>


          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
        </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
        </button>
          </div>
        </form>
      </div>

    )


  }
}
export default withRedux(configureStore, null, null)(reduxForm({
  form: 'simple' // a unique identifier for this form
})(App))