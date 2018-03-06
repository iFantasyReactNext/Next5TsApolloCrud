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


    //拿到跟前後端一樣的設定值
    const pageContext = getPageContext();
    //拿到後端的目前資料
    const page = context.renderPage(Component => props => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    ));


    // console.log('page')
    // console.log(page)

    return {
      ...props,
      locale,
      localeDataScript,
      ...page,
      pageContext,
      styles: (
        <style
          id="jss-server-side"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString(),
          }}
        />
      ),

    }
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${this.props.locale}`

    return (
      <html>
        <Head />
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