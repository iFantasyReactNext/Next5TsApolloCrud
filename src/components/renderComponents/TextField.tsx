import * as React from 'react';
import styled from 'styled-components'
// import HocTypeSound from '../../components/SoundBox/HocTypeSound';


const LabelBlock = styled.label`
position:absolute;
top:-24px;
left:0px;
/* background:rgba(90,90,90,0.3); */
z-index:33;
flex:1;
padding-left:10px;
padding-right:10px;
background: rgba(255,255,255,0.8);
display:none;
`

const TextFiledDiv = styled.input`
      border-radius: 3px ;
      background   : rgba(255,255,255,.4);
      min-height: 20px;
      min-width:${props => props.style.minWidth ? props.style.minWidth : '150px'};
      width:${props => props.width ? props.width : '100%'};
      border:1px solid rgba(0,0,0);
      outline: none;
      flex:1;
      font-size:1.1em;
      font-family:'WebFont1';
      padding:4px;
      &:focus ~ ${LabelBlock} {
        display:block;
      }
  `






const Wrap = styled.div`
  position:relative;
  display:flex;
`



// const Span = styled.span`
//  white-space: nowrap;
//  padding:5px;
//  flex:1
// `
const ErrorDiv = styled.div`
position:absolute;
top:-24px;
right:0px;
/* background:rgba(90,90,90,0.3); */
z-index:33;
flex:1;
background: rgba(255,0,0,0.3);

`


export interface TextFiledProps {
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


interface TextFiledStates {
  value: string | undefined | number;
  showLable: boolean;
}

class TextFiled extends React.PureComponent<TextFiledProps, TextFiledStates> {
  private audio: HTMLAudioElement;

  constructor(props) {
    super(props);

    this.state = {
      value: props.initValue,
      showLable: false
    }
  }
  componentWillReceiveProps(NextProps) {
    //console.log('給redux-form render 使用')
    //console.log(NextProps)
    //this._playSound()
  }
  componentDidMount() {
    this.audio = new Audio()
  }
  _onChange = (e) => {
    //console.log(e)
    let data = e.target.value;
    // if (this.state.value !== undefined) { this._playSound() }
    this.setState({ value: data })


  }

  // _playSound = () => {
  //   // console.log('soundUrl')
  //   let soundUrl = '/static/sound/syetem/se_maoudamashii_se_pc03.mp3';
  //   if (!!this.audio) {
  //     if (soundUrl !== "") {
  //       this.audio.src = soundUrl;
  //       this.audio.currentTime = 0;
  //       this.audio.volume = 0.3;
  //       this.audio.play();

  //     }
  //     //console.log(this.audio);
  //   }
  // };

  render() {
    // hintText={label}
    // floatingLabelText={label}
    // errorText={touched && error}
    // console.log('this.props.meta.error')
    // console.log(this.props)
    const showError = (this.props.meta.error !== undefined) ? <ErrorDiv>{this.props.meta.error}</ErrorDiv> : "";




    return (
      <div>
        <Wrap>
          <TextFiledDiv value={this.state.value}

            placeholder={this.props.placeholder}

            onFocus={(event) => {
              console.log('onFocus')
              this.setState({ showLable: true })
            }}
            onBlur={(event) => {
              console.log('onBlur')
              this.setState({ showLable: false })
            }
            }
            style={{
              minWidth: this.props.minWidth,
              maxlength: this.props.input.maxlength
            }}
            width={this.props.width}
            {...this.props.input}
            {...this.props.custom}

          ></TextFiledDiv>
          <LabelBlock>   {this.props.label} </LabelBlock>
          {showError}

        </Wrap>
      </div >
    );
  }
}
export default TextFiled

{/* <TextFiledDiv value={this.state.value}
onChange={(e) => this._onChange(e)}
placeholder={this.props.placeholder}
style={{ minWidth: this.props.minWidth }}
width={this.props.width}
{...this.props.input}
{...this.props.custom} */}