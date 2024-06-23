// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWebFonts,
  presetIcons,
  transformerVariantGroup,
} from 'unocss'

import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        // roboto: 'Roboto Flex:400,500,600',
        fira: 'Fira Code:300,400,500',
      },
    }),
    presetIcons({
      collections: {
        icons: {
          terminal: '<svg width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m116 132.48l-72 64a6 6 0 0 1-8-9L103 128L36 68.49a6 6 0 0 1 8-9l72 64a6 6 0 0 1 0 9ZM216 186h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12"/></svg>',
          email: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM20 6.885l-7.552 4.944q-.106.055-.214.093q-.109.037-.234.037t-.234-.037t-.214-.093L4 6.884v10.5q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443zM12 11l7.692-5H4.308zM4 6.885v.211v-.811v.034V6v.32v-.052v.828zV18z"/></svg>',
          github: '<svg width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"/></svg>',
          chevron: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.108 12l4.246 4.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.14-.14.344-.15t.364.15t.16.354t-.16.354z"/></svg>',
          nuxt: '<svg width="32" height="32" viewBox="0 0 32 32"><path fill="#00DC82" d="M17.708 25h10.409c.33 0 .655-.088.942-.254a1.9 1.9 0 0 0 .689-.696a1.91 1.91 0 0 0 0-1.9L22.756 9.936a1.87 1.87 0 0 0-3.261 0l-1.788 3.125l-3.494-6.111a1.871 1.871 0 0 0-3.262 0l-8.7 15.2a1.91 1.91 0 0 0 .69 2.595c.286.167.61.255.941.255h6.534c2.589 0 4.498-1.147 5.811-3.385l3.19-5.572l1.708-2.982l5.127 8.957h-6.835zm-7.398-2.985l-4.56-.001l6.836-11.942l3.41 5.97l-2.283 3.992c-.873 1.452-1.864 1.981-3.403 1.981"/></svg>',
        },
      },
      prefix: 'i-',
      extraProperties: {
        // 'display': 'inline-block',
      },
    }),
  ],
  rules: [
    [
      '2lines', {
        'display': '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
        'overflow': 'hidden',
      },
    ],
  ],
  shortcuts: {
    'test': 'border-solid border-0.5 border-white',
    'text-m': 'text-[1.25rem] leading-[1.5rem]',
    'text-l': 'text-[1.5rem] leading-[2rem]',
    'text-xl': 'text-[2.5rem] leading-[3rem]',
    'disabled': 'opacity-50 cursor-default pointer-events-none',
    'transition-350': 'transition duration-350 ease',
  },
  theme: {
    colors: {
      primary: '#19f9d8',
      white: '#F5F5F5',
      cream: '#FFF5E6',
      dark: '#1a1a1a',
      grey: '#242424',
      error: '#ff3333',
    },
    fontSize: {
      base: ['1rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      subtitle: ['1.5rem', {
        lineHeight: '1.75rem',
        letterSpacing: '0',
        fontWeight: '300',
      }],
      title: ['2rem', {
        lineHeight: '2.25rem',
        letterSpacing: '0.1rem',
        fontWeight: '300',
      }],
    },
    spacing: {
      section: '60rem',
    },
  },
  transformers: [
    transformerDirectives({
      applyVariable: ['--uno'],
    }),
    transformerVariantGroup(),
  ],
})
