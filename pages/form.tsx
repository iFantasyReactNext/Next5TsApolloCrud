import * as React from 'react'
import BasicForm from '../src/form/BasicForm/BasicForm'
import WithRedux from '../src/config/WithRedux'
import BasicInit from '../src/form/BasicForm/BasicInit'
import WithData from '../src/config/WithData'
import { UserQuery } from '../src/gql/User';

export interface AppProps {
  [propsName: string]: any
}


@WithRedux
class App extends React.Component<AppProps, any> {
  constructor(props) {
    super(props)
  }
  render() {
    //console.log('===this.props===')
    //console.log(this.props)
    // if (!this.props.loading) { return <div>正在載入中</div> }
    // if (this.props.error) { return <div>程式碼有錯誤歐</div> }


    return (<BasicInit>{
      (result) => {
        // console.log('result')
        // console.log(result)
        if (result.loading) return <div>Loading</div>
        if (result.error) return <div>有錯誤歐</div>
        return <div>
          {result.UserQuery.name}
          <BasicForm initialValues={result.UserQuery}></BasicForm>

        </div>
      }
    }</BasicInit>);
  }
}
export default WithData(App)



// {
//   (result) => {
//     console.log('result')
//     console.log(result)
//     return <BasicForm initialValues={this.props.UserQuery} ></BasicForm>
//   }
// }

  // <Query query={UserQuery}>
      //   {(result) => {
      //     if (result.loading) return <div>Loading</div>
      //     if (result.error) return <div>{result.error} </div>
      //     const { data } = result;
      //     return (<div>
      //       <BasicForm initialValues={data.UserQuery} /> </div>)
      //   }}
      // </Query>