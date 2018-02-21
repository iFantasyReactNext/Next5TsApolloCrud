import gql from 'graphql-tag'


export const UserQuery = gql`
      query UserQuery{
                  UserQuery  {
                        name
                        tel 
                        nickName
                        }
      }
`


export const UserMutaion = gql`
      mutation UserMutaion($name:String,$tel:String,$nickName:String) {
            UserMutaion(name:$name,tel:$tel,nickName:$nickName) 
                     {
                        name
                        tel 
                        nickName
                        }
      }
`