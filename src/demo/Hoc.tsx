import *  as React from 'react'

export default (OO) => {
  return class GG extends React.PureComponent<any, any> {
    static async getInitialProps() {
      let data = "後端給的愛";
      return { data }
    }
    constructor(props) {
      super(props)
    }
    render() {
      console.log('this.props')

      console.log(this.props)
      return <div>{this.props.data} < OO /></div >

    }
  }
}