

module.exports = UserSchema = `
 type User{
      name:String,
      tel:String,
      nickName:String      
 }

 type Query{
      UserQuery:User    
 }
`
