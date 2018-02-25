const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
var port = process.env.NODE_ENV !== "production" ? 3000 : 80;
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const AllSchema = require("./backend");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler()

//多國語系
const { basename } = require('path')
const glob = require('glob')
const { readFileSync } = require('fs')
const accepts = require('accepts')
const { parse } = require('url')

const languages = glob.sync('./lang/*.json').map((f) => basename(f, '.json'))
const localeDataCache = new Map()
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0]
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`)
    const localeDataScript = readFileSync(localeDataFile, 'utf8')
    localeDataCache.set(lang, localeDataScript)
  }
  return localeDataCache.get(lang)
}

const getMessages = (locale) => {
  return require(`./lang/${locale}.json`)
}



app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    const parsedUrl = parse(req.url, true)
    const accept = accepts(req)
    let locale = accept.language(languages)
    locale = locale || 'en'
    req.locale = locale
    req.localeDataScript = getLocaleDataScript(locale)
    req.messages = getMessages(locale)
    next()
  })

  server.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress(async () => {
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

  server.get('*', (req, res) => {
    console.log('----backend-----')
    console.log(req)
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err;
    //	console.log(`> xxx ${process.env.NODE_ENV}`);
    console.log(`> Ready  on http://localhost:${port}`);
  });
});
