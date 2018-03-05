
import * as  shortid from 'shortid'
import * as  fs from 'fs'
import BassResolverSchema, { BassResolverType } from './BassResolverSchema';
import { Field } from 'redux-form';

class FileComponent extends BassResolverSchema {
  constructor(props) { super(props) }
}

const Query = {
  Query: {
    oneUpdate: () => { return {} }
  }
}
const Mutation = {
  Mutation: {
    singleUpload: (obj, { file }) => {
      // console.log('file')
      // console.log(file)
      //return {}
      return processUpload(file)
    }
  }
}

const FileSchema: BassResolverType = {
  Query,
  Mutation,
  Field: {}
}

export default new FileComponent(FileSchema)








const processUpload = async (file) => {
  console.log(file)
  const { stream, filename, mimetype, encoding } = await file;
  const { fileId, path } = await storeFS(stream, filename)
  return { fileId, filename, mimetype, encoding, path }
}
const storeFS: any = (stream, filename) => {
  const fileId = shortid.generate()
  const path = `./static/uploads/${fileId}-${filename}`
  return new Promise((resolve, reject) => {
    stream.on('error', error => {
      if (stream.truncated)
        fs.unlinkSync(path)
      reject(error)
    })
      .on('end', () => resolve({ fileId, path }))
      .pipe(fs.createWriteStream(path))
  })
}

// export default {
//   Query: {
//     oneUpdate: () => { return {} }
//   },
//   Mutation: {
//     singleUpload: (obj, { file }) => {

//       return processUpload(file)
//     }
//   }
// };