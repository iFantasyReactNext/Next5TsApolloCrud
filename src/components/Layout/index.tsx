import * as React from 'react';
import Head from "next/head"
import Header from '../Header'
export interface LayoutProps {
  [propsName: string]: any
}

export default class Layout extends React.Component<LayoutProps, any> {
  constructor(props) {
    super(props)

  }
  render() {
    return (

      <div>

        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Header></Header>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}





//   injectGlobal`
//   body {
//     background-color: ghostwhite;
//     padding: 0;
//     margin: 50;
//     overflow-y:hidden;
//     line-height: 25px;
//     @font-face {
//          font-family: 'WebFont1';
//           src: url('/static/fonts/Zpix.woff'); format('truetype');  
//     }
//     font-family: 'WebFont1';
//     },
//     div{
//       font-family: 'WebFont1';
//     }
// `

