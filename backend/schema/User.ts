

module.exports = UserSchema = `
 type User{
      name:String,
      tel:String,
      nickName:String      
 }

 type Query{
      UserQuery:User    
 }
 type Mutation{
      UserMutaion(name:String,nickName:String,tel:String):User
 }
`
