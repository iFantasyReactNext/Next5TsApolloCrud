import * as React from 'react';
import withData from '../src/HocLib/WithData'
import gql from "graphql-tag";
import { createUploadLink } from 'apollo-upload-client'
import { graphql, compose } from "react-apollo";

export interface AppProps {
  handleChange: any;
}

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        <input type="file" onChange={this.props.handleChange} />
      </div>
    );
  }
}

const mutationUpload = gql` mutation($file: Upload!) {
  singleUpload(file: $file) {
    fileId
    filename
    encoding
    mimetype
    path
  }
}
`

export default withData(graphql<any, any>(mutationUpload, {
  props: ({ data, mutate }) => ({
    handleChange: ({ target: { validity, files: [file] } }) => {
      mutate({ variables: { file } })
    }
  })
})(App))