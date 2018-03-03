import gql from 'graphql-tag'

export const mutationUpload = gql` mutation($file: Upload) {
  singleUpload(file: $file) {
    fileId
    filename
    encoding
    mimetype
    path
  }
}
`