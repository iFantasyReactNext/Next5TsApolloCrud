const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
var port = process.env.NODE_ENV !== "production" ? 3000 : 80;
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { AllSchema } = require("./backend");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress(async req => {
      return {
        schema: AllSchema,
        // context: { user: req.user },
        // tracing: true,
        // cacheControl: true
      };
    })
  );
  server.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql",
    })
  );

  server.use((req, res, next) => {
    next();
  });
  server.get('*', (req, res) => {
    return handle(req, res)
  })






  server.listen(port, err => {
    if (err) throw err;
    //	console.log(`> xxx ${process.env.NODE_ENV}`);
    console.log(`> Ready  on http://localhost:${port}`);
  });
});
