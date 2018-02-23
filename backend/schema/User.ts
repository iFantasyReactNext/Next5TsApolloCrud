

module.exports = UserSchema = `
 type User{
      userId:String,
      name:String,
      tel:String,
      nickName:String      
 }

 type Query{
      UserAllQuery:[User]
      UserOneQuery(userId:String):User    
 }
 type Mutation{
      UserUpdate(name:String,nickName:String,tel:String):User
      UserAdd(name:String,nickName:String,tel:String):User
      UserDelete(id:String):User
 }
`
