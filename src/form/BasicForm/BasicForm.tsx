import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { validate } from './validate'
import { compose, graphql } from 'react-apollo'
//import FormProps from '../../types/reduxForm'
import { UserUpdate, UserAllQuery, UserAdd } from '../../gql/User';
//import TextField from '../../components/renderComponents/TextField'
//import TableListData from './TableListData'
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
  assignId?: any;
  [propName: string]: any;
}
interface FormState {
  buttonState: String;
}
class BasicForm extends React.Component<FormProps, FormState> {
  constructor(props) {
    super(props)
    this.state = { buttonState: "add" }
  }
  _Delete = () => {
    console.log('刪除作業')
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid, handleAddUser, handleUpdateUser } = this.props
    console.log('this.props.handleSubmit')
    console.log(this.props.handleSubmit)
    const gogo = (data) => {
      console.log('==============')
      console.log(data)
      console.log('==============')
      return ""
    }
    return (
      <div>
        基礎表單
        {this.props.initialValues.name}
        {this.props.initialValues.nickName}
        {this.props.initialValues.tel}
        <form onSubmit={
          (this.state.buttonState === 'add') ? handleSubmit(this.props.handleUserAdd) :
            handleSubmit(this.props.handleUpdateUser)}

        >

          <div>
            <Field name="name" type="text" component="input" />
            <Field name="nickName" type="text" component="input" />
            <Field name="tel" type="text" component="input" />
            <Field name="userId" value={this.props.userId} type="text" component="input" />
          </div>

          <button type="submit" name="add" onClick={() => this.setState({ buttonState: "add" })} disabled={pristine || submitting}>新增</button>
          <button type="submit" name="edit" onClick={() => this.setState({ buttonState: "edit" })} >修改</button>

        </form>

      </div >
    );
  }
}
export default
  reduxForm({
    form: 'formBasic'
  })(
    compose(
      graphql(UserAdd, {
        props: ({ data, mutate }) => ({
          handleUserAdd: (formData) => {
            console.log('新增送出資料嚕')
            mutate({
              variables: formData,
              refetchQueries: [{
                query: UserAllQuery
              }]
            })
          },
        })
      }),


      graphql(UserUpdate, {
        props: ({ data, mutate }) => ({
          handleUpdateUser: (formData) => {
            console.log(`送出更新資料嚕${formData}`)
            ///formData.userId = assignId;
            mutate({
              variables: formData,
              refetchQueries: [{
                query: UserAllQuery
              }]
            })
          },
          updateSubmit: () => { console.log('更新送出資料嚕') },
        })
      }),





    )(BasicForm))