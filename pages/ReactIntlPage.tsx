import { Context } from "next"
import * as React from "react"
import {
  defineMessages,
  FormattedMessage,
  FormattedNumber,
  FormattedRelative,
  InjectedIntlProps
} from "react-intl"

import Link from 'next/link'
import Layout from "../src/components/Layout"
import WithMaterial from '../src/HocLib/WithMaterial'


import pageWithIntl from "../src/HocLib/WithIntl"
import Button from 'material-ui/Button'
const { description } = defineMessages({
  description: {
    defaultMessage: "An example app integrating React Intl with Next.js",
    id: "description"
  }
})


interface ReactIntlPageProps extends InjectedIntlProps {
  someDate: Date
  intl?: any;
  [propName: string]: any
}


class ReactIntlPage extends React.Component<ReactIntlPageProps, any> {
  static async getInitialProps(context: Context) {
    return { someDate: Date.now() }
  }

  render() {
    return (
      <div>
        <Layout>
          <p>
            <FormattedMessage id="greeting"
              defaultMessage="defautl value" />
          </p>
          <p>
            <FormattedMessage id="story"
              defaultMessage="story default message" />


          </p>
          <p>
            <FormattedNumber value={1000} />
          </p>
          <p>
            <FormattedRelative
              value={this.props.someDate}
              updateInterval={1000}
            />
          </p>

          <Button>

            <Link href={{ pathname: '/ReactIntlPage', query: { locale: 'en' } }}>

              <a>切換英文</a>
            </Link>{" "}

          </Button>

          <Button>
            <Link href={{ pathname: '/ReactIntlPage', query: { locale: 'zh' } }} >
              <a>切換中文</a>
            </Link>{" "}

          </Button>
        </Layout>
      </div >
    )
  }
}

export default WithMaterial(pageWithIntl(ReactIntlPage))