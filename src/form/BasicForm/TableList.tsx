import * as React from 'react';
import { graphql } from 'react-apollo'
import { UserDelete, UserAllQuery } from '../../gql/User';
import { variablesInOperation } from 'apollo-utilities';
import BasicInit from './BasicInit';
import BasicForm from './BasicForm';
export interface TableListProps {
  initData?: any
  _delete?: any
  _assign?: any
  variables?: any;
}


interface States {
  assignId: string;
}
class TableList extends React.Component<TableListProps, States> {
  constructor(props) {
    super(props)
    this.state = { assignId: "" }
  }

  _assign = (userId) => {
    // console.log('指定')
    // console.log(this.props)
    //this.props.variables = { userId }
    this.setState({ assignId: userId || "1" })

  }
  render() {
    // console.log(this.props.initData)
    const Data = this.props.initData.map(v => {
      return <div key={v.name}><li>
        <button onClick={() => this._assign(v.userId)}>指定</button>
        <button onClick={() => this.props._delete(v.userId)}>刪除</button>
        {v.userId}    {v.name} {v.nickName}
      </li></div>
    })
    return (
      <div>
        列表清單 - 目前指定的Id是 {this.state.assignId}
        {Data}


        <BasicInit userId={this.state.assignId || 1}>{
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
        }</BasicInit>
      </div>
    );
  }
}
export default graphql<any, any>(UserDelete, {
  props: ({ data, mutate }) => ({
    _delete: async (userId) => {
      console.log('刪除資料嚕')
      return await mutate({
        variables: userId,
        refetchQueries: [{ query: UserAllQuery }]
      })
    },

  })
})(TableList)