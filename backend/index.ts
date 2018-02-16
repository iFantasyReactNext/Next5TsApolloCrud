import { makeExecutableSchema } from "graphql-tools";
import { AllDef } from './schema'
import { AllResolvers } from './resolver'

export const AllSchema = makeExecutableSchema({
  typeDefs: AllDef,
  resolvers: AllResolvers
})