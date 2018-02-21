module.exports = UserResolver = {
  Query: {
    UserQuery: () => {
      return { name: "紀相安", nickName: 'polo' }
    }
  },
  Mutation: {
    UserMutaion: (_, { name, nickName, tel }) => {
      return { name, nickName, tel }
    }
  }
}