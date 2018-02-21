interface validate {
  values?: any;
  errors?: any;
}
export const validate = values => {
  const errors: any = {}
  if (!values.nickName) {
    errors.nickName = '*必填欄位'
  } else if (values.nickName.length > 10) {
    errors.nickName = '不可以超過 10個字'
  }
  if (!values.introduce) {
    errors.introduce = '*必填欄位'
  }


  return errors
}
