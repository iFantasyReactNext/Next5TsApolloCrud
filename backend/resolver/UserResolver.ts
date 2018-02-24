var shortid = require('shortid');

let InitData = [
  { userId: "1", name: "神力女超人", nickName: "Wonder Wonmen", tel: "" },
  { userId: "2", name: "蝙蝠俠", nickName: "batMan", tel: "" },
]

module.exports = UserResolver = {
  Query: {
    UserAllQuery: () => {
      return InitData
    },
    UserOneQuery: async (_, { userId = "1" }) => {
      //console.log(`找一筆${userId}`)

      const result = InitData.find((item): any => {
        return item.userId === userId
      })
      //console.log(result)


      return result
    }
  },
  Mutation: {
    UserUpdate: (_, { userId, name, nickName, tel }) => {

      InitData.map((item): any => {
        if (item.userId === userId) {
          item.name = name;
          item.nickName = nickName;
          item.tel = tel;
        }
        return item
      })
      // console.log('InitData')
      // console.log(InitData)
      return { userId, name, nickName, tel }
    },
    UserAdd: (_, { name, nickName, tel }) => {
      // console.log('新增一筆')
      // console.log(`name${name} nickName${nickName}`)

      const userId = shortid.generate()
      const NewOne = { userId, name, nickName, tel }
      InitData = [...InitData, NewOne]

      return NewOne
    },
    UserDelete: (_, { userId }) => {
      // console.log('userId')
      // console.log(userId)
      const result = InitData.findIndex((item): any => {
        return item.userId === userId
      })


      // console.log(`刪除${result}`)
      let resultData = InitData.splice(result, 1);
      return resultData
    }
  }
}