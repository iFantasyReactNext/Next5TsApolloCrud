import BassSchema, { BassSchemaProps } from './BassSchema'



class FileSchemaClass extends BassSchema {
  constructor(props) { super(props) }
}


const typeDefs = `
scalar Upload
  type File{
  fileId: String
  path: String
  filename: String
  mimetype: String
  encoding: String
}`
const queries = `
  oneUpdate:File
`
const mutations = `
  singleUpload (file: Upload): File
`

const Schema: BassSchemaProps = {
  typeDefs,
  queries,
  mutations

}


export default new FileSchemaClass(Schema)


