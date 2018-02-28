
import { GraphQLUpload } from 'apollo-upload-server'
import * as shortid from 'shortid'
import * as fs from 'fs';

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

export const UploadRes = {
  Upload: GraphQLUpload,
  Query: {
    oneUpdate: () => { return {} }
  },
  Mutation: {
    singleUpload: (obj, { file }) => {

      return processUpload(file)
    }
  }
};