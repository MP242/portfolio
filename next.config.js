const { i18n } = require('./next-i18next.config')
const path = require('path')

module.exports = {
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    // REACT_APP_API_URL:'http://127.0.0.1:8000',
    REACT_APP_API_URL:'https://rag-server-1b54e9d61568.herokuapp.com',
  },
}