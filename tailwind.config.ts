import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      red: '#FF1111',
      orange: '#FF5C1B',
      amber: '#FFA922',
      yellow: '#FBFF29',
      lime: '#9CFF2F',
      green: '#3EFF36',
      emerald: '#36FFA1',
      sky: '#2EE3FF',
      indigo: '#2755FF',
      purple: '#8220FF',
      pink: '#FF18D7',
      // red: '#FF1414',
      // orange: '#FF9414',
      // yellow: '#F3FF14',
      // lime: '#69FF14',
      // green: '#14FF6A',
      // cyan: '#14FFBF',
      // blue: '#14BFFF',
      // indigo: '#143FFF',
      // purple: '#6A14FF',
      // pink: '#EA14FF',
      // rose: '#FF1494',
      grey: {
        50: '#F3F3F7',
        100: '#E8E8F0',
        200: '#D9D9E1',
        300: '#CACAD2',
        400: '#ACACB4',
        450: '#8E8E96',
        500: '#72727A',
        550: '#52525E',
        600: '#343444',
        700: '#272733',
        800: '#1A1A22',
        900: '#101016',
        950: '#0C0C11',
        975: '#060608'
      }
    },
    fontFamily: {
      'body': ['Inter'],
      'sans': [ 'Inter'],
      // 'serif': ['ui-serif', 'Georgia'],
      'mono': ['Fragment Mono', 'SFMono-Regular'],
      // 'display': ['Major Mono Display'],
    }
  },
  plugins: [],
  content: []
}