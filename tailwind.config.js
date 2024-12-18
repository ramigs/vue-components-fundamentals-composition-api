/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
