var { makeExecutableSchema } = require('graphql-tools');
var AllDef = require('./schema')
var AllResolvers = require('./resolver')

//console.log(AllDef)

module.exports = makeExecutableSchema({
  typeDefs: AllDef,
  resolvers: AllResolvers
})