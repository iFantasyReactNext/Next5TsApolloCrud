import * as React from 'react';
import { UserAllQuery } from '../../gql/User'
import { graphql } from 'react-apollo';

export interface TableListDataProps {
  children(object): any
  [PropName: string]: any
}


class TableListData extends React.Component<TableListDataProps, any> {
  render() {
    return this.props.children(this.props);
  }
}

export default graphql<any, any>(UserAllQuery)(TableListData)