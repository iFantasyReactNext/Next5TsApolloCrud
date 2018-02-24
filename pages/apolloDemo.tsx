import * as React from 'react';
import WithData from '../src/HocLib/WithData';

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
export default WithData(App)