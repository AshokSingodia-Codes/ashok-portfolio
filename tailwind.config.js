/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#1d2a26', mute: '#55635e', sage: '#f6f7f4', teal: { DEFAULT: '#0f9b86', soft: '#35b59f', deep: '#0b6f60' }, rose: '#ef6a8e', amber: '#f4b24a' },
    fontFamily: { display: ['"Bricolage Grotesque"', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
    boxShadow: { soft: '0 10px 34px rgba(29,42,38,.08)', lift: '0 20px 50px rgba(29,42,38,.14)' },
  } },
  plugins: [],
}
