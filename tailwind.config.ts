import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': [ 'Inter'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Major Mono Display'],
      'body': ['Inter']
      // 'sans': ['IBM Plex Sans', 'Inter', 'Montserrat', 'system-ui'],
    }
  },
  plugins: [],
  content: []
}