import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import { validate } from './validate'
import { graphql } from 'react-apollo'
//import FormProps from '../../types/reduxForm'
import { UserMutaion } from '../../gql/User'

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



const renderField = ({ input, label, type, meta: { touched, error } }) => {
  console.log(input)
  return (<div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>)
}




class BasicForm extends React.Component<FormProps, any> {
  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props
    console.log('this.props.initialValues')

    console.log(this.props)
    return (
      <div>
        基礎表單
         <form onSubmit={handleSubmit}  >
          <Field name="name" type="text" component={renderField} label="name" />
          <Field name="nickName" type="text" component={renderField} label="nickName" />
          <Field name="tel" type="text" component={renderField} label="tel" />
          <button type="submit" >送出</button>

        </form>

      </div >
    );
  }
}
export default
  reduxForm({ form: 'formBasic', validate })(
    graphql(UserMutaion, {
      props: ({ data }) => ({
        handleSubmit: () => { console.log('送出資料嚕') }
      })
    })(BasicForm))