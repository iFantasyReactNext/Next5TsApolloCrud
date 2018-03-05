import Document, { Head, Main, NextScript } from 'next/document'
import getPageContext from '../src/HocLib/getPageContext';
import JssProvider from 'react-jss/lib/JssProvider';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context)
    const { req: { locale, localeDataScript } } = context
    // console.log('_document')
    // console.log(context)



    const pageContext = getPageContext();
    const page = context.renderPage(Component => props => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    ));


    return {
      ...props,
      locale,
      localeDataScript,
      ...page,
      pageContext,
      styles: (
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
      ),

    }
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${this.props.locale}`
    const { pageContext } = this.props;

    return (
      <html>
        <Head >
          <title>線上讀書會</title>

          <meta name="theme-color" content={pageContext.theme.palette.primary[500]} />
          <meta charSet="utf-8" />

          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

        </Head>
        <body>
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript
            }}
          />
          <NextScript />
        </body>
      </html>
    )
  }
}