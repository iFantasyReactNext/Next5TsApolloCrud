import * as React from 'react';

export interface renderFieldProps {
  initValue?: string | undefined | number;
  placeholder?: string;
  minWidth?: number;
  width?: string;
  addTypeSound?: any;
  removeaddTypeSound?: any;
  input?: any;
  custom?: any;
  error?: any;
  field?: any;
  meta?: any;
  label?: string;

}

export default class renderField extends React.Component<renderFieldProps, any> {
  constructor(props) {
    super(props)
    this.state = { value: props.initValue }
  }
  _onChange = (e) => {
    //console.log('in')
    let data = e.target.value;
    console.log(data)
    this.setState({ value: data })


  }
  render() {
    return (
      <div>
        {this.props.label}
        <input
          value={this.state.value}
          onChange={(e) => this._onChange(e)}
        />
      </div>
    );
  }
}
