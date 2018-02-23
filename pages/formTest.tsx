import * as React from 'react'
import BasicForm from '../src/form/BasicForm/BasicForm'
import WithRedux from '../src/config/WithRedux'
import BasicInit from '../src/form/BasicForm/BasicInit'
import WithData from '../src/config/WithData'
import { UserOneQuery } from '../src/gql/User';
import TableListData from '../src/form/BasicForm/TableListData';
import TableList from '../src/form/BasicForm/TableList';
import configureStore from '../store'
import * as  withRedux from 'next-redux-wrapper'

export interface AppProps {
  [propsName: string]: any
}



class App extends React.Component<AppProps, any> {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>

        <BasicForm initialValues={{ name: "polo" }}></BasicForm>
        {/* 
        <BasicInit userId={1}>{
          (result) => {
            console.log('result')
            console.log(result)
            if (result.loading) return <div>Loading</div>
            if (result.error) return <div>有錯誤歐</div>
            return <div>
              {result.UserOneQuery.name}
                   <BasicForm initialValues={result.UserOneQuery}></BasicForm>
            </div>
          }
        }</BasicInit> */}


      </div >
    );
  }
}
export default withRedux(configureStore, null, null)(WithData(App))


