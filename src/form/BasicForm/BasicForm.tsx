import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { validate } from './validate'
import { graphql } from 'react-apollo'
//import FormProps from '../../types/reduxForm'
import { UserMutaion, UserAllQuery } from '../../gql/User';
import renderField from '../../components/renderComponents/renderField'
import TableListData from './TableListData'
import TableList from './TableList'
// export interface BasicFormProps {
// }
interface FormProps {
  handleSubmit?: any;
  pristine?: any;
  reset?: any;
  submitting?: any
  _EditPerson?: any;
  initialValues?: any;
  valid?: any;
  [propName: string]: any;
}






class BasicForm extends React.Component<FormProps, any> {
  constructor(props) {
    super(props)
  }
  _Delete = () => {
    console.log('刪除作業')
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props
    // console.log('this.props.initialValues')
    // console.log(this.props)



    return (
      <div>
        基礎表單

         <TableListData>
          {(result) => {
            console.log('result')
            console.log(result)
            return <TableList initData={result.data.UserAllQuery}>
            </TableList>
          }}


        </TableListData>


        <form onSubmit={handleSubmit}  >
          <Field name="name" initValue={this.props.initialValues.name || ""} type="text" component={renderField} label="name" />
          <Field name="nickName" initValue={this.props.initialValues.nickName || ""} type="text" component={renderField} label="nickName" />
          <Field name="tel" type="text" initValue={this.props.initialValues.tel || ""} component={renderField} label="tel" />
          <button type="submit" name="add">新增</button>
          <button type="button" name="edit" onClick={() => this.props.updateSubmit()}>修改</button>
          <button type="button" name="delete" onClick={() => this.props.deleteSubmit()} >刪除</button>
        </form>

      </div >
    );
  }
}
export default
  reduxForm({ form: 'formBasic', validate })(
    graphql(UserMutaion, {
      props: ({ data }) => ({
        handleSubmit: () => { console.log('新增送出資料嚕') },
        deleteSubmit: () => { console.log('刪除送出資料嚕') },
        updateSubmit: () => { console.log('更新送出資料嚕') },
      })
    })(BasicForm))