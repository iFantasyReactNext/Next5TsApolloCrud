import UserResolver from './UserResolver'
import UploadRes from './FileResolver'
import { merge } from "lodash";
import { GraphQLUpload } from 'apollo-upload-server'

let OutIndex = merge(UserResolver, UploadRes);

//var { merge } = require("lodash")

//let AllResolve = [OutIndex.Query, OutIndex.Mutation, { Upload: GraphQLUpload }];
let AllResolve = [OutIndex.Query, OutIndex.Mutation];


//let AllResolve = [OutIndex._Query, OutIndex._Mutation];
//console.log(AllResolve)
export default AllResolve