import * as React from 'react';
import { graphql } from 'react-apollo'
import { UserDelete, UserAllQuery } from '../../gql/User';
import { variablesInOperation } from 'apollo-utilities';
import BasicInit from './BasicInit';
import BasicForm from './BasicForm';
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
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
        assign: <Button onClick={() => this._assign(v.userId)}>指定</Button>,
        del: <Button onClick={() => this.props._delete(v.userId)}>刪除</Button>,
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
            <div>  指定修改的Id是 {this.state.assignId}   <Button
              onClick={() => this.setState({
                assignId: ""
              })}
            >取消修改</Button>
            </div> : ""
        }

        {Data ?
          <Grid
            rows={Data}
            columns={[
              { name: 'assign', title: '指定' },
              { name: 'del', title: '刪除' },
              { name: 'userId', title: 'UserId' },
              { name: 'name', title: 'Name' },
              { name: 'nickName', title: 'nickName' },
              { name: 'tel', title: 'tel' },
            ]}>
            <Table />
            <TableHeaderRow />
          </Grid> : ""}


        <BasicInit userId={this.state.assignId || "1"}>{
          (result) => {
            console.log('result')
            console.log(result)
            if (result.loading) return <div>Loading</div>
            if (result.error) return <div>有錯誤歐</div>
            return <div>

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