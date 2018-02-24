import * as React from 'react';
import TextField from 'material-ui/TextField'
// import HocTypeSound from '../../components/SoundBox/HocTypeSound';



export interface DiyTextFieldProps {
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


interface DiyTextFieldStates {
  value: string | undefined | number;
  showLable: boolean;
}

class DiyTextField extends React.PureComponent<DiyTextFieldProps, DiyTextFieldStates> {

  constructor(props) {
    super(props);

    this.state = {
      value: props.initValue,
      showLable: false
    }
  }

  _onChange = (e) => {
    //console.log(e)
    let data = e.target.value;
    // if (this.state.value !== undefined) { this._playSound() }
    this.setState({ value: data })
  }

  render() {

    // const showError = (this.props.meta.error !== undefined) ? <ErrorDiv>{this.props.meta.error}</ErrorDiv> : "";




    return (
      <div>
        <TextField value={this.state.value}
          placeholder={this.props.placeholder}
          // onFocus={(event) => {
          //   console.log('onFocus')
          //   this.setState({ showLable: true })
          // }}
          // onBlur={(event) => {
          //   console.log('onBlur')
          //   this.setState({ showLable: false })
          // }}

          label={this.props.label}
          {...this.props.input}
          {...this.props.custom}

        ></TextField>
        {/* <LabelBlock>   {this.props.label} </LabelBlock>
          {showError}

        </Wrap> */}
      </div >
    );
  }
}
export default DiyTextField

{/* <MMTextFieldDiv value={this.state.value}
onChange={(e) => this._onChange(e)}
placeholder={this.props.placeholder}
style={{ minWidth: this.props.minWidth }}
width={this.props.width}
{...this.props.input}
{...this.props.custom} */}