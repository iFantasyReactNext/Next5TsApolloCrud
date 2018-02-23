import gql from 'graphql-tag'


export const UserOneQuery = gql`
      query UserOneQuery($userId:String){
            UserOneQuery(userId:$userId) {
                        userId
                        name
                        tel 
                        nickName
                        }
      }
`


export const UserAllQuery = gql`
      query UserAllQuery{
            UserAllQuery  {
                        userId
                        name
                        tel 
                        nickName
                        }
      }
`

export const UserUpdate = gql`
      mutation UserUpdate($name:String,$tel:String,$nickName:String) {
            UserUpdate(name:$name,tel:$tel,nickName:$nickName) 
                     {
                        userId
                        name
                        tel 
                        nickName
                        }
      }      
`

export const UserDelete = gql`
      mutation UserDelete($id:String) {
            UserDelete(id:$id) 
                     {
                        userId
                        name
                        tel 
                        nickName
                        }
      }      
`