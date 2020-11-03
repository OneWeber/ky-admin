if (process.env.VUE_APP_ADMIN_ENV) {
  module.exports = Object.assign(
    require('./config.default'),
    require(`./config.${process.env.VUE_APP_ADMIN_ENV}`)
  )
}
