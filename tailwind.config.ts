import type { Config } from 'tailwindcss'

const config: Config = {
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   fontFamily: {
    sans: ['var(--font-plus-jakarta-sans)'],
    display: ['var(--font-bebas-neue)'],
   },
   colors: {
    black: 'rgba(3, 0, 10, 1)',
    white: 'rgba(255, 255, 255, 1)',
    'bg-color': '#03000A',
    'foundation-bright-blue': 'rgba(5, 140, 255, 1)',
    'foundation-sky-blue': 'rgba(2, 217, 255, 1)',
    'foundation-pink': 'rgba(5, 221, 12, 1)',
    'foundation-light-orange': 'rgba(255, 184, 77, 1)',
    'foundation-border': 'rgba(255, 255, 255, 0.3)',
    'foundation-text': 'rgba(255, 255, 255, 0.6)',
    'foundation-midnight-blue': 'rgba(23, 28, 68, 1)',
    'brand-saffron-Yellow': 'rgba(251, 203, 58, 1)',
    'foundation-testimonial': '#120F19',
    'foundation-gray': '#1C1922',
    'light-white': 'rgba(255, 255, 255, 1)',
    'primary': '#4AA253',
    'secondary': '#D7DE39',
    'color-bg': 'rgba(255, 255, 255, 0.07999999821186066)',
    'gradient-1': '#262D3033',
    'gradient-2': '#262D3023',
    'gradient-3': '#262D3000',
   },
   spacing: {
    zero: '0px',
    'rounded-sm': '2px',
    rounded: '4px',
    'rounded-md': '6px',
    'rounded-lg': '8px',
    'rounded-xl': '12px',
    'rounded-2xl': '16px',
    'rounded-3xl': '24px',
    'rounded-full': '9999px',
    '0': '0px',
    px: '1px',
    '0․5': '2px',
    '1': '4px',
    '1․5': '6px',
    '2': '8px',
    '2․5': '10px',
    '3': '12px',
    '3․5': '14px',
    '4': '16px',
    '4.5': '10px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '11': '44px',
    '12': '48px',
    '14': '56px',
    '16': '64px',
    '16.5': '68px',
    '19': '19px',
    '20': '80px',
    '24': '96px',
    '28': '112px',
    '32': '128px',
    '36': '144px',
    '40': '160px',
    '44': '176px',
    '48': '192px',
    '52': '208px',
    '56': '224px',
    '60': '240px',
    '64': '256px',
    '72': '288px',
    '80': '320px',
    '89': '89px',
    '92p': '92px',
    '96': '384px',
    '108.5': '108.5px',
    '180': '175px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1563px',
    '1440': '1440px',
    '3xl': '1536px',
    '1728': '1728px',
   },
   lineHeight: {
    15: '15px',
    9.34: '9.34px',
    7.5: '17.5px',
    8.5: '34.48px',
    22.5: '22.5px',
    25: '25px',
    6.5: '30px',
    6.7: '31.2',
    33.48: '33.48px',
    33.75: '33.75px',
    37.5: '37.5px',
    45: '45px',
    52: '52px',
    60: '60px',
    64: '64px',
    75: '75px',
    85.5: '85.5px',
    91: '91px',
    109: '109px',
    120: '120px',
    132: '132px',
    104: '175px',
    180: '220px',
    243: '243.75px',
   },
   screens: {
    '3xl': '1536px',
   },
   fontSize: {
    'xxsm': ['10px', { lineHeight: '1.5' }],
    'xsm': ['12px', { lineHeight: '1.5' }],
    'sm': ['14px', { lineHeight: '1.5' }],
    'md': ['16px', { lineHeight: '1.5' }],
    'lg': ['20px', { lineHeight: '1.5' }],
    'xl': ['24px', { lineHeight: '1.3' }],
    '2xl': ['32px', { lineHeight: '1.3' }],
    '3xl': ['36px', { lineHeight: '1.2' }],
    '4xl': ['40px', { lineHeight: '1.2' }],
    '5xl': ['48px', { lineHeight: '1.1' }],
    '6xl': ['56px', { lineHeight: '1.1' }],
    '7xl': ['64px', { lineHeight: '1.1' }],
    '8xl': ['72px', { lineHeight: '1.1' }],
    '9xl': ['80px', { lineHeight: '1' }],
    '10xl': ['96px', { lineHeight: '1' }],
   },
   width: {
    71.84: '71.84px',
    78: '78px',
    500: '500px',
    107.64: '107.64px',
    200: '200px',
    137: '137px',
    150: '150px',
    164: '164px',
    7.5: '30px',
    780: '780px',
    84.56: '84.56px',
    672: '670px',
    786: '786px',
   },
   maxWidth: {
    '450': '450px',
    '518': '640px',
    '786': '810px',
   },
   height: {
    21: '21.12px',
    24.98: '24.98px',
    5.5: '25px',
    29.97: '29.97px',
    50: '50px',
    6.2: '60px',
    7.5: '30px',
    76: '76.43px',
    48.5: '198px',
    64.2: '266px',
    84: '84px',
    84.2: '86px',
    90: '90.22px',
    96.56: '96.56px',
    40.2: '167px',
    126: '126px',
    150: '150px',
    164: '164px',
    137: '137px',
    348: '348px',
    '117p': '117px',
   },
   backgroundImage: {
    'custom-gradient':
     'linear-gradient(to right, #120f1a, #04010B, #08050F, #05020B, #03000A)',
    'custom-gradient-2':
     'linear-gradient(to bottom, #120f1a, #04010B, #08050F, #05020B, #03000A)',
   },
   padding: {
    18: '18px',
    5.5: '22.18px',
    27: '27px',
   },
   inset: {
    '1p': '1%',
    '3p': '3%',
    '4.1': '4%',
    '6p': '5px',
    '4p': '5%',
    '7p': '7%',
    '9p': '9%',
    '12p': '12%',
    '2p': '2%',
    '5p': '11%',
    '20p': '20%',
    '80p': '80%',
    '6.0': '6%',
    '14p': '14%',
    '45p': '45%',
    '32p': '32%',
   },
   letterSpacing: {
    1.33: '-1.33px',
    1: '-1px',
    '1p': '1%',
   },
   opacity: {
    26: '26%',
   },
   variants: {
    extend: {
     inset: ['responsive'],
    },
   },
  },
 },
 plugins: [],
}
export default config
