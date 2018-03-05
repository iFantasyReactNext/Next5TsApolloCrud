import * as React from 'react';
import WithMaterial from '../src/HocLib/WithMaterial'
export interface LayLoutPageProps {
}

class LayLoutPage extends React.Component<LayLoutPageProps, any> {
  render() {
    return (
      <div>
        123
      </div>
    );
  }
}
export default WithMaterial(LayLoutPage)