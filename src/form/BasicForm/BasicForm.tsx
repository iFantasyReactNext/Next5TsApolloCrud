import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { validate } from './validate'
import { graphql } from 'react-apollo'
//import FormProps from '../../types/reduxForm'
import { UserUpdate, UserAllQuery } from '../../gql/User';
import TextField from '../../components/renderComponents/TextField'
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
    console.log('this.props.initialValues')
    console.log(this.props.initialValues)
    return (
      <div>
        基礎表單
        {this.props.initialValues.name}
        {this.props.initialValues.nickName}
        {this.props.initialValues.tel}
        <form onSubmit={handleSubmit}  >
          <div>

            <Field name="name" value={this.props.initialValues.name} type="text" component="input" />
          </div>
          {/* <Field name="nickName" type="text" component="input"  />
          <Field name="tel" type="text" component="input"   /> */}
          <button type="submit" name="add">新增</button>
          <button type="button" name="edit" onClick={() => this.props.updateSubmit()}>修改</button>
        </form>

      </div >
    );
  }
}
export default
  reduxForm<any, any>({
    form: 'formBasic', validate, enableReinitialize: true
  })(
    graphql(UserUpdate, {
      props: ({ data }) => ({
        handleSubmit: () => { console.log('新增送出資料嚕') },
        updateSubmit: () => { console.log('更新送出資料嚕') },
      })
    })(BasicForm))