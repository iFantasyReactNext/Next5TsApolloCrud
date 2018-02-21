import * as React from 'react';
import { UserQuery } from '../../gql/User';
import { graphql } from "react-apollo";

export interface BasicInitProps {
  children(object: any): any;
  [PropName: string]: any;
}

class BasicInit extends React.Component<BasicInitProps, any> {
  constructor(props) {
    super(props)
    //this.state = { "test": "test" }
    // console.log('-----constructor-----')
    // console.log(props)
  }
  render() {

    // if (this.props.loading === true) { return <div>Loading</div> }
    //console.log('-----BasicInit-----')
    //console.log(this.props)
    return this.props.children(this.props)
  }
}

export default graphql<any, any>(UserQuery, {
  props: ({ data, mutate }) => {
    // console.log("BasicInit")
    // console.log(data)
    return data
    //     onSubmit: async (inputData) => {
    //       //console.log(inputData);
    //       return await mutate({
    //         variables: inputData,
    //         refetchQueries: [{ query: UserQuery }]
    //       })
    //     }
    //     //return data;
  }
})(BasicInit)
