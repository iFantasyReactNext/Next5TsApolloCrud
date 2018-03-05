import BassSchema, { BassSchemaProps } from './BassSchema';

const typeDefs = ` type User{
  userId:String,
  name:String,
  tel:String,
  nickName:String      
}`

const queries = `
     UserAllQuery:[User],
     UserOneQuery(userId:String):User
`

const mutations = `
  UserUpdate(userId:String,name:String,nickName:String,tel:String):User,
  UserAdd(name:String,nickName:String,tel:String):User,
  UserDelete(userId:String):User
`



class UserComponent extends BassSchema {
  constructor(props) { super(props); }
}


const UserSchema: BassSchemaProps = {
  typeDefs, queries, mutations,
}

const UserComponentX = new UserComponent(UserSchema)
export default UserComponentX
