import * as React from 'react';
import WithData1 from '../src/config/WithData1';

export interface AppProps {
}

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        OK
      </div>
    );
  }
}
export default WithData1(App)