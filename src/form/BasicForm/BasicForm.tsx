import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { validate } from './validate'
import { compose, graphql } from 'react-apollo'
//import FormProps from '../../types/reduxForm'
import { UserUpdate, UserAllQuery, UserAdd } from '../../gql/User';
//import TextField from '../../components/renderComponents/TextField'
//import TableListData from './TableListData'
import TableList from './TableList'
import DiyTextField from '../../components/RenderComponents/DiyTextField'
import Button from 'material-ui/Button'
import { FormControl, FormHelperText } from 'material-ui/Form';
import styled from 'styled-components'
import { GridContainer, GridItem } from '../../components/Layout/Grid'
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
    console.log('this.props')
    console.log(this.props)
    const gogo = (data) => {
      console.log('==============')
      console.log(data)
      console.log('==============')
      return ""
    }
    return (
      <div>


        <form onSubmit={
          (this.state.buttonState === 'add') ? handleSubmit(this.props.handleUserAdd) :
            handleSubmit(this.props.handleUpdateUser)}
        >

          <div>
            <GridContainer>
              <GridItem>

                <Field name="name" type="text" label="姓名" component={DiyTextField} />

              </GridItem>
              <GridItem>

                <Field name="nickName" type="text" label="暱稱" component={DiyTextField} />

              </GridItem>
              <GridItem>

                <Field name="tel" type="text" label="電話" component={DiyTextField} />

              </GridItem>
              <GridItem>

                <Field name="userId" label="Id" value={this.props.userId} type="text" component={DiyTextField} />

              </GridItem>
            </GridContainer>
          </div>

          <Button type="submit" name="add" onClick={() => this.setState({ buttonState: "add" })} disabled={pristine || submitting}>新增</Button>
          {this.props.assignId ?
            <Button type="submit" name="edit" onClick={() => this.setState({ buttonState: "edit" })} >修改</Button>
            : ""}

        </form>

      </div >
    );
  }
}
export default
  reduxForm({
    form: 'formBasic',
    enableReinitialize: true
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