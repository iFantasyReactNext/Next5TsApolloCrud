

module.exports = UserSchema = `
 type User{
      name:String,
      tel:String,
      nickName:String      
 }

 type Query{
      UserAllQuery:[User]
      UserOneQuery:User    
 }
 type Mutation{
      UserMutaion(name:String,nickName:String,tel:String):User
      UserAdd(name:String,nickName:String,tel:String):User
      UserDelete(id:String):User
 }
`
