const { defineConfig } = require('@lobehub/i18n-cli')

module.exports = defineConfig({
  modelName: 'gpt-3.5-turbo',
  entry: 'locales/zh-CN.json',
  entryLocale: 'zh-CN',
  output: 'locales',
  outputLocales: ['en-US'],
})
