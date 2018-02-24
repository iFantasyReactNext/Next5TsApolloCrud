import * as React from 'react';
import { graphql } from 'react-apollo'
import { UserDelete, UserAllQuery } from '../../gql/User';
import { variablesInOperation } from 'apollo-utilities';
import BasicInit from './BasicInit';
import BasicForm from './BasicForm';
import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui'


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
    //console.log(this.props.initData)

    const Data = (this.props.initData !== undefined) ? this.props.initData.map((v, i) => {
      return {
        assign: <button onClick={() => this._assign(v.userId)}>指定</button>,
        del: <button onClick={() => this.props._delete(v.userId)}>刪除</button>,
        userId: v.userId, name: v.name, tel: v.tel, nickName: v.nickName
      }



      // <div key={`formData${i}`}><li>
      //   <button onClick={() => this._assign(v.userId)}>指定</button>
      //   <button onClick={() => this.props._delete(v.userId)}>刪除</button>
      //   {v.userId}    {v.name} {v.nickName}
      // </li></div>
    }) : ""
    return (
      <div>
        {
          this.state.assignId ?
            <div>  指定修改的Id是 {this.state.assignId}   <button
              onClick={() => this.setState({
                assignId: ""
              })}
            >取消修改</button>
            </div> : ""
        }


        <Grid
          rows={Data}
          columns={[
            { name: 'assign', title: '指定' },
            { name: 'del', title: '刪除' },
            { name: 'userId', title: 'UserId' },
            { name: 'name', title: 'Name' },
            { name: 'nickName', title: 'nickName' },
          ]}>
          <Table />
          <TableHeaderRow />
        </Grid>


        <BasicInit userId={this.state.assignId || "1"}>{
          (result) => {
            console.log('result')
            console.log(result)
            if (result.loading) return <div>Loading</div>
            if (result.error) return <div>有錯誤歐</div>
            return <div>
              {result.UserOneQuery.name}
              <BasicForm assignId={this.state.assignId} initialValues={result.UserOneQuery}></BasicForm>
            </div>
          }
        }</BasicInit>
      </div>
    );
  }
}
export default graphql<any, any>(UserDelete, {
  props: ({ mutate }) => ({

    _delete: async (userId) => {
      console.log(`刪除資料嚕${userId}`)
      return await mutate({
        variables: { userId },
        refetchQueries: [{ query: UserAllQuery }]
      })
    },

  })
})(TableList)