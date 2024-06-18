// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['components/ui/**/*', 'pnpm-lock.yaml', 'tsconfig.json'],
})
