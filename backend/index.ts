import { makeExecutableSchema } from 'graphql-tools'
import AllDef from './schema'
import AllResolvers from './resolver'

//console.log(AllDef)

let typeDefs = []
let queries = []
let mutations = []

AllDef.forEach(s => {
  typeDefs.push(s.getTypeDefs);
  queries.push(s.getQuerys);
  mutations.push(s.getMutations);
});

const RootQuery = ` type Query {
   ${[...queries]}
  } 
  type Mutation{ 
   ${[...mutations]}
} `;

const SchemaDefinition = `schema {  query: Query,  mutation: Mutation} `;
//console.log(typeDefs)
const result = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, ...typeDefs],
  resolvers: AllResolvers
})
//console.log(result)
export default result