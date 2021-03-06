import * as  React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import getPageContext from './getPageContext';
import { Context } from 'next';


function WithMaterial(Component) {
  class WithMaterial extends React.Component<any, any> {

    static getInitialProps(context: Context) {
      if (Component.getInitialProps) {
        return Component.getInitialProps(context);
      }
      return {};
    };


    componentWillMount() {
      this.pageContext = this.props.pageContext || getPageContext();
    }
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Reboot />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }



  return WithMaterial;
}

export default WithMaterial;