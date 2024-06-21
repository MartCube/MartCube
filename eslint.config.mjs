import unocss from '@unocss/eslint-config/flat'
// import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  unocss,
  // antfu,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
