import gql from 'graphql-tag'


export const UserOneQuery = gql`
      query UserOneQuery{
            UserOneQuery  {
                        name
                        tel 
                        nickName
                        }
      }
`


export const UserAllQuery = gql`
      query UserAllQuery{
            UserAllQuery  {
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