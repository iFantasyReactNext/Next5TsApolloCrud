
let InitData = [
  { name: "神力女超人", "nickName": "Wonder Wonmen" },
  { name: "蝙蝠俠", "nickName": "batMan" },
]

module.exports = UserResolver = {
  Query: {
    UserAllQuery: () => {
      return InitData
    },
    UserOneQuery: () => {
      return { name: "紀相安", nickName: 'polo' }
    }
  },
  Mutation: {
    UserMutaion: (_, { name, nickName, tel }) => {
      return { name, nickName, tel }
    },
    UserAdd: (_, { name, nickName, tel }) => {
      return { name, nickName, tel }
    },
    UserDelete: (_, { id }) => {
      return {}
    }
  }
}