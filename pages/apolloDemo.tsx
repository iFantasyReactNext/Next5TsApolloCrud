import * as React from 'react';
import withData from '../src/config/withData'
export interface TestPageProps {
}

class TestPage extends React.Component<TestPageProps, any> {
  render() {
    return (
      <div>
        123
      </div>
    );
  }
}
export default withData(TestPage)