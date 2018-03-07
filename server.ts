import * as  express from "express"
import * as next from "next"
import { ApolloMiddleInterFace, ApolloMiddle } from './serverMiddle/apolloMiddle';
import schema from "./backend";
//import { IntlMiddle } from "./serverMiddle/IntlMiddle"
//多國語系
import * as  accepts from 'accepts'
import { parse } from 'url'
import * as glob from 'glob'
import { basename } from 'path'
import { readFileSync } from 'fs'


var port = process.env.NODE_ENV !== "production" ? 3000 : 80;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler()




//console.log(AllSchema)
app.prepare().then(() => {
  const server = express();

  ApolloMiddle(server, schema)
  ApolloMiddleInterFace(server)

  const getMessages = (locale) => {
    return require(`./lang/${locale}.json`)
  }
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
  server.use((req, res, next) => {
    const parsedUrl = parse(req.url, true)
    const accept = accepts(req)
    console.log('=====req.query====')
    // console.log(parsedUrl)
    //這邊會抓取header去判斷網頁客戶端的類別
    let locale = accept.language(languages)
    locale = (req.query.locale) ? req.query.locale : locale ? locale : 'en'
    //locale = locale ? locale : 'en'
    // console.log('locale')
    // console.log(locale)

    req.locale = locale
    //req.localeDataScript = getLocaleDataScript(locale)
    req.messages = getMessages(locale)


    next()
  })


  server.get('*', (req, res) => {
    // console.log('req.messages')
    // console.log(req.messages)
    return handle(req, res)
  })
  server.listen(port, err => {
    if (err) throw err;
    //	console.log(`> xxx ${process.env.NODE_ENV}`);
    console.log(`> ready  on http://localhost:${port}`);
  });
});
