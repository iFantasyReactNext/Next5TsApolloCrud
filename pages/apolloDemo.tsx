import * as React from 'react';
import * as withData from '../src/config/withData'
export interface TestPageProps {
}


class TestPage extends React.Component<TestPageProps, any> {
  render() {
    return (
      <div>
        ApolloGraphQL 前端ＤＥＭＯ
      </div>
    );
  }
}
export default withData(TestPage)