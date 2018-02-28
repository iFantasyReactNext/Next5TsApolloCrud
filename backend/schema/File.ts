
export const typeDefs = `
scalar Upload
type File{
fileId: String
path: String
filename: String
mimetype: String
encoding: String
}
type Query{
  oneUpdate:[File]
}

type Mutation {
  singleUpload (file: Upload): File
}

`;