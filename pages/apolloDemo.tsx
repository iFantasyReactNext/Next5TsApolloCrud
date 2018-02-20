import * as React from 'react';
import WithData1 from '../src/config/WithData1'
export interface TestPageProps {
  [PropName: string]: any
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
export default WithData1(TestPage)