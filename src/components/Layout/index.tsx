import * as React from 'react';
import Head from "next/head"
import Header from '../Header'
import BottomNavigationBlock from '../BottomNavigationBlock'
import styled from 'styled-components'

const FooterDiv = styled.div`
  
`
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
          <title>Test</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Header Title="各種好物的ＤＥＭＯ"></Header>
        <div>
          {this.props.children}
        </div>
        <div style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>

          <BottomNavigationBlock ></BottomNavigationBlock>
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

