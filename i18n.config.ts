import type { NuxtConfig } from 'nuxt/config'

const I18nConfig: NuxtConfig['i18n'] = {
  langDir: 'locales',
  locales: [
    {
      code: 'en-US',
      iso: 'en-US',
      file: 'en-US.json',
    },
    {
      code: 'zh-CN',
      iso: 'zh-CN',
      file: 'zh-CN.json',
    },
  ],
  defaultLocale: 'en-US',
  strategy: 'no_prefix',

}

export default I18nConfig
