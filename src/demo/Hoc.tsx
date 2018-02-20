import * as React from 'react'
import { Component } from 'react';
interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}
export default <P extends Props>(ComposedComponet: React.ComponentType<P>) => {
  return class WithData extends React.Component<Props, States> {
    render() {
      return (
        <div>
          <ComposedComponet {...this.props} />
        </div>
      )
    }
  }
}

