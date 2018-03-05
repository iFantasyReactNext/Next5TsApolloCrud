import { apolloUploadExpress } from 'apollo-upload-server'
import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
import * as  bodyParser from "body-parser"



export const ApolloMiddle = (server, schema) => server.use(
  "/graphql",
  bodyParser.json(),
  apolloUploadExpress(),
  graphqlExpress(async () => {
    return {
      schema,
      // context: { user: req.user },
      // tracing: true,
      // cacheControl: true
    };
  })
);
export const ApolloMiddleInterFace = (server) => {
  server.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql",
    })
  )
};