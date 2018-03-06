//import LocaleProvider, { Locale } from "antd/lib/locale-provider"
import { Context } from "next"
import * as  React from "react"

import {
  addLocaleData,
  InjectedIntlProps,
  injectIntl,
  IntlProvider
} from "react-intl"
import * as zhLocaleData from 'react-intl/locale-data/zh';


// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== "undefined" && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

//console.log('addLocaleData(zhLocaleData)')

addLocaleData(zhLocaleData)

interface AdditionalProps {
  locale: string
  messages: object
  initialNow: Date
}

export default function pageWithIntl<P extends InjectedIntlProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentClass<P & AdditionalProps> {
  const IntlPage = injectIntl(WrappedComponent)

  return class extends React.PureComponent<P & AdditionalProps> {

    public static async getInitialProps(context: Context) {
      let tempdata: any;
      let props
      const tmp: any = WrappedComponent
      if (typeof tmp.getInitialProps === "function") {
        props = await tmp.getInitialProps(context)
      }

      // Get the `locale` and `messages` from the request object on the server.
      // In the browser, use the same values that the server serialized.
      var zh = require('../../lang/zh.json')
      var en = require('../../lang/en.json')

      const { req, query } = context
      //如果是前端
      tempdata = {}
      switch (query.locale) {
        case "zh":
          tempdata = { locale: "zh", messages: zh }
          break
        case "en":
          tempdata = { locale: "en", messages: en }
          break
        default:
          tempdata = { locale: "en", messages: en }
          break
      }

      // console.log('req.locale')
      // // if (req) {
      // console.log(req)
      // }
      console.log(tempdata)
      let { locale, messages } = req || tempdata
      //if (query) { locale = query.locale; }

      // Always update the current time on page load/transition because the
      // <IntlProvider> will be a new instance even with pushState routing.
      const initialNow = Date.now()
      //console.log('getInitialProps')

      return { locale, messages, initialNow, ...props }
    }

    public render() {
      // error TS2700: Rest types may only be created from object types.
      // see https://github.com/Microsoft/TypeScript/issues/12756#issuecomment-265812676
      // const {locale, messages, initialNow, ...props} = this.props
      const { locale, messages, initialNow } = this.props
      //const locale = "zh"
      console.log('messages多國語言')
      console.log(locale)
      console.log(messages)
      return (
        <IntlProvider locale={locale} messages={messages}>
          <IntlPage {...this.props} />
        </IntlProvider>
      )
    }
  }
}